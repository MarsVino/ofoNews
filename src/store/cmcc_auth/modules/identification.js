import { 
    UPDATE_IDENTIFICATION, 
    UPDATE_IDCARD, 
    UPDATE_REALNAME, 
    UPDATE_YEARS ,
    UPDATE_PHONE,
    UPDATE_CMCC_INFO,
    UPDATE_SCHOOL_YEAR
} from '../mutation-types';

const state = {
    info: null,
    realname: '',
    idcard: '',
    years: null,
    phone: '',
    cmccInfo: null,
    schoolYear:  null
}

const mutations = {
    [UPDATE_IDENTIFICATION](state, values) {
        state.info = values;
        state.realname = values.idcardAuthInfo.realname;
        state.idcard = values.idcardAuthInfo.idcard;
        state.authInfo = values.authInfo
    },
    [UPDATE_REALNAME](state, values) {
        state.realname = values
    },
    [UPDATE_IDCARD](state, values) {
        state.idcard = values
    },
    [UPDATE_YEARS](state, values) {
        state.years = values;
    },
    [UPDATE_PHONE](state, values) {
        state.phone = values;
    },
    [UPDATE_CMCC_INFO](state, values) {
        state.cmccInfo = values;
    },
    [UPDATE_SCHOOL_YEAR](state, values) {
        state.schoolYear = values;
    }
}

const getters = {

}

const actions = {

}

export default {
    state,
    actions,
    mutations,
    getters
}