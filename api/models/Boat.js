// api/models/Boat.js
module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true, unique: true },
        description: { type: 'string', columnType: 'varchar(80)' },
        price: { type: 'number',  columnType: 'DECIMAL (6,2)',  required: true},
        condition: { type: 'string', columnType: 'varchar(10)', required: true},
        category: {
            model: 'category'
        },
        reservations: {
            model: 'reservation',
            via: 'boats'
        }
    },
  };