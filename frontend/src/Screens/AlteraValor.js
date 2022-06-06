import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

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

export default function AlteraValor() {
    return(
        <ThemeProvider theme={theme}>
            <Container>
                <CssBaseline />
                <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button href='/Produtor' sx={{m: 5}} variant="contained" >Voltar</Button>  
          <Typography component="h1" variant="h5" marginBottom="10px">
            Alterar Valor
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="Preço kWh"
              fullWidth
              id="Preço kWh"
              label="Preço kWh"
              name="Preço kWh"
              autoComplete="Preço kWh"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href= '/Produtor'
            >
              Enviar
            </Button>
          </Box>
        </Box>
            </Container>
        </ThemeProvider>
    )
}