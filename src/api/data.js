/**
 * Created by Administrator on 2018/9/18.
 */
import  axios from 'axios'
axios.defaults.baseURL = '/api'
export  const HOST = 'http:localhost:8000/one/'
export const ERR_OR = 200;

export  function getBanners(){
  const url = 'banners.php';

  return axios.get(url)

  }
