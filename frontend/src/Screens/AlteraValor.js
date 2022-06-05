import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme();

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
          <Button href='/Produtor' sx={{m: 5}}>Voltar</Button>  
          <Typography component="h1" variant="h5">
            Alterar Valores
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="ValDia"
              label="Valor Dia"
              name="ValDia"
              autoComplete="ValDia"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="ValNoite"
              label="Valor Noite"
              type="ValNoite"
              id="ValNoite"
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