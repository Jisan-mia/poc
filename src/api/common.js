import dayjs from "dayjs";

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
export const setIsExpired = (date, time) => {
	const now = dayjs().format('YYYY-MM-DD hh:mm:ss A');
	const examDate = dayjs(date + time).format("YYYY-MM-DD hh:mm:ss A");
	// console.log(dayjs(examDate).diff(now, 'hour') > 0)
	return dayjs(examDate).diff(now, 'hour') < 0
}