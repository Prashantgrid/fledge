"""Plots module."""

import cv2
from multimethod import multimethod
import matplotlib.pyplot as plt
import networkx as nx
import numpy as np
import os
import pandas as pd
import re
import typing

import fledge.config
import fledge.data_interface
import fledge.electric_grid_models
import fledge.thermal_grid_models
import fledge.utils

if fledge.config.config['plots']['add_basemap']:
    # Basemap requires `contextily`, which is an optional dependency, due to needing installation through `conda`.
    import contextily as ctx

logger = fledge.config.get_logger(__name__)


class ElectricGridGraph(nx.DiGraph):
    """Electric grid graph object."""

    edge_by_line_name: pd.Series
    transformer_nodes: list
    node_positions: dict
    node_labels: dict

    @multimethod
    def __init__(
            self,
            scenario_name: str
    ):

        # Obtain electric grid data.
        electric_grid_data = fledge.data_interface.ElectricGridData(scenario_name)

        self.__init__(
            electric_grid_data
        )

    @multimethod
    def __init__(
            self,
            electric_grid_data: fledge.data_interface.ElectricGridData
    ):

        # Create electric grid graph.
        super().__init__()
        self.add_nodes_from(
            electric_grid_data.electric_grid_nodes.loc[:, 'node_name'].tolist()
        )
        self.add_edges_from(
            electric_grid_data.electric_grid_lines.loc[:, ['node_1_name', 'node_2_name']].itertuples(index=False)
        )

        # Obtain edges indexed by line name.
        self.edge_by_line_name = (
            pd.Series(
                electric_grid_data.electric_grid_lines.loc[:, ['node_1_name', 'node_2_name']].itertuples(index=False),
                index=electric_grid_data.electric_grid_lines.loc[:, 'line_name']
            )
        )

        # Obtain transformer nodes (secondary nodes of transformers).
        self.transformer_nodes = (
            electric_grid_data.electric_grid_transformers.loc[:, 'node_2_name'].tolist()
        )

        # Obtain node positions / labels.
        if pd.notnull(electric_grid_data.electric_grid_nodes.loc[:, ['longitude', 'latitude']]).any().any():
            self.node_positions = (
                electric_grid_data.electric_grid_nodes.loc[:, ['longitude', 'latitude']].T.to_dict('list')
            )
        else:
            # If latitude / longitude are not defined, generate node positions based on networkx layout.
            self.node_positions = (
                nx.spring_layout(self)
            )
            # Only keep positions for nodes with line connections.
            # Only keep positions for nodes with line connections.
            for node_name in self.node_positions:
                if (
                        node_name not in
                        electric_grid_data.electric_grid_lines.loc[:, ['node_1_name', 'node_2_name']].values.ravel()
                ):
                    self.node_positions[node_name] = [np.nan, np.nan]
        self.node_labels = (
            electric_grid_data.electric_grid_nodes.loc[:, 'node_name'].to_dict()
        )


class ThermalGridGraph(nx.DiGraph):
    """Thermal grid graph object."""

    edge_by_line_name: pd.Series
    node_positions: dict
    node_labels: dict

    @multimethod
    def __init__(
            self,
            scenario_name: str
    ):

        # Obtain thermal grid data.
        thermal_grid_data = fledge.data_interface.ThermalGridData(scenario_name)

        self.__init__(
            thermal_grid_data
        )

    @multimethod
    def __init__(
            self,
            thermal_grid_data: fledge.data_interface.ThermalGridData
    ):

        # Create thermal grid graph.
        super().__init__()
        self.add_nodes_from(
            thermal_grid_data.thermal_grid_nodes.loc[:, 'node_name'].tolist()
        )
        self.add_edges_from(
            thermal_grid_data.thermal_grid_lines.loc[:, ['node_1_name', 'node_2_name']].itertuples(index=False)
        )

        # Obtain edges indexed by line name.
        self.edge_by_line_name = (
            pd.Series(
                thermal_grid_data.thermal_grid_lines.loc[:, ['node_1_name', 'node_2_name']].itertuples(index=False),
                index=thermal_grid_data.thermal_grid_lines.loc[:, 'line_name']
            )
        )

        # Obtain node positions / labels.
        if pd.notnull(thermal_grid_data.thermal_grid_nodes.loc[:, ['longitude', 'latitude']]).any().any():
            self.node_positions = (
                thermal_grid_data.thermal_grid_nodes.loc[:, ['longitude', 'latitude']].T.to_dict('list')
            )
        else:
            # If latitude / longitude are not defined, generate node positions based on networkx layout.
            self.node_positions = (
                nx.spring_layout(self)
            )
            # Only keep positions for nodes with line connections.
            for node_name in self.node_positions:
                if (
                        node_name not in
                        thermal_grid_data.thermal_grid_lines.loc[:, ['node_1_name', 'node_2_name']].values.ravel()
                ):
                    self.node_positions[node_name] = [np.nan, np.nan]
        self.node_labels = (
            thermal_grid_data.thermal_grid_nodes.loc[:, 'node_name'].to_dict()
        )


