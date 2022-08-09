import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Stack, styled, alpha,
} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { loadDatasAsync } from '../redux/reducers/people/people.thunks';
import List from './List';
import Loader from './Loader';
import '../assets/styles/yoga.css';
import { ReactComponent as Reactyoda } from '../assets/yoda.svg';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    margintop: '10px',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Home() {
  const dispatch = useDispatch();
  // setting page to 1 due to the page 1
  const [page, setPage] = useState(1);
  const [disabledprev, setNext] = useState(true);
  const { isLoading, people, errorMessage } = useSelector((state) => state.people);
  useEffect(() => {
    dispatch(loadDatasAsync(page));
    if (page === 1) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [page]);

  // using page at the end of useeffect to trigger useeffect when the state of page change
  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
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
        onClick={() => {
          setPage(value);
        }}
      >
        {value}
      </button>
    )));
  };
  function search(value) {
    if (value !== '') { dispatch(loadDatasAsync('', '', value)); } else {
      setPage(1);
    }
  }
  return (
    <>
      <div className="container">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => search(e.target.value)}
            />
          </Search>
        </Stack>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            {isLoading && <Loader />}
            {errorMessage && <h3>{errorMessage}</h3>}
            {people && (
            <>
              <div className="d-flex justify-content-center mx-auto">
                <Button sx={{ color: '#fff' }} onClick={() => { prevPage(); }} disabled={disabledprev}>prev</Button>
                <div className="nav-numbers m-3">
                  <Numberspage count={people.count} />
                </div>
                <Button sx={{ color: '#fff' }} onClick={() => { if (people.next) { nextPage(); } }}>next</Button>
              </div>
              <div className="row">
                {people.count === 0 && <>nothing to show</>}
                <List people={people.results} />
              </div>
              <div className="d-flex justify-content-center mx-auto">
                <Button sx={{ color: '#fff' }} onClick={() => { prevPage(); }} disabled={disabledprev}>prev</Button>
                <div className="nav-numbers m-3">
                  <Numberspage count={people.count} />
                </div>
                <Button sx={{ color: '#fff' }} onClick={() => { if (people.next) { nextPage(); } }}>next</Button>
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
    </>
  );
}
