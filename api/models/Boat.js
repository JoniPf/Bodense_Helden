// api/models/Boat.js
module.exports = {
    attributes: {
        name: { type: 'string', columnType: 'varchar(80)', required: true, unique: true },
        description: { type: 'string', columnType: 'varchar(240)' },
        price: { type: 'number',  columnType: 'DECIMAL (6,2)',  required: true},
        condition: { type: 'string', columnType: 'varchar(10)', required: true},
        details:{type: 'string', columnType: 'varchar(240)', required: true},
        image: { type: 'string', columnType: 'varchar(128)' },
        category: {
            model: 'category',
            required: true
        },
        reservations: {
            model: 'reservation',
            via: 'boats'
        }
    },
  };