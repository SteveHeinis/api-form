import mongoose from 'mongoose';

const User = new mongoose.Schema({
	prenom: {type:String, required:true}, 
	nom: {type:String, required:true},
	age: {type:Number, required: true}, 
	picture: {type:String}
})

export default mongoose.model('User', User)