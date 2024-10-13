import axios from "axios";
import { Dispatch } from 'redux';
// import 

export const queryLogList = ()=> async (dispatch: Dispatch<any>) =>{
  try{
    const response =  await axios.get('https://api.example.com/log');
    dispatch({
      type: 'FETCH_LOGS_SUCCESS',
      payload: response.data
    })
  }catch(err){
    console.error(err)
  }
}