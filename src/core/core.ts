export class createConfig {
  name: string;
  nodeconfigbuilder: any[];

  constructor(name: string, nodeconfigbuilder?: any[]) {
    this.name = name;
    this.nodeconfigbuilder = nodeconfigbuilder || [];
  }

  userNodeConfigulation() {
    if (this.nodeconfigbuilder.length === 0) {
      console.log('No node configuration provided.');
      return;
    }

    this.nodeconfigbuilder.forEach((nodeConfig) => {
    });
  }
}
