module.exports = function(ctx, req, res) {
//   const db = require('./db'); // hypothetical module
//   db.getCustomTable().then(data => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end("Hello World");
//   }).catch(err => {
//     res.writeHead(500);
//     res.end('Internal Server Error');
//   });
};