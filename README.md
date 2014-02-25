angular-super-input
===========

An AngularJS directive for quick and easy validation of inputs.

## Installation:

```
bower install angular-super-input
```

Make sure to include Bootstrap 3 css file, and also ensure that the angular-super-input.js file is included in your html file. You will then need to inject the angular-super-input into you angular module 

```
var app = angular.module(‘myApp’,[‘superInput’])
```

## Usage

Angular-super-input is an angular directive that easily allows you to harness the input validation that angular provides, but without having to write all the validation code each time. 

It’s styling is based off Bootstrap 3. It uses the `.form-group` styling in bootstrap to create the label and input, with a `.help-block` for any validation code.

In order to get the super-input to work your first 
