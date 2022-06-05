import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

export default function Consumidores() {
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'space-around',

        }}
        >
            <Typography component="h2" variant="h4" sx={{ fontSize: 35, margin: "30px"}}>User</Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography component="h2" variant="h4" sx={{ fontSize: 15, margin: "5px"}}>Gasto dia:</Typography>
            <Typography component="h2" variant="h2"  sx={{ fontSize: 25, marginLeft: "30px"}}>Valor Dia</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography component="h2" variant="h4" sx={{ fontSize: 15, margin: "5px"}}>Gasto noite:</Typography>
            <Typography component="h2" variant="h2"  sx={{ fontSize: 25, marginLeft: "30px"}}>Valor Noite</Typography>
        </Box>
        </Box>
    )
}