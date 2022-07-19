
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.header('Auth-Token');

    if (!token) return res.status(401).send('Access Denied')

    try {
        req.user = jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    } catch(err) {
        res.status(400).send('Invalid Token')
    }
}

module.exports = auth;
