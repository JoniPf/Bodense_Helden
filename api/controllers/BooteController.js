/**
 *BooteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {

    boote: async function (req, res) {
        let categories = await Category.find().populate("boats");
        res.view('pages/boote', { categories });
    }
};

