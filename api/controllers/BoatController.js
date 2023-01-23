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
    let boat = await Boat.findOne({ id: req.params.id }).populate("category");
    res.view ('pages/boat/show', { boat: boat });
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
  },
  

 createWithImageStep0: async function (req, res) {
  let categories = await Category.find();
  res.view('pages/boat/newWithImageForm1', { categories });
},

createWithImageStep1: async function (req, res) {
  sails.log.debug("Create boat....")
  req.session.name = req.body.name;
  req.session.price = req.body.price;
  req.session.description = req.body.description;
  req.session.condition = req.body.condition;
  req.session.details = req.body.details;
  req.session.category = req.body.category;
  res.view('pages/boat/newWithImageForm2')
},

createWithImageStep2: async function (req, res) {
  sails.log("Upload image for boat...")
  let params = {
    dirname: require('path').resolve(sails.config.appPath, 'assets/images/boats/')
  };

  let callback = async function (err, uploadedFiles) {
    if (err) {
      return res.serverError(err);
    } else {
      sails.log("Uploaded!")
    }
    let fname = require('path').basename(uploadedFiles[0].fd);
    await Boat.create({
      "image": fname,
      "name": req.session.name,
      "price": req.session.price,
      "description": req.session.description,
      "condition":req.session.condition,
      "details": req.session.details,
      "category": req.session.category
    })
  };

    await req.file('image').upload(params, callback);
    return res.redirect('/boat');
  },
};

