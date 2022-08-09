import React from 'react';
import { Link } from 'react-router-dom';

import {
  Card, CardContent, Typography, CardActions, Button,
} from '@mui/material';

function List({ people }) {
  // const { isLoading, planets, errorMessage } = useSelector((state) => state.planets);
  return (
    <>
      { people.map((person, i) => (
        <div className="col-12 col-md-6" key={person.name}>
          <Card variant="outlined" sx={{ borderRadius: '30px' }} className="mb-3 card-character">
            <>
              <CardContent sx={{ paddingTop: '40px' }}>
                <Typography variant="h5" component="div">
                  {person.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="#fff">
                  {person.gender}
                </Typography>
                <Typography variant="body2">
                  { person.homeworld.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`character/${i}`}><Button sx={{ color: '#f1e134', paddingTop: '20px' }} size="small">Enter</Button></Link>
              </CardActions>
            </>
          </Card>
        </div>
      ))}
    </>
  );
}
export default List;
