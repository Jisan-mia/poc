export const getAccessToken = async () => {
	try {
		const res = await Auth.currentSession();
		return res.getIdToken().getJwtToken();
	} catch (error) {
		return '';
	}
};

export const getAuthorizationHeader = async () => {
	const token = await getAccessToken();
	const headers = {
		Authorization: `Bearer ${token}`,
	};
	return headers;
};