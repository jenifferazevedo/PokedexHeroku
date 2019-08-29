import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    blue1: '#28A7F4',
    blueclaromedio: '#60E6F1',
    blueclaro:'#C2FFFF',
    blueescuro: '#0E4C92',
    red1: '#FF0F2D',
    redescuromedio: '#A0081D',
    redescuro: '#62010E', 
    cinzaescuro: '#474B4D',
    cinzaclaro: '#C7BFAF',
    background1: 'linear-gradient(180deg, rgba(40,167,244,1) 0%, rgba(37,158,234,1) 40%, rgba(14,76,146,1) 100%)',
    black: 'black',
    white: 'white',
    boxshadowescuro: 'rgba(0, 0, 0, 50%)',
    boxshadowmedio: 'rgba(0, 0, 0, 25%)',
    blueeffect: 'linear-gradient(180deg, rgba(138,215,255,1) 0%, rgba(8,8,160,1) 70%)',
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    )
  }
}