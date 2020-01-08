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
    <Link to='/app/dashboard'>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon style={{color: "#ffff"}}/>
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
    </Link>
    <Link to='/app/sacco'>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon style={{color: "#ffff"}}/>
        </ListItemIcon>
        <ListItemText primary='Sacco' />
      </ListItem>
    </Link>
    <Link to='/app/riders'>
      <ListItem button>
        <ListItemIcon>
          <Person style={{color: "#ffff"}}/>
        </ListItemIcon >
        <ListItemText primary='Riders' />
      </ListItem>
    </Link>
    <Link to='/app/sms'>
      <ListItem button>
        <ListItemIcon>
          <MailIcon style={{color: "#ffff"}} />
        </ListItemIcon >
        <ListItemText primary='Messages' />
      </ListItem>
    </Link>
  </div>
);

export default mainListItems;