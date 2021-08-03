// render error page not found
exports.erroute = function (req, res) {
    res.render('404',{Title : "Page not found"});
}