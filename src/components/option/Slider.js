import React from 'react';
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {setWishWeek} from "../../redux/modules/option";
import { value } from 'dom7';
const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

const marks = [
  {
    value: 0,
    label: '지금 부터',
  },
  {
    value: 25,
    label: '1주 이내',
  },
  {
    value: 50,
    label: '2주',
  },
  {
    value: 75,
    label: '3주',
  },
  {
    value: 100,
    label: '4주',
  },
];
  

export default function DiscreteSlider() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const valueLabelFormat = (value) => {
    console.log(value)
    marks.findIndex((mark) => mark.value === value) ;
    dispatch(setWishWeek(value))
  }


  return (
    <div 
      className={classes.root} 
      style={{margin:"20px"}}
    >
      <Slider
        defaultValue={25}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby="discrete-slider-restrict"
        step={25}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
}