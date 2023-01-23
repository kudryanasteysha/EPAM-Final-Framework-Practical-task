# How to run tests?

## Installation
1. Open the terminal
2. Write the command line
```
npm install
```
## Run 
To run the tests
1. Open the terminal
2. Write the command line
```
npm run wdio
```
To run single test
1. Specify **it** as **it.only** 
For example:
``` JS
it.only ("should add a new paste", async function() {
    
    })
```
2. Open the terminal
3. Write the command line
```
npm run wdio
```
## Displaying the Allure report
1. Open the terminal
2. Write the command line
```
allure open
```
