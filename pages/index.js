import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header/'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import { useState } from "react"

export default function Home() {

  const [itemOne, setItemOne] = useState(0);

  // array
  const [itemTwo, setItemTwo] = useState([])

  // object 
  const [position, setPosition] = useState({
    x: 0,
    y:0
  })


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main className={`${styles.main}`}>
        <h1>Home</h1>

        <Button/>
        <Button title="click me" color="var(--purple)"/>
        
        <button onClick={() => {
          setItemOne(itemOne + 1);
          console.log(itemOne);
        }}>Button 1 - Number</button>
        
        <button onClick={() =>{
          // ... --> spread operator, keep whats in the array and add on to it
          setItemTwo([...itemTwo, "testing"])
          console.log(itemTwo)
        }}>Button 2 - Array</button>

        <div 
          onPointerMove={e => {
            setPosition ({
              x: e.clientX,
              y: e.clientY
            });
          }}
          style={{
            position: 'relative',
            width: '100vw',
            height: '50vh', 
          }}
        >
          <div
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: 0,
            top: -450,
            width: 20,
            height: 20,
          }}
          />
        </div>

      </main>
      <Footer/>
    </>
  )
}