import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { getData } from '../../redux/Products/action'
import { v4 as uuidv4 } from 'uuid';
import { Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AddToCart } from '../../redux/appCart/action';
import AddIcon from '@mui/icons-material/Add';
import "./Product.Module.css"

export const Product = () => {

    const data = useSelector((store) => store.AppReducer.data)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const loaction = useLocation()

    useEffect(() => {
        if (data.length === 0 || loaction.search) {

            let getParams = {
                params: {
                    Category: searchParams.getAll('category'),

                }
            }
            console.log(getParams)
            dispatch(getData(getParams))
        }
    }, [loaction.search])



    console.log("data", data)



    return (
        <>
            <Box id='mainProduct'>
                {
                    data.map((e) => {
                        return (
                            <>
                                <Link to={`/product/${e.id}`}>
                                    <Box className='Card'>
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
                                </Link>
                            </>
                        )
                    })
                }
            </Box>


        </>
    )
}
