import React from "react";
import { Layout } from "../components/layout/layout";
import { About } from "../components/about/about";
import { ProductMain } from "../components/product-main/product-main";
import '../index.css'

export const AboutPage = () => {
    return(
        <>
        <Layout>
        {/* <ProductMain/> */}
        <About/>
        <h1>About page</h1>
        </Layout>
        </>
    )
}