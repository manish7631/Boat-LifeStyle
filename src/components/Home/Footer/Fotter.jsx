import React from 'react'
import styles from "./fotter.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Fotter = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.fotter_main}>
          <div className={styles.first_div}>
            <div>
              <h1>bo <span style={{
                color: "red",
              }}>A</span> t</h1>
              <p>Subscribe to email alerts. We promise not to span your inbox.</p>
            </div>
            <div className={styles.email_div}>
              <input className={styles.input1} type="text" placeholder='Email Address' />
              <button className={styles.btn}>SUBSCRIBE</button>
            </div>
            <div className={styles.SocialDiv}>
              <div>    <FacebookIcon /></div>
              <div>  <TwitterIcon /></div>
              <div> <InstagramIcon /></div>
              <div>  <YouTubeIcon /></div>
              <div>  <LinkedInIcon /></div>

            </div>
          </div>
          <div style={{
            paddingLeft: "15px"
          }} className={styles.first_div} >
            <h3>SHOP</h3>
            <p>True Wireless Earbuds</p>
            <p>Wireless Headphones</p>
            <p>Wired Headphones</p>
            <p>Wireless Speakers</p>
            <p>Home Audio</p>
            <p>Mobile Accessories</p>
            <p>Smart Watches</p>
            <p>TRebel</p>
            <p>Misfit</p>
            <p>Gift Card</p>
            <p>Rock In India</p>
            <p>Earn Rs.100</p>

          </div>
          <div style={{
            paddingLeft: "15px"
          }} className={styles.first_div}>
            <h3>HELP</h3>
            <p>Track Your Order</p>
            <p>Warranty & Support</p>
            <p>Return Policy</p>
            <p>Service Centers</p>
            <p>Bulk Orders</p>
            <p>FAQs</p>
            <p>Why Buy Direct</p>
          </div>
          <div style={{
            paddingLeft: "15px"
          }} className={styles.first_div}>
            <h3>COMPANY</h3>
            <p>About boAt</p>
            <p>News</p>
            <p>Read Our Blog</p>
            <p>Careers</p>
            <p>Security</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Investor Relations</p>
          </div>


        </div>

        <div className={styles.last}>
          <div className={styles.pay}>
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter_payment_icn_2_900x_aff68517-98f4-4a82-9aee-2405cea66251_350x.png?v=1650262054" alt="" />
          </div>
          <div className={styles.app}>
            <p>DOWNLOAD THE APP</p>
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293" alt="" />
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293" alt="" />
          </div>
        </div>
        <p>© 2022 Imagine Marketing Limited. All Rights Reserved.</p>

      </div>
    </>
  )
}
