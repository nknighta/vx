export async function connector() {
    // caution: this is test code. don't use production.
    const arg3 = process.argv[3];
    if (arg3 === "view") {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json));
    }
    process.exit(0)
}