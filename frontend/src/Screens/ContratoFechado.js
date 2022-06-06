import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';



const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#F49C22'
        },
        secondary: { main: '#333333' },
        background: { main: '#FFFF' },
    }
})


export default function Fechado() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xs" >
                <CssBaseline />
                <Box sx={{

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '2px solid',
                    borderRadius: '10px',
                    backgroundColor: 'secondary.main',
                    margin: '5px',
                    width: '400px',
                    height: '500px',
                    justifyContent: 'center',
                    border: '8px solid',
                    borderRadius: '10px',
                    
                }}>
                <Typography component="h1" variant="h5" margin='15px' color="background.main">Parabéns!</Typography>
                <Typography component="h1" variant="h5" margin='15px'color="background.main">Seu contrato foi feito!</Typography>
                <Button variant="contained" color="primary" href="/Consumidor">Menu</Button>
                </Box>
            </Container>
        </ThemeProvider>
    )
}