import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Table, Icon } from 'semantic-ui-react'
import {MenuExamplePointing}  from '../../component/navbar'

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';


const Home = () => {

    const router = useRouter()
    const id = router.query

 

  return (
    <div>
      <Head>
        <title>Automation Test Case Dashboard</title>
      </Head>
      <MenuExamplePointing/>
      <br/>
      <Header as='h1' textAlign='center' color="blue"> {id.product.toUpperCase()} Dashboard for Automation Test </Header>


    
    </div>
  )
}

export default Home;

