import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Logo from '../assets/foodapp1.png';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default class AboutPage extends Component {
  render() {
    return (
      <div className='about-alignment'>
        <BoxContainer>
          <img src={Logo} className='img-logo' />
          <br/><br/>
          <Link to="/slide1">
            <NextBtn endIcon={<ArrowForwardIosIcon />}>Next</NextBtn>
          </Link>
        </BoxContainer>
      </div >
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
  background: 'white',
  borderRadius: '10px',
  margin: '10px',
  padding: '10px 30px',
  textTransform: 'none',
})