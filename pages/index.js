import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'semantic-ui-css/semantic.min.css'
import { Header, Table, Icon } from 'semantic-ui-react'
import {MenuExamplePointing}  from '../component/navbar'

import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Home = () => {

  const [casesAIXP, setCasesAIXP] = useState(0);
  const [casesAIXPAuto, setCasesAIXPAuto] = useState(0);
  const [casesAIXPSkip, setCasesAIXPSkip] = useState(0);

  const [casesQD, setCasesQD] = useState(0);
  const [casesQDAuto, setCasesQDAuto] = useState(0);
  const [casesQDSkip, setCasesQDSkip] = useState(0);

  const [casesQA, setCasesQA] = useState(0);
  const [casesQAAuto, setCasesQAAuto] = useState(0);
  const [casesQASkip, setCasesQASkip] = useState(0);

  const [casesQOA, setCasesQOA] = useState(0);
  const [casesQOASkip, setCasesQOASkip] = useState(0);
  const [casesQOAAuto, setCasesQOAAuto] = useState(0);

  const [casesQC, setCasesQC] = useState(0);
  const [casesQCSkip, setCasesQCSkip] = useState(0);
  const [casesQCAuto, setCasesQCAuto] = useState(0);

  const [casesQP, setCasesQP] = useState(0);
  const [casesQPSkip, setCasesQPSkip] = useState(0);
  const [casesQPAuto, setCasesQPAuto] = useState(0);

  const [casesGR, setCasesGR] = useState(0);
  const [casesGRAuto, setCasesGRAuto] = useState(0);
  const [casesGRSKip, setCasesGRSkip] = useState(0);

  useEffect(() => {
    getCaseAIXP() 
    getCaseQD()
    getCaseQA()
    getCaseQOA()
    getCaseGR()
    getCaseQC()
    getCaseQP() 
    });

    async function getCaseAIXP() {
      try {
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/AIXP?limit=10&offset=0', {
          method: 'GET',
          headers: {
            mode: 'cors',
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
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/AIXP?automation=is-not-automated&limit=10&offset=0', {
          method: 'GET',
          headers: {
            mode: 'cors',
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
          },
        })
        const res = await response.json();
        setCasesAIXPSkip(res.result.filtered)
      } catch (err) {
        console.log(err);
      }
    }

    async function getCaseQD() {
      try {
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/QD?automation=automated&limit=10&offset=0', {
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
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/QD?automation=is-not-automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesQDSkip(res.result.filtered)
      } catch (err) {
        console.log(err);
      }
    }

    async function getCaseQA() {
      try {
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/QA?automation=automated&limit=10&offset=0', {
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
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/QA?automation=is-not-automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesQASkip(res.result.filtered)
      } catch (err) {
        console.log(err);
      }
    }

    async function getCaseQOA() {
      try {
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/QOA?automation=automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesQOA(res.result.total);
        setCasesQOAAuto(res.result.filtered);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/QOA?automation=is-not-automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesQOASkip(res.result.filtered)
      } catch (err) {
        console.log(err);
      }
    }

    async function getCaseGR() {
      try {
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/GR?automation=automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesGR(res.result.total);
        setCasesGRAuto(res.result.filtered);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/GR?automation=is-not-automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesGRSkip(res.result.filtered)
      } catch (err) {
        console.log(err);
      }
    }



    async function getCaseQC() {
      try {
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/QC?automation=automated&limit=10&offset=0', {
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
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/QC?automation=%20is-not-automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesQCSkip(res.result.count)
      } catch (err) {
        console.log(err);
      }
    }

    async function getCaseQP() {
      try {
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/QP?automation=automated&limit=10&offset=0', {
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
        const response = await fetch('https://try.readme.io/https://api.qase.io/v1/case/QP?automation=is-not-automated&limit=10&offset=0', {
          method: 'GET',
          mode: 'cors',
          headers: {
            accept: 'application/json',
            Token: 'ba1c4140e10dc91ff6ae80dc6497f5061cb9608f',
            'Access-Control-Allow-Origin':'*'
          },
        })
        const res = await response.json();
        setCasesQPSkip(res.result.filtered)
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
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesAIXP}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesAIXPAuto}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Cases Skip*</Table.Cell>
        <Table.Cell>{casesAIXPSkip}</Table.Cell>
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
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesQD}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesQDAuto}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Cases Skip*</Table.Cell>
        <Table.Cell>{casesQDSkip}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <br/>

  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Qore App</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesQA}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesQAAuto}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Cases Skip*</Table.Cell>
        <Table.Cell>{casesQASkip}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <br/>

  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Qore Output App</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesQOA}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesQOAAuto}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Cases Skip*</Table.Cell>
        <Table.Cell>{casesQOASkip}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <br/>

  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Qore Project - Ganara</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesGR}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesGRAuto}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Cases Skip*</Table.Cell>
        <Table.Cell>{casesGRSKip}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <br/>

  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Qore Console</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesQC}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesQCAuto}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Skip*</Table.Cell>
        <Table.Cell>{casesQCSkip}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

  <br/>

  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan='2'>Qore Pipeline</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Test Case Total</Table.Cell>
        <Table.Cell>{casesQP}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Automated</Table.Cell>
        <Table.Cell>{casesQPAuto}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Test Case Skip*</Table.Cell>
        <Table.Cell>{casesQPSkip}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    </div>
  )
}

export default Home;

