import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Table, Icon } from 'semantic-ui-react'
import {MenuExamplePointing}  from '../../component/navbar'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios'


const Home = () => {

  const router = useRouter()
  const id = router.query

  return (
    <div>
      <Head>
        <title>QASE Test Case Log</title>
      </Head>
      <MenuExamplePointing/>
      <br/>
      <Header as='h1' textAlign='center' color="brown">{id.product} Test Case Log </Header>
      


       

    </div>
  )
}

export default Home;

