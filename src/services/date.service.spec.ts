import { DateServiceInterface } from "./date.service.interface";
import { DateService } from "./date.service";

describe("DateService test", () => {
  const date = "2022-06-03T11:24:48.648Z";
  let dateService: DateServiceInterface;

  beforeAll(() => {
    dateService = new DateService();
  });

  describe("geDateAsYYYYmmDD()", () => {
    it("returns date in format YYYY-mm-DD", function() {
      const dateAsYYYYmmDD: string | undefined = dateService.geDateAsYYYYmmDD(date);
      expect(dateAsYYYYmmDD).toBe("2022-06-03");
    });

    it("returns undefined when date is empty", function() {
      const dateAsYYYYmmDD: string | undefined = dateService.geDateAsYYYYmmDD("");
      expect(dateAsYYYYmmDD).toBeUndefined();
    });
  });

  describe("geDateAsYYYYmmDDV2()", () => {
    it("returns date in format YYYY-mm-DD", function() {
      const dateAsYYYYmmDD: string | undefined = dateService.geDateAsYYYYmmDDV2(date);
      expect(dateAsYYYYmmDD).toBe("2022-06-03");
    });

    it("returns undefined when date is empty", function() {
      const dateAsYYYYmmDD: string | undefined = dateService.geDateAsYYYYmmDDV2("");
      expect(dateAsYYYYmmDD).toBeUndefined();
    });
  });
});
