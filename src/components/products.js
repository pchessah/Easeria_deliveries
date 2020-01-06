import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Data from "./products.json";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
    margin: "1%",
    marginLeft: "75%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

function Products({ kind }) {
  const classes = useStyles();
  const [shopItems, setShopItems] = useState(null);

  useEffect(() => {
    const items = Data && Data.filter(item => item.category == kind);
    setShopItems(items);
  }, []);

  return (
    <div>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search..."
          inputProps={{ "aria-label": "search..." }}
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
        <div class="row" style={{ marginLeft: "30px !important" }}>
          {shopItems &&
            shopItems.map(item => {
              const { name, price, description, image } = item;
              return (
                <div class="col-sm-3 listing">
                  <div class="col-item">
                    <div
                      class="photo"
                      style={{ background: `url(${image})` }}
                    ></div>
                    <div class="info">
                      <div class="row">
                        <div class="price col-md-6">
                          <h5>{name}</h5>
                          <h5 class="price-text-color">{`Ksh ${price}`}</h5>
                        </div>
                      </div>
                      <div class="separator clear-left">
                        <p class="btn-add">
                          <i class="fa fa-shopping-cart"></i>
                          <a href="#" class="hidden-sm">
                            Add to cart
                          </a>
                        </p>
                        <p class="btn-details">
                          <i class="fa fa-list"></i>
                          <a href="#" class="hidden-sm">
                            {description}
                          </a>
                        </p>
                      </div>
                      <div class="clearfix"></div>
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

export default Products;
