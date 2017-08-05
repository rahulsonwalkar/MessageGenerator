# MessageGenerator
Generate welcome text-messages for your hotel guests and send them using **Twilio**.


This service can also be integrated into your program as an API. [Documentation for the API can be found here](https://github.com/rahulsonwalkar/MessageGeneratorAPI).

## Getting started 

Clone or download the repo.
```
$ git clone https://github.com/rahulsonwalkar/MessageGenerator
```
Navigate into the directory and install the dependencies.
```
$ cd MessageGenerator
$ npm install
```
## Usage
```
$ npm start
```
**Note**: If you are running the code using Git-bash on a windows machine, use `node index.js` instead of `npm start`.

## Changing phone number for texting

Change the phone number in `/data/phoneNumber.json` to the number on which you want to receieve texts.

```
{
    "phoneNumber" : "+15038067016"
}
```

## Design
The program is broken down into various modules. Each modules consists of a function that serves a portion of the main task (generating and sending welcome text message).

`index.js` is the entry point for the program. It takes user input from the terminal (type of template, guest and hotel) and sends over the data to `generateMessage.js` to generate the message.

`generateMessage.js` loads the required data from data files and replaces placeholders in templates using `fillTemplate.js`.

`fillTemplate.js` replaces individual placeholders using `replacePlaceHolder.js` and generates a proper greeting, depending on the current time using `getGreeting.js`.

Lastly, `sendText.js` deals with Twilio's API. It accepts a generated text message from `generateMessage.js` and a phone number. The phone number is retrieved from `phoneNumber.json` in `/data` folder.

## What's next?

+ Implement proper error-handling (throw exceptions for edge-cases) and implement input validation for inputs from the terminal.

+ Make it possible to add data to data files, for example: add new templates, guests, hotels.
