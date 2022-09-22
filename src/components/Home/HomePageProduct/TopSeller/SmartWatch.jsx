import React from 'react'
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/material";

import "../../../../BreakPoint/HomeBreak.css"
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../../../redux/appCart/action';
import { Link, useNavigate } from 'react-router-dom';



function UsewindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth])

    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return size;

}


export const SmartWatch = () => {


    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [height, width] = UsewindowSize()




    const [watchData, setWatchData] = useState([])

    const [page, setPage] = useState(1)

    const [pagesize, setPagesize] = useState(4)




    useEffect(() => {

        if (width < 400) {
            setPagesize(1)
        } else if (width > 400 && width < 800) {
            setPagesize(2)
        } else if (width > 800 && width < 1200) {
            setPagesize(3)
        }


        async function getData() {
            try {
                const arr = await axios.get(`https://babita-boat.herokuapp.com/topwatch?page=${page}&pagesize=${pagesize}`)
                setWatchData(arr.data)

            } catch (err) {
                console.log(err)
            }
        }

        getData()

    }, [page, pagesize, width])


    // console.log("data", watchData)



    return (
        <>
            <Box className='main'>
                <Box id="Home_main_first_product">


                    {
                        watchData.map((e, i) => {
                            return (

                                <Box onClick={() => {
                                    navigate(`/${e.id}`)
                                }} key={uuidv4()} className="Home_main_first_product_watch"  >
                                    <img src={e.Img_url} alt="" />

                                    <Box className="Home_watch_text w-300 h-205" style={{
                                        borderRadius: "10px",
                                        backgroundColor: "#fff",
                                    }}>
                                        <Box style={{
                                            width: "99%",
                                            height: "60px",
                                            // border: "1px solid blue",
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
                                            <p style={{ fontWeight: "600" }}>{e.Rating}</p>
                                            <p style={{ fontWeight: "600" }}>({e.Reviews} reviews)</p>
                                        </Box>

                                        <Box className="Home_main_name" style={{
                                            width: "99%",
                                            height: "40px",
                                            color: "rgb(0,0,0)",
                                            textAlign: "left",
                                            paddingLeft: "5px",
                                            fontSixe: "20px",
                                            fontWeight: "800"
                                        }}>
                                            <p>{e.Name}</p>
                                        </Box>

                                        <Box style={{
                                            width: "99%",
                                            height: "100px",
                                            // border: "1px solid red",
                                            color: "#000",
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                            alignItems: "center",
                                        }} className='Home_main_price'>
                                            <Box style={{
                                                paddingTop: "0",
                                                marginTop: "0"
                                            }}>
                                                <Box
                                                    style={
                                                        {
                                                            color: "red",
                                                            display: "flex",
                                                            marginTop: "0",
                                                            fontWeight: "500"
                                                        }
                                                    }> <p> <CurrencyRupeeIcon /> </p><p>{e.LatestPrice}</p></Box>

                                                <Box style={
                                                    {
                                                        color: "black",
                                                        display: "flex",
                                                        marginTop: "-10px",
                                                        textDecoration: "line-through"
                                                    }
                                                }> <p><CurrencyRupeeIcon /></p><p>{e.ActualPrice}</p></Box>

                                            </Box>
                                            <Box>
                                                <button onClick={() => {

                                                    dispatch(AddToCart(e))
                                                }}

                                                    style={{
                                                        display: "flex",
                                                        width: "83px",
                                                        height: "45px",
                                                        textAlign: "center",

                                                        paddingLeft: "17px",
                                                        borderRadius: "8px",
                                                        backgroundColor: "red",
                                                        color: "white",

                                                        border: "none",
                                                        alignItems: "center"

                                                    }}> Add <AddIcon />  </button>
                                            </Box>

                                        </Box>
                                    </Box>
                                </Box>

                            )
                        })
                    }
                </Box>


                <button className='arrowbtnLeft' onClick={() => {
                    if (page > 0) {
                        setPage(page - 1)
                    }


                }}><ArrowBackIosIcon /></button>
                <button className='arrowbtnRight'
                    onClick={() => {

                        if (width < 400) {
                            if (page < 8) {
                                setPage(page + 1)
                            }
                        } else if (width > 400 && width < 800) {
                            if (page < 4) {
                                setPage(page + 1)
                            }
                        } else if (width > 800 && width < 1200) {
                            if (page < 3) {
                                setPage(page + 1)
                            }
                        } else if (width > 1200) {
                            if (page < 2) {
                                setPage(page + 1)
                            }
                        }



                    }}><ArrowForwardIosIcon /></button>
            </Box>

        </>
    )
}
