module.exports = {


    friendlyName: 'Find Date Range',
  
  
    description: 'Find reservation.',
  
  
    inputs: {
      fromdate : {
        type: 'string',
        required: true
      },
      todate : {
        type: 'string',
        required: true
      }
    },
  
  
    exits: {
  
    },
  
    fn: async function (inputs) {
      console.log(inputs.date);
      let sql = "SELECT r.id, r.date, GROUP_CONCAT(ri.place) as places FROM reservationitem as ri, occupy as r where ri.occupy = r.id AND r.date >= $1 AND r.date <= $2 and r.customer = $3 GROUP BY r.id, r.date";
      var rawResult = await sails.sendNativeQuery(sql, [inputs.fromdate, inputs.todate, this.req.session.userId]);
      
      console.dir(rawResult);
      let places  = [];
      rawResult.rows.forEach(element => {
        places.push(element);
      });
  
      // All done.
      return places;
    }
  };
  