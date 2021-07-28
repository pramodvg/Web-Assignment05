exports.index = function (req, res, next) {
    res.render('index', {
        Title: 'Home',
        activeHome: true
    });
}

exports.about = (req, res, next) => {
    res.render('about', { Title: 'About Me', activeAbout: true })
}

exports.contactme = (req, res, next) => {
    res.render('contactme', { Title: 'Contact Me', activeContact: true })
}

exports.services = (req, res, next) => {
    res.render('services', { Title: 'Services', activeServices: true })
}