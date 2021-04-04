import React, {useContext} from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './styles';
import {ExpenseTracker} from '../../context/context';

import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../Infocard';

const Main = () => {
  const classes= useStyles();
  const {balance} = useContext(ExpenseTracker);
  return (
    <Card className={classes.root}>
      <CardHeader style={{color: '#03045e', backgroundColor: '#caf0f8'}} title="Track It" subheader="Powered by Speechly" />
      <CardContent className={classes.cardContent}>
        <Typography style={{marginTop: '10px'}} align='center' variant='h5'>Total Balance: Rs.{balance}</Typography>
        <Typography variant="subtitle1" style={{lineHeight: '1.5em', marginTop: '20px'}}>
          <InfoCard />
        </Typography>
        <Divider className={classes.divider}/>
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main;
