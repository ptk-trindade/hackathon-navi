import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';


const theme = createTheme();

export default function Produtor() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '15px',
                    width: '100%',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: '15px',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'space-around',
                            margin: '15px',
                        }}>
                            <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }}>Preço Dia:</Typography>
                            <Typography component="h3" variant="h2"  sx={{ fontSize: 45}}>P_dia</Typography>

                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'space-around',
                            margin: '15px',
                        }}>
                            <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }}>Preço Noite:</Typography>
                            <Typography component="h3" variant="h2" sx={{ fontSize: 45}}>P_noite</Typography>
                        </Box>
                    </Box>
                    <Button href='/Produtor/Usuarios' variant="contained" color="primary" sx={{margin: "10px"}}>Usuários</Button>
                    <Button href='/Produtor/AlteraValor'variant="contained" color="primary" sx={{margin: "10px"}}>Alterar preços</Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
}