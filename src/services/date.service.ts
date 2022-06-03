import { injectable } from "inversify";
import { DateServiceInterface } from "./date.service.interface";

@injectable()
export class DateService implements DateServiceInterface {
  geDateAsYYYYmmDD(date: string): string | undefined {
    return date ? new Date(date).toJSON().slice(0, 10) : undefined;
  }

  geDateAsYYYYmmDDV2(date: string): string | undefined {
    if(!date) {
      return undefined;
    }
    const dateObject = new Date(date);
    return [dateObject.getFullYear(), (`0${dateObject.getMonth() + 1}`).slice(-2), (`0${dateObject.getDate()}`).slice(-2)].join("-");
  }
}
