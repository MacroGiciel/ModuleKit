const moduleConfig = require('./module.json');

module.exports = {
    init: function(data){
        data = JSON.parse(data);
        console.log(`${moduleConfig.name}: ${data}`);
    },
    register: async function(){
        var mode = {
            "yourmode": {
                "name": "Your Mode",
                "description": "This is mode ?"
            }
        };
        module.exports.options = mode;
        return mode;
    }
}