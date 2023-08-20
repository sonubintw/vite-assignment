
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./form.css"
import { useNavigate } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#6F61C0', // Change this color to your desired primary color
    },
    secondary: {
      main: '#6F61C0', // Change this color to your desired secondary color
    },
  },
});

const  containerStyles={
  background:'#00b4d8'
}

 const Form=()=> {

  const navigate=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);

    // const receivedData=({
    //   name:data.get('name'),
    //   phoneno: data.get('phoneno'),
    //   email: data.get('email'),
    // });
    
    // if(!receivedData?.name || !receivedData?.phoneno || !receivedData?.email){
    //   return alert("fill all the fields")
    // }
    
    // // try {
    //   if(receivedData.email){
    //     navigate("/grid")
    //   }
      
    // // } catch (error) {
    // //   console.log(error)
    // // }
    
    // localStorage.setItem('userdetails', JSON.stringify(receivedData));  
    navigate("grid")
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="sm" className='container'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:"center"
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Enter Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneno"
                  label="phone number"
                  type="text"
                  id="phoneno"
                  autoComplete="phoneno"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type='email'
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}

export default Form