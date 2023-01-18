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
  },
  
 /////////////// Example for session and image handling ////////////////

 createWithImageStep0: async function (req, res) {
  let categories = await Category.find();
  res.view('pages/boat/newWithImageForm1', { categories });
},

/**
 * Store values of form in the session
 */
createWithImageStep1: async function (req, res) {
  sails.log.debug("Create boat....")
  req.session.name = req.body.name;
  req.session.price = req.body.price;
  req.session.description = req.body.description;
  req.session.category = req.body.category;
  res.view('pages/boat/newWithImageForm2', { boatname: req.param("name") })
},

/**
 * Uploads an image for a meal.
 * The image is stored in the /assets/images/meals directory and the path to the image 
 * in the database table of meals. 
 */
createWithImageStep2: async function (req, res) {
  sails.log("Upload image for boat...")
  // Define the parameters of the upload as an object
  // In this example only the path, wehre to upload the image, is set
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
      "description": req.session.description,
      "price": req.session.price,
      "details": req.session.details,
      "category": req.session.category,
    })
  };

    // This funvtion is called, once all files are uploaded
    // err indicates if the upload process triggered an error and has been aborted 
    // uploaded files contains an array of the files which have been uploaded, in our case only one.
    await req.file('image').upload(params, callback);
    return res.redirect('/boat');
  },
};

