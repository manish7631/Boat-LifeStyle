import React from 'react'
import "./BrandPromis.css"
export const BrandPromis = () => {
    return (
        <div>

            <div id="Home_main_press_product">

                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    color: "white",
                    fontSize: "20px",
                    paddingTop: "70px"
                }}>
                    <div className='Div_flex'>
                        <div className='Brandimgtag'>
                            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/group_186_3x_4616a7a4-8c24-4065-a237-54e3d574bb94.png?v=1611132367" alt="" />
                        </div>
                        <div className='text'>
                            <h4>Free Shipping</h4>
                        </div>
                    </div>
                    <div className='Div_flex'>
                        <div className='Brandimgtag'>
                            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_3x_50a1233e-95d9-4e18-9e8e-757b545e2c06.png?v=1611132367" alt="" />
                        </div>
                        <div className='text'>
                            <h4>Exclusive Deals</h4>
                        </div>
                    </div>
                    <div className='Div_flex'>
                        <div className='Brandimgtag'>
                            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_2_2x_9d5071e2-154a-4f06-b660-9d0430a18248.png?v=1611132367" alt="" />
                        </div>
                        <div className='text'>
                            <h4>Secure Checkout</h4>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}
