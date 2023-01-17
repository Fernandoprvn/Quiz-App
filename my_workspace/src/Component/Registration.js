import React from 'react'
import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import {Button, CardContent} from '@mui/material';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {login } from '../Features/userSlicer';
import "./Quiz.css";

function Registration({setLoggedIn}) {
  // state for registration
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('');
  const dispatch = useDispatch(); 
  
  const handleSubmited1 = () => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("age", JSON.stringify(age));
    localStorage.setItem("gender", JSON.stringify(gender));
  }
  const handleSubmited2 = () => {
    setLoggedIn(true)
    localStorage.setItem("isLogged", true)
    
    const _name = document.forms["myForm"]["name"].value,
      _email = document.forms["myForm"]["email"].value,
      _age= document.forms["myForm"]["age"].value,
      _gender = document.forms["myForm"]["gender"].value;
    if (_name === "") {
      alert("Name Must be filled out");
      return false;
    } else if (_email=== "") {
      alert(" Email Must be filled out")
    } else if (_age === "") {
      alert(" Age Must be filled out")
    } else if(_age < 10 ){
      alert("Age Not Vaild must be above 10")
    } else if(_age >= 100 ){
      alert("Age Not Vaild must be less than 100")
    }else if (_gender === "") {
      alert("Gender Must be filled out")
    }else { navigate("/quiz") }

  }
  dispatch(login({
          name:name,
          email:email,
          age:age,
          gender:gender,
      }),
      );
  // Redirect to newPage; 
  const navigate = useNavigate();
  return (
   
    <Card sx={{ width: '400px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Registration
        </Typography>
        <Box
          sx={{
            ' .MuiTextField-root': {
              m: 1,
              width: '90%'
            }
          }}>
          <form onClick={handleSubmited1} name="myForm">
            <TextField id="outlined-basic" label="Name" value={name} name="name"
              onChange={(e) => setName(e.target.value)} variant="outlined" required />
            <TextField id="outlined-basic" type="email" label="Email" variant="outlined" value={email} name="email" onChange={(e) => setEmail(e.target.value)} required />
            <TextField id="outlined-basic" label="Age" value={age} onChange={(e) => setAge(e.target.value)} name="age" type="number" InputProps={{inputProps: {  max: 100, min: 10 }}} variant="outlined" />
            <FormControl sx={{
              m: 1,
              width: '90%'
            }}  >
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={(e) => setGender(e.target.value)} name="gender"
              >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
                <MenuItem value={'other'}>Other</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant='contained' onClick={handleSubmited2} sx={{ width: '90' }}>Submit</Button>
          </form>
        </Box>
      </CardContent>
    </Card>
    
 )
}
export default Registration;
