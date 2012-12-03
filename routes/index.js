exports.index = function(req, res){
  // res.writeHead(200, {"Content-Type": 'text/plain'})
  res.render('index', { title: 'Welcomeeee' });
  // res.end('123');
};
