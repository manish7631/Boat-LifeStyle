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


export const Blog = () => {
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
                const arr = await axios.get(`https://babita-boat.herokuapp.com/blog?page=${page}&pagesize=3`)
                setWatchData(arr.data)

            } catch (err) {
                console.log(err)
            }
        }

        getData()

    }, [page, pagesize, width])





    return (
        <>
            <Box className='main'>
                <Box id="Home_main_Blog">


                    {
                        watchData.map((e, i) => {
                            return (
                                <Box style={{
                                    margin: "auto"
                                }} key={uuidv4()} className="Home_main_Blog"  >


                                    <Box className="Home_watch_text_Blog">
                                        <h1>{e.Desc}</h1>


                                    </Box>

                                    <Box className='imgtag'>
                                        <img src={e.Img_url} alt="" />
                                    </Box>





                                </Box>
                            )
                        })
                    }
                </Box>



            </Box>

        </>
    )
}
