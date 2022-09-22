import * as types from "./actionTypes"


import axios from "axios"



const getData = (params) => (dispatch) => {
    dispatch({type:types.GET_DATA_REQUEST})
    axios.get("http://localhost:8080/allProduct", params).then((r) => dispatch({type:types.GET_DATA_SUCCESS, payload:r.data})).catch(e => dispatch({type:types.GET_DATA_FAILURE}))
    //console.log(params)
}

 

export {getData}