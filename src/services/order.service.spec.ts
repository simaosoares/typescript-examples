import { OrderModel } from "../models/order.model";
import { OrderService } from "./order.service";
import { OrderServiceInterface } from "./order.service.interface";
import { LoggerServiceInterface } from "./logger.service.interface";

describe("OrderService test", function() {
  let orderService: OrderServiceInterface;
  let loggerServiceMock: jasmine.SpyObj<LoggerServiceInterface>

  beforeAll(() => {
    loggerServiceMock = jasmine.createSpyObj<LoggerServiceInterface>(["info"]);
    orderService = new OrderService(loggerServiceMock);
  });

  it("creates an order", function() {
    const orderModel: OrderModel = orderService.createOrder();
    expect(orderModel.id).toBeDefined();
    expect(loggerServiceMock.info).toHaveBeenCalledTimes(1)
    expect(loggerServiceMock.info).toHaveBeenCalledWith("createOrder", null, "OrderService");
  });
});
