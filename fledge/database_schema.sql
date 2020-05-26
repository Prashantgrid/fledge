CREATE TABLE electric_grid_ders (
    electric_grid_name TEXT,
    der_name TEXT,
    der_type TEXT,
    model_name TEXT,
    node_name TEXT,
    is_phase_1_connected TEXT,
    is_phase_2_connected TEXT,
    is_phase_3_connected TEXT,
    connection TEXT,
    active_power TEXT,
    reactive_power TEXT,
    PRIMARY KEY(electric_grid_name,der_name)
);
CREATE TABLE electric_grid_line_types (
    line_type TEXT,
    n_phases TEXT,
    maximum_current TEXT,
    PRIMARY KEY(line_type)
);
CREATE TABLE electric_grid_line_types_matrices (
    line_type TEXT,
    row INTEGER,
    col INTEGER,
    resistance TEXT,
    reactance TEXT,
    capacitance TEXT,
    PRIMARY KEY(line_type,row,col)
);
CREATE TABLE electric_grid_lines (
    electric_grid_name TEXT,
    line_name TEXT,
    line_type TEXT,
    node_1_name TEXT,
    node_2_name TEXT,
    is_phase_1_connected TEXT,
    is_phase_2_connected TEXT,
    is_phase_3_connected TEXT,
    length TEXT,
    PRIMARY KEY(electric_grid_name,line_name)
);
CREATE TABLE electric_grid_nodes (
    electric_grid_name TEXT,
    node_name TEXT,
    is_phase_1_connected TEXT,
    is_phase_2_connected TEXT,
    is_phase_3_connected TEXT,
    voltage TEXT,
    latitude TEXT,
    longitude TEXT,
    PRIMARY KEY(electric_grid_name,node_name)
);
CREATE TABLE electric_grid_operation_limit_types (
    electric_grid_operation_limit_type TEXT,
    voltage_per_unit_minimum TEXT,
    voltage_per_unit_maximum TEXT,
    branch_flow_per_unit_maximum TEXT,
    PRIMARY KEY(electric_grid_operation_limit_type)
);
CREATE TABLE electric_grid_transformer_types (
    transformer_type TEXT,
    resistance_percentage TEXT,
    reactance_percentage TEXT,
    tap_maximum_voltage_per_unit TEXT,
    tap_minimum_voltage_per_unit TEXT,
    PRIMARY KEY(transformer_type)
);
CREATE TABLE electric_grid_transformers (
    electric_grid_name TEXT,
    transformer_name TEXT,
    transformer_type TEXT,
    node_1_name TEXT,
    node_2_name TEXT,
    is_phase_1_connected TEXT,
    is_phase_2_connected TEXT,
    is_phase_3_connected TEXT,
    connection TEXT,
    apparent_power TEXT,
    PRIMARY KEY(electric_grid_name,transformer_name)
);
CREATE TABLE electric_grids (
    electric_grid_name TEXT,
    source_node_name TEXT,
    base_frequency TEXT,
    PRIMARY KEY(electric_grid_name)
);
CREATE TABLE ev_charger_schedules (
    model_name TEXT,
    time_period TEXT,
    active_power REAL,
    reactive_power REAL,
    PRIMARY KEY(model_name,time_period)
);
CREATE TABLE ev_charger_timeseries (
    model_name TEXT,
    time TEXT,
    active_power REAL,
    reactive_power REAL,
    PRIMARY KEY(model_name,time)
);
CREATE TABLE ev_chargers (
    model_name TEXT,
    definition_type TEXT,
    PRIMARY KEY(model_name)
);
CREATE TABLE fixed_load_schedules (
    model_name TEXT,
    time_period TEXT,
    active_power REAL,
    reactive_power REAL,
    PRIMARY KEY(model_name,time_period)
);
CREATE TABLE fixed_load_timeseries (
    model_name TEXT,
    time TEXT,
    active_power REAL,
    reactive_power REAL,
    PRIMARY KEY(model_name,time)
);
CREATE TABLE fixed_loads (
     model_name TEXT,
     definition_type TEXT,
     PRIMARY KEY(model_name)
);
CREATE TABLE flexible_load_schedules (
    model_name TEXT,
    time_period TEXT,
    active_power REAL,
    reactive_power REAL,
    PRIMARY KEY(model_name,time_period)
);
CREATE TABLE flexible_load_timeseries (
    model_name TEXT,
    time TEXT,
    active_power REAL,
    reactive_power REAL,
    PRIMARY KEY(model_name,time)
);
CREATE TABLE flexible_loads (
    model_name TEXT,
    definition_type TEXT,
    power_increase_percentage_maximum TEXT,
    power_decrease_percentage_maximum TEXT,
    time_period_power_shift_maximum TEXT,
    PRIMARY KEY(model_name)
);
CREATE TABLE parameters (
    parameter_set TEXT,
    parameter_name TEXT,
    parameter_value REAL,
    PRIMARY KEY(parameter_set,parameter_name)
);
CREATE TABLE price_timeseries (
    price_type TEXT,
    time TEXT,
    price_value REAL,
    PRIMARY KEY(price_type,time)
);
CREATE TABLE scenarios (
    scenario_name TEXT,
    electric_grid_name TEXT,
    thermal_grid_name TEXT,
    parameter_set TEXT,
    price_type TEXT,
    electric_grid_operation_limit_type TEXT,
    thermal_grid_operation_limit_type TEXT,
    timestep_start TEXT,
    timestep_end TEXT,
    timestep_interval TEXT,
    PRIMARY KEY(scenario_name)
);
CREATE TABLE thermal_grid_cooling_plant_types (
    cooling_plant_type TEXT,
    plant_pump_efficiency TEXT,
    condenser_pump_head TEXT,
    evaporator_pump_head TEXT,
    chiller_set_beta TEXT,
    chiller_set_condenser_minimum_temperature_difference TEXT,
    chiller_set_evaporation_temperature TEXT,
    chiller_set_cooling_capacity TEXT,
    condenser_water_temperature_difference TEXT,
    condenser_water_enthalpy_difference TEXT,
    cooling_tower_set_reference_temperature_condenser_water TEXT,
    cooling_tower_set_reference_temperature_wet_bulb TEXT,
    cooling_tower_set_reference_temperature_slope TEXT,
    cooling_tower_set_ventilation_factor TEXT,
    PRIMARY KEY(cooling_plant_type)
);
CREATE TABLE thermal_grid_ders (
    thermal_grid_name TEXT,
    der_name TEXT,
    node_name TEXT,
    der_type TEXT,
    model_name TEXT,
    thermal_power_nominal TEXT,
    PRIMARY KEY(thermal_grid_name,der_name)
);
CREATE TABLE thermal_grid_line_types (
    line_type TEXT,
    diameter TEXT,
    absolute_roughness TEXT,
    maximum_velocity TEXT,
    PRIMARY KEY(line_type)
);
CREATE TABLE thermal_grid_lines (
    thermal_grid_name TEXT,
    line_name TEXT,
    line_type TEXT,
    node_1_name TEXT,
    node_2_name TEXT,
    length TEXT,
    PRIMARY KEY(thermal_grid_name,line_name)
);
CREATE TABLE thermal_grid_nodes (
    thermal_grid_name TEXT,
    node_name TEXT,
    node_type TEXT,
    latitude TEXT,
    longitude TEXT,
    PRIMARY KEY(thermal_grid_name,node_name)
);
CREATE TABLE thermal_grid_operation_limit_types (
    thermal_grid_operation_limit_type TEXT,
    node_head_per_unit_maximum TEXT,
    pipe_flow_per_unit_maximum TEXT,
    PRIMARY KEY(thermal_grid_operation_limit_type)
);
CREATE TABLE thermal_grids (
    thermal_grid_name TEXT,
    source_node_name TEXT,
    distribution_pump_efficiency TEXT,
    energy_transfer_station_head_loss TEXT,
    enthalpy_difference_distribution_water TEXT,
    water_density TEXT,
    water_kinematic_viscosity TEXT,
    cooling_plant_type TEXT,
    PRIMARY KEY(thermal_grid_name)
);