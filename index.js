// Write your solution in this file!
var customerName="bob"


function upperCaseCustomerName() {
    customerName=customerName.toUpperCase();
    return customerName;
  };
function setBestCustomer() {
  window.bestCustomer="not bob";
  return bestCustomer;
}

 function overwriteBestCustomer(){
  window.bestCustomer="maybe bob";
  return bestCustomer;
 }

  const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  try {
    // try reassigning the constant variable
    leastFavoriteCustomer = 'Bob';
  } catch (error) {
    // Check if the error message contains the expected string
    if (error.message=='Assignment to constant variable.') {
      // Throw a new error with the desired message
      throw new Error('Cannot change the leastFavoriteCustomer. Assignment to constant variable.');
    } else {
      // If it's a different error, rethrow it
      throw error;
    }
  }
}


