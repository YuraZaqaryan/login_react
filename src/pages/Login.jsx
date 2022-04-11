import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import axios from 'axios'

export default function Login() {
    const [user, setUser] = useState({
        login: '',
        password: ''
    })
    const hanldeChange = (e) => {
        const {value, dataset} = e.target
        setUser({...user, [dataset.id]:value})
        console.log(user)
    }
    return (
        <div className="signin">
            <h1>Sign in right now</h1>
            <input type="text" value={user.login} data-id='login' onChange={hanldeChange}/>
            <input type="text" value={user.password} data-id="password" onChange={hanldeChange}/>


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

        <Button variant="contained">Sign in</Button>
        <Link to='/register' className='goto'>To register</Link>
                </div>
            )

        }