import { toReadableDate } from "./userData";

describe("toReadableDate", () => {
  it("date is being displayed correctly as 12/29/2018", () => {
    expect(toReadableDate(1546108200)).toEqual("12/29/2018");
  });
  it("date is being displayed correctly as 2/15/2209", () => {
    expect(toReadableDate(7546108275)).toEqual("2/15/2209");
  });
  it("date is being displayed correctly as 4/26/2006", () => {
    expect(toReadableDate(1146101175)).toEqual("4/26/2006");
  });
});
