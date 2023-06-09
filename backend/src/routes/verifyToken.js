const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, customer) => {
      if (err) {
        res.status(403).json("Token is not valid!");
      }
      req.customer = customer;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokeAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.customer.id === req.params.id) {
      next();
    } else {
      res.status(403).json("not allowed");
    }
  });
};

module.exports = { verifyToken, verifyTokeAndAuth };
