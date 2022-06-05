import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';


export default function Imoveis(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Typography component="h1" variant="h4" sx={{ margin: 2.5 }}>{props.nome}</Typography>
                <Typography component="h1" variant="h4" sx={{ margin: 2.5 }}>{props.consumo}</Typography>
            </Box>
            <Typography component="h1" variant="h4" sx={{ margin: 2.5 }}>{props.gasto}</Typography>
        </Box>
    );
}
