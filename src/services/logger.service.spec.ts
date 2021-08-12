import { LoggerService } from "./logger.service";
import createSpy = jasmine.createSpy;

describe("LoggerService", function() {
  const loggerService = new LoggerService();
  const timestamp = "2021-12-17T14:15:30.555Z";

  beforeAll(() => {
    jasmine.clock().mockDate(new Date(timestamp));
    jasmine.clock().install();
  });
  afterAll(() => {
    jasmine.clock().uninstall();
  })

  it("writes info log", function() {
    console.log = createSpy("log")
    const message = "message";
    const data = { id: "id" };
    const className = "ExampleService";
    loggerService.info(message, data, className);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(JSON.stringify(
      {
        level: "info",
        timestamp,
        message,
        logger: className,
        data,
        context: "LoggerService",
      }
    ));
  });
});
