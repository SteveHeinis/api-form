import express from 'express'; 
import mongoose from 'mongoose';

import config from './config/config';
import routes from './routes/routes';

const app = express()

app.listen(config.port, () => {
	console.log("Server is running")
})

mongoose.connect(config.db, () => {
	console.log("db connected")
})

app.use(express.urlencoded({
	extended: true
}))

app.use('/', routes)

export default app