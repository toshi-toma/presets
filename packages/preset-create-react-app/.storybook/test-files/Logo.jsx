import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LogoSvg } from './assets/react-logo.svg';

const Logo = ({ height }) => <LogoSvg height={height} />;

Logo.defaultProps = {
  height: 128,
};

Logo.propTypes = {
  /**
   * Logo height
   */
  height: PropTypes.number.isRequired,
};

export default Logo;
