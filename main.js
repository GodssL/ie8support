/**
 * Created by root on 16-10-17.
 */

require('console-polyfill');

import React from "react";
import ReactDOM from "react-dom";
import mc from "./Components/MyComponent";

mc.say();
mc.name = "Tom";

ReactDOM.render(
    <div>
        <h1> hello world ! </h1>
        {mc.render()}
    </div>,
    document.getElementById("example")
);
