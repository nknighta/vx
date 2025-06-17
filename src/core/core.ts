export class createConfig {
  name: string;
  nodeconfigbuilder: any[];

  constructor(name: string, nodeconfigbuilder?: any[]) {
    this.name = name;
    this.nodeconfigbuilder = nodeconfigbuilder || [];
  }

  userNodeConfigulation() {
    console.log(`Creating contract on host: ${this.name} with config: ${this.nodeconfigbuilder}`);
  }
}
