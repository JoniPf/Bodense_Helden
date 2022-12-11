/**
 * ShoppingBasketController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

module.exports = {


    show: async function (req, res) {
        res.view('pages/reservation/shoppingbasket');
    },

    put: async function (req, res) {
        let boat = await Boat.findOne({ id: req.params.boatid });
        if (!req.session.basket) {
            req.session.basket = [];
            req.session.basket.push(boat);
        } else {
            req.session.basket.push(boat);
        }
        // All done.
        res.redirect('/shoppingbasket');
    },

    remove: async function (req, res) {
        req.session.basket.splice(req.params.index, 1);
        res.redirect('/shoppingbasket');
    },
};

