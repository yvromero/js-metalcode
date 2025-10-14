// Custom Error class for validation
class ValidationError extends Error {
  constructor(message, field) {
    super(message);               // Sets error.message
    this.name = 'Validation error'; // Sets error.name
    this.field = field;           // Custom property to track the invalid field
  }
}

// Function to create a customer with basic validation
function saveCustomer(name, balance) {
  // Check if name is empty
  if (name === '') {
    throw new ValidationError('Name is required', 'name');
  }

  // Check if balance is negative
  if (balance < 0) {
    throw new ValidationError('Balance cannot be negative', 'balance');
  }

  // If validations pass
  console.log('Client created successfully');
}

// Try-catch block to handle errors
try {
  saveCustomer('', -1); // Both name and balance are invalid
} catch (error) {
  if (error instanceof ValidationError) {
    // Handle custom validation errors
    console.error(
      `[${error.name}] ${error.message} | Invalid field: ${error.field}`
    );
  } else {
    // Handle unexpected errors
    console.error('Unexpected error:', error.message);
  }
}
