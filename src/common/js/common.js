export function UserInfo() {
	let userInfo = window.localStorage.getItem('userInfo');
	userInfo = userInfo? JSON.parse(userInfo): '';
	return userInfo;
}

