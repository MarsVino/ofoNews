import { INVITE_INFORMATION } from '../mutation-types';
import api from '@/service/invite'
import router from '@/router/invite'
import track from '@/dot/invite'
const state = {
   nameArr : [],
   information:'',
   userName : '',
   inviteKey : '',
   ab : '',
   isModal : false
}
/**
 * mutations
 */
const mutations = {
    [INVITE_INFORMATION](state, value) {
        let nameArr = JSON.stringify(JSON.parse(value).contacts);//所有手机号组成的数组
        console.log('nameArr',nameArr)
        api.invitePhoneList({tels:nameArr})
            .then(data => {
                if(data.errorCode == 200) {
                    return data.values.unregistedTels//返回的手机号数组
                }else{
                    window.tip(data.msg)
                }
            })
            .then(params => {
                    // let nameList = [];
                    // params.forEach(i => { //用手机号查找对应的姓名组成数组
                    //     nameList.push(state.information[i])
                    // })
                    state.nameArr = params;
                    if(state.nameArr.length > 0){
                        router.push('name')
                    }else{
                      state.isModal = true;
                      track.dot_invite_nofriends()
                    }
            })
    }
}
/**
 * getters
 */
const getters = {
    getNames: state => state.nameArr,
}
/**
 * actions
 */
const actions = {
    getNames({commit},params){
        commit(INVITE_INFORMATION, params)
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}
