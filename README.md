# Exportum-xls


![Bower](https://img.shields.io/bower/v/angular-translate.svg) [![NPM](https://img.shields.io/npm/v/angular-translate.svg)](https://www.npmjs.com/package/angular-translate) [![Build Status](https://img.shields.io/travis/angular-translate/angular-translate.svg)](https://travis-ci.org/angular-translate/angular-translate) ![License](https://img.shields.io/npm/l/angular-translate.svg) ![Code Climate](https://img.shields.io/codeclimate/github/angular-translate/angular-translate.svg) ![Code Coverage](https://img.shields.io/codeclimate/coverage/github/angular-translate/angular-translate.svg)

## Description: 
Angular Projects needs to export their json to xls. This would help them achieve the same with minimum burn. This project is a fork of alasql. Thanks to Andrey for the amazing JS SQL API.

Now how exactly you can use this.

**Step1:**
Include the js exportumxls.min.js in your html page.

**Step2:**
Include the service 'ExporTo' to your controller. And call in the method 'xlsx'

For e.g. ExporTo.xlsx(options);

**Step3:**
Now what are the options. For the time being xlsx version doesnt go pretty well with the options of colors and stuffs, while xls does. However, Chrome has some problems with xls. Working on this and will fix it later as time permits.

Options:
type - 'xlsx' or 'xls', takes in string
data - the json data object
filename - the name of the file                
sheetid - the name of the sheet
header -  true or false, takes boolean
columns - columnid - json key names , title: header in spreadsheet (doesnt really work for xlsx)

For e.g. Columns = [{columnid: 'name', title: 'Name'},{columnid: 'email', title: 'Email'},{columnid: 'dob', title: 'Birthday'}]


This is an api done in haste. This will be subjected to further improvement. 
