import {getRandomId, isBlank} from "@/lib/toolkit/util.js";
import {generateSlice} from "@/lib/toolkit/redux.util.js";
import {getToken} from "@/lib/toolkit/local.storage.js";

const AUTHORIZE_SUCCESS = true;
const AUTHORIZE_FAIL = false;

/**
 *  用于监控TOKEN失效的state
 *  false 授权异常 true 授权正常
 */
const authorizeProcessor = generateSlice(getRandomId(), {hasAuthorize: AUTHORIZE_FAIL}, {
    authorizeAction() {
        return {hasAuthorize:isBlank(getToken()) ? AUTHORIZE_FAIL : AUTHORIZE_SUCCESS}
    },
});


export const authorizeReducer = authorizeProcessor.reducer
export const {authorizeAction} = authorizeProcessor.actions
export {AUTHORIZE_FAIL,AUTHORIZE_SUCCESS}