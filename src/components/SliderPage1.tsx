import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider1 from '../assets/foodapp2.png';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Grid from '@mui/material/Grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Link } from "react-router-dom";


export default class SliderPage1 extends Component {
  render() {
    return (
      <div>
        <Link to="/slide2">
          <NextBtn endIcon={<NavigateNextIcon />}>Skip</NextBtn>
        </Link>
        <br /><br />
        <BoxContainer>
          <img src={Slider1} className='img-slider' />
          <Typography variant="h6" sx={{ color: 'rgb(253, 69, 69)' }}>
            <b>Search Restaurants</b>
          </Typography>
          <Typography variant="caption" sx={{ opacity: '0.8' }}>
            Welcome to the Food Ordering Website project! This is a mini project created
            with React.js, Redux,Html and CSS for ordering food online. The website includes
            features such as user authentication, a home page with a menu, category pages,
            detailed food pages, a user profile, and a shopping cart.
          </Typography>
          <GridContainer container spacing={2}>
            <Grid item sm={1}>
              <Button endIcon={<FiberManualRecordIcon />} sx={{ color: 'black' }}></Button>
            </Grid>
            <Grid item sm={1}>
              <Link to="/slide2">
                <Button endIcon={<PanoramaFishEyeIcon />} sx={{ color: 'black' }}></Button>
              </Link>
            </Grid>
            <Grid item sm={1}>
              <Link to="/slide3">
                <Button endIcon={<PanoramaFishEyeIcon />} sx={{ color: 'black' }}></Button>
              </Link>
            </Grid>
          </GridContainer>
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

const NextBtn = styled(Button)({
  color: 'rgb(253, 69, 69)',
  backgroundColor: 'white',
  margin: '10px 20px',
  padding: '10px',
  textTransform: 'none',
  float: 'right',
})

const GridContainer = styled(Grid)({
  marginTop: '20px',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  opacity: '0.8',
})
