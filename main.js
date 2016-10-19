/**
 * Created by root on 16-10-17.
 */

require('console-polyfill');

import React from "react";
import  ReactDOM from "react-dom";
import CommentBox from "./MyComponent";

ReactDOM.render(
    <div>
        <h1> hello world ! </h1>
        <CommentBox />
    </div>,
    document.getElementById("example")
);

