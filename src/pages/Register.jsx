import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import axios from 'axios'

export default function Register() {
    const [form, setUser] = useState({
        login: '',
        password: ''
    })
    const hanldeChange = (e) => {
        const {value, dataset} = e.target
        setUser({...form, [dataset.id]:value})
        console.log(form)
    }
    const registerHandler = async() =>{
            try {
                await axios.post('/api/auth/registration',{...form},{
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                })
                .then(response => console.log(response))
            } catch (error) {
                console.log( error )
            }
    }
    return (
        <div className="signin">
            <h1>Sign up right now</h1>
            <input type="text" value={form.login} data-id='login' onChange={hanldeChange}/>
            <input type="text" value={form.password} data-id="password" onChange={hanldeChange}/>


        {/* <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue={user.name}
            variant="filled"
            size="small"
            name="name"
            onChange={hanldeChange}
        />
        <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue={user.lastname}
            variant="filled"
            name='lastname'
            onChange={hanldeChange}
        /> */}

        <Button variant="contained" onClick={registerHandler}>Sign in</Button>
        <Link to='/login' className='goto'>To Login</Link>
                </div>
            )

        }