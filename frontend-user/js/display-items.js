var logout = document.getElementById('logout');
logout.addEventListener('click',function(event){
    event.preventDefault();

    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU0OTgyMDA4LCJleHAiOjE2NTUxOTgwMDgsIm5iZiI6MTY1NDk4MjAwOCwianRpIjoiWXFnM3FlVlRJTnY0bUZZQyIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.wnAgdwNntIN-sw_HRsTby3M5eEDm313wP_Poczj4Gwc";
    axios.post('http://127.0.0.1:8000/api/logout', {
          headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer '+token
          },      
      })   
    .then(function (response) {
        console.log(response);
        window.location.href = "html/sign_in.html";
    });
})