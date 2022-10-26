let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];
//Please create individual functions for each solution. Don't forget to call the function once you're finished.
//then you can git add -A and git commit -m "message" and git push origin masteras needed.

//W4D3 - Dom Manipulation
//Accessing DOM Elements (Querying)

//Part 1
//DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.

let mainTitleEl = document.querySelector("#main-title");
mainTitleEl.textContent = "Welcome to Dom Toretto's homepage!";
console.log(mainTitleEl);

//Part 2 Select the body and change the background-color to a new color of your choice.

let body = document.body;
body.style.backgroundColor = "yellow";

//Part 3 Select DOM's Favorite Things list and remove the last list item.

let favoriteThingsLi = document.getElementById("favorite-things");
console.log(favoriteThingsLi);
favoriteThingsLi.lastElementChild.remove(); //https://www.w3schools.com/jsref/prop_element_lastelementchild.asp
console.log(favoriteThingsLi);

//Part 4 Select all .special-title class elements and change their font-size to 2 rem. Remember you might have to iterate through the list of elements

let specialTitleEl = document.querySelectorAll(".special-title");
//const fontSize = document.querySelectorAll(".special-title.font-size");
specialTitleEl.fontSize = "2rem";
console.log(specialTitleEl);
//stuck wondering why we need to iterate through the list? does it affect something later on? it only says "you MIGHT have to" so moving on...

//Part 5 Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
let pastRacesList = document.getElementById("past-races");
if (pastRacesList.hasChildNodes()) {
  pastRacesList.removeChild(pastRacesList.children[3]);
} // https://www.w3schools.com/jsref/met_node_removechild.asp

//Creating New DOM Elements
//Part 6 Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
let newListEl = document.createElement("li");
newListEl.textContent = "Cincinnati";
console.log(newListEl);
pastRacesList.append(newListEl);

//Part 7 Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.
//<div class="main"></div>
//   <div class="blog-post purple">
//     <h1>Dubai</h1>
//     <p>OMG I JUMPED MY CAR ACROSS TWO SKYSKRAPERS!</p>
//   </div>;
// why h2 when the rest are h1??
//whens selecting elements via className const headers = document.getElementsByClassName("header"); NOTE: We don't need to put a dot . in front of the class name in this method like we did in document.querySelector() and document.querySelectorAll() methods b/c it's redundant.

let mainDiv = document.querySelector(".main");
console.log(mainDiv);

let newBlogDiv = document.createElement("div");
newBlogDiv.classList.add("blog-post"); // don't need to use a dot b/c it already specifies "class"List?? see notes i found above (like how we don't use # when we specify with getElementById). //do i need to add the .purple class too? not in directions so skipping it for now // (yes! added below:)
newBlogDiv.classList.add("purple");

let newH1 = document.createElement("h1"); //decided on h1 to keep with the styling of the other blog posts even though directions say h2
newH1.textContent = "Cincinnati";

let newPtag = document.createElement("p");
newPtag.textContent = "OMG I RACED OCHOCINCO AND LOST!";

mainDiv.appendChild(newBlogDiv);
newBlogDiv.appendChild(newH1);
newBlogDiv.appendChild(newPtag);

//Event Handlers
//Part 8
// When you reload the page, the script.js file loads a random DOM quote. Let's play with the included function:
/* <div class="main">
      <div id="quote-title" class="special-title">Quote of the Day</div>
      <p id="quote-of-the-day"></p>
      <img src="http://i.giphy.com/aG15SLmsjxiNO.gif" alt="" /> */
// let quotes = [
//   `I live my life a quarter mile at a time`,
//   `I said a ten-second car, not a ten-minute car`,
//   `You can have any brew you want... as long as it's a Corona.`,
//   `You almost had me? You never had me - you never had your car!`,
//   `I don't have friends. I have family.`,
//   `It don't matter if you win by an inch or a mile. Winning's winning.`,
// ];
const randomQuote = function () {
  document.querySelector("#quote-of-the-day").innerText = `"${
    quotes[Math.floor(Math.random() * quotes.length)]
  }"`;
};
// Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.
let qotdTitle = document.querySelector("#quote-title");

qotdTitle.addEventListener("click", randomQuote()); //  yaay!!! it worked!!

//Part 9
// Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.
// The mouseout handler should toggle the class .purple
// The mouseenter handler should toggle the class .red
// Test it out!
// Hint:
// Remember the document node property .classList and the document node method .toggle().
//https://www.w3schools.com/jquery/event_mouseout.asp
//The mouseout EVENT occurs when the mouse pointer leaves the selected element.
//the mouseout EVENT is triggered if a mouse pointer leaves ANY child elements AS WELL AS the selected element.
//The mouseenter event occurs when the mouse pointer is over (enters) the selected element.
//the mouseenter event only triggers when the mouse pointer enters the selected element.
//<div class="blog-post purple">
let nodeList6 = document.querySelectorAll(".blog-post");
console.log(nodeList6); // we started out with five of them now we have 6 of them

for (let i = 0; i < nodeList6.length; i++) {
  nodeList6[i].addEventListener("mouseout", function () {
    nodeList6[i].classList.toggle("purple");
  });
  nodeList6[i].addEventListener("mouseenter", function () {
    nodeList6[i].classList.toggle("red");
  });
}
//when my mouse leaves the blog post element (mouseout), it should toggle the class .purple ✔
//when my mouse pointer enters the blog post element (mouseenter), it should toggle the class .red ✔
