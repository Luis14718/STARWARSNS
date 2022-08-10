import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
} from '@mui/material';
import List from './List';
import Listfiltered from './Listfiltered';
import Loader from './Loader';
import '../assets/styles/yoga.css';
import { ReactComponent as Reactyoda } from '../assets/yoda.svg';
import { loadDatasAsync } from '../redux/reducers/people/people.thunks';

function getParameterByName(name, url) {
  const name2 = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name2}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
export default function Home() {
  // setting page to 1 due to the page 1
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [disabledprev, setNext] = useState(true);
  const { isLoading, people, errorMessage } = useSelector((state) => state.people);
  const { films } = useSelector((state) => state.films);
  useEffect(() => {
    if (people) {
      if (people.next) {
        setPage(parseInt(getParameterByName('page', people.next), 10) - 1);
      }
    }
    if (page === 1) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [people]);
  const nextPage = (urlvalue) => {
    setPage(page + 1);
    dispatch(loadDatasAsync(`?${urlvalue.split('?')[1]}`));
  };
  const prevPage = (urlvalue) => {
    if (page !== 1) {
      setPage(page - 1);
      dispatch(loadDatasAsync(`?${urlvalue.split('?')[1]}`));
    }
  };
  // counting pages
  const Numberspage = ({ count }) => {
    const intends = [];
    let i = 1;
    // eslint-disable-next-line no-plusplus
    for (i; i <= Math.ceil(count / 10); i++) {
      intends.push(i);
    }
    return (intends.map((value) => (
      <button
        type="button"
        className={value === page ? 'active' : 'disabled'}
        key={value}
      >
        {value}
      </button>
    )));
  };

  return (
    <div className="container front">
      <div className="row">
        <div className="col-12 col-md-7">
          {isLoading && <Loader />}
          {errorMessage && <h3>{errorMessage}</h3>}
          {films && <div className="row"><Listfiltered people={films.characters} /></div>}
          {people && !films && (
            <>
              <div className="d-flex justify-content-center mx-auto">
                <Button sx={{ color: '#fff' }} onClick={() => { prevPage(people.previous); }} disabled={disabledprev}>prev</Button>
                <div className="nav-numbers m-3">
                  <Numberspage count={people.count} />
                </div>
                <Button sx={{ color: '#fff' }} onClick={() => { if (people.next) { nextPage(people.next); } }}>next</Button>
              </div>
              <div className="row">
                {people.count === 0 && <>nothing to show</>}
                <List people={people.results} />
              </div>
              <div className="d-flex justify-content-center mx-auto">
                <Button sx={{ color: '#fff' }} onClick={() => { prevPage(people.previous); }} disabled={disabledprev}>prev</Button>
                <div className="nav-numbers m-3">
                  <Numberspage count={people.count} />
                </div>
                <Button sx={{ color: '#fff' }} onClick={() => { if (people.next) { nextPage(people.next); } }}>next</Button>
              </div>
            </>
          )}
        </div>
        <div className="col-12 col-md-5">
          <div className="yoda-frame">
            <Reactyoda />
          </div>
        </div>
      </div>
    </div>
  );
}
