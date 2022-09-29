const module = require('./module.json');

module.exports = {
    init: function(data){
        data = JSON.parse(data);
        console.log(`${module.name}: ${data}`);
    },
    register: async function(){
        var mode = {
            "yourmode": {
                "name": "Your Mode",
                "description": "This is mode ?"
            }
        };
        var argument = {
            "argument": []
        };
        return [mode, argument];
    }
}