import { load_rpc_config } from "./rpc/connect";

function intstance(configPath: string) {
  const config = load_rpc_config(configPath);
  if (!config) {
    console.error("No configuration found. Please run 'vx rpc init' to create a configuration.");
    process.exit(1);
  }
  console.log(JSON.stringify(config, null, 2));
}

export default intstance;