def create_video(
        name: str,
        labels: pd.Index,
        results_path: str
):

    # Obtain images / frames based on given name / labels.
    images = []
    for label in labels:
        if type(label) is pd.Timestamp:
            filename = f"{name}_{fledge.utils.get_alphanumeric_string(f'{label}')}.png"
            images.append(cv2.imread(os.path.join(results_path, filename)))
        try:
            assert len(images) > 0
        except AssertionError:
            logger.error(f"No images / frames found for video of '{name}'. Check if given labels are valid timesteps.")

    # Setup video.
    video_writer = (
        cv2.VideoWriter(
            os.path.join(results_path, f'{name}.avi'),  # Filename.
            cv2.VideoWriter_fourcc(*'XVID'),  # Format.
            2.0,  # FPS.
            images[0].shape[1::-1]  # Size.
        )
    )

    # Write frames to video.
    for image in images:
        video_writer.write(image)

    # Cleanup.
    video_writer.release()
    cv2.destroyAllWindows()


@multimethod
def plot_grid_transformer_utilization(
        grid_model: fledge.electric_grid_models.ElectricGridModel,
        grid_graph: ElectricGridGraph,
        branch_vector: pd.DataFrame,
        results_path: str,
        vmin=None,
        vmax=None,
        make_video=False,
        **kwargs
):

    # Obtain colorscale minimum / maximum value.
    vmin = branch_vector.values.ravel().min() if vmin is None else vmin
    vmax = branch_vector.values.ravel().max() if vmax is None else vmax

    for label in branch_vector.index:
        plot_grid_transformer_utilization(
            grid_model,
            grid_graph,
            branch_vector.loc[label, :],
            results_path,
            vmin=vmin,
            vmax=vmax,
            label=label,
            **kwargs
        )

    # Stitch images to video.
    if make_video:
        create_video(
            name='transformer_utilization',
            labels=branch_vector.index,
            results_path=results_path
        )


@multimethod
def plot_grid_transformer_utilization(
        grid_model: fledge.electric_grid_models.ElectricGridModel,
        grid_graph: ElectricGridGraph,
        branch_vector: pd.Series,
        results_path: str,
        vmin=None,
        vmax=None,
        label=None,
        value_unit='W'
):

    # Obtain colorscale minimum / maximum value.
    vmin = branch_vector.values.ravel().min() if vmin is None else vmin
    vmax = branch_vector.values.ravel().max() if vmax is None else vmax

    # Obtain edge color values.
    # - Take only transformers & mean across all phases.
    node_color = (
        branch_vector.loc[grid_model.transformers].mean(level='branch_name')
    )

    # Obtain plot title / filename.
    if label is not None:
        title = f"Transformer utilization: {label.strftime('%H:%M:%S') if type(label) is pd.Timestamp else label}"
        filename = f"transformer_utilization_{fledge.utils.get_alphanumeric_string(f'{label}')}.png"
    else:
        title = "Transformer utilization"
        filename = "transformer_utilization.png"

    # Create plot.
    plt.figure()
    plt.title(title)
    # Plot nodes all nodes, but with node size 0.0, just to get appropriate map extent.
    nx.draw(
        grid_graph,
        edgelist=[],
        pos=grid_graph.node_positions,
        node_size=0.0
    )
    nx.draw(
        grid_graph,
        nodelist=grid_graph.transformer_nodes,
        edgelist=[],
        pos=grid_graph.node_positions,
        node_size=200.0,
        node_color=node_color.tolist(),
        vmin=vmin,
        vmax=vmax,
        edgecolors='black'
    )
    # Add colorbar.
    sm = (
        plt.cm.ScalarMappable(
            norm=plt.Normalize(
                vmin=vmin,
                vmax=vmax
            )
        )
    )
    cb = plt.colorbar(sm, shrink=0.9)
    cb.set_label(f'Utilization [{value_unit}]')

    if fledge.config.config['plots']['add_basemap']:
        # Adjust axis limits, to get a better view of surrounding map.
        xlim = plt.xlim()
        xlim = (xlim[0] - 0.05 * (xlim[1] - xlim[0]), xlim[1] + 0.05 * (xlim[1] - xlim[0]))
        plt.xlim(xlim)
        ylim = plt.ylim()
        ylim = (ylim[0] - 0.05 * (ylim[1] - ylim[0]), ylim[1] + 0.05 * (ylim[1] - ylim[0]))
        plt.ylim(ylim)
        # Add contextual basemap layer for orientation.
        ctx.add_basemap(
            plt.gca(),
            crs='EPSG:4326',  # Use 'EPSG:4326' for latitude / longitude coordinates.
            source=ctx.providers.CartoDB.Positron,
            attribution=False  # Do not show copyright notice.
        )

    # Store / show / close figure.
    plt.savefig(os.path.join(results_path, filename), bbox_inches='tight')
    # plt.show()
    plt.close()


