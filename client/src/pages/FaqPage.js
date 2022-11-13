import React from "react";
import { Faqs } from "../components/faqs-section/faqs";
import { Layout } from "../components/layout/layout";
import '../index.css'

export const FaqsPage = () => {
    return(
        <>
       <Layout>
        <Faqs/>
        </Layout>
        </>
    )
}