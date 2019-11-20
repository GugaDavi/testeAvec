export function listCitysRequest() {
  return {
    type: '@city/LIST_CITYS_REQUEST',
  };
}

export function listCitysSuccess(citys) {
  return {
    type: '@city/LIST_CITYS_SUCCESS',
    payload: { citys },
  };
}

export function addCityRequest(city) {
  return {
    type: '@city/ADD_CITY_REQUEST',
    payload: { city },
  };
}

export function addCitySuccess(citys) {
  return {
    type: '@city/ADD_CITY_SUCCESS',
    payload: { citys },
  };
}

export function excludeCityRequest(citys) {
  return {
    type: '@city/EXCLUDE_CITY_REQUEST',
    payload: { citys },
  };
}

export function addLocaleRequest(locale) {
  return {
    type: '@city/ADD_LOCALE_REQUEST',
    payload: { locale },
  };
}

export function addLocaleSuccess(citys) {
  return {
    type: '@city/ADD_LOCALE_SUCCESS',
    payload: { citys },
  };
}

export function excludeLocaleRequest(locale) {
  return {
    type: '@city/EXCLUDE_LOCALE_REQUEST',
    payload: { locale },
  };
}

export function excludeLocaleSuccess(citys) {
  return {
    type: '@city/EXCLUDE_LOCALE_SUCCESS',
    payload: { citys },
  };
}
