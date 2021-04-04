import React, {useState, useContext} from 'react';
import {TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import useStyles from './styles';

import {v4 as uuidv4} from 'uuid';

import {ExpenseTracker} from '../../../context/context';

import {incomeCategories, expenseCategories} from '../../../constants/constants';
import formatDate from '../../../utils/formateDate';

const initialState={
  amount:'',
  type:'Income',
  category:'',
  date: formatDate(new Date())
}

const Form = () => {
  const classes = useStyles();
  const [formData, setformData] = useState(initialState);
  const {addTransaction} = useContext(ExpenseTracker);

  const createTransaction = () => {
    const transaction= {...formData, amount: Number(formData.amount), id:uuidv4()};

    addTransaction(transaction);
    setformData(initialState);
  }

  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

  //console.log(formData);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle1" align='center' gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) =>setformData({...formData, type: e.target.value})}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) =>setformData({...formData, category: e.target.value})}>
            {
              selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)
            }
          </Select>
        </FormControl>
      </Grid>
      <Grid  item xs={6}>
        <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setformData({...formData, amount: e.target.value})}/>
      </Grid>
      <Grid  item xs={6}>
        <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setformData({...formData, date: formatDate(e.target.value)})}/>
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>
        Add 
      </Button>
    </Grid>
  );
}

export default Form;
