import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';


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

export default function Expand() {
    const url = window.location.href;
    const nome = url.split('/')[4];
    const dados = {
        "consumo_dia": 750,
        "consumo_noite": 500,
        "economia": 10.08,
        "energia_biomassa": false,
        "energia_eolica": false,
        "energia_fossil": false,
        "energia_geotermica": false,
        "energia_hidreletrica": false,
        "energia_maremotriz": false,
        "energia_nuclear": false,
        "energia_solar": true,
        "gastos_dia": 300.0,
        "gastos_noite": 300.0,
        "gastos_total": 175.0,
        "id_y": 19,
        "nome_x": "Casa",
        "nome_y": "energYes",
        "periodo": "2022-04",
        "preco_kwh_dia": 0.4,
        "preco_kwh_noite": 0.6
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box m={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Button variant='contained' href='/Consumidor' sx={{ m: 5 }}>Voltar</Button>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#333333',
                        width: '450px',
                        height: '450px',
                        borderRadius: '15px',
                        border: '5px solid',

                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '1px',
                                flexWrap: 'wrap',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    margin: '15px',
                                }}>
                                    <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }} color="#F6AD4C">Nome Imóvel:</Typography>
                                    <Typography component="h1" variant="h4" sx={{ marginBottom: "2" }} color='#FFFF'>{dados.nome_x}</Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginLeft: '15px',
                                }}>
                                    <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }} color="#F6AD4C">Economia:</Typography>
                                    <Typography component="h1" variant="h4" sx={{ marginBottom: "2" }} color='#FFFF'>R${parseFloat(dados.economia).toFixed(2)}</Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '30px',
                        }}>
                            <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }} color="#F6AD4C">Gasto Total:</Typography>
                            <Typography component="h2" variant="h4" sx={{ marginBottom: "2" }} color='#FFFF'>R${parseFloat(dados.gastos_total).toFixed(2)}</Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '10px',
                        }}>
                            <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }} color="#F6AD4C">Produtor:</Typography>


                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: '10px',
                                width: '100%',
                            }}>
                                <Typography component="h2" variant="h4" sx={{ marginBottom: "2", }} color='#FFFF'>{dados.nome_y}</Typography>
                                <SolarPowerIcon sx={{ width: "50px", height: "50px" }} color='primary' />
                            </Box>
                            <IconButton sx={{ width: "100px", marginTop: "50px" }} href="/Consumidor/AdicionarContrato">
                                <AddCircleIcon color="primary" />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>

    )
}