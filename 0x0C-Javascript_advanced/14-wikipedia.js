function createElement(data) {
    const p = document.createElement('p');
    p.innerHTML = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.onreadystatechange  = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response).query.pages['21721040'].extract;
            callback(data);
        }
    }
    request.send();
}
queryWikipedia(createElement());