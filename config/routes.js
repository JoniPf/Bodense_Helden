/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

  'GET /legal/terms':        { action:   'legal/view-terms' },
  'GET /legal/privacy':      { action:   'legal/view-privacy' },
  'GET /contact':            { action:   'view-contact' },
  'GET /impressum':          { action:   'view-impressum' },
  'GET /oeffnungszeiten':    { action:   'view-oeffnungszeiten' },
  'GET /wir':                { action:   'view-wir' },




  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
  'POST  /api/v1/observe-my-session':                 { action: 'observe-my-session', hasSocketFeatures: true },



  'GET /boote': { controller: 'BooteController', action: 'boote'},


  'GET /boat/new': { controller: 'BoatController', action:'new' },
  'POST /boat': { controller: 'BoatController', action:'create' },
  'GET /boat': { controller: 'BoatController', action:'find' },
  'GET /boat/:id': { controller: 'BoatController', action:'findOne' },

  'GET /showboat/:id': { controller: 'ShowController', action:'findOne' },
  
  'GET /boat/:id/delete': 'boat.destroy',
  'GET /boat/:id/edit': 'boat.edit',
  'POST /boat/:id/update': 'boat.update',

  'GET /boat/newDialog': { controller: 'BoatController', action:'createWithImageStep0' },
  'POST /boat/newAddImage': { controller: 'BoatController', action:'createWithImageStep1' },
  'POST /boatWithImage': { controller: 'BoatController', action:'createWithImageStep2' },

  'GET /category/new': { controller: 'CategoryController', action:'new' },
  'POST /category': { controller: 'CategoryController', action:'create' },
  'GET /category/:id/destroy': { controller: 'CategoryController', action: 'destroyOne' },
  'GET /category': { controller: 'CategoryController', action: 'find' },

  'GET /shoppingbasket': 'ShoppingBasketController.show',
  'GET /shoppingbasket/put/:boatid': 'ShoppingBasketController.put',
  'GET /shoppingbasket/remove/:boatid': 'ShoppingBasketController.remove',
  
  'GET /reservation/boote': 'ReservationController.boote',
  'GET /reservation/step1': 'ReservationController.step1',
  'POST /reservation/step2': 'ReservationController.step2',
  'GET /reservation/commit': 'ReservationController.commit',
  'GET /reservation/confirmation/:id': 'ReservationController.confirmation',
  'GET /reservation': 'ReservationController.find',

  'GET /occupy/:id': { action: 'occupy/show' },
  'GET /occupy/new': { action: 'occupy/new' },
  'GET /occupy': { action: 'occupy/index' },
  
    // API
    'GET /api/v1/occupy/find': { action: 'occupy/find' },
    //  'GET /api/v1/occupy/find2': { action: 'occupy/find2' },
      'GET /api/v1/occupy/find2': 'OccupyController.findAll',
      'POST /api/v1/occupy/create': { action: 'occupy/create' }
    

};
