function deco(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  console.log('deco called')
}
// 데코레이터에 인수 넘겨 동작 변경. 데코레이터 팩토리 패턴
function deco2(value: string) {
  console.log('deco factory called')
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log(value)
  }
}

class TestClass {
  @deco
  testMethod() {
    console.log('testMethod called')
  }

  @deco2('hello world')
  testMethod2() {
    console.log('testMethod2 called')
  }
}

const t = new TestClass()
t.testMethod()
t.testMethod2()
