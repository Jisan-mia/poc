export const getAccessToken = async () => {
	
};

export const getAuthorizationHeader = async () => {
	const headers = {
		Authorization: `Bearer ${localStorage.getItem('token')}`,
	};
	return headers;
};


export const getNotification = (type, message) => {
	return {
		type,
		message
	}
} 