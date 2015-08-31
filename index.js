var should = require('should'),
    async = require('async');

// Remove all documents from the given models and assert success.
//
// Example usage:
//
// beforeEach(function (done) {
//     removeDocuments([Artifact, Intermediate], done);
// });
//
module.exports.removeDocuments = function (models, callback) {
    async.map(
        models,
        function (coll, callback) {
            coll.remove({}, callback);
        },
        function (err, results) {
            should(err).equal(null);
            callback();
        }
    );
};

// Save the given instances and assert success.
//
// Example usage:
//
// beforeEach(function (done) {
//     artifact = new Artifact();
//     intermediate = new Intermediate();
//
//     saveAll([artifact, intermediate], done);
// });
module.exports.saveAll = function (instances, callback) {
    async.map(
        instances,
        function (item, callback) {
            item.save(callback);
        },
        function (err, results) {
            should(err).equal(null);
            callback();
        }
    );
};
