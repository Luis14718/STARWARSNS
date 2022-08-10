import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Stack, styled, alpha, Box, FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { loadDatasAsync } from '../redux/reducers/people/people.thunks';
import { loadFilmsAsync } from '../redux/reducers/films/films.thunks';

const Searchstyle = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const useStyles = ((theme) => ({
  root: {
    '& > *': {
      margin: theme,
    },
  },
  textField: {
    color: '#fff',
    backgroundColor: 'gray',
  },
  inputField: {

    border: '1px solid white',
    color: 'white',
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
  color: 'white',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
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
export default function Search() {
  const [film, setFilm] = React.useState('');
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleChange = (event) => {
    if (event.target.value === '') {
      dispatch(loadFilmsAsync('0/?&format=json', ''));
    } else {
      dispatch(loadFilmsAsync(`${event.target.value}/?&format=json`, ''));
    }
    setFilm(event.target.value);
  };

  function searchengine(value) {
    if (value !== '') { dispatch(loadDatasAsync(`?&format=json&search=${value}`, '')); } else {
      dispatch(loadDatasAsync(`?&format=json&search=${value}`, ''));
    }
  }
  useEffect(() => {
    dispatch(loadDatasAsync('?&format=json', ''));
  }, []);
  useEffect(() => {
    dispatch(loadFilmsAsync('0/?&format=json', ''));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
            <Searchstyle>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => searchengine(e.target.value)}
              />
            </Searchstyle>
            <Box className="" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel className={classes.inputField} id="films">FILMS</InputLabel>
                <Select
                  sx={{ color: '#fff' }}
                  labelId="films"
                  className={classes.textField}
                  id="films"
                  value={film}
                  label="films"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                  <MenuItem value={4}>Thirty</MenuItem>
                  <MenuItem value={5}>Thirty</MenuItem>
                  <MenuItem value={6}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>

        </div>
        <div className="col-6" />
      </div>
    </div>
  );
}
