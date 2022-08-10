import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { InlineIcon } from '@iconify/react';
import Moment from 'moment';
import './DetailComponents/Film.css';
import { Typography, Button } from '@mui/material';

import DataService from '../services/data.service';
import GeneralDetail from './DetailComponents/General';
import Homeworld from './DetailComponents/Homeworld';
import Starwar from './DetailComponents/Starwar';

export default function DetailComponent() {
  const { idcharacter } = useParams();
  const [general, setGeneral] = useState([]);
  const [filmsres, setFilms] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [singlefilm, setSinglefilm] = useState();

  useEffect(() => {
    DataService.getAllDatas(`people/?search=${idcharacter}&format=json`)
      .then((response) => {
        setGeneral({
          name: response.data.results[0].name,
          height: response.data.results[0].height,
          mass: response.data.results[0].mass,
          hair_color: response.data.results[0].hair_color,
          birth_year: response.data.results[0].birth_year,
          eye_color: response.data.results[0].eye_color,
          gender: response.data.results[0].gender,
          skin_color: response.data.results[0].skin_color,
          edited: response.data.results[0].edited,
        });
        response.data.results[0].films.forEach((films) => {
          let filmid = films.split('/');
          filmid = filmid[filmid.length - 2];
          DataService.getAllDatas(`films/${filmid}/?format=json`)
            .then((response2) => {
              setFilms((current) => [...current, response2.data]);
            });
        });
        const idhomeworld = response.data.results[0].homeworld.split('/');
        DataService.getAllDatas(`planets/${idhomeworld[idhomeworld.length - 2]}/?format=json`)
          .then((response3) => {
            setPlanet(response3.data);
          });
      });
  }, [idcharacter]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card-info">
            <div className=" d-flex justify-content-between">
              <div>
                <Link to="/">
                  <button type="button" className="btn btn-back">
                    <InlineIcon style={{ color: 'black' }} icon="akar-icons:arrow-left" />
                    <span className="noselect">Back</span>
                  </button>
                </Link>
              </div>
              <div>
                {general && (
                <>
                  <span> Last Update: </span>
                  {Moment(general.edited).format('MM/DD/YYYY HH:MM')}
                </>
                )}
              </div>
            </div>
            <div className="row">
              <div className=" col-12 col-md-6">
                {general && <GeneralDetail info={general} />}
                {planet && <Homeworld info={planet} />}
              </div>
              <div className="col-12 col-md-6">
                {filmsres
                   && (
                   <div className="G-frame3 mt-3 p-3">
                     <Typography variant="span">
                       Films
                     </Typography>
                     {filmsres !== undefined && filmsres.map((element) => (
                       <Typography variant="h6">
                         <Button variant="inherit" type="button" onClick={() => { setSinglefilm(element); }}>
                           <InlineIcon style={{ color: 'black' }} icon="fluent:subtitles-20-regular" />
                           {' '}
                           {`${element.title}`}
                         </Button>
                       </Typography>
                     ))}
                   </div>
                   )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <Starwar info={singlefilm} />
        </div>
      </div>
    </div>
  );
}
