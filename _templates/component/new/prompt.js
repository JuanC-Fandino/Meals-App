module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Component name? (Must start with capital Letter)',
    validate: input => {
      return (
        input[0]?.toUpperCase() === input[0] ||
        'Must start with a capital letter'
      );
    },
  },
  {
    type: 'input',
    name: 'type',
    message:
      'Component type? (targets an existing folder or creates a new folder)',
    validate: input => {
      return (
        input[0]?.toLowerCase() === input[0] ||
        'Must start with a lowercase letter'
      );
    },
  },
];
