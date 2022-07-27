import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import Card from './Card';
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Dashboard from './Dashboard';


function App() {
  return (
    <Switch>
    <div  className="Container-fluid bgColors">
      <div className='row'>
        <Navbar  style={{background:"yellow",}} expand='lg'>
        <Container>
          <Navbar.Brand href="Motivational Website">Motivational Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse>
            <Nav  style={{marginLeft:"80%"}}className='me-auto'>
              <Nav.Link href="/">Home/Posts
                </Nav.Link>
                <Nav.Link href="/Dashboard">Dashboard
                </Nav.Link>
                <Nav.Link href="/">Signout
                </Nav.Link>
                </Nav>
          </Navbar.Collapse>
           </Container>
           </Navbar>
           <Route path="/" exact>
           <div className='row'>
          <Carousel/>
          </div>
          <div className='row mt-3'>
          <Card/>
          </div>
          </Route>
          <Route path="/Dashboard" exact>
            <Dashboard/>
          </Route>
          </div>
           </div>
          </Switch>
  )
           }

export default App;
