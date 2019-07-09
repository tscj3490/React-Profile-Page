import * as Type from './type';

export const selectClient = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.ACTION_SELECT_CLIENT,
            data : data
        });
    }
  };

export const search = (keyword) => {
    return (dispatch)=>{
        dispatch({
            type : Type.ACTION_SEARCH_CLIENTS,
            data : keyword
        });
    }
  };