const model = require("../models/giftModel")

module.exports.getAllGift = (req, res, next) => {

    const callback = (error, results, fields) => {
        if (error){
            console.error(`Error getAllGift: ${error}`)
            res.status(500).json(error)
        } else{
            res.status(200).json(results)
        }
    }
    model.getAllGift(callback)
}