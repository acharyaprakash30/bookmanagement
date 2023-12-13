require('dotenv').config({ path: '.env.local' });

const jwt = require('jsonwebtoken')
const { users } = require('../models')
const checkRole = async (req, res, next) => {


    try {
        const token = req.headers.authorization.split(" ")[1];
        // console.log(token);
        const decodedUser = jwt.verify(token, 'thisismysecretcode');


        try {
            const userData = await users.findByPk(decodedUser.id)
            // console.log(userData);

            if (userData.dataValues.role === decodedUser.role) {
                next()
            }
            else {
                res.status(401).json({
                    message: "Unauthorized user."
                })
            }

        }
        catch (error) {
            res.status(500).json({
                message: "Something went wrong."
            })

        }



    }
    catch (error) {
        console.log(error);

        res.status(401).json({
            message: "Invalid token."
        });

    }


}


module.exports = {
    checkRole: checkRole
}