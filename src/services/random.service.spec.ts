import { RandomServiceInterface } from "./random.service.interface";
import { RandomService } from "./random.service";

describe("RandomService", () => {
  const service: RandomServiceInterface = new RandomService();

  describe("randomNumber()", () => {
    it("returns a random number between 0 and 1", () => {
      expect(service.randomNumber()).toBeGreaterThanOrEqual(0);
      expect(service.randomNumber()).toBeLessThanOrEqual(1);
    });
  });

  describe("getRandomItemFromArray()", () => {
    it("returns a random item from the array", () => {
      const itemFromArray = service.getRandomItemFromArray([1, 2]);
      expect(itemFromArray).toBeDefined();
    });
  });
});
