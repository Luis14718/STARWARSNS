import React from 'react';
import './Homeworld.css';
import { Typography } from '@mui/material';
import { InlineIcon } from '@iconify/react';

function HomeworldDetail({ info }) {
  // const { isLoading, planets, errorMessage } = useSelector((state) => state.planets);
  return (
    <div className="G-frame2 mt-3 p-3">
      <Typography variant="span">Homeworld</Typography>
      <Typography variant="h3">{info.name}</Typography>
      <Typography variant="h6">
        <InlineIcon style={{ color: 'black' }} icon="carbon:weather-station" />
        {` Climate: ${info.climate}`}
      </Typography>
      <Typography variant="h6">
        <InlineIcon style={{ color: 'black' }} icon="carbon:chart-population" />
        {` Population: ${info.population}`}
      </Typography>
    </div>
  );
}
export default HomeworldDetail;
