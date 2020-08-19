// @ts-check

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Initate UserContext
// Set context to default fallback value
const UserContext = createContext({ auth: false, data: {} });

// Create function to provide UserContext
const UserProvider = ({ children }) => {
	const [user, setUser] = useState({ auth: false, data: {} });

	const getMe = async () => {
		try {
			const { data } = await axios.get('/api/v1/auth/me');

			setUser({
				auth: data.success,
				data: data.data,
			});
		} catch (err) {
			console.log('Log in or sign up!');
		}
	};

	useEffect(() => {
		getMe();
	}, []);

	const login = async (email, password) => {
		try {
			const { data } = await axios.post('/api/v1/auth/login', {
				email: email,
				password: password,
			});

			setUser({
				auth: data.success,
				data: {},
			});
		} catch (err) {
			setUser({
				auth: false,
				data: {},
			});
			console.log(`Log in error: ${err}`);
		}

		getMe();
	};

	const logout = async () => {
		try {
			await axios.get('/api/v1/auth/logout');

			setUser({
				auth: false,
				data: {},
			});
		} catch (err) {
			console.log(`Log out error: ${err}`);
		}
	};

	const signup = async (name, email, password) => {
		try {
			const { data } = await axios.post('/api/v1/auth/register', {
				name: name,
				email: email,
				password: password,
			});

			// Create placeholder items for new users
			await axios.post('/api/v1/habits', {
				name: 'Workout',
				streak: 5,
			});

			await axios.post('/api/v1/habits', {
				name: 'Yoga',
				streak: 3,
			});

			await axios.post('/api/v1/habits', {
				name: 'Meditate',
				streak: 6,
			});

			await axios.post('/api/v1/tags', {
				name: 'BIO-101',
				due: new Date(),
				description: 'Tag to track tasks related to BIO-101',
				status: 'In Progress',
			});

			await axios.post('/api/v1/tags', {
				name: 'HOUSEKEEPING',
				due: new Date(),
				description: 'Tag to track random stuff.',
				status: 'In Progress',
			});

			await axios.post('/api/v1/tags', {
				name: 'SIDEPROJECT',
				due: new Date(),
				description: 'Tag to track side project.',
				status: 'In Progress',
			});

			// Entering callback hell
			const tags = await axios.get('/api/v1/tags');

			try {
				await axios.post(`/api/v1/tags/${tags.data.data[2]._id}/tasks`, {
					name: 'Finish biology lab',
					due: new Date(),
					timelog: [[new Date(), 1]],
					description: 'Get the notes from Dominick!',
					status: 'In Progress',
				});

				await axios.post(`/api/v1/tags/${tags.data.data[2]._id}/tasks`, {
					name: 'Midterm Exam',
					due: new Date(),
					timelog: [[new Date(), 2]],
					description: 'Crush the test',
					status: 'Completed',
				});

				await axios.post(`/api/v1/tags/${tags.data.data[1]._id}/tasks`, {
					name: 'Walk the turtle',
					due: new Date(),
					timelog: [],
					description: `Don't forget the treats`,
					status: 'To Do',
				});

				await axios.post(`/api/v1/tags/${tags.data.data[0]._id}/tasks`, {
					name: 'Set up the business email',
					due: new Date(),
					timelog: [],
					description: `Ask Hannah about email clients.`,
					status: 'To Do',
				});
			} catch (err) {
				console.log('Creating initial tasks:', err);
			}

			setUser({
				auth: data.success,
				data: {},
			});
		} catch (err) {
			console.log(`Sign up error: ${err}`);
		}

		getMe();
	};

	return (
		<UserContext.Provider value={{ user, login, logout, signup }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
