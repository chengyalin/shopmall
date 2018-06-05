import axios from 'axios'
/**
 * banner列表
 */
export function bannerList(options){
		return axios.get('/ad/ad/list/',{
			params:{
				options
			}
		}).then((res) => {
		return Promise.resolve(res)
	}).catch((res) => {　

	})
}
