const pool = require('../services/db');

module.exports.getAllGift = (callback) => {
    const SQLSTATEMENT = `
        SELECT name, url
        FROM gift;
    `
    pool.query(SQLSTATEMENT, callback)
}
module.exports.getHistory = (callback) => {
    const SQLSTATEMENT = `
        SELECT 
            user_gift_rel.gifted_time,
            user.username,
            gift.name AS item,
            user_gift_rel.amount * gtp.points AS total_points
        FROM 
            user_gift_rel
        JOIN 
            user ON user_gift_rel.user_id = user.user_id
        JOIN 
            gift ON user_gift_rel.item_id = gift.item_id
        JOIN 
            gift_type_and_points_rel gtp ON gift.type = gtp.type
        ORDER BY 
            user_gift_rel.gifted_time DESC;
    `
    pool.query(SQLSTATEMENT, callback)
}