import * as Actions from "../utils/actions.js";

const InitialState = {
  lista: [],
  modified: 0,
  listoflist: [],
  tittle: "Formulario de Renderizado",
  order: 0,
};
const form1reducer = (state = InitialState, action) => {
  switch (action.type) {
    case Actions.ADDLIST: {
      return {
        ...state,
        lista: action.lista,
        modified: action.lista.length,
      };
    }
    case Actions.ADDLISTMASTER: {
      return {
        ...state,
        //modified:action.lista.length,
        listoflist: action.listoflist,
      };
    }
    case Actions.CHANGETITTLE: {
      return {
        ...state,
        tittle: action.tittle,
      };
    }
    case Actions.UPDATETYPE: {
      return {
        ...state,
        tipo: action.tipo,
      };
    }

    case Actions.CHANGEORDER: {
      return {
        ...state,
        order: action.order,
      };
    }

    case Actions.RESETMODIFIED: {
      return {
        ...state,
        modified: 0,
      }
    }

    default:
      return state;
  }
};
export default form1reducer;
