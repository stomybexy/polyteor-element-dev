SmartPub.smartPublish('todos', function () {
    return {
        coll: Todos,
        sort: {
            label: 1
        }
    }
})

SmartPub.smartPublish('open', function () {
    return {
        selector:{
            isComplete: false
        },
        coll: Todos,
        sort: {
            label: -1
        }
    }
})