export async function listJobs(token) {
    let data =null;
    let err = null;

    // fetch the data from the server
    const response = await fetch("http://127.0.0.1:5000/api/jobs", {
method: "GET",
headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Access-Control-Allow-Origin': 'http://localhost',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Authorization': 'Bearer ' + token
    }
}).catch((error) => {
    err = error;
}
);
console.log(response);
// Converting to JSON
data = await response.json();
console.log(data);
// return the data
return { data, err };
};


