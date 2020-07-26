// @ts-check
'use strict';

const mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await mongoose.connect(
		`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo-cluster-ip-service:27017/${process.env.MONGO_INITDB_DATABASE}`,
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
