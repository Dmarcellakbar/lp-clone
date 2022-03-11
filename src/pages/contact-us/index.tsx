import * as React from "react"
import PageWrapper from "../../components/PageWrapper";
import { ContactUs } from "../../components/sections/common";


// markup
const ContactUsPage = () => {
  return (
    <PageWrapper footerDark={false}>
        {/* <Hero title="TAMING THE CRYPTO MARKET">
            Helping you navigate the digital market. <br/>
            One stop solution for Digital Asset
        </Hero> */}
        <ContactUs
            title={'Contact Us, '}
            titleSize={{
                sm: '20px',
                lg: '50px'
            }}
        />
    </PageWrapper>
  )
}

export default ContactUsPage
