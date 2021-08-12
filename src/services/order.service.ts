import { inject, injectable } from "inversify";
import { LoggerServiceInterface } from "./logger.service.interface";
import { OrderModel } from "../models/order.model";
import { OrderServiceInterface } from "./order.service.interface";
import { v4 as uuidv4 } from "uuid";
import { TYPES } from "../config/types";

@injectable()
export class OrderService implements OrderServiceInterface {
  constructor(
    @inject(TYPES.LoggerService) private loggerService: LoggerServiceInterface,
  ) { }

  createOrder(): OrderModel {
    this.loggerService.info("createOrder", null, this.constructor.name);
    return {
      id: uuidv4(),
    };
  }
}
