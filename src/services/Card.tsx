
const getAirline = () => {
    // fetch("https://jsonplaceholder.typicode.com/users").then((res) => {return res.json()})
    let response = JSON.parse('{"airline": "Delta"}');
    return response;
}

export default getAirline;
