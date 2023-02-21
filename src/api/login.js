export const login = async (email, password) => {
    let data =null;
    let err = null;

    // fetch the data from the server
    const response = await fetch("http://127.0.0.1:5000/api/login", {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            email: email,
            password: password
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Access-Control-Allow-Origin': 'http://localhost',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
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


