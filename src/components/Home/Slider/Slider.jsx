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
            <Box style={{
                width: "100%",
                height: "auto",
                alignItems: "center",

            }}>
                <Box style={{
                    width: "100%",
                    height: "auto",
                    position: "relative",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    <Button onClick={this.previous} style={
                        {

                            position: "absolute",
                            width: "40px",
                            height: "40px",
                            top: "50%",
                            left: "1%",
                            zIndex: "1",
                            borderRadius: "50%",
                            backgroundColor: "transparent",
                            marginLeft: "5%",
                            marginTop: "12%"
                        }
                    }>  <ArrowBackIosIcon /></Button>

                    <Button onClick={this.next} style={
                        {

                            position: "absolute",
                            width: "40px",
                            height: "40px",
                            top: "60%",
                            left: "30%",
                            zIndex: "1",
                            borderRadius: "50%",
                            backgroundColor: "transparent",
                            marginLeft: "55%",
                            marginTop: "12%"
                        }
                    }>  <ArrowForwardIosIcon /></Button>
                </Box>



                <Slider ref={c => (this.slider = c)} {...settings}>

                    <Card key={1}>

                        <img style={{
                            height: "auto",
                            width: "100%",
                            verticalAlign: "middle"

                        }} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Sail_with_boAt_WEB_1400x.jpg?v=1652272257" alt="" />

                    </Card>
                    <Card key={2}>
                        <img style={{
                            height: "auto",
                            width: "100%",
                            verticalAlign: "middle"
                        }} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/STONE-1450WEB_48633fa7-b4fb-46d3-b1b2-f90a8bff6df4_1400x.jpg?v=1652272312" alt="" />
                    </Card>
                    <Card key={3}>
                        <img style={{
                            height: "auto",
                            maxWidth: "100%",
                            verticalAlign: "middle"
                        }} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Watch_xtend_wbann_1_1400x.jpg?v=1652272357" alt="" />
                    </Card>
                    <Card key={4}>
                        <img style={{
                            height: "auto",
                            width: "100%",
                            verticalAlign: "middle"
                        }} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WhatsApp_Image_2022-04-29_at_11.32.28_AM_1400x.jpg?v=1652272398" alt="" />
                    </Card>

                </Slider>
            </Box>
        );
    }
}


