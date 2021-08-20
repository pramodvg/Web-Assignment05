const Pusher = require("pusher");

pusher = new Pusher({
    appId: "1247355",
    key: "7a0ef451ea98ea900b69",
    secret: "a7ada5bbc720e0e51788",
    cluster: "ap2",
    useTLS: true
});

exports.pusherGet = (req, res) => {
    res.send('pusher')
}

exports.constactpost = (req, res, next) => {
    pusher.trigger("my-channel", "my-event", {
        Msg: req.body.mName
    });
    res.redirect('/contact');
}
