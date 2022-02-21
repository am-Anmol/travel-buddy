import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    return(
      <AppBar position="static">
        
        <Box display="flex" justifyContent="center" alignItems="center" > 
        <img src="./././logo.png" width="60" height="60" />
            <Typography variant="h5" className={classes.title} style={{marginLeft: '8px'}}>
              Explore new places
            </Typography>
            {/* <Autocomplete> */}
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase placeholder="Search" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
              </div>
            {/* </Autocomplete> */}
          </Box>
      </AppBar>
    );
}

export default Header;