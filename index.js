const url = 'https://unreleased.limegradient.xyz/api/kanyewest/db.json'

async function loadJSON() {
    const res = await fetch(url);
    const json = res.json();
    console.log(json);
}

loadJSON();
