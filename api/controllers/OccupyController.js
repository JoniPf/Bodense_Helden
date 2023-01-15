/**
 * OccupyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");

 module.exports = {
 
     findAll: async function (req, res) {
        let sql = "SELECT r.id, r.date, GROUP_CONCAT(ri.place) as places FROM reservationitem as ri, reservation as r where ri.occupy = r.id AND r.date >= $1 AND r.date <= $2 and r.customer = $3 GROUP BY r.id, r.date";
        var rawResult = await sails.sendNativeQuery(sql, [req.query.fromdate, req.query.todate, req.session.userId]);
        
        console.dir(rawResult);
        let places  = [];
        rawResult.rows.forEach(element => {
          places.push(element);
        });
    
        return res.json(places);
     },
 };
 