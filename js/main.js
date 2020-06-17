var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("blog__sorting");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-show");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


const loadMoreButton = document.querySelector(".blog__load-more-button");
const selectedOption = document.querySelector(".select-selected");
const selectItems = document.querySelectorAll(".select-items");
const blogList = document.querySelector(".blog__list");



const sorting = () => {
  if (selectedOption.textContent === "Сначала старые") {
    blogList.style.flexFlow = "row-reverse wrap-reverse";
  } else {
    blogList.style.flexFlow = "row wrap";
  };
}
  
sorting();

const load = () => {
  let blogItems = document.querySelectorAll(".blog__item");
  let blogItemsArray = [...blogItems];

  if (selectedOption.textContent === "Сначала старые") {
    blogItemsArray = [...blogItems].reverse();
    for (let blogItem of blogItemsArray) {
      blogItem.classList.remove("blog__item--hidden");
    }
    console.log(blogItemsArray)
  }

  for (let blogItem of blogItemsArray) {
    blogItem.classList.remove("blog__item--hidden");
  }
  
  const hiddenBlogItems = blogItemsArray.slice(9);

  for (let hiddenBlogItem of hiddenBlogItems) {
    hiddenBlogItem.classList.add("blog__item--hidden");
  }
}

load();

for (let selectItem of selectItems) {
  selectItem.onclick = () => {
    loadMoreButton.style.display = "block";
    sorting();
    let blogItems = document.querySelectorAll(".blog__item--hidden");
    let blogItemsArray = [...blogItems];
    for (let blogItem of blogItemsArray) {
      blogItem.classList.remove("blog__item--hidden");
    }
    load();
  }
}

const loadMore = () => {
  let blogItems = document.querySelectorAll(".blog__item--hidden");
  let blogItemsArray = [...blogItems];

  const shownBlogItems = blogItemsArray.slice(0, 9);

  for (let shownBlogItem of shownBlogItems) {
    shownBlogItem.classList.remove("blog__item--hidden");
  }

  blogItems = document.querySelectorAll(".blog__item--hidden");

  if (blogItems.length === 0) {
    loadMoreButton.style.display = "none";
  }
}

loadMoreButton.onclick = () => {
  loadMore();
}
