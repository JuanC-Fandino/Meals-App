module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Screen name? (Must be "PascalCase")',
    validate: input => {
      return (
        input[0].toUpperCase() === input[0] ||
        'Must start with a capital letter'
      );
    },
  },
  {
    type: 'input',
    name: 'type',
    message:
      'Screen type/location? (targets an existing folder, creates a new folder, or none if empty in src/screens',
    validate: input => {
      return (
        input[0]?.toLowerCase() === input[0] ||
        'Must start with a lowercase letter'
      );
    },
  },
];