@multimethod
def plot_grid_line_utilization(
        grid_model: typing.Union[
            fledge.electric_grid_models.ElectricGridModel,
            fledge.thermal_grid_models.ThermalGridModel
        ],
        grid_graph: typing.Union[
            ElectricGridGraph,
            ThermalGridGraph
        ],
        branch_vector: pd.DataFrame,
        results_path: str,
        vmin=None,
        vmax=None,
        make_video=False,
        **kwargs
):

    # Obtain colorscale minimum / maximum value.
    vmin = branch_vector.values.ravel().min() if vmin is None else vmin
    vmax = branch_vector.values.ravel().max() if vmax is None else vmax

    for label in branch_vector.index:
        plot_grid_line_utilization(
            grid_model,
            grid_graph,
            branch_vector.loc[label, :],
            results_path,
            vmin=vmin,
            vmax=vmax,
            label=label,
            **kwargs
        )

    # Stitch images to video.
    if make_video:
        create_video(
            name='line_utilization',
            labels=branch_vector.index,
            results_path=results_path
        )


@multimethod
def plot_grid_line_utilization(
        grid_model: typing.Union[
            fledge.electric_grid_models.ElectricGridModel,
            fledge.thermal_grid_models.ThermalGridModel
        ],
        grid_graph: typing.Union[
            ElectricGridGraph,
            ThermalGridGraph
        ],
        branch_vector: pd.Series,
        results_path: str,
        vmin=None,
        vmax=None,
        label=None,
        value_unit='W'
):

    # Obtain colorscale minimum / maximum value.
    vmin = branch_vector.values.ravel().min() if vmin is None else vmin
    vmax = branch_vector.values.ravel().max() if vmax is None else vmax

    # Obtain edge color values.
    if isinstance(grid_graph, ElectricGridGraph):
        # Take mean across all phases.
        edge_color = (
            branch_vector.loc[grid_model.lines].mean(level='branch_name')
        )
    else:
        edge_color = branch_vector

    # Obtain plot title / filename.
    if label is not None:
        title = f"Line utilization: {label.strftime('%H:%M:%S') if type(label) is pd.Timestamp else label}"
        filename = f"line_utilization_{fledge.utils.get_alphanumeric_string(f'{label}')}.png"
    else:
        title = "Line utilization"
        filename = "line_utilization.png"

    # Create plot.
    plt.figure()
    plt.title(title)
    if isinstance(grid_graph, ElectricGridGraph):
        # Highlight transformer nodes.
        nx.draw(
            grid_graph,
            nodelist=grid_graph.transformer_nodes,
            edgelist=[],
            pos=grid_graph.node_positions,
            node_size=100.0,
            node_color='red'
        )
    nx.draw(
        grid_graph,
        edgelist=grid_graph.edge_by_line_name.loc[grid_model.line_names].tolist(),
        pos=grid_graph.node_positions,
        node_size=10.0,
        node_color='black',
        arrows=False,
        width=5.0,
        edge_vmin=vmin,
        edge_vmax=vmax,
        edge_color=edge_color.tolist()
    )
    # Add colorbar.
    sm = (
        plt.cm.ScalarMappable(
            norm=plt.Normalize(
                vmin=vmin,
                vmax=vmax
            )
        )
    )
    cb = plt.colorbar(sm, shrink=0.9)
    cb.set_label(f'Utilization [{value_unit}]')

    if fledge.config.config['plots']['add_basemap']:
        # Adjust axis limits, to get a better view of surrounding map.
        xlim = plt.xlim()
        xlim = (xlim[0] - 0.05 * (xlim[1] - xlim[0]), xlim[1] + 0.05 * (xlim[1] - xlim[0]))
        plt.xlim(xlim)
        ylim = plt.ylim()
        ylim = (ylim[0] - 0.05 * (ylim[1] - ylim[0]), ylim[1] + 0.05 * (ylim[1] - ylim[0]))
        plt.ylim(ylim)
        # Add contextual basemap layer for orientation.
        ctx.add_basemap(
            plt.gca(),
            crs='EPSG:4326',  # Use 'EPSG:4326' for latitude / longitude coordinates.
            source=ctx.providers.CartoDB.Positron,
            attribution=False  # Do not show copyright notice.
        )

    # Store / show / close figure.
    plt.savefig(os.path.join(results_path, filename), bbox_inches='tight')
    # plt.show()
    plt.close()


