import * as Actions from "../../store/utils/actions.js";

export const ChangeList = (lista) => {
  return {
    type: Actions.ADDLIST,
    lista: lista,
  };
};

export const ChangeListOfList = (listaM) => {
  return {
    type: Actions.ADDLISTMASTER,
    listoflist: listaM,
  };
};

export const ChangeOrder = (ord) => {
  return {
    type: Actions.ADDLISTMASTER,
    order: ord,
  };
};


export const ChangeTittle = (tittle) => {
  return {
    type: Actions.CHANGETITTLE,
    tittle: tittle,
  };
};
export const UpdateTypeBoolean = (booleant) => {
  return {
    type: Actions.UPDATETYPE,
    tipo: booleant,
  };

};
export const ResetModified = () => {
  return {
    type: Actions.RESETMODIFIED,
  }
}