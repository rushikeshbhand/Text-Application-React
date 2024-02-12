import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {

    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/" style={{marginLeft: '10px'}}>{props.title}</a>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
};
