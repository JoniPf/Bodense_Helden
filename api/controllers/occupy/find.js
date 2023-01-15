module.exports = {


    friendlyName: 'Find',
  
  
    description: 'Find reservation.',
  
  
    inputs: {
      date : {
        type: 'string',
        required: true
      },
    },
  
  
    exits: {
  
    },
  
    fn: async function (inputs) {
      console.log(inputs.date);
      let sql = "SELECT ri.place FROM reservationitem as ri, occupy as r where ri.occupy = r.id AND r.date = $1";
      var rawResult = await sails.sendNativeQuery(sql, [inputs.date]);
      
      console.dir(rawResult);
      let places  = [];
      rawResult.rows.forEach(element => {
        places.push(element.place);
      });
  
      // All done.
      return places;
    }
  };
  