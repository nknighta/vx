interface Config {
  host: string;
  port: number;
  sslpath?: string;
}

export function vx(a?: string) {
  console.log('hello!' + a);
}

export function createConfig({ host, port, sslpath }: Config) {
  if (!host || !port) {
    console.error('Host and port are required parameters.');
    process.exit(1);
  } else if (typeof host !== 'string' || typeof port !== 'number') {
    console.error('Host and port are required parameters.');
    process.exit(1);
  }
  return {
    host: host,
    port: port,
    sslpath: sslpath || undefined,
  } as Config;
}
