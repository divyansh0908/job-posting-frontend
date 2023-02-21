export async function postJob(job, token) {
    let data =null;
    let err = null;

    // fetch the data from the server
    const response = await fetch("http://127.0.0.1:5000/api/postjobs", {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(
             job
        ),

        // Adding headers to the request also bearer token
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Authorization': 'Bearer ' + token



        }
    }).catch((error) => {
        err = error;
    }
    );

    // Converting to JSON
    data = await response.json();

    // return the data
    return { data, err };
};