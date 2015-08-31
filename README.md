mongoose-test-helpers
=====================

Test helpers for Mongoose.


### removeDocuments(models, callback)

Remove all documents from the given models and assert success.

Example usage:

```
beforeEach(function (done) {
    removeDocuments([Artifact, Intermediate], done);
});
```

### saveAll(documents, callback)

Save the given instances and assert success.

Example usage:

```
beforeEach(function (done) {
    artifact = new Artifact();
    intermediate = new Intermediate();

    saveAll([artifact, intermediate], done);
});
```


Installation
------------

Install mongoose-test-helpers by running:

```
npm install --save-dev mongoose-test-helpers
```

License
-------

The project is licensed under the two-clause BSD license.
