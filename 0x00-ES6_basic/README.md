# 0x00. ES6 Basics

## Concepts
* [lint (software) - Wikipedia](https://en.wikipedia.org/wiki/Lint_(software))
* [ESLint - Pluggable JavaScript linter](https://eslint.org/)
* [pycodestyle - documentation](https://pycodestyle.pycqa.org/en/latest/)
* [Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started)
* [JEST Getting Started](https://jestjs.io/docs/getting-started)

## Resources
### Read or watch:

* [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)


## Setup
Install NodeJS 12.11.x
(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

## Install Jest, Babel, and ESLint
in your project directory:

* Install Jest using: `npm install --save-dev jest`
* Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
* Install ESLint using: `npm install --save-dev eslint`

## Configuration files
[package.json](./)

[babel.config.js](./)


[.eslintrc.js](./)

### Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

## Tasks

## [0. Const or let?](./0-constants.js)
Modify

* function taskFirst to instantiate variables using const
* function taskNext to instantiate variables using let
```
~$ npx eslint 0-constants.js
~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
```

## [1. Block Scope](./1-block-scoped.js)
Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.
```
~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
```

## [2. Arrow functions](./2-arrow.js)
Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)
```
~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
```

## [3. Parameter defaults](./3-default-parameter.js)
Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.
```
$ npm run dev 3-main.js 
142
56
41
```

## [4. Rest parameter syntax for functions](./4-rest-parameter.js)
Modify the following function to return the number of arguments passed to it using the rest parameter syntax

```
> returnHowManyArguments("Hello", "Holberton", 2020);
3
```
## [5. The wonders of spread syntax](./5-spread-operator.js)
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

## [6. Take advantage of template literals](./6-string-interpolation.js)
Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

## [7. Object property value shorthand syntax](./7-getBudgetObject.js)
Modify the following function’s budget object to simply use the keyname instead.
```
$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
```

## [8. No need to create empty objects before adding in properties](./8-getBudgetCurrentYear.js)
Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object
```
$ npm run dev 8-main.js 
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
```

## [9. ES6 method properties](./9-getFullBudget.js)
Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object
```
~$ npm run dev 9-main.js 
$20
20 euros
```

## [10. For...of Loops](./10-loops.js)
Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.
```
$ npm run dev 10-main.js 
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
```

## [11. Iterator](./11-createEmployeesObject.js)
Write a function named createEmployeesObject that will receive two arguments:

* departmentName (String)
* employees (Array of Strings)

The function should return an object with the following format:
```
{
     $departmentName: [
          $employees,
     ],
}
~$ npm run dev 11-main.js 
{ Software: [ 'Bob', 'Sylvie' ] }
```

## [12. Let's create a report object](./)
Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.
createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments.

allEmployees is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives employeesList and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.
```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
$ npm run dev 12-main.js 
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
```

## [13. Iterating through report objects](./100-createIteratorObject.js)
Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject.

This function will return an iterator to go through every employee in every department.
```
$ npm run dev 100-main.js 
Bob
Jane
Sylvie
```

