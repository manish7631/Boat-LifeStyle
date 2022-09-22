import { Box, Card } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Payment.Module.css'
export const Payment = () => {


    const [userDetails, setUserDetails] = useState({
        cardNum: "",
        date: "",
        cvv: "",
        name: ""

    })


    const handleChange = (e) => {

        const { name, value } = e.target;

        //  console.log(userDetails.cardNum.length)

        setUserDetails({
            ...userDetails,
            [name]: value,
        })
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if ((userDetails.cardNum.length < 16) || (userDetails.cardNum.length > 16)) {
            alert("Worng Card Number")
            return
        } else if ((userDetails.cvv.length < 3) || (userDetails.cvv.length > 3)) {
            alert("Worng Cvv Number")
            return
        }
        navigate("/otp")
        console.log(userDetails.cardNum.length)
    }


    return (
        <>
            <Box id="mainPayment">
                <h1 className='h1Payment'>Pay Through Debit Card</h1>
                <Card className='CardPayment'>
                    <form onSubmit={handleSubmit}>
                        <input name='cardNum' onChange={handleChange} className='inputPayment' type="number" placeholder='Enter Card Number' />
                        <Box className='expiaryPayment'>
                            <input name='date' onChange={handleChange} className='inpPayment' type="date" placeholder='Expiary Date' />
                            <input name='cvv' onChange={handleChange} className='inpPayment' type="number" placeholder='Cvv' /></Box>
                        <input name='name' onChange={handleChange} className='inputPayment' type="text" placeholder='Name' />
                        <input className="buttonPayment" type="submit" value="Submit" />
                    </form>
                </Card>

            </Box>
        </>
    )
}
