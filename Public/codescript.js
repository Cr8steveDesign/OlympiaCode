// Add year dynamically on the footer

const year_text = document.querySelector("#footer-year");
year_text.textContent = new Date().getFullYear();

//+ new Date().toDateString();

////////////////////////////////////////////
// SERVER REQUEST TO RETRIEVE JSON
//////////////////////////////////////////

// Using FETCh API - NON ASYNC
const code_response = document.querySelector("#list_repsonses");
const response_container = document.querySelector(".response-container");
let language_name = "";
let start_range = 1;
let end_range = 85;
let currentData = [];

// Add Event Listener to the submit button
const button = document.querySelector("#retrieve");

button.addEventListener("click", retrieveCodes);

////////////// GETTING DATA AND POPULATING DOM/////////////////////////

const getData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const jsonData = await response.json();

    // Add toggle hidden class and appear class on the container
    response_container.classList.toggle("hidden");
    response_container.classList.toggle("show");
    // Populate container with Response data
    populateDom(jsonData, code_response);

    placeEventListeners();
  } catch (error) {
    console.log(error.message);
  }
};

// fetch("/api/get/javascript", options)
//   .then((response) => {
//     if (!response.ok) throw new Error("Error fetching data!");

//     return response.json();
//   })
//   .then((serverData) => {
//     data = serverData;

//     // You can have a function that uses the data to populate the DOM here
//   })
//   .catch((error) => console.log(`${error} Sorry, the url not found )`));

// if (data.length) console.log(data);

////// USING ASYNC AWAIT
// console.log("Hello World Before Async");
const populateDom = (data, container) => {
  const arr = data.data;
  container.innerHTML = "";

  arr.forEach((code) => {
    let title = code.method;

    if (language_name === "HTML") title = code.name;
    if (language_name === "CSS") title = code.property;
    // Using forEach instead of map
    // LIST HTML STRING
    const listHTML = `<li id="${code.id}" class="response">
      <img class="response-image" src="images/${language_name}.png" alt="" srcset="">
      <p id="method-name">${title}</p></li>`;

    // Reset Current Content of container
    // Append the child to container
    container.insertAdjacentHTML("beforeEnd", listHTML);
  });
  currentData = arr;
};

//////////////////////////////////////////
///////BUTTON EVENT LISTENER |  THIS IS CALLED FIRST
function retrieveCodes(e) {
  e.preventDefault();

  language_name = document.querySelector("#language").value;

  start_range = document.querySelector("#Start").value;
  end_range = document.querySelector("#End").value;

  if (!language_name.length || !start_range || !end_range) {
    let language_box = (language_name = document.querySelector("#language"));
    language_box.focus();
    alert(
      "Kindly enter a valid input. Select the languge from the options and pick a range between 1 to < 100 for JavaScript and Python or < 85 for HTML and CSS."
    );

    return;
  }

  //Make Request to JSON
  const url = `/api/query?name=${language_name.toLowerCase()}&start=${start_range}&end=${end_range}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  getData(url, options);

  //////////// RESET INPUT FIELD
  document.querySelector("#Start").value = "";
  document.querySelector("#End").value = "";
}

// Place Event Listeners on all Lists
function placeEventListeners() {
  const allResponses = document.querySelectorAll(".response");

  allResponses.forEach((item) => {
    item.addEventListener("click", (e) => {
      let elementID = 0;
      if (e.target.id == "method-name") elementID = e.target.parentElement.id;
      else elementID = e.target.id;

      console.log("Element ID Value: ", elementID);
      console.log("currentData Value: ", currentData);
    });
  });
  // console.log(currentData);
  // console.log(allResponses);
}
