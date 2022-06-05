import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton } from '@mui/material';

export default function Produtores(props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '2px solid',
            borderRadius: '10px',
            margin: '5px',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'Center',
                margin: "10px",
            }}>
                <Typography component="h3" variant="h4" sx={{ margin: 2.5 }}>{props.nome}</Typography>
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
                    <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }}>Preço Dia:</Typography>
                    <Typography component="h3" variant="h4" sx={{ margin: 2.5 }}>R${parseFloat(props.precoDia).toFixed(2)}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'Column',
                    alignItems: 'start',
                }}>
                    <Typography component="h3" variant="h4" sx={{ fontSize: 15, marginRight: "auto" }}>Preço Noite:</Typography>
                    <Typography component="h3" variant="h4" sx={{ margin: 2.5 }}>R${parseFloat(props.precoNoite).toFixed(2)}</Typography>
                </Box>
            </Box>
            <IconButton href='/Consumidor/ContratoFechado'>
                <CheckCircleIcon sx={{ width: "50px", height: "50px" }} />
            </IconButton>
        </Box>
    )
}