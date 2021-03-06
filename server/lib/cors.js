module.exports = function() {
  return (req, res, next) => {
    const url = '*';
    res.header( 'Access-Control-Allow-Origin', url );
    res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
    next();
  };
};
