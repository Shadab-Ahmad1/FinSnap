import * as React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import weatherSunny from '@iconify/icons-mdi/weather-sunny';
import weatherNight from '@iconify/icons-mdi/weather-night';

function ToggleColorMode({ mode, toggleColorMode, ...props }) {
  return (
    <IconButton
      onClick={toggleColorMode}
      color="primary"
      aria-label="Theme toggle button"
      size="small"
      {...props}
    >
      {mode === 'dark' ? (
        <Icon icon={weatherSunny} fontSize="small" />
      ) : (
        <Icon icon={weatherNight} fontSize="small" />
      )}
    </IconButton>
  );
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;
