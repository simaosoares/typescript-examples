// Required to be first import
import "reflect-metadata";

import { Container } from "inversify";
import { LoggerService } from "../services/logger.service";
import { LoggerServiceInterface } from "../services/logger.service.interface";
import { TYPES } from "./types";
import { OrderServiceInterface } from "../services/order.service.interface";
import { OrderService } from "../services/order.service";

const container = new Container();
container.bind<LoggerServiceInterface>(TYPES.LoggerService).to(LoggerService)
container.bind<OrderServiceInterface>(TYPES.OrderService).to(OrderService)

export default container;
