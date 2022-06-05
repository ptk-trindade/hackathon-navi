import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { Consumidores } from '../components';

const theme = createTheme();

export default function(){
    return(
        <ThemeProvider theme={theme}>
            <Container>
                <CssBaseline />
                <Button href='/Produtor' sx={{m: 5}}>Voltar</Button>  
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Consumidores />
                </Box>
            </Container>
        </ThemeProvider>
    )
}