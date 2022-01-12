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
export const getDateDiff = (date, time) => {
	const now = dayjs().format('YYYY-MM-DD hh:mm:ss A');
	const examDate = dayjs(date + time).format("YYYY-MM-DD hh:mm:ss A");
	console.log(dayjs(examDate).diff(now, 'seconds'))
	return dayjs(examDate).diff(now, 'second') < 0
}
