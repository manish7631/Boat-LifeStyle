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

import "./CartBadge.Module.css"
import { Delete } from '@mui/icons-material';
import { Box } from '@mui/system';
import { DltToCart } from '../../../redux/appCart/action';

export const Header = () => {
    const dispatch = useDispatch()
    const cart = useSelector((store) => store.cart)

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
                    <Navbar.Brand href="#home" className='text-light fs-1'><MenuIcon /> </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home" className='text-light fs-1'> bo<span style={{ color: "red" }}>A</span>t</Nav.Link>

                    </Nav>

                    <Nav className='bg-white w-25 rounded-5 d-none d-lg-block ' > <Nav.Link href="#home" className='text-black px-0   '><SearchIcon /> <Input placeholder='Search...' />   </Nav.Link></Nav>

                    <Nav>

                        <Nav.Link href="#home" className='text-light fs-1 me-2'><PersonIcon /> </Nav.Link>
                        <Nav.Link href="#features" className='text-light fs-1 me-3'>  <Badge badgeContent={9} color="primary">
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
                        <Nav.Link href="#home" className='text-black'><SearchIcon /> <Input placeholder='Search...' />   </Nav.Link></Nav>
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
                        }} onClick={handleClose} width={'50px'} height={'50px'} src="https://www.citypng.com/public/uploads/small/31631915371lyniu2zkjrlmbmhkqxc9kvtfx68cnz2xlt2rjuj76epxi2rwewm7g83rnuzcvyqnedbb3dxjrxiqtvtbdegg7gqjqanaebkz3zb4.png" alt="" />
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
                            <button>Pay Now</button>
                            <h2 id='total'>Total:{price}</h2>
                        </Box>




                    </div> : null}
                </Menu>
            </Navbar>
        </div>
    )
}
