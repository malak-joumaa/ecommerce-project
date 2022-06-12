// var logout = document.getElementById('logout');
// logout.addEventListener('click',function(event){
//     event.preventDefault();

//     var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU0OTgyMDA4LCJleHAiOjE2NTUxOTgwMDgsIm5iZiI6MTY1NDk4MjAwOCwianRpIjoiWXFnM3FlVlRJTnY0bUZZQyIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.wnAgdwNntIN-sw_HRsTby3M5eEDm313wP_Poczj4Gwc";
//     axios.post('http://127.0.0.1:8000/api/logout', {
//           headers: {
//               'Accept': 'application/json',
//               'Authorization': 'Bearer '+token
//           },      
//       })   
//     .then(function (response) {
//         console.log(response);
//         window.location.href = "html/sign_in.html";
//     });
// });


    function getItems(){
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/items/1',
        })
        .then(function (response) {
            console.log(response);
            let item_array = response.data.items;
            for(let i=0; i < item_array.length; i++){
                createItem(item_array[i].id, item_array[i].image, item_array[i].name,item_array[i].price);
            }
        });
    }
    getItems;

    //create restaurant dom
    function createItem(id, image, name, price){
        let item = document.createElement('div');
        item.setAttribute("id", id);
        item.setAttribute("class", "item");

        let item_info = document.createElement('div');
        item_info.setAttribute("class", "item-info");

        let item_image = document.createElement('img');
        item_image.src = "data:image/png;base64,"+image;

        let item_name = document.createElement('span');
        item_name.setAttribute("class", "item-name");
        item_name.innerHTML = name;

        let item_price = document.createElement('span');
        item_price.setAttribute("class", "item-price");
        item_price.innerHTML = price;

        let like = document.createElement('i');
        like.setAttribute("class", "fa-solid fa-heart");
        
        item.appendChild(item_info);
        item_info.appendChild(item_image);
        item_info.appendChild(item_name);
        item_info.appendChild(item_price);
        item_info.appendChild(like);
    }
