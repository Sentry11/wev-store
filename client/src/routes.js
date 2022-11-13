import React from "react"
import {Routes,Route} from 'react-router-dom'
import { AuthPage } from "./pages/AuthPage"
import { ExamplePage } from "./pages/ExamplePage"
import { SomeDataPage } from "./pages/SomeDataPage"
import { MainPage } from "./pages/MainPage"

export const useRoutes = isAuthenticated =>{

    if(isAuthenticated){
        return(
            <Routes>

                <Route path = "/" element = { <MainPage/> }    />

                <Route path = "data-page" element = {<SomeDataPage/>}/> 
                    
                <Route path = "example-page" element = {  <ExamplePage/>}  /> 


            </Routes>
        )
    }


    return(
        <Routes>
            <Route path = "/" element = {<AuthPage/>} />
                
        </Routes>
    )

}