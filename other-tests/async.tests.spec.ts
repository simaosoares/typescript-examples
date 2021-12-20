describe("async tests", () => {
  it("rejects promise with message", async () => {
    function testAsync(): Promise<string> {
      return Promise.reject("message");
    }
    await expectAsync(testAsync()).toBeRejectedWith("message");
  });
})
