import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Input from '@mui/material/Input';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import "./CartBadge.Module.css"
import { Delete } from '@mui/icons-material';
import { Box } from '@mui/system';
import { DltToCart } from '../../../redux/appCart/action';
import { Drawer, Typography } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';


const ProductData = [
    {
        "id": "1",
        "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_1196x.png?v=1612338251",
        "category": "airdopes"
    },
    {
        "id": "2",
        "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_540x.png?v=1612338387",
        "category": "headphone"
    },
    {
        "id": "3",
        "img": "//cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_1096x.jpg?v=1648546494",
        "category": "smart watch"
    },
    {
        "id": "4",
        "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_540x.png?v=1612338436",
        "category": "stone speaker"
    },
    {
        "id": "5",
        "img": "//cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_540x.png?v=1612338356",
        "category": "earpnone"
    },
    {
        "id": "6",
        "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_300x.png?v=1632715015",
        "category": "gaming"
    },
    {
        "id": "7",
        "img": "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_540x.png?v=1622452897",
        "category": "home audio"
    }
]


export const Header = () => {



    const [searchParams, setSearchParams] = useSearchParams()

    const urlCategory = searchParams.getAll('category')

    const [urlcategory, setUrlategory] = useState(urlCategory || [])

    const handleCheckbox = (e) => {
        const option = e.category
        //  console.log("category", option)

        let newCategory = [...urlcategory]
        if (urlcategory.includes(option)) {
            newCategory.splice(newCategory.indexOf(option), 1)
        } else {
            newCategory.push(option)
        }

        setUrlategory(option)
    }


    useEffect(() => {
        if (urlcategory) {
            let params = {}
            urlcategory && (params.category = urlcategory)
            setSearchParams(params)
        }
    }, [urlcategory, setSearchParams])

    const [openDrawer, setOpenDrawer] = useState(false)
    const dispatch = useDispatch()
    const cart = useSelector((store) => store.reducer.cart)

    let [price, setPrice] = useState(0)


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    const total = () => {
        let price = 0;
        cart.map((ele, k) => {
            price = ele.LatestPrice + price
        })
        setPrice(price)
    }


    useEffect(() => {
        total()
    }, [total])

    return (
        <div>
            <Navbar bg="dark" variant="dark" className='d-flex flex-wrap'>
                <Container className='p-2'>
                    <Navbar.Brand onClick={() => setOpenDrawer(true)} className='text-light fs-1'><MenuIcon /> </Navbar.Brand>
                    <Nav>
                        <Link to='/' style={{
                            textDecoration: "none"
                        }} className='text-light fs-1'>   bo<span style={{ color: "red" }}>A</span>t</Link>

                    </Nav>

                    <Nav className='bg-white w-25 rounded-5 d-none d-lg-block ' > <Nav.Link href="#home" className='text-black px-0   '><SearchIcon /> <Input placeholder='Search...' />   </Nav.Link></Nav>

                    <Nav>

                        <Nav.Link className='text-light fs-1 me-2'><PersonIcon /> </Nav.Link>
                        <Nav.Link className='text-light fs-1 me-3'>  <Badge badgeContent={9} color="primary">
                            <EmailIcon />
                        </Badge> </Nav.Link>

                        <Nav.Link className='text-light fs-1 me-1'>

                            <Badge badgeContent={cart.length > 0 ? cart.length : "0"} color="primary" id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                <ShoppingCartIcon />
                            </Badge> </Nav.Link>
                    </Nav>


                </Container>

                <Container className='p-1'>
                    <Nav className='bg-white w-100 h-25 rounded-5 d-sm-block d-lg-none' >
                        <Nav.Link className='text-black'><SearchIcon /> <Input placeholder='Search...' />   </Nav.Link></Nav>
                </Container>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {cart.length ? <div style={{
                        width: "24rem",
                        height: "auto"

                    }}>
                        <img style={{
                            cursor: "pointer"
                        }} onClick={handleClose} width={'20px'} height={'20px'} src="https://www.citypng.com/public/uploads/small/31631915371lyniu2zkjrlmbmhkqxc9kvtfx68cnz2xlt2rjuj76epxi2rwewm7g83rnuzcvyqnedbb3dxjrxiqtvtbdegg7gqjqanaebkz3zb4.png" alt="" />
                        {
                            cart.map((e) => {
                                return (
                                    <div className='allTextHeader'>

                                        <div>
                                            <img style={{ width: "5rem", height: "5rem" }} src={e.Img_url} alt="" />

                                        </div>

                                        <div>
                                            <h5>{e.Name}</h5>
                                            <p>Rs:- {e.LatestPrice}</p>
                                            <p className='actual'>Rs:- {e.ActualPrice}</p>

                                        </div>
                                        <div style={{
                                            cursor: "pointer"
                                        }} onClick={() => {
                                            dispatch(DltToCart(e._id))
                                        }}><Delete /></div>
                                        {/* <td className='dlt'><Delete /></td> */}


                                    </div>
                                )
                            })
                        }
                        <Box className="CartLast">
                            <Link to={'/payment'}> <button onClick={handleClose}>Pay Now</button></Link>
                            <h2 id='total'>Total:{price}</h2>
                        </Box>




                    </div> : <div style={{
                        width: "24rem",
                        height: "auto"

                    }}>
                        <img style={{
                            cursor: "pointer"
                        }} onClick={handleClose} width={'20px'} height={'20px'} src="https://www.citypng.com/public/uploads/small/31631915371lyniu2zkjrlmbmhkqxc9kvtfx68cnz2xlt2rjuj76epxi2rwewm7g83rnuzcvyqnedbb3dxjrxiqtvtbdegg7gqjqanaebkz3zb4.png" alt="" />

                        <h2>Your Cart is Empty!</h2></div>}
                </Menu>

                <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
                    <Box p={2} width='350px' textAlign='center' role='presentation'>
                        <Typography variant='h6' component='div'>
                            Side Panel
                        </Typography>

                        {
                            ProductData.map((e) => {
                                return (
                                    <div style={{
                                        width: '300px',
                                        height: "200px",
                                        borderRadius: "10px"
                                    }} onClick={() => {
                                        handleCheckbox(e)
                                    }}     >
                                        <div onClick={() => setOpenDrawer(false)}>
                                            <Link to={`/product`} >

                                                <img style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "10px"

                                                }} src={e.img} alt="" />
                                            </Link>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </Box>
                </Drawer>
            </Navbar>
        </div>
    )
}
