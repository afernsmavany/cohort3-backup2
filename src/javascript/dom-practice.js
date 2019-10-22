
const dFunctions = {

  addCard: (node, counter) => {
    let newCard = document.createElement('div');
    console.log("I'm in the add card");
    // node.textContent = "I'm updating div";
    newCard.setAttribute("class", "cards");
    newCard.setAttribute("counter", counter);
    newCard.textContent = `cards ${counter}`;
    node.appendChild(newCard);
  },

  whatCards: (node) => {
    return [];
  }
};

export default dFunctions;
