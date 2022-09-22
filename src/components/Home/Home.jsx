import React, { useState } from 'react'
import PauseOnHover from './Slider/Slider'
import { Box, Typography } from "@mui/material";
import { Button } from "../Button/Button";

import { SmartWatch } from './HomePageProduct/TopSeller/SmartWatch';
import { TopPick } from './HomePageProduct/TopPick/TopPick';

import styles from "./Home.module.css"
import { Earbuds } from './HomePageProduct/Trending/Earbuds/Earbuds';
import { Wireless } from './HomePageProduct/Trending/Wierless/Wireless';
import { NewLaunches } from './HomePageProduct/NewLauncheFirst/NewLaunches';
import { Gaming } from './HomePageProduct/Gaming/Gaming';
import { Blog } from './HomePageProduct/Blog/Blog';
import { Actors } from './HomePageProduct/actors/Actors';
import { About } from './HomePageProduct/about/About';
import { ProductPress } from './HomePageProduct/Press/ProductPress';
import { BrandPromis } from './HomePageProduct/Brand/BrandPromis';
import { Fotter } from './Footer/Fotter';

export const Home = () => {

    const [theme, setTheme] = useState("red")
    const [show, setShow] = useState(true)
    const [show1, setShow1] = useState(true)

    return (
        <Box className={styles.main}>
            <PauseOnHover />

            <Box className={styles.topSeller}>
                <Box>
                    <Typography className={styles.heading1}>
                        <h1>  Top Sellers</h1>
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


            {/* ----------------Trending Earphone---------------------- */}

            <Box className={styles.topSeller}>
                <Box>
                    <Typography className={styles.heading1}>
                        <h1>Trending Earphones</h1>
                    </Typography>

                </Box>
                <Box className={styles.Home_main_first_heading_btn_Trending}>

                    <Button
                        theme={theme}
                        onClick={() => {
                            setTheme(theme === "red" ? "red" : "white")
                            setShow1(true)
                        }}
                    >Earbuds</Button>
                    <Button
                        theme={theme}
                        onClick={() => {
                            setTheme(theme === "red" ? "red" : "white")
                            setShow1(false)
                        }}
                    >Wireless</Button>

                    <Button>Wired</Button>
                </Box>
                {show1 ? <Earbuds /> : <Wireless />}
            </Box>

            {/* --------------------------New Launches------------------------- */}
            <Box className={styles.newLaunchesFirst}>
                <Box>
                    <Typography className={styles.heading1}>
                        <h1>New Launches</h1>
                    </Typography>

                </Box>
                <NewLaunches />

            </Box>



            {/* ----------------Gaming---------------------- */}

            <Box className={styles.topSellerGame}>
                <Box>
                    <Typography className={styles.heading1}>
                        <h1>Gaming</h1>
                    </Typography>

                </Box>

                <Gaming />
            </Box>


            {/* ----------------Boat_Blog---------------------- */}

            <Box style={{
                height: "650px"
            }} className={styles.topSellerGame}>
                <Box>
                    <Typography className={styles.heading1}>
                        <h1>Boat Blog</h1>
                    </Typography>

                </Box>

                <Blog />

                <Button>EXPLORE BLOG</Button>
            </Box>
            {/* --------------------------Actors------------------------- */}
            <Box className={styles.newLaunchesFirst}>
                <Actors />

            </Box>

            {/* ----------------About---------------------- */}

            <Box className={styles.topSellerGame}>
                <Box>
                    <Typography className={styles.heading1}>
                        <h1>What They Say About Us</h1>
                    </Typography>

                </Box>

                <About />
            </Box>
            {/* ----------------Press---------------------- */}

            <Box style={{
                height: "400px"
            }} className={styles.topSellerGame}>
                <Box>
                    <Typography className={styles.heading1}>
                        <h1>In the Press</h1>
                    </Typography>

                </Box>

                <ProductPress />
            </Box>

            {/* ----------------Brand---------------------- */}

            <Box style={{
                height: "400px"
            }} className={styles.topSellerGame}>
                <Box>
                    <Typography className={styles.heading1}>
                        <h1>Brand Promise</h1>
                    </Typography>

                </Box>

                <BrandPromis />
            </Box>

            {/* ----------------Footer---------------------- */}

            {/* <Box style={{
                height: "400px"
            }} className={styles.topSellerGame}>
                <Fotter />
            </Box> */}
        </Box>
    )
}