@multimethod
def plot_grid_node_utilization(
        grid_model: typing.Union[
            fledge.electric_grid_models.ElectricGridModel,
            fledge.thermal_grid_models.ThermalGridModel
        ],
        grid_graph: typing.Union[
            ElectricGridGraph,
            ThermalGridGraph
        ],
        node_vector: pd.DataFrame,
        results_path: str,
        vmin=None,
        vmax=None,
        make_video=False,
        **kwargs
):

    # Obtain colorscale minimum / maximum value.
    vmin = node_vector.values.ravel().min() if vmin is None else vmin
    vmax = node_vector.values.ravel().max() if vmax is None else vmax

    for label in node_vector.index:
        plot_grid_node_utilization(
            grid_model,
            grid_graph,
            node_vector.loc[label, :],
            results_path,
            vmin=vmin,
            vmax=vmax,
            label=label,
            **kwargs
        )

    # Stitch images to video.
    if make_video:
        create_video(
            name='node_voltage' if isinstance(grid_graph, ElectricGridGraph) else 'node_head',
            labels=node_vector.index,
            results_path=results_path
        )


@multimethod
def plot_grid_node_utilization(
        grid_model: typing.Union[
            fledge.electric_grid_models.ElectricGridModel,
            fledge.thermal_grid_models.ThermalGridModel
        ],
        grid_graph: typing.Union[
            ElectricGridGraph,
            ThermalGridGraph
        ],
        node_vector: pd.Series,
        results_path: str,
        vmin=None,
        vmax=None,
        label=None,
        value_unit='W',
        suffix=''
):

    # Obtain colorscale minimum / maximum value.
    vmin = node_vector.values.ravel().min() if vmin is None else vmin
    vmax = node_vector.values.ravel().max() if vmax is None else vmax

    # Obtain edge color values.
    if isinstance(grid_graph, ElectricGridGraph):
        # Take mean across all phases.
        node_color = (
            node_vector.mean(level='node_name')
        )
    else:
        node_color = node_vector

    # Obtain plot title / filename.
    if isinstance(grid_graph, ElectricGridGraph):
        title = f'Node {suffix} voltage'
        filename = 'node_voltage'
        colorbar_label = f'Voltage {suffix}'
    else:
        title = f'Node {suffix} head'
        filename = 'node_head'
        colorbar_label = f'Head {suffix}'
    if label is not None:
        title = f"{title}: {label.strftime('%H:%M:%S') if type(label) is pd.Timestamp else label}"
        filename = f"{filename}_{fledge.utils.get_alphanumeric_string(f'{label}')}.png"
    else:
        title = f"{title}"
        filename = f"{filename}.png"

    # Create plot.
    plt.figure()
    plt.title(title)
    if isinstance(grid_graph, ElectricGridGraph):
        # Highlight transformer nodes.
        nx.draw(
            grid_graph,
            nodelist=grid_graph.transformer_nodes,
            edgelist=[],
            pos=grid_graph.node_positions,
            node_size=100.0,
            node_color='red'
        )
    nx.draw(
        grid_graph,
        nodelist=grid_model.node_names.tolist(),
        pos=grid_graph.node_positions,
        node_size=50.0,
        arrows=False,
        vmin=vmin,
        vmax=vmax,
        node_color=node_color.tolist(),
        edgecolors='black',
    )
    # Add colorbar.
    sm = (
        plt.cm.ScalarMappable(
            norm=plt.Normalize(
                vmin=vmin,
                vmax=vmax
            )
        )
    )
    cb = plt.colorbar(sm, shrink=0.9)
    cb.set_label(f'{colorbar_label} [{value_unit}]')

    if fledge.config.config['plots']['add_basemap']:
        # Adjust axis limits, to get a better view of surrounding map.
        xlim = plt.xlim()
        xlim = (xlim[0] - 0.05 * (xlim[1] - xlim[0]), xlim[1] + 0.05 * (xlim[1] - xlim[0]))
        plt.xlim(xlim)
        ylim = plt.ylim()
        ylim = (ylim[0] - 0.05 * (ylim[1] - ylim[0]), ylim[1] + 0.05 * (ylim[1] - ylim[0]))
        plt.ylim(ylim)
        # Add contextual basemap layer for orientation.
        ctx.add_basemap(
            plt.gca(),
            crs='EPSG:4326',  # Use 'EPSG:4326' for latitude / longitude coordinates.
            source=ctx.providers.CartoDB.Positron,
            attribution=False  # Do not show copyright notice.
        )

    # Store / show / close figure.
    plt.savefig(os.path.join(results_path, filename), bbox_inches='tight')
    # plt.show()
    plt.close()
