import urlConfig from './config.js'

const request = {}
const headers = {}
let token = '';
let device_uuid = '';
let brand = '';
// if(uni.getStorageSync("device_uuid")){
// 	device_uuid = uni.getStorageSync("device_uuid");
// }else{
	// uni.getSystemInfo({
	// 	success: res => {
	// 		if(res){
	// 			console.log(res);
	// 			device_uuid = res.deviceId;
	// 			brand = res.brand;
	// 			uni.setStorageSync('device_uuid',device_uuid);
	// 		}
	// 	}
	// });
// }

// console.log(device_uuid);
// console.log(brand);

request.globalRequest = (url, method, data = {}) => {
	console.log(urlConfig + url);
	console.log(token);
	
	if(uni.getStorageSync("user")){
		token = uni.getStorageSync("user").token;
	}
	let headers = {};
	if(token)headers.token = token;
	return uni.request({
		url: urlConfig + url,
		sslVerify: true,
		method:method,
		data: data,
		header: headers,
		dataType: 'json',
		withCredentials: true
	}).then(res => {
		console.log(res);
		if (res[1].statusCode == 200) {
			return res[1]
		} else {
			throw res[1].data
		}
	}).catch(parmas => {
		switch (parmas.code) {
			case 401:
				uni.clearStorageSync()
				break
			default:
				return Promise.reject()
		}
	})
}

request.globalUpload = (url, name, data = {}) => {
	console.log(urlConfig + url);
	console.log(token);
	
	if(uni.getStorageSync("user")){
		token = uni.getStorageSync("user").token;
	}
	let headers = {'app-type':'android','app-version':'3.6','device-uuid':device_uuid,'app-platform':brand};
	if(token)headers.token = token;
	return uni.uploadFile({
		url: urlConfig + url,
		header: headers,
		name:name,
		formData: data.formData ? data.formData : {},
		filePath: data.filePath ? data.filePath : '',
		files: data.fileArr ? data.fileArr : [],
		fileType: data.fileType ? data.fileType : 'image'
	}).then(res => {
		if (res[1].statusCode == 200) {
			let ret_data = {...res[1]}
			ret_data['data'] = JSON.parse(ret_data['data'])
			return ret_data
		} else {
			throw res[1].data
		}
	}).catch(parmas => {
		switch (parmas.code) {
			case 401:
				uni.clearStorageSync()
				break
			default:
				return Promise.reject()
		}
	})
}
export default request
