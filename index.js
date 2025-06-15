// Declare a variable in global scope using var
var customerName = 'bob';

// Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function that declares a global bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // no var/let/const makes it global
}

// Overwrites bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare constant leastFavoriteCustomer
const leastFavoriteCustomer = 'alice';

// Function that tries to change constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'john'; // ❌ Will throw TypeError
}
