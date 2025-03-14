function HandleError() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)

    const method = descriptor.value

    descriptor.value = function () {
      try {
        method()
      } catch (e) {
        console.log('Error:', e.message)
      }
    }
  }
}

class Greeter {
  @HandleError()
  hello() {
    throw new Error('Error in hello method')
  }
}

const g = new Greeter()
g.hello()
