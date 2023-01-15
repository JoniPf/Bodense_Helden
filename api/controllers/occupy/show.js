module.exports = {


    friendlyName: 'Show',
  
  
    description: 'Show reservation after reservation.',
  
  
    inputs: {
        id: {
            description: 'The number of the reservation to look up.',
            type: 'number',
            required: true
          }
    },
  
  
    exits: {
      success : {
        responseType: 'view',
        viewTemplatePath: 'pages/occupy/confirm'
      }
    },
  
  
    fn: async function (inputs) {

        let occupy = await Occupy.findOne({ id: inputs.id }).populate('reservationItems');
        if (!occupy) { throw 'notFound'; }
        return {
            message : "",
            occupy    
        };
  
    }
  
  
  };
  