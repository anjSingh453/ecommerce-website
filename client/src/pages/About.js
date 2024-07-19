import React from "react";
import Layout from "../components/Layout/Layout";

const  About =()=>{
    return(
        <Layout title={"About us - Ecommerce app"} >
         <div className="row contactus">
            <div className="col-md-6">
            <img 
             src="/images/aboutus.png"
            alt="contactus"
            style={{width : "90%"}}
             />
            </div>
            
        </div>
        </Layout>
    );
};

export default About;