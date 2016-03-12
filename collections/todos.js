Todos = new Mongo.Collection('todos');

if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Todos.find().count() == 0) {
            [{
                label: 'test 1',
                isComplete: false
            }, {
                    label: 'build chain complete',
                    isComplete: false
                }, {
                    label: 'test3',
                    isComplete: true
                }].forEach(function (todo) {
                    Todos.insert(todo);
                })
        }

        // Meteor.setTimeout(function () {
        //     Todos.insert({
        //         label: 'Inserted after 20 secs',
        //         isComplete: true
        //     })
           
        // }, 20000)
        //  Todos.remove({ label: 'Inserted after 20 secs' })
    })
}