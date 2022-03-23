import { randomBytes } from "crypto";
import { injectable } from "inversify";
import { RandomServiceInterface } from "./random.service.interface";

@injectable()
export class RandomService implements RandomServiceInterface {

  /**
   * Returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
   * with approximately uniform distribution over that range — which you can then scale to your desired range.
   * Equivalent to Math.random() but using a cryptographically strong pseudorandom number generator (CSPRNG).
   */
  public randomNumber = (): number => {
    return this.randomInt8Value() / 256;
  };

  /**
   * Returns a randomized item from the array
   * @param array array
   * @returns element
   */
  public getRandomItemFromArray<T>(array: T[]): T {
    const randomIndex = Math.floor(this.randomNumber() * array.length);
    return array[randomIndex];
  }

  /**
   * Generates a random unsigned 8-bit integer.
   * @returns {number} random integer
   */
  private randomInt8Value(): number {
    const buffer: Buffer = randomBytes(1);
    return buffer.readUInt8(0);
  }
}
