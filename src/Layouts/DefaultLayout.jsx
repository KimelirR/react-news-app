import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider";
import axiosClient from "../axios-client.js";
import {useEffect} from "react";
import avatar4 from '../assets/images/portrait/small/avatar-s-4.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";


export default function DefaultLayout() {
  const {user, token, setUser, setToken, notification} = useStateContext();

  if (!token) {
    return <Navigate to="/login"/>
  }

  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setUser(data)
      })
  }, [])

  return (

<div className="me-3 ms-3">
      
<Navbar bg="primary" expand={false} fixed="top" className="mb-5">
        <Container fluid>
          <Navbar.Brand href="#">News Aggregator</Navbar.Brand>
          
          {notification && (
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                ></ToastContainer>
              )}

          <NavDropdown title="Profile" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">
                    <span className="avatar avatar-online">
                    <img src={avatar4} alt="avatar" />
                    <span className="user-name text-bold-700 ml-1">
                      {user.name} &nbsp; &nbsp;
                    </span>
                  </span>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  
                  <NavDropdown.Item href="#action4">
                      <i className="ft-user" /> Edit Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  <Link  onClick={onLogout} className="bg-outline-danger"><i className="ft-power" /> Logout</Link> 
                  </NavDropdown.Item>
                </NavDropdown>


          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Sidear Item1</Nav.Link>
                <Nav.Link href="#action2">Sidebar Item 2</Nav.Link>
               
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

        </Container>
      </Navbar>
      <br />

      <Outlet />
      </div>
  );
}
