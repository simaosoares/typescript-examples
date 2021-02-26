interface Test {
  name: string;
  age?: string;
}

let a: Test;

a = {
  name: "dfsdf",
  age: null
}

console.log(JSON.stringify(a));

var b :Test = JSON.parse("{\"name\":\"dfsdf\",\"age\":null}");
var c :Test = JSON.parse("{\"name\":\"dfsdf\"}");

console.log(b.age);
console.log(c.age);
