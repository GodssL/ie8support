/**
 * Created by DDT on 2016/10/18.
 */

import React from "react";

class MyComponent extends React.Component {
    constructor(name){
        super();
        this.name = name;
    }
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name.toUpperCase();
    }
    say(){
        console.log(this.name);
    }
    render() {
        var text = "变量注入的字符串 and my name is: " + this.name;
        return (
            <div>
                <div>Component: </div>
                <div>{text}</div>
            </div>
        );
    }
}
var my_component = new MyComponent("jack");
module.exports = MyComponent;