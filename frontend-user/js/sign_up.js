sign_up = document.getElementById('sign-un-btn');
sign_up.addEventListener("click",function(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password_confirmation = document.getElementById('c_password').value;

    let data = new FormData();
    data.append('name', name);
    data.append('password', password);
    data.append('email', email);
    data.append("password_confirmation",password_confirmation)
    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/register',
        data: data,
    })
    .then(function (response) {
        console.log(response);
        window.location.href = "../index.html";
        // if(response.data.id == -1){
        //     alert("Sign up failed!");
        // }else{
        //     // window.localStorage.setItem("id",response.data.user_id);
        //     window.location.href = "index.html";
        // }
        }
    );
})