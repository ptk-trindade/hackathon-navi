import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { Produtores } from '../components';
import Prod from '../components/Producao';
import logo from '../icon_slegenda.png';



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


export default function Produtor() {
    const dados = [
        {
            "Unnamed: 0": 0,
            "id": 1,
            "periodo": "2022-05",
            "producao": 2200,
            "produtor_id": 1,
            "ganho": 1100,
            "valor_mes": 0.5,
        },
        {
            "Unnamed: 0": 1,
            "id": 2,
            "periodo": "2022-04",
            "producao": 1600,
            "produtor_id": 1,
            "ganho": 960,
            "valor_mes": 0.6,
        },
        {
            "Unnamed: 0": 1,
            "id": 2,
            "periodo": "2022-03",
            "producao": 2500,
            "produtor_id": 1,
            "ganho": 1625,
            "valor_mes": 0.65,
        },
        {
            "Unnamed: 0": 1,
            "id": 2,
            "periodo": "2022-02",
            "producao": 1950,
            "produtor_id": 1,
            "ganho": 1072.5,
            "valor_mes": 0.55,
        }
    ]

    const produtores = dados.map(produtor => (
        <Prod key={produtor.id} periodo={produtor.periodo} producao={produtor.producao} valor_mes={produtor.valor_mes} ganho={produtor.ganho}/>
    ))
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '15px',
                    width: '100%',
                }}>
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
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Typography component="h1" variant="h4" sx={{ margin: "5px" }}>Sua Produção</Typography>
                            <Typography component="h1" variant="h2" sx={{ margin: "1px" }} fontSize="25px">
                                Valor Atual kWh:
                                <Typography component="h1" variant="h2" sx={{ margin: "1px" }} fontSize="35px" color="primary.main">R$0,55</Typography>
                            </Typography>
                        </Box>
                        <img className='Icon' src={logo} alt="logo" />
                    </Box>
                    {produtores}
                    <Button href='/Produtor/AlteraValor' variant="contained" color="primary" sx={{ margin: "10px" }}>Alterar preços</Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
}