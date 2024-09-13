import {getRandomId} from "@/lib/toolkit/util.js";
import {generateSlice} from "@/lib/toolkit/redux.util.js";

const AUTHORIZE_SUCCESS = true;
const AUTHORIZE_FAIL = false;

/**
 *  用于监控TOKEN失效的state
 *  false 授权异常 true 授权正常
 *  TODO BUG 当用户是登录状态退出浏览器在登录会先跳转到首页再跳转到主页
 */
const authorizeProcessor = generateSlice(getRandomId(), AUTHORIZE_SUCCESS, {
    authorizeAction(state,action) {
        return action.payload
    },
});


export const authorizeReducer = authorizeProcessor.reducer
export const {authorizeAction} = authorizeProcessor.actions
export {AUTHORIZE_FAIL,AUTHORIZE_SUCCESS}