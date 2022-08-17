import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Card } from "@mui/material";

export default class PauseOnHover extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            beforeChange: (current, next) => this.setState({ activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current })
        };
        return (
            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: 300,
                        sm: 400,
                        md: 420,
                        lg: 420,
                        xl: 420

                    },

                }}
            >
                <Button onClick={this.previous} sx={
                    {
                        border: "1px solid red",
                        position: "absolute",
                        width: "40px",
                        height: "40px",
                        top: {
                            xs: "20%",
                            sm: "35%",
                            md: "40%",
                            lg: "45%",
                            xl: "50%"
                        },
                        left: "6%",
                        zIndex: "1",
                        borderRadius: "45%",
                        padding: "5px",
                        backgroundColor: "transparent",





                    }
                }>  <ArrowBackIosIcon /></Button>

                <Button onClick={this.next} sx={
                    {
                        border: "1px solid red",
                        position: "absolute",
                        width: "40px",
                        height: "40px",
                        top: {
                            xs: "20%",
                            sm: "35%",
                            md: "40%",
                            lg: "45%",
                            xl: "45%"
                        },
                        left: "90%",
                        zIndex: "1",
                        borderRadius: "45%",
                        padding: "5px",
                        backgroundColor: "transparent",




                    }
                }>  <ArrowForwardIosIcon /></Button>



                <Slider ref={c => (this.slider = c)} {...settings}>

                    <Card key={1}>

                        <img style={{
                            width: "100%",
                            height: {
                                xs: 300,
                                sm: 400,
                                md: 420,
                                lg: 420,
                                xl: 420

                            },
                        }} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Sail_with_boAt_WEB_1400x.jpg?v=1652272257" alt="" />

                    </Card>
                    <Card key={2}>
                        <img style={{
                            width: "100%",
                            height: {
                                xs: 300,
                                sm: 400,
                                md: 420,
                                lg: 420,
                                xl: 420

                            },
                        }} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/STONE-1450WEB_48633fa7-b4fb-46d3-b1b2-f90a8bff6df4_1400x.jpg?v=1652272312" alt="" />
                    </Card>
                    <Card key={3}>
                        <img style={{
                            width: "100%",
                            height: {
                                xs: 300,
                                sm: 400,
                                md: 420,
                                lg: 420,
                                xl: 420

                            },
                        }} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Watch_xtend_wbann_1_1400x.jpg?v=1652272357" alt="" />
                    </Card>
                    <Card key={4}>
                        <img style={{
                            width: "100%",
                            height: {
                                xs: 300,
                                sm: 400,
                                md: 420,
                                lg: 420,
                                xl: 420

                            },
                        }} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WhatsApp_Image_2022-04-29_at_11.32.28_AM_1400x.jpg?v=1652272398" alt="" />
                    </Card>

                </Slider>
            </Box>
        );
    }
}


