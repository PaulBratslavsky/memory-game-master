document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      id: "1",
      name: "fries",
      img: "images/fries.png",
      isShown: false,
    },
    { 
      id: "2",
      name: "cheeseburger",
      img: "images/cheeseburger.png",
      isShown: false,
    },
    {
      id: "3",
      name: "ice-cream",
      img: "images/ice-cream.png",
      isShown: false,
    },
    {
      id: "4",
      name: "pizza",
      img: "images/pizza.png",
      isShown: false,
    },
    {
      id: "5",
      name: "milkshake",
      img: "images/milkshake.png",
      isShown: false,
    },
    {
      id: "6",
      name: "hotdog",
      img: "images/hotdog.png",
      isShown: false,
    },
    {
      id: "7",
      name: "fries",
      img: "images/fries.png",
      isShown: false,
    },
    {
      id: "8",
      name: "cheeseburger",
      img: "images/cheeseburger.png",
      isShown: false,
    },
    {
      id: "9",
      name: "ice-cream",
      img: "images/ice-cream.png",
      isShown: false,
    },
    {
      id: "10",
      name: "pizza",
      img: "images/pizza.png",
      isShown: false,
    },
    {
      id: "11",
      name: "milkshake",
      img: "images/milkshake.png",
      isShown: false,
    },
    {
      id: "12",
      name: "hotdog",
      img: "images/hotdog.png",
      isShown: false,
    },
  ];

  const grid = document.querySelector(".grid");

  let cardsChosen = [];
  let tries = 3;
  
  function noMatchFlipBack(cardsChosen) {
    function flipBack() {
      cardsChosen.forEach((card) => {
        const cardToFlip = document.querySelector(`[data-id="${card.id}"]`);
        cardToFlip.setAttribute("src", "images/blank.png");
      });
      cardsChosen = [];
    }

    setTimeout(flipBack, 1000);
  }

 

  function flipCard(event) {

    const selectedCard = cardArray.find((card) => card.id === event.target.getAttribute("data-id"));
    
    if (cardsChosen.length < 2) {
      cardsChosen.push(selectedCard);
      event.target.setAttribute("src", selectedCard.img);

      if (cardsChosen.length === 2) {
        if (cardsChosen[0].name === cardsChosen[1].name) {
          cardsChosen = [];
        } else {
          noMatchFlipBack(cardsChosen);
          
          tries--;
          console.log(tries);

          if (tries === 0) {
            alert("Game Over");
            return;
          }

          cardsChosen = [];
        }
      }
    }

   
  }

  function createBoard() {
    cardArray.forEach((item) => {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", item.id);
      card.classList.add("card");
      console.log(card);
      grid.appendChild(card);
      card.addEventListener("click", flipCard);
    });
  }

  createBoard();
});
