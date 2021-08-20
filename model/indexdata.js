const mongoose = require('mongoose');
const schema = mongoose.Schema;

const serviceSchema = new schema(
    {
        title1: { type: String, required: true },
        title2: { type: String, required: true },
        description: { type: String, required: true },
    }
    , {
        timestamps: true
    }
);

const Portfolliodata = mongoose.model('Portfolliodata', serviceSchema)

exports.portDAta = Portfolliodata;

exports.allData = {
    // list deta model for service page
    mserviceData: () => {
        return [{
            title1: "Service 1",
            title2: "Web Development",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Assumenda qui, animi natus consequatur quas repellendus voluptatum accusantium vel ullam laboriosam itaque voluptatibus recusandae, repudiandae alias reprehenderit iure beatae maiores molestiae."
        },
        {
            title1: "Service 2",
            title2: "Android Application",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Assumenda qui, animi natus consequatur quas repellendus voluptatum accusantium vel ullam laboriosam itaque voluptatibus recusandae, repudiandae alias reprehenderit iure beatae maiores molestiae."
        },
        {
            title1: "Service 3",
            title2: "IOS Application",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Assumenda qui, animi natus consequatur quas repellendus voluptatum accusantium vel ullam laboriosam itaque voluptatibus recusandae, repudiandae alias reprehenderit iure beatae maiores molestiae."
        }]

    },
    // list data model for about page
    maboutData: () => {

        return [
            {
                title: "Introduction :",
                description: "Hi, my name is Pramod and I am a Web and Mobile Application Developer. I have over 2 years of experience in this fields in which I have Developed many Android Applications like Fitness App, Video Status App, Live Cricket Score App apartfrom this I have developed many small Tools apps which is usefull daily tasks. I have bachlors degree of Bachlors Of Computer Application (BCA) from Sutex Bank College in India."
            },
            {
                title: "Android Application Development :",
                description: "Hi, my name is Pramod and I am a Web and Mobile Application Developer. I have over 2 years of experience in this fields in which I have Developed many Android Applications like Fitness App, Video Status App, Live Cricket Score App apartfrom this I have developed many small Tools apps which is usefull daily tasks. I have bachlors degree of Bachlors Of Computer Application (BCA) from Sutex Bank College in India."
            },
            {
                title: "Web Application Development :",
                description: "I am a MERN stack developer. MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack."
            },
            {
                title: "Current Status :",
                description: "I am actively working on mobile and web application development as a freelancer as I am pursuing my studies at Conestoga College. I took Mobile Application development course which gives me wide exposure of different technologies which enhance my skills and prepare for getting job in this competitive market job."
            },
            {
                title: "Future Goals :",
                description: "Learning new skills is part of a software developer’s role due to the frequent changes and advancements in technology and frameworks. However, just learning programming skills isn’t enough if you want to succeed and get ahead in your software developer’s career so I started working on other skills like communication skill, Management skill and many other skills which will give me advantage over others and stand out separately. I want to become a part of a organization where everyone share there ideas and turn those ideas into reality."
            },
        ]
    },
    // list data model for portfolio page
    mportfolioData: () => {
        return [
            {
                title: "Android Application",
                imglink: "/Photos/appwork.jpg",
                link1: "https://unsplash.com/@balazsketyi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                link2: "https://unsplash.com/s/photos/application?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                author: "Balázs Kétyi"
            },
            {
                title: "Web Application",
                imglink: "/Photos/webwork.jpg",
                link1: "https://unsplash.com/@le_buzz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                link2: "https://unsplash.com/s/photos/application?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                author: "Le Buzz"
            },
            {
                title: "IOS Application",
                imglink: "/Photos/ioswork.jpg",
                link1: "https://unsplash.com/@pemmax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                link2: "https://unsplash.com/s/photos/application?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                author: "Przemyslaw Marczynski"
            },
        ]
    }

}



