'use strict';

export default function(app) {
	var serverUrl;

	if (process.env.NODE_ENV === 'production') {
		serverUrl = 'http://shreeapp.com'
	} else {
		serverUrl = 'http://localhost:3000'
	}

	app
		.constant('ROUTE_ERRORS', {
			auth: 'Authorization has been denied.',
		});

	app
		.constant('pubSubEvents', {
			message: {
				//Error Handling events
				_ADD_ERROR_MESSAGE_: '_ADD_ERROR_MESSAGE_',
				_CLEAR_ERROR_MESSAGES_: '_CLEAR_ERROR_MESSAGES_',
				_ERROR_MESSAGES_UPDATED_: '_ERROR_MESSAGES_UPDATED_',
				_ADD_USER_MESSAGE_: '_ADD_USER_MESSAGE_',
				_CLEAR_USER_MESSAGES_: '_CLEAR_USER_MESSAGES_',
				_USER_MESSAGES_UPDATED_: '_USER_MESSAGES_UPDATED_',

				//Dialog events
				_DISPLAY_DIALOG_: '_DISPLAY_DIALOG_',
				_DISPLAY_POPUP_DIALOG: '_DISPLAY_POPUP_',
				_DISPLAY_CONFIRMATION_DIALOG: '_DISPLAY_CONFIRMATION_',
				_USER_RESPONDED_: '_USER_RESPONDED_',

				//Ajax Server call events
				_SERVER_REQUEST_STARTED_: '_SERVER_REQUEST_STARTED_',
				_SERVER_REQUEST_ENDED_: '_SERVER_REQUEST_ENDED_',

				//Logs
				_LOG_TRACE_: '_LOG_TRACE_',
				_LOG_DEBUG_: '_LOG_DEBUG_',
				_LOG_INFO_: '_LOG_INFO_',
				_LOG_WARNING_: '_LOG_WARNING_',
				_LOG_ERROR_: '_LOG_ERROR_',
				_LOG_FATAL_: '_LOG_FATAL_',
				_REQUEST_CURRENT_USER_: '_REQUEST_CURRENT_USER_',
				_CURRENT_USER_RESPONSE_: '_CURRENT_USER_RESPONSE_',

				//loading spinner
				_SHOW_LOADING_SPINNER_: '_SHOW_LOADING_SPINNER_',
				_HIDE_LOADING_SPINNER_: '_HIDE_LOADING_SPINNER_',

				//loading spinner
				_HIDE_DIALOG_LOADING_SPINNER_: '_HIDE_DIALOG_LOADING_SPINNER_',
				_SHOW_DIALOG_LOADING_SPINNER_: '_SHOW_DIALOG_LOADING_SPINNER_',

				//toast methods
				_SHOW_SUCCESS_TOAST_MESSAGE_: '_SHOW_SUCCESS_TOAST_MESSAGE_',
				_SHOW_FAILURE_TOAST_MESSAGE_: '_SHOW_FAILURE_TOAST_MESSAGE_',
				_SHOW_FAILURE_DIALOG_MESSAGE_: '_SHOW_FAILURE_DIALOG_MESSAGE_'
			}
		});

	app
		.constant('configUrl', {
			serverUrl: serverUrl, //vinay pc
			getPosts: 'posts',
			createPost: 'post',
			likePost: 'like',
			commentPost: 'comment',
			bookMarkPost: 'bookmark',
			login: 'login',
			profile: 'profile',
			usergallary: 'usergallary',
			userposts: 'userposts'
		});
}