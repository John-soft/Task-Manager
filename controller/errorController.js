const errorController = (err, req, res , next) => {
    return res.status(err.statusCode).json({msg: err.message})
}

module.exports = errorController