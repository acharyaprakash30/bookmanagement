const jwt = require('jsonwebtoken');
const env = require('dotenv').config();



const checkAuthentication = async (req, res, next) => {

    if (!req.headers.authorization) {

        return res.status(403).json({ message: "Unauthorized user." })
    }

    try {
        const decodedUser = jwt.verify(req.headers.authorization.split(" ")[1],process.env.JWT_SECRET)
        req.userData = decodedUser
        next()

    }
    catch (error) {

        return res.status(401).json({
            message: "Unauthorized user."
        })

    }




}

module.exports = { checkAuthentication: checkAuthentication }

