/**
 * ShowController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {

findOne: async function (req, res) {
    sails.log.debug("List single boat....")
    let boat = await Boat.findOne({ id: req.params.id }).populate("category");
    res.view ('pages/boat/show', { boat: boat });
  },
}