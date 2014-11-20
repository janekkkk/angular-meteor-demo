  Meteor.startup(function () {
    if (Authors.find().count() === 0) {

        var authors = [
        {'name': 'Tim'},
        {'name': 'Ben'},
        {'name': 'Jelle'},
        {'name': 'Bjorn'},
        {'name': 'Janek'}
        ];

        authors.forEach(function (e, i) {
           Authors.insert({name: e.name});
       });
    }

      if (Categories.find().count() === 0) {

        var categories = [
        {'name': 'Cats'},
        {'name': 'Code'},
        {'name': 'Design'},
        {'name': 'Drumsticks'},
        {'name': 'Flowers'}
        ];

        categories.forEach(function (e, i) {
           Categories.insert({name: e.name});
       });
    }
});


