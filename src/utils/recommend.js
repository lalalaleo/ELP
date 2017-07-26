import fetch from 'dva/fetch';

export function getRecommend (){
    return fetch('http://127.0.0.1:8888/midwayIsland/data')
        .then(checkStatus)
        .then(parseJSON)
        .then(data => ({ data }))
        .catch(err => ({ err }));
}