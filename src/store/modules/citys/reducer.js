import produce from 'immer';

const INITIAL_STATE = {
  citys: [],
};

export default function segment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@city/LIST_CITYS_SUCCESS':
      case '@city/ADD_CITY_SUCCESS':
      case '@city/EXCLUDE_CITY_REQUEST':
      case '@city/ADD_LOCALE_SUCCESS':
      case '@city/EXCLUDE_LOCALE_SUCCESS': {
        draft.citys = action.payload.citys;
        break;
      }
      default:
        break;
    }
  });
}
