# 0x02. ES6 classes


## Resources
### Read or watch:

* [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)


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


## Files
[package.json](./package.json)

[babel.config.js](./babel.config.js)

[.eslintrc.js](./.eslintrc.js)

### Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.


### to test with ESLint
> npx eslint 0-promise.js


## Tasks

## [0. You used to attend a place like this at some point](./0-classroom.js)
Implement a class named `ClassRoom`:

* Prototype: `export default class ClassRoom`
* It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`
```
$ npm run dev 0-main.js 
10
```

## [1. Let's make some classrooms](./1-make_classrooms.js)
Import the `ClassRoom` class from `0-classroom.js`.

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).
```
 npm run dev 1-main.js 
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
```

## [2. A Course, Getters, and Setters](./2-hbtn_course.js)
Implement a class named `HolbertonCourse`:

* Constructor attributes:
        `name` (String)
        `length` (Number)
        `students` (array of Strings)
* Make sure to verify the type of attributes during object creation
Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter and setter for each attribute.
```
$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
```

## [3. Methods, static methods, computed methods names..... MONEY](./3-currency.js)
Implement a class named `Currency`:

- Constructor attributes:
        `code` (String)
        `name` (String)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter and setter for each attribute.
* Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`.

## [4. Pricing](./4-pricing.js)
Import the class `Currency` from `3-currency.js`

Implement a class named `Pricing`:

* Constructor attributes:
        - `amount` (Number)
        - `currency` (Currency)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter and setter for each attribute.
* Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
* Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.
```
$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
```

## [5. A Building](./5-building.js)
Implement a class named `Building`:

* Constructor attributes:
        - `sqft` (Number)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter for each attribute.
* Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
        - If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`
        
## [6. Inheritance](./6-sky_high.js)
Import `Building` from `5-building.js`.

Implement a class named `SkyHighBuilding` that extends from `Building`:

* Constructor attributes:
        - `sqft` (Number) (must be assigned to the parent class `Building`)
        - `floors` (Number)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Implement a getter for each attribute.
* Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.
```
$ npm run dev 6-main.js 
140
60
Evacuate slowly the 60 floors
```

## [7. Airport](./7-airport.js)
Implement a class named `Airport`:

* Constructor attributes:
        - `name` (String)
        - `code` (String)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* The default string description of the class should return the airport code (example below).
```
$ npm run dev 7-main.js 
Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
[object SFO]
```

## [8. Primitive - Holberton Class](./8-hbtn_class.js)
Implement a class named `HolbertonClass`:

* Constructor attributes:
        - `size` (Number)
        - `location` (String)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* When the class is cast into a `Number`, it should return the size.
* When the class is cast into a `String`, it should return the location.
```
$ npm run dev 8-main.js 
12
Mezzanine
```

## [9. Hoisting](./9-hoisting.js)
Fix this code and make it work.
```...
$ npm run dev 9-main.js
[
  StudentHolberton {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'John',
    _lastName: 'Doe',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
```

## [10. Vroom](./10-car.js)
Implement a class named `Car`:

* Constructor attributes:
        - `brand` (String)
        - `motor` (String)
        - `color` (String)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* Add a method named `cloneCar`. This method should return a new object of the class.

Hint: Symbols in ES6
```
$ npm run dev 10-main.js
TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
true
TestCar { _brand: undefined, _motor: undefined, _color: undefined }
true
false
```

## [11. EVCar](./100-evcar.js)
Import `Car` from `10-car.js`.

Implement a class named `EVCar` that extends the `Car` class:

* Constructor attributes:
        - `brand` (String)
        - `motor` (String)
        - `color` (String)
        - `range` (String)
* Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
* For privacy reasons, when `cloneCar` is called on a `EVCar` object, the object returned should be an instance of `Car` instead of `EVCar`.
```
$ npm run dev 100-main.js
EVCar {
  _brand: 'Tesla',
  _motor: 'Turbo',
  _color: 'Red',
  _range: '250'
}
Car { _brand: undefined, _motor: undefined, _color: undefined }
```
