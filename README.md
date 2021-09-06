# FrontChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Preview

This project was created by Angular and contain some add or multiply card that read information from json file.
In HTML file used [angular material](https://material.angular.io/components/categories) to show information and operation in cards and it has some style in css file.
In each card we have 2 number and action and the result of the operation, if the action value is add, result is total of the numebrs in otherwise result come from multiplication of two numbers.

## Service

This project contain one service file that contain some function for get data from json files and do some logical task to result value contain true value. Service name is getdata.service.ts and in spec file it has some test about this service. Service has 4 function : 

**fetchPosts()** get the data from json files and return an observable. 

**doMath()** do some activity and have for loop on Numbers.json file and call checkAdd() and checkMultiply(). 

**checkAdd()** or **checkMultiply()** due to the action value get run and do some logical task and put the answer in result and push it to the finalArray, finalArray is an array that created in Operstion component.

## Interface

in operations directory there is operation.model.ts file that contain Data interface, this interface is used in Operation component and getdata service.

## Throw Error

All possible modes checked if we json file have some error application show the error and continue its work without breaking down.
If app can not find Add.json or Multiply.json it show "Missiing Data!" and if app have problem in Numbers.json app show snack bar and "Server Error" message. For showning message in snack bar import it from angular materail.

## Unit tests

All functions have their test and all of that test performed correctly. This project has 2 unit test on component and 10 unit test about services.

This files covered completely and test coverege is 100% in both file. UI have some tests that count the number of the cards and check it.
