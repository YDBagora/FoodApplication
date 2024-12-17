import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider2 from '../assets/foodapp3.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Grid from '@mui/material/Grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Link } from "react-router-dom";


export default class SliderPage2 extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Link to="/slide1">
              <Button endIcon={<ArrowBackIosNewIcon />} sx={{ mt: 2, p: 1, color: 'black' }}></Button>
            </Link>
          </Grid>
          <Grid item sm={6}>
            <Link to="/slide3">
              <NextBtn endIcon={<NavigateNextIcon />}>Skip</NextBtn>
            </Link>
          </Grid>
        </Grid>
        <BoxContainer>
          <img src={Slider2} className='img-slider1' />
          <Typography variant="h6" sx={{ color: 'rgb(253, 69, 69)' }}>
            <b>Choose favorite dishes!</b>
          </Typography>
          <Typography variant="caption" sx={{ opacity: '0.8' }}>
            Welcome to the Food Ordering Website project! This is a mini project created
            with React.js, Redux,Html and CSS for ordering food online. The website includes
            features such as user authentication, a home page with a menu, category pages,
            detailed food pages, a user profile, and a shopping cart.
          </Typography>
          <br /><br />
          <GridContainer container spacing={2}>
            <Grid item sm={1}>
              <Link to="/slide1">
                <Button endIcon={<PanoramaFishEyeIcon />} sx={{ color: 'black' }}></Button>
              </Link>
            </Grid>
            <Grid item sm={1}>
              <Button endIcon={<FiberManualRecordIcon />} sx={{ color: 'black' }}></Button>
            </Grid>
            <Grid item sm={1}>
              <Link to="/slide3">
                <Button endIcon={<PanoramaFishEyeIcon />} sx={{ color: 'black' }}></Button>
              </Link>
            </Grid>
          </GridContainer>
          <br />
          <Link to="/slide3">
            <Btn fullWidth><b>Next</b></Btn>
          </Link>
        </BoxContainer>
      </div>
    )
  }
}


const BoxContainer = styled(Box)({
  width: '50%',
  margin: '0 auto',
  alignItems: 'center',
  textAlign: 'center',
  '@media (min-width: 300px) and (max-width: 800px)': {
    width: '100%',
  }
})

const Btn = styled(Button)({
  backgroundColor: 'rgb(253, 69, 69)',
  color: 'white',
  borderRadius: '50px',
  margin: '30px 0px 0px 0px',
  padding: '10px 30px',
  '@media (min-width: 300px) and (max-width: 800px)': {
    position: 'absolute',
    bottom: 20,
    left: 0
  }
})

const NextBtn = styled(Button)({
  color: 'rgb(253, 69, 69)',
  backgroundColor: 'white',
  margin: '10px 20px',
  padding: '10px',
  textTransform: 'none',
  float: 'right',
  position: 'absolute',
  right: 0
})

const GridContainer = styled(Grid)({
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  opacity: '0.8',
})
