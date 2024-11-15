import React from 'react'
import PropTypes from 'prop-types';

export default function Container({ children , className}) {
    return (
      <div className={`flex flex-col justify-center items-center w-full h-full ${className}`}>
        {children}
      </div>
    );
  }

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Container.defaultProps = {
    className: '',
};
  