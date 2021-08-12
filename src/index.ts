import container from "./config/inversify.config";
import { LoggerServiceInterface } from "./services/logger.service.interface";
import { TYPES } from "./config/types";
import { OrderModel } from "./models/order.model";
import { OrderService } from "./services/order.service";
import { OrderServiceInterface } from "./services/order.service.interface";

const loggerService: LoggerServiceInterface = container.get<LoggerServiceInterface>(TYPES.LoggerService);
const orderService: OrderServiceInterface = container.get<OrderService>(TYPES.OrderService);
const orderModel: OrderModel = orderService.createOrder();
loggerService.info("Your order has been created", orderModel, "index.ts");
