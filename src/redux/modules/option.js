import { createAction, handleActions } from "redux-actions";

const CATEGORY = "option/CATEGORY";
const START_DATE = "option/START_DATE";
const AREA_CODE = "option/AREA_CODE";
const LAT = "option/LAT";
const LNG = "option/LNG";
const CONTENT_TYPE_ID = "option/CONTENT_TYPE_ID";

const setCategory = createAction(CATEGORY, (category) => ({ category }));
const setStartDate = createAction(START_DATE, (startDate) => ({ startDate }));
const setAreaCode = createAction(AREA_CODE, (areaCode) => ({ areaCode }));
const setLat = createAction(LAT, (lat) => ({ lat }));
const setLng = createAction(LNG, (lng) => ({ lng }));
const setContentTypeId = createAction(CONTENT_TYPE_ID, (contentTypeId) => ({
  contentTypeId,
}));

const optionState = {
  category: "",
  startDate: "",
  areaCode: "",
  lat: "",
  lng: "",
  contentTypeId: "",
};

const option = handleActions(
  {
    [CATEGORY]: (state, action) => {
      return { ...state, category: action.payload.category };
    },
    [START_DATE]: (state, action) => {
      return { ...state, startDate: action.payload.startDate };
    },
    [AREA_CODE]: (state, action) => {
      return { ...state, areaCode: action.payload.areaCode };
    },
    [LAT]: (state, action) => {
      return { ...state, lat: action.payload.lat };
    },
    [LNG]: (state, action) => {
      return { ...state, lng: action.payload.lng };
    },
    [CONTENT_TYPE_ID]: (state, action) => {
      return { ...state, contentTypeId: action.payload.contentTypeId };
    },
  },
  optionState
);

export {
  setCategory,
  setAreaCode,
  setContentTypeId,
  setLat,
  setLng,
  setStartDate,
};

export default option;
