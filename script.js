const url = "https://jsonplaceholder.typicode.com/users";
const div = document.querySelector(".box");
const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
    testAPI(url);
});

async function testAPI(url) {
    const res = await fetch(url);
    const data = await res.json();
    data.map(i => {
        const h1 = document.createElement("h1");
        h1.innerText = i.name;
        div.appendChild(h1);
    })
}
