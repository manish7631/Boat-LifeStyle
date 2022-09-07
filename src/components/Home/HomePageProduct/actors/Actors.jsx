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


export const Actors = () => {
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
                const arr = await axios.get(`https://babita-boat.herokuapp.com/actor?page=${page}&pagesize=1`)
                setWatchData(arr.data)

            } catch (err) {
                console.log(err)
            }
        }

        getData()

    }, [page, pagesize, width])





    return (
        <>
            <Box className='NewLaunchesMain'>

                {
                    watchData.map((e) => {
                        return (
                            <Box className='NewLaunchesDiv'>
                                <Box className='NewLaunchesImg'>
                                    <img className='NewLaunchesImgTag' src={e.Img_url} alt="" />
                                </Box>

                                <Box className='NewLaunchesText'>
                                    <Box className='NewLaunchesTextFirst'>
                                        <h2 className='NewLaunchesType'>{e.Type}</h2>
                                        <hr />

                                        <h1>{e.Name}</h1>
                                    </Box>

                                    <Box className='NewLaunchesTextSecond'>
                                        <h2 className='NewLaunchesType'>Special Launch Price</h2>

                                        <h3>Rs:-{e.LatestPrice}</h3>

                                        <Box className='btnDiv'>
                                            <button className='btn'>DESCRIPTION</button>
                                            <button className='btn'>FEATURES</button>
                                        </Box>
                                    </Box>

                                    <Box className='NewLaunchesTextThird'>


                                        <Box className='desc'>
                                            <p>{e.Desc}</p>
                                        </Box>

                                        <Box className='btnDiv'>
                                            <button className='btn'>EXPLORE NOW</button>
                                            <button className='btn'>ADD TO CART</button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })
                }


                <button className='newLaunchesarrowbtnLeft' onClick={() => {
                    if (page > 0) {
                        setPage(page - 1)
                    }


                }}><ArrowBackIosIcon /></button>
                <button className='newLaunnchesarrowbtnRight'
                    onClick={() => {

                        if (width < 400) {
                            if (page < 2) {
                                setPage(page + 1)
                            }
                        } else if (width > 400 && width < 800) {
                            if (page < 2) {
                                setPage(page + 1)
                            }
                        } else if (width > 800 && width < 1200) {
                            if (page < 2) {
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
