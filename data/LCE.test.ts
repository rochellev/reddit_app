import {loading} from "./LCE";

describe("Loading", () => {
  it("makes a LOADING<T> object", () => {
    const emptyLoadingObject = loading();
    expect(emptyLoadingObject).toEqual({LCE: "LOADING"});
  });

  it("makes a loading object with previousData", () => {
    const loadingString = loading("previousValue");
    expect (loadingString).toEqual({LCE: "LOADING", previousData: "previousValue"});
  });
});