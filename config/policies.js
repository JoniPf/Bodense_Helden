/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'view-homepage-or-redirect': true,
  'view-oeffnungszeiten': true,
  'view-contact': true,
  'view-impressum': true,
  'view-wir': true,
  'legal/view-terms': true,
  'legal/view-privacy': true,
  'deliver-contact-form-message': true,

  
  BoatController: {
    '*': 'is-super-admin',
  },
  
  
  CategoryController: {
    '*': 'is-super-admin',
  }

};
