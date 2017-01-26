
/*
* GET home page.
*/

exports.view = function(req, res){

    var username = req.params.userName;
    if (username === undefined) {
        username = "World";
    }

    console.log (username);
    res.render('index', {
        'name': username
    });
};
