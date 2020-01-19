# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# http://www.sphinx-doc.org/en/master/config

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.

import os
import sys
sys.path.insert(0, os.path.abspath('..'))

# -- Setup for Recommonmark --------------------------------------------------

from recommonmark.parser import CommonMarkParser
from recommonmark.transform import AutoStructify

source_parsers = {
    '.md': CommonMarkParser
}

# -- Project information -----------------------------------------------------

project = 'FLEDGE'
copyright = '2019, TUMCREATE'
author = 'TUMCREATE'

# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx.ext.napoleon',
    'sphinx_markdown_tables',  # TODO: `sphinx_markdown_tables` doesn't support Readthedocs PDF properly.
    'sphinx.ext.mathjax'
]

# Extension settings
# - sphinx.ext.autodoc: <https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html>
# - sphinx.ext.napoleon: <https://www.sphinx-doc.org/en/master/usage/extensions/napoleon.html>
autoclass_content = 'both'
autodoc_default_options = {
    'members': True,
    'undoc-members': True
}
autodoc_typehints= 'none'
napoleon_use_ivar = True

# Add any paths that contain templates here, relative to this directory.
# templates_path = ['_templates']
source_suffix = '.md'
master_doc = 'index'

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'README.md']

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
html_theme = 'sphinx_rtd_theme'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
# html_static_path = ['_static']

# -- Options for Recommonmark ------------------------------------------------

# github_doc_root = '...'
def setup(app):
    app.add_config_value(
        'recommonmark_config',
        {
            # 'url_resolver': lambda url: github_doc_root + url,
            # 'auto_toc_tree_section': 'Contents',
            'enable_eval_rst': True,
        },
        True
    )
    app.add_transform(AutoStructify)
