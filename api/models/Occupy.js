/**
 * Occupy.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
      date: {
          type: 'ref',
          columnType: 'DATE',
          required: true,
      },
      customer: {
          model: 'user'
      },
      reservationItems: {
          collection: 'ReservationItem',
          via: 'occupy'
      },
    },
  
  };
  