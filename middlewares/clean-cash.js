const {clearHash} = require("../services/cache");

const cleanCashMiddleware = async (req, res, next) => {
    await next();

    clearHash(req.user.id);
}

module.exports = {cleanCashMiddleware}
