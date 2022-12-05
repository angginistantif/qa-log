import { Input, Menu, Segment, Dropdown } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';



function MenuExamplePointing ({ children, href })  {
    const [activeItem,setActiveItem] = useState("Dashboard");

      const router = useRouter()


  const gotoMainPage = (e, { name }) => {
    e.preventDefault()
    router.push("/")
    setActiveItem(name)}

    const gotoQorePage = (e, { name }) => {
    e.preventDefault()
    router.push("/QORE/")
    setActiveItem(name)}

    const gotoQoreAutomation = (e, { name }) => {
        e.preventDefault()
        router.push("/QORE/automation")
        setActiveItem(name)}

    const gotoAIXPPage = (e, { name }) => {
        e.preventDefault()
        router.push("/AIXP")
        setActiveItem(name)
    }

    const gotoAIXPAutomation = (e, { name }) => {
        e.preventDefault()
        router.push("/AIXP/automation")
        setActiveItem(name)
    }

  

    return (
      <div>
        <Menu>
        <Menu.Item
          name='Dashboard'
          active={activeItem === 'Dashboard'}
          content='Dashboard'
          onClick={gotoMainPage}
        />

        
        <Dropdown item text='Qore'>
            <Dropdown.Menu>
                <Dropdown.Item name='QORE' onClick={gotoQorePage}>Dashboard</Dropdown.Item>
                <Dropdown.Item name='QORE' onClick={gotoQoreAutomation}>Automation</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text='AIXP'>
            <Dropdown.Menu>
                <Dropdown.Item name='AIXP' onClick={gotoAIXPPage}>Dashboard</Dropdown.Item>
                <Dropdown.Item name='AIXP' onClick={gotoAIXPAutomation}>Automation</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        
      </Menu>
      </div>
    )
  }


export {MenuExamplePointing};