const SampleModel =  require('../models/sampleModel');
const modelObj = new SampleModel();
function SampleController(){

}
SampleController.prototype.create = function(req,res){
    modelObj.get(function (err,result) {
        res.send(result);
    })
};

module.exports = SampleController;