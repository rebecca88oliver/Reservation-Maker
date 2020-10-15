
"customerName": "Rebecca",
"phoneNumber": "567-5309",
"customerEmail": "nope@gmail.com",
"customerID": "rebeccab"


test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  test("Can set customerID via constructor arguments", () => {
    const customerID = "alice123";
    const e = new Customer(customerID);
    expect(e.customerID).toBe(customerID);
  });


  
test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });
  
  
test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });

  
test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

  