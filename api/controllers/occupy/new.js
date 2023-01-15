module.exports = {

    friendlyName: 'New Reservation',
  
    description: 'Create a new reservation.',
  
    inputs: {
  
    },
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/occupy/new'
      }
    },
  
    fn: async function (inputs) {
      return;
    }
  };
  