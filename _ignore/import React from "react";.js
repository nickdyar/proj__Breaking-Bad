import React from "react";
import Heading from "./Heading";
import Nav from "./Nav";

class Header extends React.Component {
  render() {
    return <header className="header">
      <Heading></Heading>
      <Nav></Nav>
    </header>;
  }
}

export default Header;

// ------------------------------------------------------------
// ------------------------------------------------------------

import React from "react";

class Heading extends React.Component {
  render() {
    return <h1 className="heading">Hello, world!</h1>;
  }
}

export default Heading;

// ------------------------------------------------------------
// ------------------------------------------------------------

import React from "react";
import ListItem from "./ListItem";

class Nav extends React.Component {
  render() {
    return <nav className="nav">
      <ul className="list">
        <ListItem />
        <ListItem />
      </ul>
    </nav>;
  }
}

export default Nav;

// ------------------------------------------------------------
// ------------------------------------------------------------

import React from "react";

class ListItem extends React.Component {
  render() {
    return <li className="list-item" />;
  }
}

export default ListItem;

// ------------------------------------------------------------
// ------------------------------------------------------------

import React from "react";
import Form from "./Form";

class Main extends React.Component {
  render() {
    return <main className="main">
      <Form></Form>
    </main>;
  }
}

export default Main;

// ------------------------------------------------------------
// ------------------------------------------------------------

import React from "react";
import Field from "./Field";

class Form extends React.Component {
  render() {
    return <form action>
      <Field></Field>
    </form>;
  }
}

export default Form;

// ------------------------------------------------------------
// ------------------------------------------------------------

import React from "react";
import Label from "./Label";
import Input from "./Input";

class Field extends React.Component {
  render() {
    return <div className="field">
      <Label></Label>
      <Input />
    </div>;
  }
}

export default Field;

// ------------------------------------------------------------
// ------------------------------------------------------------

import React from "react";

class Label extends React.Component {
  render() {
    return <label htmlFor="input">Input<span>label</span></label>;
  }
}

export default Label;

// ------------------------------------------------------------
// ------------------------------------------------------------

import React from "react";

class Input extends React.Component {
  render() {
    return <input type="text" id="input" />;
  }
}

export default Input;