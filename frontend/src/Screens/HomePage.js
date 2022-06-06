import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import { IconButton } from '@mui/material';
import { margin, palette } from '@mui/system';
import logo from '../icon_slegenda.png';
import './homePage.css';



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
}

);

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <img className='IconHP' src={logo} alt="logo"/>
                <Box
                    sx={{
                        marginTop: 'none',
                        display: 'flex',
                        flexDirection: "Column",
                        alignItems: 'center',
                        justifyContent: 'center',
                        // border: '2px solid',
                        // borderColor: 'primary',
                        // borderRadius: '10px',
                        // backgroundColor: '#F8C178 ',


                    }}
                >
                    <Typography component="h1" variant="h4" color="secondary">Quem é você?</Typography>
                    <Box
                        sx={{
                            marginTop: "20px",
                            display: 'flex',
                            flexDirection: "Row",
                            alignItems: 'space-between',
                            fontSize: '2.5rem',
                            justifyContent: 'center',
                            fullwidth: 'true',

                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '25px',
                        }}>
                            <IconButton href="/LogIn/Produtor">
                                <SolarPowerIcon sx={{ width: "100px", height: "100px"}} color= "primary"/>
                            </IconButton>
                            <Typography component="h1" variant="h4" fontSize="20px">Produtor</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '25px',
                            alignItems: 'center',
                        }}>
                            <IconButton href="/LogIn/Consumidor">
                                <PersonIcon sx={{ width: "100px", height: "100px"}} color= "primary"/>
                            </IconButton>
                            <Typography component="h1" variant="h4" fontSize="20px">Consumidor</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Home;