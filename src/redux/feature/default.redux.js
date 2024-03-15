import {generateSlice} from "../../lib/toolkit/reduxUtil";

const tipMessage = generateSlice('TipMessage','this is a tip',
    {
        setTipMessage: (state, action) => action.payload
    }
)

/**
 * 导出action
 */
export const {setTipMessageAction} = tipMessage.actions
/**
 * 导出reducer
 */
export const tipMessageReducer = tipMessage.reducer