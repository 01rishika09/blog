const mongoose = require('mongoose')

const rolesSchema = new mongoose.Schema({
    role :{
        type:String
    },
    permissions : [{type:String}]
    },
    {timestamps: true}
);

const rolesModel = mongoose.model("roles", rolesSchema);

module.exports = rolesModel;