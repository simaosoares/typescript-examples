describe("Destructuring assignment", () => {
  it("test array destructuring", () => {
    const objectWithArrays = {
      array1: ["val1", "val2"],
    };

    const { array1 } = objectWithArrays;
    // original.slice();

    array1.shift();

    expect(objectWithArrays.array1).toEqual(array1);
  });

  it("test object destructuring", () => {
    const anObject = {
      obj1: {
        val1: "1",
      },
    };

    const { obj1 } = anObject;
    obj1.val1 = "2";

    expect(anObject.obj1.val1).toEqual(obj1.val1);
  });
});

