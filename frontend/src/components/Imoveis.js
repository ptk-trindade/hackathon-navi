import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


export default function Imoveis(props) {
    var link = "/Consumidor/"+ props.nome
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexAlignItems: 'auto',
                border: '1px solid',
                borderRadius: '10px',
                margin: '5px',
                width: '100%',
            }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <Typography component="h3" variant="h4" sx={{ margin: 2.5}}>{props.nome}</Typography>
                <Typography component="h3" variant="h4" sx={{ margin: 2.5 }}>{props.consumo}kWh</Typography>
            </Box>
            
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >

            <Typography component="h2" variant="h4" sx={{ margin: 2.5 }}>R${props.gasto}</Typography>
            <Button href={link}>Expandir</Button>
            </Box>
        </Box>
        
    );
}
