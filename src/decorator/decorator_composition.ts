function first() {
  {
    console.log('first(): factory evaluated')
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
    ) {
      console.log('first(): called')
    }
  }
}

function second() {
  {
    console.log('second(): factory evaluated')
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor,
    ) {
      console.log('second(): called')
    }
  }
}

class ExampleClass {
  @first()
  @second()
  method() {
    console.log('method called')
  }
}

const e = new ExampleClass()
e.method()
