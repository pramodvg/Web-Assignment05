const form = document.getElementById('submit-form');
const form2 = document.getElementById('hirebtn');
const showdata = document.getElementById('sentdata');

var pusher = new Pusher('7a0ef451ea98ea900b69', {
    cluster: 'ap2'
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
        showdata.innerHTML = data.Msg;
});