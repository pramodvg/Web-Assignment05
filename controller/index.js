const Portfolliodata = require('../model/indexdata')
const Servicedata = require('../model/servicedata/servicedata')
const Portfoliodata = require('../model/potfolliodata/portfolliodata')
const Aboutdata = require('../model/aboutdata/aboutdata')
const pusherdata = require('./pushers')

exports.index = function (req, res, next) {
    res.render('index', {
        Title: 'Home',
        activeHome: true,
        data: Portfolliodata.allData
    });

}


exports.about = (req, res, next) => {
    Aboutdata.aboutData.find()
        .then((result) => {
            res.render('about', { Title: 'About', activeAbout: true, data: result })
        })
        .catch((error) => {
            console.log("error in about page : " + error)
        })
}

exports.contactme = (req, res, next) => {
    res.render('contactme', { Title: 'Contact', activeContact: true })
}
exports.contactmepost = (req, res, next) => {
    return res.redirect('/contact');
}

exports.services = (req, res, next) => {
    Servicedata.serviceData.find()
        .then((result) => {
            res.render('services', { Title: 'Services', activeServices: true, data: result })
        })
        .catch((error) => {
            console.log("error in services page : " + error)
        })
}

exports.portfolio = (req, res, next) => {
    Portfoliodata.portfolioData.find()
        .then((result) => {
            res.render('portfolio', { Title: 'Portfolio', activePortfolio: true, data: result })
        })
        .catch((error) => {
            console.log("error in portfolio page : " + error)
        })
}


exports.add_servicesdata = (req, res) => {
    const servicedata = new Servicedata.serviceData({
        title1: "Service 3",
        title2: "IOS Application",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Assumenda qui, animi natus consequatur quas repellendus voluptatum accusantium vel ullam laboriosam itaque voluptatibus recusandae, repudiandae alias reprehenderit iure beatae maiores molestiae."
    })
    servicedata.save()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error)
        })
}
exports.add_aboutdata = (req, res) => {
    const aboutdata = new Aboutdata.aboutData(

        {
            title: "Future Goals :",
            description: "Learning new skills is part of a software developer’s role due to the frequent changes and advancements in technology and frameworks. However, just learning programming skills isn’t enough if you want to succeed and get ahead in your software developer’s career so I started working on other skills like communication skill, Management skill and many other skills which will give me advantage over others and stand out separately. I want to become a part of a organization where everyone share there ideas and turn those ideas into reality."
        }


    )
    aboutdata.save()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error)
        })
}
exports.add_portfoliodata = (req, res) => {
    const portfdata = new Portfoliodata.portfolioData({
        title: "IOS Application",
        imglink: "/Photos/ioswork.jpg",
        link1: "https://unsplash.com/@pemmax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        link2: "https://unsplash.com/s/photos/application?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Przemyslaw Marczynski"
    })
    portfdata.save()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error)
        })
}