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
}

const Malaizyo = new Coder('Malaizyo', 'Rap', 20, 'JavaScript')
