module.exports = function() {
  return function preBodyParser(req, res, next) {
    req.headers['content-type']='application/json'
    next()
  }
}
