import express from 'express';
import User from '../model/user.js';
import multer from 'multer';

const router = express.Router()

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, path.resolve('../public', 'uploads'));
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.get('/',(req,res) => {
	User.find({}, (err, users) => {
		err ? res.send(err) : res.json(users)
	})
}) 

router.get('/:id', (req, res) => {
	User.findById(req.params.id, (err, user) => {
		err ? res.send(err) : res.json(user)
	})
})

router.post('/newuser', (req, res) => {
	let newUser = new User(req.body);
	newUser.save((err) => {
		err ? res.send(err) : res.json('User saved with success')
	})
})

router.post('/:id/update', (req, res) => {
	User.findOneAndUpdate(req.params.id, req.body, (err, updatedUser) => {
		err ? res.send(err) : res.json('User updated with success')
	})
})

router.post('/:id/remove', (req, res) => {
	User.findByIdAndRemove(req.params.id, (err, user) => {
		err ? res.send(err) : res.json('User removed with success')
	})
})

export default router 