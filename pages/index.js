import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Table, Icon } from 'semantic-ui-react'

import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Home = () => {

  const [casesAIXP, setCasesAIXP] = useState(0);
  const [casesAIXPAuto, setCasesAIXPAuto] = useState(0);
  const [suitesAIXP, setSuitesAIXP] = useState(0);
  const [casesQD, setCasesQD] = useState(0);
  const [suitesQD, setSuitesQD] = useState(0);
  const [casesQA, setCasesQA] = useState(0);
  const [suitesQA, setSuitesQA] = useState(0);
  const [casesQC, setCasesQC] = useState(0);
  const [suitesQC, setSuitesQC] = useState(0);
  const [casesQP, setCasesQP] = useState(0);
  const [suitesQP, setSuitesQP] = useState(0);
  const [casesQDAuto, setCasesQDAuto] = useState(0);
  const [casesQAAuto, setCasesQAAuto] = useState(0);
  const [casesQCAuto, setCasesQCAuto] = useState(0);
  const [casesQPAuto, setCasesQPAuto] = useState(0);

  useEffect(() => {
    // ✅ Works


    getCaseAIXP() 
    getCaseQD()
    getCaseQA()
    getCaseQC()
    getCaseQP()
    });

    async function getCaseAIXP() {
      try {
        const response = await fetch('https://api.qase.io/v1/case/AIXP?automation=automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
          },
        })
        const res = await response.json();
        setCasesAIXP(res.result.total);
        setCasesAIXPAuto(res.result.filtered);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await fetch('https://api.qase.io/v1/suite/AIXP?limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setSuitesAIXP(res.result.total)
      } catch (err) {
        console.log(err);
      }
    }


    async function getCaseQD() {
      try {
        const response = await fetch('https://api.qase.io/v1/case/QD?automation=automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesQD(res.result.total);
        setCasesQDAuto(res.result.filtered);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await fetch('https://api.qase.io/v1/suite/QD?limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setSuitesQD(res.result.total)
      } catch (err) {
        console.log(err);
      }
    }

    async function getCaseQA() {
      try {
        const response = await fetch('https://api.qase.io/v1/case/QA?automation=automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesQA(res.result.total);
        setCasesQAAuto(res.result.filtered);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await fetch('https://api.qase.io/v1/suite/QA?limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setSuitesQA(res.result.total)
      } catch (err) {
        console.log(err);
      }
    }

    async function getCaseQC() {
      try {
        const response = await fetch('https://api.qase.io/v1/case/QC?automation=automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesQC(res.result.total);
        setCasesQCAuto(res.result.filtered);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await fetch('https://api.qase.io/v1/suite/QC?limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setSuitesQC(res.result.total)
      } catch (err) {
        console.log(err);
      }
    }

    async function getCaseQP() {
      try {
        const response = await fetch('https://api.qase.io/v1/case/QP?automation=automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesQP(res.result.total);
        setCasesQPAuto(res.result.filtered);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await fetch('https://api.qase.io/v1/suite/QP?limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setSuitesQP(res.result.total)
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <div>
      <Head>
        <title>QASE Test Case Log</title>
      </Head>
      <br/>
        <Header as='h1' textAlign='center' color="brown">QASE Test Case Log </Header>


        <br/><br/>
        <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>AIXP</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Test Suite Total</Table.Cell>
        <Table.Cell>{suitesAIXP}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesAIXP}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesAIXPAuto}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <br/>

  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Qore Data</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Test Suite Total</Table.Cell>
        <Table.Cell>{suitesQD}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesQD}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesQDAuto}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Qore App</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Test Suite Total</Table.Cell>
        <Table.Cell>{suitesQA}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesQA}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesQAAuto}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Qore Console</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Test Suite Total</Table.Cell>
        <Table.Cell>{suitesQC}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesQC}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesQCAuto}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Qore Pipeline</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Test Suite Total</Table.Cell>
        <Table.Cell>{suitesQP}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesQP}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesQPAuto}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    </div>
  )
}

export default Home;

