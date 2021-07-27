exports.index = function (req, res, next) {
    res.render('index', {
        Title: 'Express',
        ParaText: 'This is First Paragraph'
    });
}

exports.about = (req, res, next) => {
    res.render('about', { title: 'About this page', paragraph: 'This is about my Project' })
}