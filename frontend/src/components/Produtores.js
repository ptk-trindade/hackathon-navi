import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

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

export default function Produtores(props) {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '2px solid',
                borderRadius: '10px',
                margin: '5px',
                backgroundColor: 'secondary.main',
                border: '8px solid',
                borderRadius: '10px',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'Center',
                    margin: "10px",
                }}>
                    <Typography component="h3" variant="h4" sx={{ margin: 2.5 }} color="background.main">{props.nome}</Typography>
                    {props.energia}
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'start',
                    margin: "10px",
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'Column',
                        alignItems: 'start',
                    }}>
                        <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }} color="primary.main">Preço kWh:</Typography>
                        <Typography component="h3" variant="h4" sx={{ margin: 2.5 }} color="background.main">R${parseFloat(props.preco).toFixed(2)}</Typography>
                    </Box>
                </Box>
                <Button variant="contained" href="/Consumidor/ContratoFechado">Comprar</Button>
            </Box>
        </ThemeProvider>
    )
}