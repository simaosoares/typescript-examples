import { injectable } from "inversify";
import { LoggerServiceInterface } from "./logger.service.interface";

@injectable()
export class LoggerService implements LoggerServiceInterface {
  info(message: string, data: object, className: string) {
    this.writeLog("info", message, data, className);
  }

  private writeLog(level: string, message: string, data: object | null, className: string) {
    const outObject = {
      level: level,
      timestamp: new Date().toISOString(),
      message: message,
      logger: className,
      data,
      context: this.constructor.name,
    };
    console.log(JSON.stringify(outObject));
  }
}
