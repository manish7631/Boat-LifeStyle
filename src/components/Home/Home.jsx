import React, { useState } from 'react'
import PauseOnHover from './Slider/Slider'
import { Box, Typography } from "@mui/material";
import { Button } from "../Button/Button";

import { SmartWatch } from './HomePageProduct/TopSeller/SmartWatch';
import { TopPick } from './HomePageProduct/TopPick';
export const Home = () => {

    const [theme, setTheme] = useState("red")
    const [show, setShow] = useState(true)

    return (
        <Box sx={{
            width: "100%",
            height: "1400px",
            border: "1px solid blue",
            backgroundColor: "#0d0d0e"
        }}>
            <PauseOnHover />

            <Box className='top-seller w-100 h-50 border border-primary'>
                <Box>
                    <Typography variant="h2" className='text-light'>
                        Top Sellers
                    </Typography>

                </Box>
                <Box className="Home_main_first_heading_btn">

                    <Button
                        theme={theme}
                        onClick={() => {
                            setTheme(theme === "red" ? "red" : "white")
                            setShow(true)
                        }}
                    >Smart Watch</Button>
                    <Button
                        theme={theme}
                        onClick={() => {
                            setTheme(theme === "red" ? "red" : "white")
                            setShow(false)
                        }}
                    >Top Picks</Button>
                </Box>
                {show ? <SmartWatch /> : <TopPick />}
            </Box>


        </Box>
    )
}
