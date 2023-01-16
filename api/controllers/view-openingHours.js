module.exports = {

  friendlyName: 'View openingHours',

  
  description: 'Display "openingHours" page.',
  
  
  exits: {
  
    success: {
      viewTemplatePath: 'pages/openingHours'
    }
  
  },
  
  
  fn: async function () {
  
   // Respond with view.
   return {};
  
   }
   
};