import * as Type from './type';

import allClients from './clients.json'

const initState = function () {
  return {
    test:{},
    clients:allClients,
    selectedClient:null
  };
}

export default function (state = initState(), action = {}) {
  switch (action.type) {
    case Type.ACTION_SELECT_CLIENT:
      return Object.assign({}, state, {
        selectedClient: action.data,
      });
    case Type.ACTION_SEARCH_CLIENTS:
      var keyword = action.data.toLowerCase()
      console.log('keyword', keyword)
      var clients = allClients

      if(keyword) {
        clients = allClients.filter((client)=>{
          var content = `${client.name} ${client.job}`.toLowerCase()
          return content.indexOf(keyword) !== -1
        })
      }

      return Object.assign({}, state, {
        clients: clients,
      });
    default:
      return state;
  }
}
