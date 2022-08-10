import React from 'react';
import './Film.css';
import { Typography } from '@mui/material';
import { InlineIcon } from '@iconify/react';

function GeneralDetail({ info }) {
  // const { isLoading, planets, errorMessage } = useSelector((state) => state.planets);
  return (
    <div className="G-frame3 mt-3 p-3">
      <Typography variant="span">
        Films
      </Typography>
      {info !== undefined && info.map((element) => (
        <Typography variant="h6">
          <InlineIcon style={{ color: 'black' }} icon="fluent:subtitles-20-regular" />
          {` ${element.title}`}
        </Typography>
      ))}
    </div>
  );
}
export default GeneralDetail;
