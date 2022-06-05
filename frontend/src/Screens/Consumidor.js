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


const theme = createTheme();

function Consumidor() {
    const imoveis = [
        { id: 0, nome: 'Imóvel 1', gasto: 100.00, consumo: 1000.00 },
        { id: 1, nome: 'Imóvel 2', gasto: 70.00, consumo: 900.00 },
        { id: 2,nome: 'Imóvel 3', gasto: 50.50, consumo: 800.00 },
    ];
    
    
    
    const areaImoveis = imoveis.map(imovel =>(
        <Imoveis key={imovel.id} nome={imovel.nome} gasto={imovel.gasto} consumo={imovel.consumo} />
        ));

    return (

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        
                    }}
                >
                    <Box
                        sx={{
                            marginTop: 5,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'start',
                            border: '2px solid',
                            borderRadius: '10px',
                        }}
                    >
                        
                        <Typography component="h1" variant="h4" sx={{ margin: 6 }}>Menu</Typography>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin: 6 }}>
                            <LockOutlinedIcon />
                        </Avatar>
                    </Box>
                    <Box
                        sx={{
                            margin: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ margin: 5 }}>Qnt Economizou</Typography>
                        {areaImoveis}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Consumidor;