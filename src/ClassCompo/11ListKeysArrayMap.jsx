import React, { Component } from "react";
import { Link } from "react-router-dom";


class ListKeysArrayMap extends Component {
  render() {
    let MenuData = { "/": "Home", "/about": "About", "/examples": "Examples", "classcompo": "Class Compo" };

    let MenuItem = Object.entries(MenuData).map(([key, data], index) => {
      return <li key={index}><Link to={key}>{data}</Link></li>;
    });
    return (
      <div>
        <p>store your data in array as Object</p>
        <p>after that access that data by 'map' method</p>
        <p>to show output you have to link that key to your respective router path</p>
        <p>link to key shows data in list element</p>
        {MenuItem}
      </div>
    );
  }
}

export default ListKeysArrayMap;