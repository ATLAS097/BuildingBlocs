const model = require("../models/userModel");

module.exports.addUser = (req, res, next) => {
  if (req.body.username === undefined) {
    res.status(400).send("Error: username is undefined");
    return;
  }
  const data = {
    username: req.body.username,
    email: req.body.email,
  };
  const callback = (error, results, fields) => {
    if (error) {
      if (error.code === "ER_DUP_ENTRY") {
        req.body.is_exist = 1;
        next();
      } else {
        console.error(err);
        return;
      }
    } else {
      req.body.is_exist = 0;
      next();
    }
  };
  model.addUser(data, callback);
};

module.exports.getLeaderBoard = (req, res, next) => {
  const callback = (error, results, fields) => {
    if (error) {
      console.error(`Error getLeaderBoard: ${error}`);
      res.status(500).json(error);
    } else {
      res.status(200).json(results);
    }
  };
  model.getLeaderboard(callback);
};

// middleware to check if user exists
module.exports.getUserForDup = (req, res, next) => {
  data = {
    username: req.body.username,
    email: req.body.email,
  };
  if (req.body.is_exist == 1) {
    console.log("is dup for dup");
    const callback = (error, results, fields) => {
      if (error) {
        console.error(`Error getUser: ${error}`);
        res.status(500).json(error);
      } else {
        if (results.length == 0) {
          res.status(404).json({
            message: "User not found!",
          });
        } else {
          req.body.user_id = results[0].user_id;
          next();
        }
      }
    };
    model.getUser(data, callback);
  } else {
    console.log("not dup for dup");
    next();
  }
};

module.exports.getUserForAdded = (req, res, next) => {
  if (req.body.is_exist == 0) {
    console.log("is dup for added");
    const callback = (error, results, fields) => {
      if (error) {
        console.error(`Error getUser: ${error}`);
        res.status(500).json(error);
      } else {
        if (results.length == 0) {
          res.status(404).json({
            message: "User not found!",
          });
        } else {
          req.body.user_id = results[0].user_id;
          next();
        }
      }
    };
    model.getUserForAdded(callback);
  } else {
    console.log("is dup for added");
    next();
  }
};

// module.exports.getGift = (req, res, next) => {
//   if (
//     req.body.gift == undefined ||
//     req.body.amount == undefined ||
//     req.body.username == undefined ||
//     req.body.email == undefined
//   ) {
//     res.status(404).json({
//       message: "username, email, gift or amount is undefined",
//     });
//     return;
//   }
//   gift = req.body.gift;

//   const callback = (error, results, fields) => {
//     if (error) {
//       console.error(`Error getGift: ${error}`);
//       res.status(500).json(error);
//     } else {
//       if (results.length == 0) {
//         res.status(404).json({
//           message: "Gift not found!",
//         });
//       } else {
//         // console.log(results)
//         req.body.item_id = results[0].item_id;
//         next();
//       }
//     }
//   };
//   model.getGift(gift, callback);
// };

module.exports.giveGift = (req, res, next) => {
  if (
    req.body.gift == undefined ||
    req.body.amount == undefined ||
    req.body.username == undefined ||
    req.body.email == undefined
  ) {
    res.status(404).json({
      message: "username, email, gift or amount is undefined",
    });
    return;
  }
  item_id = req.body.gift -1
  const data = {
    user_id: req.body.user_id,
    username: req.body.username,
    email: req.body.email,

    amount: req.body.amount,
    item_id: req.body.gift,
  };
  const callback = (error, results, fields) => {
    // console.log(error)
    if (error) {
      console.error(`Error giveGift: ${error}`);
      res.status(500).json(error);
    } else {
      res.status(200).json({
        message: `Thank you ${results[2][0].username} for the gift!`,
      });
    }
  };
  console.log(data);
  model.giveGift(data, callback);
};
