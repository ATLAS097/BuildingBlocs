const pool = require('../services/db');

module.exports.addUser = (data, callback) => {
    const SQLSTATEMENT = `
        INSERT INTO user (username, email)
        VALUES (?, ?);
    `;
    const VALUES = [data.username, data.email];
    pool.query(SQLSTATEMENT, VALUES, callback)
}

module.exports.getLeaderboard = (callback) => {
    const SQLSTATEMENT = `
        SELECT username, points
        FROM user
        ORDER BY points DESC;
    `
    pool.query(SQLSTATEMENT, callback)
}

module.exports.getUser = (email, callback) => {
    const SQLSTATEMENT = `
        SELECT user_id
        FROM user WHERE email = ? AND username = ?;
    `
    const VALUES = [data.email, data.username]
    pool.query(SQLSTATEMENT, VALUES, callback)
}

module.exports.getUserForAdded = (callback) => {
    const SQLSTATEMENT = `
        SELECT user_id
        FROM user
        ORDER BY user_id DESC
        LIMIT 1;
    `
    pool.query(SQLSTATEMENT, callback)
}

module.exports.getGift = (gift, callback) => {
    const SQLSTATEMENT = `
        SELECT item_id
        FROM gift WHERE name = ?;
    `
    const VALUES = [gift]
    pool.query(SQLSTATEMENT, VALUES, callback)
}

module.exports.giveGift = (data, callback) => {
    const SQLSTATEMENT = `

        INSERT INTO user_gift_rel (user_id, item_id, amount) VALUES
        (?, ?, ?)
        ON DUPLICATE KEY UPDATE 
            amount = amount + ?;
        
        UPDATE user 
        SET points = points + ((
            SELECT gtp.points
            FROM gift_type_and_points_rel gtp
            INNER JOIN gift g ON gtp.type = g.type
            WHERE g.item_id = ?
        ) * ?)
        WHERE user_id = ?;

        SELECT username
        FROM user WHERE user_id = ?;


    `
    const VALUES = [data.user_id, data.item_id, data.amount, data.amount, data.item_id, data.amount, data.user_id, data.user_id]
    pool.query(SQLSTATEMENT, VALUES, callback)
}