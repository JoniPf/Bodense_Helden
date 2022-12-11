/**
 * ReservationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const redactPasswords = require("sails-mysql/lib/private/redact-passwords");
const Sails = require("sails/lib/app/Sails");

module.exports = {

    boote: async function (req, res) {
        let categories = await Category.find().populate("boats");
        res.view('pages/reservation/boote', { categories });
    },
   
    step1: async function (req, res) {
        res.view('pages/reservation/step1');
    },

    step2: async function (req, res) {
        let reservationValues = {};
        reservationValues.address = req.body.ort; 
        reservationValues.time = req.body.zeit;
        req.session.reservation = reservationValues;
        res.view('pages/reservation/step2', {"reservation": req.session.reservation, "basket": req.session.basket});
    },

    commit: async function (req, res) {
        sails.log.debug("commit.....")
        let reservationValues = req.session.reservation 
        reservationValues.customer = req.session.userId;
        let reservation = await Reservation.create(reservationValues).fetch();
        let basket = req.session.basket 
        let ids = [];
        basket.forEach(reservationItem => {
          ids.push(reservationItem.id)
        });
        await Reservation.addToCollection(reservation.id, 'boats', ids)

        req.session.basket = [];
        req.session.reservation = null;

       res.redirect('/reservation/confirmation/'+reservation.id);
       
    },

    confirmation: async function (req, res) {
        sails.log.debug("confirmation.....")
        let reservation = await Reservation.findOne({ id: req.params.id}).populate("boats"); 
        res.view('pages/reservation/show', { reservation });
    },

    find: async function (req, res) {
        sails.log.debug("List all reservations....")
        let reservations = await Reservation.find().populate("boats");
        res.view ('pages/reservation/index', { reservations } );
      },
};

