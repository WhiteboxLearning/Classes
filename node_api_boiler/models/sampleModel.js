function SampleModel() {

}

SampleModel.prototype.get = function (callback) {
    callback(null,"Node API is successfully created");
};

module.exports = SampleModel;