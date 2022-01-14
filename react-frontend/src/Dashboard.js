import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import {Image, Button, Row} from "react-bootstrap";
import {Router, Link } from 'react-router-dom';
import history from './history';
import PostList from './Post/PostList';
 
function Dashboard(props) {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    history.push('/');
    window.location.reload(false);
    //Router.push("/login");
  }
 
  return (
    <div>
      Welcome {user}!<br /><br />
      {/* <input type="button" onClick={handleLogout} value="Logout" /> */}
      <Button variant = "secondary" onClick={handleLogout}>
        Log out
      </Button>
      <Link to='/editor'>
          <Button variant="primary">  
          New Post
          </Button>
      </Link>
      <PostList></PostList>
    </div>
    
  );
}
 
export default Dashboard;