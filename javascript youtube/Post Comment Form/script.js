const submitButton = document.getElementById("submitBtn");
const responseDiv = document.getElementById("responseMessage");

submitButton.addEventListener('click', function(){
    postData();
});

async function postData(){
const name = document.getElementById("nameInput").value
const comment = document.getElementById("commentInput").value

// prepare data to send
const commentData = {
    name: name,
    body: comment,
    postId: 1
};

try{
    const response = await fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(commentData)
    });
    const result = await response.json();
    responseDiv.innerHTML = `<p style='color:green;'>Comment posted! ID: ${result.id}</p>`;

    console.log("Response received: ", result);
}
catch(error){
    console.log("Error occured: ",error);
}

}

