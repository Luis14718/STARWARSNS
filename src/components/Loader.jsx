import React from 'react';
import Box from '@mui/material/Box';
import { LinearProgress } from '@mui/material';
import { ReactComponent as Reactyoda } from '../assets/yoda.svg';

export default function Loader() {
  return (
    <div className="d-flex mx-auto progress-star">
      <Box className="mx-auto progressbar " mt="20%" sx={{ width: '90%' }}>
        <LinearProgress color="inherit" />
      </Box>
      <Box className="mx-auto yoda-loader" mt="20%" sx={{ width: '90%' }}>
        <div className="yoda-loader">
          <Reactyoda />
        </div>
      </Box>
    </div>
  );
}
