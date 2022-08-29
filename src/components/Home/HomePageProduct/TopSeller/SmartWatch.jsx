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
import { ConnectingAirportsOutlined } from '@mui/icons-material';


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
    const [height, width] = UsewindowSize()




    const [watchData, setWatchData] = useState([])

    const [page, setPage] = useState(1)

    const [pagesize, setPagesize] = useState(4)


    useEffect(() => {
        if (width < 400) {
            setPagesize(1)
            async function getData() {
                try {
                    const arr = await axios.get(`http://localhost:8000/topwatch?page=${page}&pagesize=${pagesize}`)
                    setWatchData(arr.data)

                } catch (err) {
                    console.log(err)
                }
            }

            getData()
        }
    }, [page, pagesize])





    return (
        <>
            <Box id="Home_main_first_product">


                {
                    watchData.map((e, i) => {
                        return (
                            <Box key={uuidv4()} className="Home_main_first_product_watch"  >
                                <img src={e.Img_url} alt="" />

                                <Box className="Home_watch_text w-300 h-205" style={{
                                    borderRadius: "10px",
                                    backgroundColor: "#fff"
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
                                            <button style={{
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


            <button style={{
                border: "1px solid red",
                position: "absolute",
                width: "40px",
                height: "40px",
                top: "135%",
                left: "6%",
                zIndex: "1",
                borderRadius: "50%",
                padding: "5px",
                backgroundColor: "transparent",

            }} onClick={() => {

                setPage(page - 1)

            }}><ArrowBackIosIcon /></button>
            <button style={
                {
                    border: "1px solid red",
                    position: "absolute",
                    width: "40px",
                    height: "40px",
                    top: "135%",
                    left: "90%",
                    zIndex: "1",
                    borderRadius: "50%",
                    padding: "5px",
                    backgroundColor: "transparent",




                }
            } onClick={() => {

                setPage(page + 1)

            }}><ArrowForwardIosIcon /></button>

        </>
    )
}
