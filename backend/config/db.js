// @ts-check
'use strict';

const mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await mongoose.connect(
		`mongodb+srv://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@cluster0-2rhro.mongodb.net/${process.env.MONGO_INITDB_DATABASE}?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		}
	);

	console.log(`MongoDB Connected ${conn.connection.host}`);
};

module.exports = connectDB;
