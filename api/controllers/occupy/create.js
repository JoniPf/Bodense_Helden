module.exports = {

    friendlyName: 'Create',
  
    description: 'Create reservation.',
  
    inputs: {
      date : {
          type: 'string',
          required: true
      },
      places : {
          type: 'ref',
          required: true
      }  
    },
  
    exits: {
  
    },
  
  
    fn: async function (inputs) {
        //let date = "2022-12-24"
        //var today = new Date().toISOString().slice(0, 10);
        let resValues = {
            date: inputs.date,
            customer: this.req.session.userId
        }
        let occupy = await Occupy.create(resValues).fetch();
        let resItemValues = [];
        inputs.places.forEach(element => {
            resItemValues.push({
                place: element,
                occupy: occupy.id
            })
        });
        await ReservationItem.createEach(resItemValues);
        return {id: occupy.id};
    }
  };
  