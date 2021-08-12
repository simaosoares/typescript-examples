export interface LoggerServiceInterface {
  info(message: string, data: object | null, className: string): void;
}
