import { OrderModel } from "../models/order.model";

export interface OrderServiceInterface {
  createOrder(): OrderModel,
}
