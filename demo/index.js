/**
 * Tip Component Demo for tingle
 * @author minjie
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

let FastClick = require('fastclick');
FastClick.attach(document.body);

let Context = require("tingle-context");
Context.setGlobal({
	svgPath: ''
});
let Demo = require('./TipDemo');

React.render(<Demo/>, document.getElementById('TingleDemo'));