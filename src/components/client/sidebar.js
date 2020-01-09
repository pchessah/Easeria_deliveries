import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import Person from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Link } from 'react-router-dom';

const mainListItems = (
  <div className="sideText">
    <Link to='/app/addProduct'>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon style={{color: "#ffff"}}/>
        </ListItemIcon>
        <ListItemText primary='Add product' />
      </ListItem>
    </Link>
    <Link to='/app/editProduct'>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon style={{color: "#ffff"}}/>
        </ListItemIcon>
        <ListItemText primary='Edit product' />
      </ListItem>
    </Link>
    <Link to='/app/'>
      <ListItem button>
        <ListItemIcon>
          <Person style={{color: "#ffff"}}/>
        </ListItemIcon >
        <ListItemText primary='Delete product' />
      </ListItem>
    </Link>
    <Link to='/app/contact'>
      <ListItem button>
        <ListItemIcon>
          <MailIcon style={{color: "#ffff"}} />
        </ListItemIcon >
        <ListItemText primary='Contact customer' />
      </ListItem>
    </Link>
    <Link to='/app/contact'>
      <ListItem button>
        <ListItemIcon>
          <MailIcon style={{color: "#ffff"}} />
        </ListItemIcon >
        <ListItemText primary='Contact Admin' />
      </ListItem>
    </Link>
    <Link to='/app/contact'>
      <ListItem button>
        <ListItemIcon>
          <MailIcon style={{color: "#ffff"}} />
        </ListItemIcon >
        <ListItemText primary='Contact Courier' />
      </ListItem>
    </Link>
  </div>
);

export default mainListItems;