pc.script.create('test', function (context) {
    var Test = function (entity) {
        this.entity = entity;  
    };

    Test.prototype = {
        initialize: function () {
        },

        update: function (dt) {
        },
    };

    return Tank;
});