'use strict';

module.exports = {
    hello: function(req, res) {
        return res.send({
            hello:"world",
            goodbye:"world"
        });
    }
};