import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

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


export default function Prod(props) {
    return (

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

        }}>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'space-around',
                margin: '15px',
                backgroundColor: 'secondary.main',
                border: '5px solid',
                borderRadius: '10px',

            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'space-around',
                    margin: '15px',
                }}>
                    <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }} color="primary.main">Produção:</Typography>
                    <Typography component="h3" variant="h2" sx={{ fontSize: 25 }} color="background.main">{props.producao} kWh</Typography>

                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'space-around',
                    margin: '15px',
                }}>
                    <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }} color="primary.main">Período:</Typography>
                    <Typography component="h3" variant="h2" sx={{ fontSize: 25 }} color="background.main">{props.periodo}</Typography>

                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'space-around',
                    margin: '15px',
                }}>
                    <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }} color="primary.main">Valor cobrado no mês:</Typography>
                    <Typography component="h3" variant="h2" sx={{ fontSize: 25 }} color="background.main">{props.valor_mes} kWh</Typography>

                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'space-around',
                    margin: '15px',
                }}>
                    <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }} color="primary.main">Ganho do mês:</Typography>
                    <Typography component="h3" variant="h2" sx={{ fontSize: 25 }} color="background.main">R$ {parseFloat(props.ganho).toFixed(2)}</Typography>

                </Box>
            </Box>
        </Box>
    )
}