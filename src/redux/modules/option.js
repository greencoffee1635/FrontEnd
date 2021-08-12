import { createAction, handleActions } from "redux-actions";

const CATEGORY = "option/CATEGORY";
const START_DATE = "option/START_DATE";
const WISH_WEEK = "option/WISH_WEEK"; //
const START_AREA_CODE = "option/START_AREA_CODE"; // 출발지역 코드
const LAT = "option/LAT";
const LNG = "option/LNG";
const WIDE_AREA_CODE = "option/WIDE_AREA_CODE"; // 가고싶은 여행지 큰지역 코드
const SMALL_AREA_CODE = "option/SMALL_AREA_CODE"; // 가고싶은 여행지 시군구 코드
const STYLE = "option/STYLE"; // 여행 스타일
const CONTENT_TYPE_ID = "option/CONTENT_TYPE_ID"; //여행 테마

const setCategory = createAction(CATEGORY, (category) => ({ category }));
const setStartDate = createAction(START_DATE, (startDate) => ({ startDate }));
const setWishWeek = createAction(WISH_WEEK, (wishweek) => ({ wishweek }));
const setStartAreaCode = createAction(START_AREA_CODE, (startAreaCode) => ({
  startAreaCode,
}));
const setLat = createAction(LAT, (lat) => ({ lat }));
const setLng = createAction(LNG, (lng) => ({ lng }));
const setWideAreaCode = createAction(WIDE_AREA_CODE, (wideAreaCode) => ({
  wideAreaCode,
}));
const setSmallAreaCode = createAction(SMALL_AREA_CODE, (smallAreaCode) => ({
  smallAreaCode,
}));
const setStyle = createAction(STYLE, (style) => ({ style }));
const setContentTypeId = createAction(CONTENT_TYPE_ID, (contentTypeId) => ({
  contentTypeId,
}));

const optionState = {
  category: "",
  startDate: "",
  wishWeek: "",
  startAreaCode: "",
  lat: "",
  lng: "",
  wideAreaCode: "",
  smallAreaCode: "",
  style: "",
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
    [WISH_WEEK]: (state, action) => {
      return { ...state, wishWeek: action.payload.wishWeek };
    },
    [START_AREA_CODE]: (state, action) => {
      return { ...state, startAreaCode: action.payload.startAreaCode };
    },
    [LAT]: (state, action) => {
      return { ...state, lat: action.payload.lat };
    },
    [LNG]: (state, action) => {
      return { ...state, lng: action.payload.lng };
    },
    [WIDE_AREA_CODE]: (state, action) => {
      return { ...state, wideAreaCode: action.payload.wideAreaCode };
    },
    [SMALL_AREA_CODE]: (state, action) => {
      return { ...state, smallAreaCode: action.payload.smallAreaCode };
    },
    [STYLE]: (state, action) => {
      return { ...state, style: action.payload.style };
    },
    [CONTENT_TYPE_ID]: (state, action) => {
      return { ...state, contentTypeId: action.payload.contentTypeId };
    },
  },
  optionState
);

export {
  setCategory,
  setStartDate,
  setWishWeek,
  setStartAreaCode,
  setLat,
  setLng,
  setWideAreaCode,
  setSmallAreaCode,
  setStyle,
  setContentTypeId,
};

export default option;
