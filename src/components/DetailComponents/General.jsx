import React from 'react';
import './General.css';
import { Typography } from '@mui/material';
import { InlineIcon } from '@iconify/react';

function GeneralDetail({ info }) {
  // const { isLoading, planets, errorMessage } = useSelector((state) => state.planets);
  return (
    <div className="G-frame mt-3 p-3">
      <Typography variant="h3">{info.name}</Typography>
      <Typography variant="h6">
        <InlineIcon style={{ color: 'black' }} icon="mdi:human-male-height-variant" />
        {` Heigh: ${info.height}`}
      </Typography>
      <Typography variant="h6">
        <InlineIcon style={{ color: 'black' }} icon="bi:eye-fill" />
        {` eye color: ${info.eye_color}`}
      </Typography>
      <Typography variant="h6">
        <InlineIcon style={{ color: 'black' }} icon="fa:birthday-cake" />
        {` Birth Year: ${info.birth_year}`}
      </Typography>
    </div>
  );
}
export default GeneralDetail;
