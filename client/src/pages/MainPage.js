
import React from "react";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Card } from "../components/cards/card";
import '../index.css'

const ProductArray = [
  {
    id:1,
  name: 'nike',
  description: 'Lorem insput',
  price: '250usd'
  },
  {
    id:2,
  name: 'adidas',
  description: 'Lorem insput',
  price: '1150usd'
  },
  {
    id:3,
  name: 'puma',
  description: 'Lorem insput',
  price: '1520usd'
  },
  {
    id:4,
  name: 'adidas',
  description: 'Lorem insput',
  price: '223usd'
  },
  {
    id:5,
  name: 'puma',
  description: 'Lorem insput',
  price: '132usd'
  },
  {
    id:6,
  name: 'adidas',
  description: 'Lorem insput',
  price: '321usd'
  },
  {
    id:7,
  name: 'puma',
  description: 'Lorem insput',
  price: '150usd'
  },
  {
    id:8,
  name: 'nike',
  description: 'Lorem insput',
  price: '150usd'
  },
  {
    id:9,
  name: 'adidas',
  description: 'Lorem insput',
  price: '150usd'
  },
  {
    id:10,
  name: 'puma',
  description: 'Lorem insput',
  price: '150usd'
  },

]


export const MainPage = () => {




    return(
        <>
          <Header></Header>
          <Card products={ProductArray}/>
            <h1>MainPage</h1>
          <Footer></Footer>
            
        </>
    )
}