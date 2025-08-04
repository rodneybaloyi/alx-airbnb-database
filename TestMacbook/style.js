// Step 1: Get the input box, button, and list from the page
const inputText = document.getElementById("input-text");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

// Step 2: Define the function that runs when you click "Add"
function addItem() {
  // Get the text the user typed
  const text = inputText.value.trim();

  // Only add item if the input is not empty
  if (text !== "") {
    // Create a new <li> element
    const listItem = document.createElement("li");

    // Set its content to the user's input
    listItem.innerText = text;

    // Add the new item to the list
    listContainer.appendChild(listItem);

    // Clear the input box
    inputText.value = "";
  }
}

// Step 3: Make the Add button do something when clicked
addButton.addEventListener("click", addItem);
