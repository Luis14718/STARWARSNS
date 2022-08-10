import React from 'react';
import { Typography } from '@mui/material';
import { ReactComponent as Reactyoda } from '../assets/yoda.svg';
import '../assets/styles/yoga.css';

export default function NotFound() {
  return (
    <div className="container">
      <div className="row d-flex h-100 ">
        <div className="mx-auto">
          <div className="yoda-frame_notfound">
            <Reactyoda />
          </div>
          <div className="not-found">
            <Typography sx={{ color: '#fff' }} variant="h3">
              Not Found 404
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
