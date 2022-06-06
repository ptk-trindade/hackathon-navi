import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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

export default function Imoveis(props) {
    var link = "/Consumidor/" + props.nome
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexAlignItems: 'auto',
                border: '5px solid',
                borderRadius: '10px',
                margin: '5px',
                width: '100%',
                backgroundColor: '#333333',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexAlignItems: 'center',
                    justifyContent: 'space-around',
                    margin: '10px',
                    width: '100%',
                    Height: '100%',
                }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '10px',
                }}>
                    <Typography component="h1" variant="h5" fontSize="15px" color="#F6AD4C">Nome do Imóvel:</Typography>
                    <Typography component="h3" variant="h4" sx={{ margin: 0.75 }} color= '#FFFF'>{props.nome}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '10px',
                }}>
                    <Typography component="h1" variant="h5" fontSize="15px" color="#F6AD4C">Consumo de energia:</Typography>
                    <Typography component="h3" variant="h4" sx={{ margin: 0.75 }} color= '#FFFF'>{props.consumo}kWh</Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    margin: '10px',
                }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '10px',
                }}>
                    <Typography component="h1" variant="h5" fontSize="15px" color="#F6AD4C">Gasto do mês:</Typography>
                    <Typography component="h2" variant="h4" sx={{ margin: 0.75 }} color= '#FFFF'>R${parseFloat(props.gasto).toFixed(2)}</Typography>
                </Box>
                <Button variant="contained" sx={{
                    border: '3px solid',
                    borderRadius: '10px',
                }} href={link}>Expandir</Button>
            </Box>
        </Box>

    );
}
