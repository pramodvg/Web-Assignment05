exports.index = function (req, res, next) {
    res.render('index', {
        Title: 'Home',
        activeHome: true
    });
}

exports.about = (req, res, next) => {
    res.render('about', { Title: 'About Me', activeAbout: true })
}