import { createAction, handleActions } from "redux-actions";


const COURSE_OPTIONS = "option/COURSE_OPTIONS";
const START_DATE = "option/START_DATE";
const WISH_WEEK = "option/WISH_WEEK";  // 
const START_AREA_CODE = "option/START_AREA_CODE"; // 출발지역 코드
const LAT = "option/LAT"; 
const LNG = "option/LNG";
const WIDE_AREA_CODE = "option/WIDE_AREA_CODE"; // 가고싶은 여행지 큰지역 코드 
const SMALL_AREA_CODE = "option/SMALL_AREA_CODE"// 가고싶은 여행지 시군구 코드 
const STYLE = "option/STYLE"; // 여행 스타일
const LOCATION_OPTIONS = "option/LOCATION_OPTIONS"; //여행 테마

const setCourseOptions = createAction(COURSE_OPTIONS, (courseOptions) => ({ courseOptions }));
const setStartDate = createAction(START_DATE, (startDate) => ({ startDate }));
const setWishWeek = createAction(WISH_WEEK, (wishWeek) => ({ wishWeek }));
const setStartAreaCode = createAction(START_AREA_CODE, (startAreaCode) => ({ startAreaCode }));
const setLat = createAction(LAT, (lat) => ({ lat }));
const setLng = createAction(LNG, (lng) => ({ lng }));
const setWideAreaCode = createAction(WIDE_AREA_CODE, (wideAreaCode) => ({ wideAreaCode }));
const setSmallAreaCode = createAction(SMALL_AREA_CODE, (smallAreaCode) => ({ smallAreaCode }));
const setStyle = createAction(STYLE, (style) => ({ style }));
const setLocationOptions = createAction(LOCATION_OPTIONS, (locationOptions) => ({ locationOptions }));


const optionState = {
  courseOptions: "",
  startDate: "",
  wishWeek: "",
  startAreaCode: "",
  lat: "",
  lng: "",
  wideAreaCode: "",
  smallAreaCode: "",
  style: "",
  locationOptions: "",

};

const option = handleActions(
  {

    [COURSE_OPTIONS]: (state, action) => {
      return { ...state, courseOptions: action.payload.courseOptions };

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

    [LOCATION_OPTIONS]: (state, action) => {
      return { ...state, locationOptions: action.payload.locationOptions };

    },
  },
  optionState
);

export {

  setCourseOptions,

  setStartDate,
  setWishWeek,
  setStartAreaCode,
  setLat,
  setLng,
  setWideAreaCode,
  setSmallAreaCode,
  setStyle,
  setLocationOptions,
};

export default option;

