var logout = document.getElementById("logout");
logout.addEventListener("click", function (event) {
  event.preventDefault();
  let token = localStorage.getItem("token");
  if (token == null) {
    alert("You are not logged in");
    return;
  }
  console.log("bearer " + token);

  let url = "http://127.0.0.1:8000/api/logout";
  let headers = {};
  headers.Authorization = "Bearer " + token;
  axios({
    method: "post",
    url: url,
    headers: headers,
  }).then(function (response) {
    //console.log(response);
    console.log("here");
    localStorage.removeItem("token");
    window.location.href = "html/sign_in.html";
  });
});

window.onload = function () {
  // Get Categories
  function getCategories() {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/get_categories",
    }).then(function (response) {
      //console.log(response)
      let cat_array = response.data.categories;
      for (let i = 0; i < cat_array.length; i++) {
        createCategory(
          cat_array[i].id,
          cat_array[i].cat_image,
          cat_array[i].cat_name
        );
      }

      // Category click
      var prev_cat = 0;
      let chosen_c = document.getElementsByClassName("icon-category");
      for (let i = 0; i < chosen_c.length; i++) {
        chosen_c[i].addEventListener("click", function () {
          chosen_c[prev_cat].classList.remove("onclick");
          prev_cat = i;
          chosen_c[i].classList.add("onclick");
          console.log("clicked");
          var category_id = this.id;
          removedivs();
          getItems(category_id);
        });
      }
    });
  }
  getCategories();
  function removedivs() {
    var dlt = document.getElementById("all-items");
    console.log(dlt.length);
    while (dlt.childElementCount != 0) {
      dlt.removeChild(dlt.firstElementChild);
    }
  }

  // Get Items
  function getItems(category_id) {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/items/" + category_id,
    }).then(function (response) {
      //console.log(response);
      let item_array = response.data.items;
      for (let i = 0; i < item_array.length; i++) {
        createItem(
          item_array[i].id,
          item_array[i].image,
          item_array[i].name,
          item_array[i].price
        );
      }

      // favourite
      let likes = document.getElementsByTagName("i");
      for (let i = 1; i < likes.length; i++) {
        likes[i].addEventListener("click", function () {
          if (localStorage.getItem("token") == null) {
            window.location.href = "html/sign_in.html";
          }
          console.log("clicked");
          likes[i].style.color = "red";
          item_id = likes[i].getAttribute("val");
          let data = new FormData();
          data.append("item_id", item_id);
          axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/favorite",
            data: data,
            headers: {
              Authorization: "bearer " + localStorage.getItem("token"),
              Accept: "application/json",
            },
          }).then(function (response) {
            console.log(item_id);
          });
        });
      }
    });
  }
  //on load
  var count = 0;
  if (count == 0) {
    getItems(1);
    count++;
  }

  //Create category
  function createCategory(id, image, name) {
    let category = document.createElement("div");
    category.setAttribute("id", id);
    category.setAttribute("class", "icon-category");

    let cat_image = document.createElement("div");
    cat_image.setAttribute("class", "icon");
    let c_image = document.createElement("img");
    c_image.src = "data:image/png;base64," + image;

    let cat_name = document.createElement("div");
    cat_name.setAttribute("class", "category");
    cat_name.innerHTML = name;

    let nav = document.getElementById("nav");
    nav.appendChild(category);
    category.appendChild(cat_image);
    cat_image.appendChild(c_image);
    category.appendChild(cat_name);
  }

  //Create item
  function createItem(id, image, name, price) {
    let item = document.createElement("div");
    item.setAttribute("id", id);
    item.setAttribute("class", "item");

    let item_info = document.createElement("div");
    item_info.setAttribute("class", "item-info");

    let item_image = document.createElement("img");
    item_image.src = "data:image/png;base64," + image;

    let item_name = document.createElement("span");
    item_name.setAttribute("class", "item-name");
    item_name.innerHTML = name;

    let item_price = document.createElement("span");
    item_price.setAttribute("class", "item-price");
    item_price.innerHTML = price + "$";

    let like = document.createElement("i");
    like.setAttribute("class", "fa-solid fa-heart");
    like.setAttribute("val", id);

    let all = document.getElementById("all-items");

    all.appendChild(item);
    item.appendChild(item_info);
    item_info.appendChild(item_image);
    item_info.appendChild(item_name);
    item_info.appendChild(item_price);
    item_info.appendChild(like);
  }
};
