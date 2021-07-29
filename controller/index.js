exports.index = function (req, res, next) {
    res.render('index', {
        Title: 'Home',
        activeHome: true
    });
}

exports.about = (req, res, next) => {
    res.render('about', { Title: 'About', activeAbout: true })
}

exports.contactme = (req, res, next) => {
    res.render('contactme', { Title: 'Contact', activeContact: true })
}

exports.services = (req, res, next) => {
    res.render('services', { Title: 'Services', activeServices: true })
}

exports.portfolio = (req, res, next) => {
    res.render('portfolio', { Title: 'Portfolio', activePortfolio: true })
}