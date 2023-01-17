/**
 * BoatController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {
  new: async function (req, res) {
    let categories = await Category.find();
    res.view('pages/boat/new', { categories });
  },

  create: async function (req, res) {
    sails.log.debug("Create boat....")
    let params = req.allParams();
    await Boat.create(params);
    res.redirect('/boat');
    //res.view('pages/boat/status', { boatname: req.param("name")})
  },

  find: async function (req, res) {
    sails.log.debug("List special boats....") 
    let boat;
    if (req.query.q && req.query.q.length > 0) {
      boat = await Boat.find({
        name: {
          'contains': req.query.q
        }
      })
    } else {
      boat = await Boat.find().populate("category");
    }
    
    res.view ('pages/boat/index', { boat: boat } );
  },

  findOne: async function (req, res) {
    sails.log.debug("List single boat....")
    let boat = await Boat.findOne({ id: req.params.id });
    res.view ('pages/boat/show', { boat: boat } );
  },

  destroy: async function (req, res) {
    sails.log.debug("delete single boat....")
    let boat = await Boat.destroyOne({ id: req.params.id });
    res.redirect('/boat');
  },

  edit: async function (req, res) {
    sails.log.debug("Edit single boat....")
    let boat = await Boat.findOne({ id: req.params.id });
    res.view ('pages/boat/edit', { boat: boat } );
  },

  update: async function (req, res) {
    sails.log.debug("Update single boat....")
    let boat = await Boat.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/boat');
  }
  

};

