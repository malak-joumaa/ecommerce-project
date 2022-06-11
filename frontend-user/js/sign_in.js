window.onload = function () {
sign_in = document.getElementById('sign-in-btn');
sign_in.addEventListener("click",function(event){
    event.preventDefault();
    event.stopPropagation()
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);
    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/login',
        data: data,
    })
    .then(function (response) {
        console.log(response);
        window.localStorage.setItem("token",response.access_token)
        window.location.href = "../index.html";
        
        // if(response.data.id == -1){
        //     alert("Sign up failed!");
        // }else{
        //     // window.localStorage.setItem("id",response.data.user_id);
        //     window.location.href = "index.html";
        // }
        }
        .catch((error) => {
            alert('error',error.response)
            dispatch(userUpdateProfileFail())
    
          })
    );
});
}