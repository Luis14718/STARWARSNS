import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardContent, Typography, CardActions, Button,
} from '@mui/material';
import DataService from '../services/data.service';

function Listfiltered({ people }) {
  const [peopleinfo, setPeopleinfo] = useState([]);
  useEffect(() => {
    people.forEach(
      (person) => {
        const idperson = person.split('/');
        DataService.getAllDatas(`people/${idperson[idperson.length - 2]}/?format=json`)
          .then((response) => {
            setPeopleinfo((current) => [...current, response.data]);
          });
      },
    );
  }, []);
  // const { isLoading, planets, errorMessage } = useSelector((state) => state.planets);
  return (
    peopleinfo && peopleinfo.map((element, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="col-12 col-md-6" key={`${i}rand`}>
        <Card variant="outlined" sx={{ borderRadius: '30px' }} className="mb-3 card-character">
          <>
            <CardContent sx={{ paddingTop: '50px' }}>
              <Typography variant="h5" component="div">
                {element.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="#fff">
                {element.gender}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`character/${element.name}`}><Button sx={{ color: '#f1e134', paddingTop: '20px' }} size="small">Enter</Button></Link>
            </CardActions>
          </>
        </Card>
      </div>
    ))
  );
}
export default Listfiltered;
