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

  describe("geDateTimeWithZone()", () => {
    it("returns date for the given zone", function() {
      expect(dateService.geDateTimeWithZone(date, "America/Los_Angeles")).toBe("2022-06-03T04:24:48.648-07:00");
    });

    it("returns date for the given zone without offset", function() {
      expect(dateService.geDateTimeWithZone("2022-06-03T11:24:48.648", "America/Los_Angeles")).toBe("2022-06-03T11:24:48.648-07:00");
    });

    it("returns undefined when date is empty", function() {
      expect(dateService.geDateTimeWithZone("", "")).toBeUndefined();
    });
  });
});
