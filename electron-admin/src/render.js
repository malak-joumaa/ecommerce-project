window.onload = function () {
//Get Categories
function getCategories(){
    let select = document.getElementById('category');
    axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/get_categories',
    })
    .then(function (response) {
        console.log(response)
        let cat_array =response.data.categories;
        for(let i=0; i < cat_array.length; i++){
            var option = document.createElement('option');
            option.value = cat_array[i].id;
            option.innerHTML = cat_array[i].cat_name;
            select.appendChild(option);
            console.log(cat_array[i].cat_name);
        }
    });
    }
    getCategories();

// Add Category
var add_category = document.getElementById("add_category");
add_category.addEventListener("click",function(e){
    e.preventDefault();
    let cat_name = document.getElementById("new_category").value;
    let result = document.getElementById('result');

    let data = new FormData();
        data.append('cat_name', cat_name);
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/add_category',
            data: data,
        })
        .then(function (response) {
          console.log(response)
          let category_id = response.data.category.id;
          console.log(category_id);
          result.style.color="rgb(17, 149, 17)"
          result.innerText="Category Added Successfully!";
          setTimeout(hideElement, 2000)
          function hideElement() {
          result.innerText=""}
        })
});
let image = document.getElementById("image");
let base64String = "";
image.addEventListener("change", getImage);
function getImage() {
    var file = document.querySelector('input[type=file]')['files'][0];
    var reader = new FileReader();
    console.log("next");         
    reader.onload = function () {
        base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
        imageBase64Stringsep = base64String;
        console.log(base64String);
    }
    reader.readAsDataURL(file);
}

//Add Item
var add_item = document.getElementById("add_item");
add_item.addEventListener("click",function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let result1 = document.getElementById('result1');

    let data = new FormData();
        data.append('image', base64String);
        data.append('name',name);
        data.append('price',price);
        data.append('category',category);
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/add_item',
            data: data,
        })
        .then(function (response) {
          console.log(response)
          result1.style.color="rgb(17, 149, 17)"
          result1.innerText="Item Added Successfully!";
          setTimeout(hideElement, 2000)
          function hideElement() {
          result1.innerText=""}
        })
});

}

