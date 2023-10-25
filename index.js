const url = 'https://unreleased.limegradient.xyz/api/kanyewest/'

let thankgodfordrugs = [];

async function loadDBJSON() {
    fetch(url + "db.json")
    .then((res) => {return res.json();})
    .then((json) => {
        
    });
}

loadDBJSON();