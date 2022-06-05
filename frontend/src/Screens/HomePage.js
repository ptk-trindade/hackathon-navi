import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const theme = createTheme();

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 20,
                        display: 'flex',
                        flexDirection: "Column",
                        alignItems: 'space-around',


                    }}
                >
                    <Typography component="h1" variant="h4">Quem é você?</Typography>
                    <Box
                        sx={{
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: "Row",
                            alignItems: 'space-around',
                            fontSize: '2.5rem',
                            justifyContent: 'center',
                            fullwidth: 'true',

                        }}
                    >
                        <Button href="/LogIn/Produtor">Produtor</Button>
                        <Button href="/LogIn/Consumidor">Consumidor</Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Home;