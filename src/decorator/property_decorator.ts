function format(formatString: string) {
  return function (target: any, key: string): any {
    let value = target[key]

    const getter = function () {
      return `${formatString} ${value}`
    }

    const setter = function (newVal) {
      value = newVal
    }

    return {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    }
  }
}
class Greeter2 {
  @format('Hello')
  greeting: string
}
const g2 = new Greeter2()
g2.greeting = 'World'
console.log(g2.greeting) // Hello World
