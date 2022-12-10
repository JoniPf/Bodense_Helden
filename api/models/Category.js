// api/models/Category.js
module.exports = {
    attributes: {
        name: {
            type: 'string',  
            columnType: 'varchar(20)',  
            required: true,
        },
        boats: {
            collection: 'boat',
            via: 'category'
        }
    }
  };