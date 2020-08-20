// @ts-check
'use strict';

const mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await mongoose.connect(
		`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@cluster0-shard-00-00.2rhro.mongodb.net:27017,cluster0-shard-00-01.2rhro.mongodb.net:27017,cluster0-shard-00-02.2rhro.mongodb.net:27017/${process.env.MONGO_INITDB_DATABASE}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		}
	);

	console.log(`MongoDB connected ${conn.connection.host}`);
};

module.exports = connectDB;
