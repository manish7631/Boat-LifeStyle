import * as types from "./actionTypes"


import axios from "axios"



const getData = (params) => (dispatch) => {
    dispatch({type:types.GET_DATA_REQUEST})
    axios.get(`https://babita-boat.herokuapp.com/allproduct`, params).then((r) => dispatch({type:types.GET_DATA_SUCCESS, payload:r.data})).catch(e => dispatch({type:types.GET_DATA_FAILURE}))
    
}

 

export {getData}