// api/models/Reservation.js
module.exports = {
    attributes: {
        date: {
            type: 'ref',  
            columnType: 'DATE',  
           // required: true,
        },
        time: {
            type: 'string',  
            columnType: 'TIME',  
            required: true,
        },
        price: { 
            type: 'number',  
            columnType: 'DECIMAL (6,2)',  
        },
        boats: {
            collection: 'boat',
            via: 'reservations'
        }
    }
  };
