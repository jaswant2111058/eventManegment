const events = require("../models/events");
const tickets = require("../models/tickets");
const payments = require("../models/paymentdetails")
const bcrypt = require('bcryptjs');



exports.bookEvent = async (req, res) => {
    try {
        const {
            event_id,
            event_name,
            payment_id,
            data_time,
            fullAddress,
            seat,
            price,
            email,
        } = req.body

        const payment_verification = await payments.findOne({ payment_id })
        if (payment_verification && payment_verification?.verification) {
            bcrypt.hash(payment_id, 12, async function (err, hash) {
                if (err) {
                    console.error('Error generating hash code:', err);
                }
                else {
                    const details = {
                        event_id,
                        ticket_hash: hash,
                        event_name,
                        payment_id,
                        data_time,
                        fullAddress,
                        seat,
                        price,
                        email,
                        status: false,
                    }
                    const ticket = new tickets(details);
                    const data = await ticket.save()
                    res.status(200).json(data);
                }
            })
        }

        else {
            res.status(400).json("unauterized access");
        }
    }
    catch (e) {
        res.send(e).status(400)
    }
}
exports.cancelticket = async (req, res) => {
    try {

        // cancel ticket.....

    }
    catch (e) {
        res.send(e).status(400)
    }
}