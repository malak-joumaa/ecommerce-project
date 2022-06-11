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
