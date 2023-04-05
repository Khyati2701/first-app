import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>ReactJS</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
            <Link className='nav-link' to='/'>Home</Link>
              {/* <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink> */}
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/about'>About us</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" to='/ecmascript'>EcmaScript</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" to='/reactrender'>ReactRender</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className="nav-link" to='/reactjsx'>ReactJSX</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/examples'>Examples</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>EcmaScript</MDBDropdownItem>
                  <MDBDropdownItem link>ReactRender</MDBDropdownItem>
                  <MDBDropdownItem link>ReactJSX</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            {/* <input type='' className='' placeholder='' aria-label='' /> */}
            <MDBBtn color='primary'>Logout</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}