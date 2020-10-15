class Table {
    constructor (customerName, phoneNumber, customerEmail, customerID ){
        this.customerName = customerName;
        this.phoneNumber = phoneNumber;
        this.customerEmail = customerEmail;
        this.customerID = customerID;
    }
    getCustomerName() {
        return this.customerName;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getCustomerEmail() {
        return this.customerEmail;
    }
    getCustomerID() {
        return this.customerID;
}

}

module.exports = Table;