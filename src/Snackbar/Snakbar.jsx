import React from 'react';
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';

const CustomSnakbar = ({open,setOpen}) => {
  const classes= useStyles();

  const handleClose = (e,r) => {
    if(r === 'clickaway')
      return;
    
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Snackbar
      anchorOrigin={{vertical:'top', horizontal:'right'}}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}>
        <MuiAlert onClose={handleClose} variant='filled' severity='success' elevation={6} >
          Transaction created successfully!
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default CustomSnakbar;
