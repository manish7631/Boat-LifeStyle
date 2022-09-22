
import { Box, Card } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Otp.Module.css'
export const Otp = () => {
    const navigate = useNavigate()

    const [otpDetails, setOtpDetails] = useState({
        otp: ""

    })


    const handleChange = (e) => {

        const { name, value } = e.target;

        //  console.log(userDetails.cardNum.length)

        setOtpDetails({
            ...otpDetails,
            [name]: value,
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        if ((otpDetails.otp.length < 4) || (otpDetails.otp.length > 4)) {
            alert("Worng Otp Number")
            return
        } else {
            alert("Successfully Purchase")
            navigate("/")
        }
        console.log(otpDetails.otp.length)
    }

    return (
        <>
            <Box id="mainPayment">
                <h1 className='h1Payment'>Enter Otp Here</h1>
                <Card className='CardPayment'>
                    <form onSubmit={handleSubmit}>
                        <input name='otp' onChange={handleChange} className='inputPayment' type="number" placeholder='Enter Otp Number' />
                        <input className="buttonPayment" type="submit" value="Submit" />
                    </form>
                </Card>

            </Box>
        </>
    )
}
