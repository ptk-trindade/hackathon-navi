import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';



const theme = createTheme();

export default function Fechado() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <CssBaseline />
                <Typography component="h1" variant="h5">Parbéns!</Typography>
                <Typography component="h1" variant="h5">Seu contrato foi feito!</Typography>
                <Button variant="contained" color="primary" href="/Consumidor">Menu</Button>

            </Container>
        </ThemeProvider>
    )
}