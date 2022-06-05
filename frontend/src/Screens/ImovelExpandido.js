import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SolarPowerIcon from '@mui/icons-material/SolarPower';

const theme = createTheme();

export default function Expand() {
    const url = window.location.href;
    const nome = url.split('/')[4];
    const dados = {
        "consumo_dia": 750,
        "consumo_noite": 500,
        "economia": 402.5000000000001,
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
        "gastos_total": 600.0,
        "id_y": 19,
        "nome_x": "apartamento",
        "nome_y": "energYes",
        "periodo": "2022-04",
        "preco_kwh_dia": 0.4,
        "preco_kwh_noite": 0.6
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'space-around',
                        margin: '10px',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '30px',
                        }}>
                            <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }}>Nome Imóvel:</Typography>
                            <Typography component="h1" variant="h4" sx={{ marginBottom: "2" }}>{dados.nome_x}</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '30px',
                        }}>
                            <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }}>Economia:</Typography>
                            <Typography component="h1" variant="h4" sx={{ marginBottom: "2" }}>R${parseFloat(dados.economia).toFixed(2)}</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '30px',
                }}>
                    <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }}>Gasto Total:</Typography>
                    <Typography component="h2" variant="h4" sx={{ marginBottom: "2" }}>R${dados.gastos_total}</Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '10px',
                }}>
                    <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }}>Produtor:</Typography>


                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: '10px',
                        width: '100%',
                    }}>
                        <Typography component="h2" variant="h4" sx={{ marginBottom: "2", }}>{dados.nome_y}</Typography>
                        <SolarPowerIcon sx={{ width: "50px", height: "50px" }} />
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>

    )
}