const pool = require("../services/db")

const SQLSTATEMENT = `
    DROP TABLE IF EXISTS user;

    DROP TABLE IF EXISTS gift;

    DROP TABLE IF EXISTS user_gift_rel;

    DROP TABLE IF EXISTS gift_type_and_points_rel;

    CREATE TABLE user (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        username TEXT NOT NULL, 
        email VARCHAR(255) NOT NULL UNIQUE,
        points INT NOT NULL DEFAULT 0
    );

    CREATE TABLE gift (
        item_id INT AUTO_INCREMENT PRIMARY KEY,
        name TEXT NOT NULL,
        type TEXT NOT NULL,
        url TEXT
    );

    CREATE TABLE user_gift_rel (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        item_id INT NOT NULL,
        amount INT NOT NULL,
        gifted_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        UNIQUE (user_id, item_id)
    );

    CREATE TABLE gift_type_and_points_rel (
        id INT AUTO_INCREMENT PRIMARY KEY,
        type TEXT NOT NULL,
        points INT NOT NULL
    );

    INSERT INTO user (username, email, points) VALUES
    ("Ashley", "ashley.gmail.com", 10),
    ("Leslie", "leslie.gmail.com", 130),
    ("Swam", "swam.gmail.com", 36);

    INSERT INTO gift (name, type, url) VALUES
    ("Cake", "Food", "https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg"),
    ("Candy", "Food", "https://cdn.pixabay.com/photo/2017/01/07/20/40/candy-1961538_1280.jpg"),
    ("Chocolate", "Food", "https://cdn.pixabay.com/photo/2010/12/13/10/13/chocolate-2554_1280.jpg"),
    ("Table", "Furniture", "https://img.freepik.com/free-vector/empty-white-plastic-table-isolated-white-background-product-display-template-vector-3d-table_90220-2601.jpg?t=st=1734485746~exp=1734489346~hmac=279c840dc2d7b6e56a2936e19bcc81699ff624de947a5e179b529763d0c8c704&w=1380"),
    ("Chair", "Furniture", "https://cdn.pixabay.com/photo/2018/03/30/06/05/chair-3274474_1280.jpg"),
    ("Fridge", "Furniture", "https://img.freepik.com/free-vector/refrigerator-with-closed-opened-door_1308-95206.jpg?t=st=1734499558~exp=1734503158~hmac=4309cf89a2c9121af9c5fc3193b465927a887f85bd45fd962e11b9c3a9bfa545&w=1380"),
    ("Plushies", "Toy", "https://cdn.pixabay.com/photo/2023/03/05/23/21/teddy-bear-7832352_1280.jpg"),
    ("Board Game", "Toy", "https://cdn.pixabay.com/photo/2016/02/22/09/44/chess-1215079_1280.jpg"),
    ("Shirt", "Clothes", "https://cdn.pixabay.com/photo/2019/07/27/21/42/t-shirt-4367577_1280.jpg"),
    ("Pants", "Clothes", "https://cdn.pixabay.com/photo/2014/08/26/21/48/jeans-428613_1280.jpg"),
    ("Wallet", "Accesory", "https://cdn.pixabay.com/photo/2020/03/28/13/26/wallet-4977021_1280.jpg"),
    ("Bag", "Accesory", "https://cdn.pixabay.com/photo/2017/08/03/10/00/bag-2575283_1280.jpg");

    INSERT INTO user_gift_rel (user_id, item_id, amount) VALUES
    (1, 1, 2),
    (1, 2, 3),
    (1, 3, 5),
    (2, 6, 8),
    (2, 4, 3),
    (2, 5, 2),
    (3, 7, 10),
    (3, 9, 4),
    (3, 10, 4);

    INSERT INTO gift_type_and_points_rel (type, points) VALUES
    ("Food", 1),
    ("Furniture", 10),
    ("Toy", 2),
    ("Clothes", 2),
    ("Accesory", 3);
`;
const callback = (error, results, fields) => {
    if (error){
        console.error("Error creating tables:", error);
    }
    else{
        
        console.log("Tables created successfullly: ", results);
    }
    process.exit();
}

pool.query(SQLSTATEMENT, callback)
