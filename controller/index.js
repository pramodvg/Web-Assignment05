const mData = require('../model/indexdata')

exports.index = function (req, res, next) {
    res.render('index', {
        Title: 'Home',
        activeHome: true,
        data: mData
    });
}

exports.about = (req, res, next) => {
    res.render('about', { Title: 'About', activeAbout: true, data: mData.maboutData })
}

exports.contactme = (req, res, next) => {
    res.render('contactme', { Title: 'Contact', activeContact: true })
}

exports.services = (req, res, next) => {
    res.render('services', { Title: 'Services', activeServices: true, data: mData.mserviceData })
}

exports.portfolio = (req, res, next) => {
    res.render('portfolio', { Title: 'Portfolio', activePortfolio: true, data: mData.mportfolioData })
}