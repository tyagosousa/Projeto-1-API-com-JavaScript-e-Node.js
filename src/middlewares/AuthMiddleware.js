const verifyToken = async (request, response, next) => {
    if(!request.headers.authorization){
        return response.status(401).json("token not found")
    }
    return next();
}

module.exports = verifyToken