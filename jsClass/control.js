//console.dir(document);

// console.log(document.URL);
// console.log(document.domain);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.links);

const listItems = document.getElementsByClassName ("list-group-items");
listItems[0].textContent = "Play some games";
listItems[0].style.fontWeight = "bold";
listItems[0].style.backgroundColor = "yellow";
listItems[0].style.color = "purple";

//console.log{listItems[0]}

//QUERY SELECTOR
let addActivity = document.querySelector (
