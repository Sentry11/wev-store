import React from "react"
import {Routes,Route} from 'react-router-dom'
import { AuthPage } from "./pages/AuthPage"
import { FaqsPage } from "./pages/FaqPage"
import { AboutPage } from "./pages/AboutPage"
import { MainPage } from "./pages/MainPage"
import { BlogPage } from "./pages/BlogPage"
import { MediaPage } from "./pages/MediaPage"
import { SizePage } from "./pages/SizePage"


export const useRoutes = isAuthenticated =>{

    if(isAuthenticated){
        return(
            <Routes>

                <Route exact path = "/" element = { <MainPage/> }     />

                <Route exact path = "about-page" element = {<AboutPage/>} /> 
                    
                <Route exact path = "faqs-page" element = {  <FaqsPage/>}  /> 
                
                <Route exact path = "media-page" element = {  <MediaPage/>}  /> 

                <Route exact path = "size-page" element = {  <SizePage/>}  />

                <Route exact path = "blog-page" element = {  <BlogPage/>}  />  



            </Routes>
        )
    }


    return(
        <Routes>
            <Route path = "/" element = {<AuthPage/>} />
                
        </Routes>
    )

}