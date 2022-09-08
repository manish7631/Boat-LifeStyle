import React from 'react'
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
import { useSelector } from 'react-redux';
export const Header = () => {

    const count = useSelector((store) => store.count)

    console.log("count", count)
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

                        <Nav.Link href="#pricing" className='text-light fs-1 me-1'>

                            <Badge badgeContent={count > 0 ? count : "0"} color="primary">
                                <ShoppingCartIcon />
                            </Badge> </Nav.Link>
                    </Nav>


                </Container>

                <Container className='p-1'>
                    <Nav className='bg-white w-100 h-25 rounded-5 d-sm-block d-lg-none' >
                        <Nav.Link href="#home" className='text-black'><SearchIcon /> <Input placeholder='Search...' />   </Nav.Link></Nav>
                </Container>

            </Navbar>
        </div>
    )
}
