  Meteor.startup(function () {
    if (Posts.find().count() === 0) {

        var posts = [
        {'title': 'Dubstep-Free Zone',
        'content': 'Fast just got faster with Nexus S.'},
        {'title': 'All dubstep all the time',
        'content': 'Get it on!'},
        {'title': 'Savage lounging',
        'content': 'Leisure suit required. And only fiercest manners.'}
        ];

        for (var i = 0; i < posts.length; i++)
            Posts.insert({title: posts[i].title, content: posts[i].content});

    }
});

