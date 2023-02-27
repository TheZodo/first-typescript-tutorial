class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'TypeScript'
  ) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge(): number {
    return this.age
  }
}

const Malaizyo = new Coder('Malaizyo', 'Rap', 20, 'JavaScript')

console.log(Malaizyo.getAge())
// console.log(Malaizyo.lang)
// console.log(Malaizyo.age)

class WebDev extends Coder {
  constructor(
    public computer: string,
    readonly name: string,
    music: string,
    age: number
  ) {
    super(name, music, age)
    this.computer = computer
  }

  public getLang() {
    return `I'm a ${this.lang} developer`
  }
}

const Sara = new WebDev('MacBook', 'Sara', 'Pop', 20)
console.log(Sara.getLang())

class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string) {
    this.id = ++Peeps.count
  }
}

const Zodo = new Peeps('Zodo')
const Zozo = new Peeps('Zozo')
const Koko = new Peeps('Koko')

console.log(Peeps.getCount())

class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === 'string'))
      this.dataState = value
    return
  }
}
