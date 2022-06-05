import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Produtores } from '../components';
import WindPowerIcon from '@mui/icons-material/WindPower';
import GrassIcon from '@mui/icons-material/Grass';
import WaterIcon from '@mui/icons-material/Water';
import ScienceIcon from '@mui/icons-material/Science';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import VolcanoIcon from '@mui/icons-material/Volcano';

const theme = createTheme();

function check_energia(produtor){
    const SX = {width: "50px", height: "50px"}
    if (produtor.energia_biomassa){
        return (<GrassIcon sx = {SX}/>)
    }
    else if (produtor.energia_eolica){
        return (<WindPowerIcon sx = {SX}/>);
    }
    else if (produtor.energia_hidreletrica){
        return (<WaterIcon sx = {SX}/>) ;
    }
    else if (produtor.energia_nuclear){
        return (<ScienceIcon sx = {SX}/>);
    }
    else if (produtor.energia_solar){
        return (<SolarPowerIcon sx = {SX}/>);
    }
    else if (produtor.energia_fossil){
        return (<LocalGasStationIcon sx = {SX}/>);
    }
    else if (produtor.energia_geotermica){
        return (<VolcanoIcon sx = {SX}/>);
    }
}

export default function AddContrato() {
    const dados = [
        {
            "Unnamed: 0": 0,
            "energia_biomassa": false,
            "energia_eolica": false,
            "energia_fossil": false,
            "energia_geotermica": false,
            "energia_hidreletrica": false,
            "energia_maremotriz": false,
            "energia_nuclear": false,
            "energia_solar": true,
            "id": 1,
            "nome": "energYes",
            "preco_kwh_dia": 0.4,
            "preco_kwh_noite": 0.6
        },
        {
            "Unnamed: 0": 1,
            "energia_biomassa": false,
            "energia_eolica": false,
            "energia_fossil": false,
            "energia_geotermica": true,
            "energia_hidreletrica": false,
            "energia_maremotriz": false,
            "energia_nuclear": false,
            "energia_solar": false,
            "id": 2,
            "nome": "intelithermal",
            "preco_kwh_dia": 0.5,
            "preco_kwh_noite": 0.5
        }
    ]

    const dados_produtor = dados.map(produtor =>(
        <Produtores  nome = {produtor.nome} precoNoite = {produtor.preco_kwh_noite} precoDia = {produtor.preco_kwh_dia} energia = {check_energia(produtor)}/>
    ))


    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {dados_produtor}
            </Container>
        </ThemeProvider>
    )
}