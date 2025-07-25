function vx(a?: string) {
  function node() {
    console.log(`VX CLI version: ${a}`);
  }

  node();
}

export default vx;
