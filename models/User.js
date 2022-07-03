//import only schema constructor, model function, types from mongoose library
const { Schema, model, Types}= require('mongoose')

const UserSchema = new Schema({
    username:{
        type: String, 
        unique: true, 
        required: true, 
        trim:true, 
    },
    email:{
        type: String, 
        unique:true, 
        required: true, 
        match:[/.+@.+\..+/, 'Please enter a valid e-mail address']
    }, 
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
     // prevents virtuals from creating duplicate of _id as `id`
    id: false
});


UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

//creates user model using UserSchema
const User = model('User', UserSchema);

//export user model 
module.exports = User;