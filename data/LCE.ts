/* 
    LCE provides wrappers for representing data that is loaded asynchronously.
    Loading - Data that has been requested, and is in loading state. Can also hold previousData.
    Content - Data that loaded successfully loaded, has a data property.
    Error - Data that failed to load with an error. Has the error object, and potentially previousData.
*/

export type LOADING<T> = {
  LCE: "LOADING",
  previousData: T,
};

export const loading = <T>(previousData?: T): LOADING<T> => {
  return {
    LCE: "LOADING",
    previousData,
  }
};