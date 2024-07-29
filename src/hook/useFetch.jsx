import {useCallback, useEffect, useState} from "react";
import {isNullOrUndefined} from "@/lib/toolkit/util.js";
import {debounce} from "@/lib/toolkit/debounce.js";

/**
 * 用于请求的HOOK
 * @param requestMethod 请求方法
 * @param initResp 初始响应
 * @param debounceTime 接口防抖时间
 * @returns response 请求返回值
 * @returns error 请求的错误
 * @returns setProxyMethodParam  设置代理请求方法的参数
 */
const useFetch = (requestMethod,initResp = null,debounceTime = 300) =>{
    //请求返回值
    const [response, setResponse] = useState(initResp)
    //代理方法的请求参数
    const [requestMethodParam, setRequestMethodParam] = useState([])
    //捕获异常
    const [error, setError] = useState(null)
    //是否在加载
    const [loading, setLoading] = useState(false)

    // 防抖的设置代理请求方法的参数
    const debouncedSetRequestMethodParam = useCallback(debounce(setRequestMethodParam, debounceTime), []);

    //如果传NULL表示代理的方法不需要参数
    const setProxyMethodParam = (...param) => {
        debouncedSetRequestMethodParam(param.length === 0 ? null : [...param]);
    }

    useEffect(() => {
        try {
            setLoading(true)
            //避免初次渲染出现
            if (!isNullOrUndefined(requestMethodParam) && requestMethodParam.length === 0) {
                return
            }
            (async () => {
                const resp = isNullOrUndefined(requestMethodParam) ? await requestMethod() : await requestMethod(...requestMethodParam);
                setLoading(false)
                setResponse(resp)
            })()
        } catch (e) {
            setError(e)
        }
    }, [requestMethodParam]);

    return [
        response,
        setProxyMethodParam,
        error,
        loading
    ]
}

export {useFetch}