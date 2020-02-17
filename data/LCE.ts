/* 
    LCE provides wrappers for representing data that is loaded asynchronously.
    Loading - Data that has been requested, and is in loading state. Can also hold previousData.
    Content - Data that loaded successfully loaded, has a data property.
    Error - Data that failed to load with an error. Has the error object, and potentially previousData.
    NotRequested - Data that has not yet been requested.
*/

export type LOADING<T> = {
  stage: "LOADING";
  previousData: T;
};

export const loading = <T>(previousData?: T): LOADING<T> => {
  return {
    stage: "LOADING",
    previousData
  };
};

export type CONTENT<T> = {
  stage: "CONTENT";
  data: T;
};

export const content = <T>(data: T): CONTENT<T> => {
  return {
    stage: "CONTENT",
    data
  }
}

export type ERROR<T> = {
  stage: "ERROR";
  previousData: T;
  error: Error;
}

export const error = <T>(error: Error, previousData?: T) => {
  return {
    stage: "ERROR",
    error,
    previousData,
  }
};

export type NOT_REQUESTED<T> = {
  stage: "NOT_REQUESTED",
  previousData: T
}

export const notRequested = <T>(previousData?: T) => {
  return {
    stage: "NOT_REQUESTED",
    previousData
  }
}

export type LCE<T> = LOADING<T> | CONTENT<T> | ERROR<T> | NOT_REQUESTED<T>;

export const isLoading = <T>(lce: LCE<T>): lce is LOADING<T> => {
  return lce.stage === "LOADING";
}

export const isContent = <T>(lce: LCE<T>): lce is CONTENT<T> => {
  return lce.stage === "CONTENT";
}

export const isError = <T>(lce: LCE<T>): lce is ERROR<T> => {
  return lce.stage === "ERROR";
}

export const isNotRequested = <T>(lce: LCE<T>): lce is NOT_REQUESTED<T> => {
  return lce.stage === "NOT_REQUESTED";
}

export const getDataOrPrevious = <T>(lce: LCE<T>): T | undefined => {
  if (isContent(lce)) {
    return lce.data;
  } else {
    return lce.previousData;
  }
}