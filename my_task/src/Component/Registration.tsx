import React from 'react'
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { Button, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom"


function Registration({ setLoggedIn}:any) {
  // state for registration
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('');


  const handleSubmited1 = () => {
     
    // storing input value to localStorage
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("age", JSON.stringify(age));
    localStorage.setItem("gender", JSON.stringify(gender));
  }
  const handleSubmited2 = () => {
    setLoggedIn(true)
    const newLocal_4:any = true;
    localStorage.setItem("isLogged", newLocal_4)
    const newLocal_1:any = "myForm", name= document.forms[newLocal_1]["name"].valueOf(),
      newLocal:any = "myForm", email= document.forms[newLocal]["email"].value,
      newLocal_2:any = "myForm", age= document.forms[newLocal_2]["age"].value,
      newLocal_3:any= "myForm",  gender = document.forms[newLocal_3]["gender"].value;
    if (name === "") {
      alert("Name Must be filled out");
      return false;
    } else if (email=== "") {
      alert(" Email Must be filled out");
    } else if (age === "") {
      alert(" Age Must be filled out");
    } else if(age < 10){
      alert("Age Not Vaild must be above 10");
    }
    else if (gender === "") {
      alert("Gender Must be filled out")
    }
    else { navigate("/quiz") }

  }

  // Redirect to newPage 
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
          }} >
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

