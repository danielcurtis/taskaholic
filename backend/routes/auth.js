// @ts-check
'use strict';

const express = require('express');
const {
	register,
	login,
	logout,
	getMe,
	forgotPassword,
	resetPassword,
	updateDetails,
	updatePassword,
	crsf,
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');
// Add authorized users authorize('user', 'admin')

router.post('/register', register);
router.post('/login', login);
router.post('/forgotpassword', forgotPassword);
router.get('/me', protect, getMe);
router.get('/logout', protect, logout);
router.get('/csrf-token', crsf);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
