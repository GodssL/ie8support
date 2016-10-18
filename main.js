/**
 * Created by root on 16-10-17.
 */
// require('es5-shim'); // es5-shim-sham
require("es5-shim-sham");
require('console-polyfill');
import React from "react";
import  ReactDOM from "react-dom";

ReactDOM.render(
    <h1> hello world ! </h1>,
    document.getElementById("example")
);

