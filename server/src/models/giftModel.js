const pool = require('../services/db');

module.exports.getAllGift = (callback) => {
    const SQLSTATEMENT = `
        SELECT name, url
        FROM gift;
    `
    pool.query(SQLSTATEMENT, callback)
}