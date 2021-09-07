// library for verifying jwt
const { jwtVerify } = require('jose-node-cjs-runtime/jwt/verify');
// library for generating symmetric key for jwt
const { createSecretKey } = require('crypto');
// user model
const User = require('../models/user');

const secretKey = createSecretKey(process.env.JWT_SECRET, 'utf-8');

const auth = async (req, res, next) => {
  try {
    // extract token
    const token = req.header('Authorization').replace('Bearer ', '');
    // verify token
    const { payload } = await jwtVerify(token, secretKey, {
      issuer: process.env.JWT_ISSUER,
      audience: process.env.JWT_AUDIENCE,
    });
    // find user by id and token
    const user = await User.findOne({ _id: payload.id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    // send unauthenticated response
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = auth;
