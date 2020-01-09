import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DataShops from './shops.json';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
    margin: '1%',
    marginLeft: '75%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function Shop({ type }) {
  const classes = useStyles();
  const [shopsCategories, setShopsCategories] = useState(null);

  useEffect(() => {
    const stores = DataShops && DataShops.filter((store) => store.category == type);
    setShopsCategories(stores);
  }, []);

  return (
    <div>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search...' }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <br />
      <hr />
      <div className="container">
        <div className="row" style={{ marginLeft: '30px !important' }}>
          {shopsCategories
            && shopsCategories.map((item) => {
              const {
                name, location, description, image,
              } = item;
              return (
                <div className="col-sm-3 listing">
                  <div className="col-item">
                    <div
                      className="photo"
                      style={{ background: `url(${image})` }}
                    />
                    <div className="info">
                      <div className="row">
                        <div className="price col-md-6">
                          <h5>{name}</h5>
                          <h5 className="price-text-color">{` ${location}`}</h5>
                        </div>
                      </div>
                      <div className="separator clear-left">
                        <p className="btn-add">
                          <i className="fa fa-shopping-cart" />
                          <a href="#" className="hidden-sm">
                            View products
                          </a>
                        </p>
                        <p className="btn-details">
                          <i className="fa fa-list" />
                          <a href="#" className="hidden-sm">
                            {description}
                          </a>
                        </p>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
