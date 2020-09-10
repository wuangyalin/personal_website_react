import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Body from '../components/admin/Body';
import { Button } from 'react-bootstrap';



// import { Redirect } from "react-router-dom";
import * as AuthService from "../services/auth.service";


const AdminUser = () => {
  const history = useHistory();

  const emptyUser = {
    username: '',
    email: '',
    isAdmin: false,
  }

  const [userInfo, setUserInfo] = useState(emptyUser);

  useEffect(() => {
    const fetchData = async () => {
      const userDetail = await AuthService.getCurrentUser();
      if (userDetail && userDetail.roles.includes('ROLE_ADMIN')) {
        setUserInfo({
          username: userDetail.username,
          email: userDetail.email,
          isAdmin: true,
        });
      }
    }
    fetchData();
  }, []);

  const logout = async () => {
    const loggedout = await AuthService.logout();
    if (loggedout) {
      history.push('/login');
    }
  };

  return (
    userInfo.isAdmin ?
      <React.Fragment>

        <div className="container">
          <Button className="float-right" variant="secondary" onClick={logout}>Logout</Button>
          <Body />
        </div>
      </React.Fragment>
      :
      <React.Fragment>
        <div className="container">
        <Button className="float-right" variant="secondary" onClick={logout}>Logout</Button>
          <header className="jumbotron">
            <h3>You are not admin.</h3>
          </header>
          <a href='/'>Go back to homepage</a>
        </div>
      </React.Fragment>


  );
}

export default AdminUser;