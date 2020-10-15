//customerName, phoneNumber, customerEmail, customerID ){

    const Customer = require("./reserve");
    const inquirer = require("inquirer");
    const path = require("path");
    const fs = require("fs");

    const OUTPUT_DIR = path.resolve(__dirname, "output");
    const outputPath = path.join(OUTPUT_DIR, "waitlist.html");


    class Customer extends Customer {
        constructor (customerName, phoneNumber, customerEmail, customerID ){
            this.customerName = customerName;
            this.phoneNumber = phoneNumber;
            this.customerEmail = customerEmail;
            this.customerID = customerID;
        }
        getCustomerID() {
            return this.customerID
        }
        getPhoneNumber() {
            return this.phoneNumber
        }
        getCustomerName(){
            return this.customerName
        }
        getCustomerEmail(){
            return this.customerEmail
        }
    }
    
//

var customerArr = customerArr[];

var engineerQuestions = [
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      name: "customerId",
      message: "What is your id?",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "customerEmail",
    },
    {
      type: "input",
      name: "phoneNumber",
      message: "What is your phone number?",
    },
    {
        type: "input",
        name: "customerID",
        message: "Please enter a customerID",
      }
  ];

  getCustomerInfo();
  function getCustomerInfo(){
inquirer.prompt(customerName).then((data) => {
        console.log(data);

        var thisCustomer = new Customer(
            data.customerName = customerName,
            data.phoneNumber = phoneNumber,
            data.customerEmail = customerEmail,
            data.customerID = customerID,
        );
        
    customerArr.push(thisCustomer);
    getCustomerInfo();
        return result;
    }

module.exports = Customer;

module.exports = {
    reservations: this.reservations,
    waitList: waitList
};

});