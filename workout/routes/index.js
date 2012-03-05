
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { user: 'Pamela', title: "TITLE"})
};

exports.test_route = function(req, res){
  res.render('index', { user: 'Something else', title: "TITLE"})
};