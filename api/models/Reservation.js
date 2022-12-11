// api/models/Order.js
module.exports = {
    attributes: {
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
            // via: 'reservations'
        }
    }
  };