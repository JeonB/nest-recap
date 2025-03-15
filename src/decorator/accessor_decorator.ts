function Enumerable(enumrable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.enumerable = enumrable
  }
}

class Person {
  constructor(private name: string) {}

  @Enumerable(true)
  get getName() {
    return this.name
  }

  @Enumerable(false)
  set setName(name: string) {
    this.name = name
  }
}

const person = new Person('Chris')
for (const key in person) {
  console.log(`${key}: ${person[key]}`)
}
