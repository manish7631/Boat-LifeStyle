
import { Box, Card } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import "./ProductDetails.css"

import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux'
import { AddToCart } from '../../redux/appCart/action'
export const ProductDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`http://localhost:8080/allProduct/${id}`).then((data) => {
            setData(data.data)
        })
    }, [])


    return (
        <>
            <Box className='Main'>
                <Card className='CardLeft'>
                    <img src={data.Img_url} alt="" />
                </Card>
                <Card className='CardRight'>
                    <h2>{data.Name}</h2>


                    <Box style={{
                        width: "30%",
                        height: "60px",
                        margin: "auto",
                        color: "#000",
                        display: "flex",
                        textAlign: "center",
                        alignItems: 'center',
                        paddingLeft: "1"
                    }} className="Home_main_rating">
                        <p style={{
                            color: "red",
                            padding: "4px",

                        }}><StarIcon /></p>
                        <p style={{ fontWeight: "600" }}>{data.Rating}</p>
                        <p style={{ fontWeight: "600" }}>({data.Reviews} reviews)</p>
                    </Box>
                    <Box style={{
                        display: "flex",
                        width: "20%",
                        height: "100px",
                        margin: "auto",
                        justifyContent: "space-around"
                    }}>
                        <p style={{ fontWeight: "600", }}>₹:- {data.LatestPrice}</p>
                        <p style={{
                            fontWeight: "600",
                            textDecoration: "line-through"
                        }}>₹:- {data.ActualPrice}</p>
                    </Box>

                    <Box>
                        <button onClick={() => {

                            dispatch(AddToCart(data))
                        }}><AddIcon /> Add </button>
                    </Box>
                </Card>
            </Box>
        </>
    )
}
