// import { Link } from 'react';
import Auth from '../../utils/auth';
// import silhouette from '../../images/silhouette.png';
import monocleman from '../../images/monocle.png'; 
import { useState } from 'react';
import {  Nav, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignUpForm';
import LoginForm from './loginForm';
import dayjs from 'dayjs';
import '../../css/Navbar.css';

export default function NavBarComponent () {

  const [showModal, setShowModal] = useState(false);
  const DT = dayjs().format('dddd h:mm a MMMM D, YYYY');
  
  return (
    <header>
      <nav className="navbar navbar-color navbar-expand-lg d-flex justify-content-between">
          <div className="nav">
            <img className="monocle-man-img" src={monocleman} alt="monocle-man"></img>
            <a className="navbar-brand website-title" href="/">le dash</a>
          </div>
          <div className="navbar-brand website-clock" >{DT}</div>
          <ul className="nav">
            <li className="nav-item login-btn">
              {Auth.loggedIn() ? (
                <Nav.Link to='/' onClick={Auth.logout}>Logout</Nav.Link>
                ) : (
                  <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                  )}
            </li>
          </ul>
      </nav>
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* Modal starts here */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='login-signup-modal'>
              <Nav variant='tabs'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </header>
  )
}


