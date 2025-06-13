async function handler () {
    const data = await fetch('https://chainlist.org/rpcs.json');

    console.log(data);
}