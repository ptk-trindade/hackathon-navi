import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Imoveis } from '../components';
import { getImoveis } from '../components';
import logo from '../icon_slegenda.png';
import './consumidor.css';



const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#F49C22'},
        secondary: {main: '#333333'},
        background: {main: '#FFFF'},
    }
  })

function Consumidor() {
    
    const imoveis = {
        "df": [
            {
                "consumo": 350,
                "economia": 105.69999999999999,
                "gastos": 175.0,
                "imovel_id": 1,
                "nome_distribuidora": "Light",
                "nome_imovel": "Casa"
            },
            {
                "consumo": 900,
                "economia": 346.8,
                "gastos": 375.0,
                "imovel_id": 2,
                "nome_distribuidora": "Light",
                "nome_imovel": "Imóvel"
            }
        ],
        "success": true
    }

    

    const areaImoveis = imoveis.df.map(imovel =>(
        <Imoveis key={imovel.imovel_id} nome={imovel.nome_imovel} gasto={imovel.gastos} consumo={imovel.consumo} />
        ));


    return (

        <ThemeProvider theme={theme}>
            <Container >
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        height: '100%',
                        
                    }}
                >
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            border: '2px solid',
                            borderRadius: '10px',
                        }}
                    >
                        
                        <Typography component="h1" variant="h4" sx={{ margin: "5px" }} fontSize= "25px">Oi, 
                            <Typography component="h1" variant="h4" sx={{ margin: "5px" }} color="primary.main" fontSize= "35px">Patrick!</Typography>
                        </Typography>
                        <img className='Icon' src={logo} alt="logo"/>
                    </Box>
                    <Box
                        sx={{
                            margin: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: 'md',
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ margin: 5 }}>Você economizou R$23,12!</Typography>
                        {areaImoveis}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Consumidor;