/**
 * Created by root on 16-10-17.
 */
// require('es5-shim'); // es5-shim-sham can load es5-shim and es5-sham
require("es5-shim-sham");
require('console-polyfill');
require('core-js/fn/object/freeze');

// import React from "react";
// import  ReactDOM from "react-dom";

const React = require("react");
const ReactDOM = require("react-dom");


import CommentBox from './myComponent'

ReactDOM.render(
    <div>
        <h1> hello world ! </h1>
        <CommentBox />
    </div>,
    document.getElementById("example")
);

