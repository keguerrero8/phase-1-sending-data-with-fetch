// Add your code here

function submitData (userName, userEmail) {
    const data = {
        name : userName,
        email : userEmail
    }

    const configurationObject = {
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept : "application/json"
        },
        body: JSON.stringify(data)
    }
    
    return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((json) => document.body.append(json.id))
    .catch(error => document.body.append(error.message))

}