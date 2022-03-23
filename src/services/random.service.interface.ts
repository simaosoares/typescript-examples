export interface RandomServiceInterface {
  randomNumber(): number;
  getRandomItemFromArray<T>(array: T[]): T;
}
