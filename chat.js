

let userWord = [
    ["good day", "hi", "hey", "hello", "good morning", "good afternoon"],
    ["what can you do"],
    ["i want to book to ticket"],
    ["Ofcourse, Toyyiba and Rhodia"],
    ["how are you", "how is life", "how are things"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot", "are you real", 'are you a chatbot'],
    ["who created you", "who made you"],
    [
        "What is your name",
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what do you call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["thanks", "thank you"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"]
  ];
  
  
  
  let reply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["I can help you to book a movie tickets, view offers, and leave feedback."],
    ["How many tickets do you want to book?"],
    ["Ok. May i know the names to book those tickets on"],
    ["Ok, have a good day"]
    [
    "I am fine, thanks",
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?",
      "Fabolous, how are you doing"
    ],
    [

      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["Well, I came into existence graudually. But my first day as an assistant was 20th of june 2020"],
    ["I'm kareebaBOT","I am just a bot", "I am a bot. What are you?", "I'm an assistant, not an actual person"],
    ["The one true God, JavaScript"],
    ["I am kareebaBOT, and you?"],
    ["That's Sweet","I love you too, dear", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "I'm sorry", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time...", "I got my best friend a fridge for her birthday. i can't wait to see are face light up when she opens it"],
    ["OK. Let me know if there's anything i can help you with","Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Bye", "Goodbye", "See you later"],
    ["if you ask me.. I say ried rice","Potatoes", "Sharawma"],
    ["Bro!"],
    ["Yes?", "Sorry I'm still not sure"]
  ];
  
  
  
  let alternative = [
    "Faboulous",
    "Go on...",
    "Good",
    "i don't understand you, try again",
    "I'm listening..."
  ];
  
  // Same purpose as the 'alternative' but an attempt at being culturally relevant ;)
  
  let coronavirus = ["Please endeavour to wash your hands and stay save"];
  
  document.addEventListener("DOMContentLoaded", () => {
      const inputField = document.getElementById("input")
      inputField.addEventListener("keydown", function(e) {
          if (e.code === "Enter") {
              let input = inputField.value;
              inputField.value = "";
              output(input);
      }
    });
  });
  
  function output(input) {
    let product;
  
    //Transforms whatever the user inputs to lowercase and remove all chars except word characters, space, and digits
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    // For example 'tell me a story' becomes 'tell me story'
    // Or 'i feel happy' -> 'happy'
    text = text
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "");
  
    // Searches for an exact match with the 'userWord' array, if there are none, it goes will check if message contains 'coronavirus,' and if not - random alternative
    if (compare(userWord, reply, text)) {
      product = compare(userWord, reply, text);
    } else if (text.match(/coronavirus/gi)) {
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
  
    //update DOM
    addChat(input, product);
  }
  
  function compare(userWordArray, replyArray, string) {
    let item;
    for (let x = 0; x < userWordArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (userWordArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }
  
  function addChat(input, product) {
    const chatDiv = document.getElementById("chat");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
    chatDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `Anice: <span id="bot-response">${product}</span>`;
    chatDiv.appendChild(botDiv);
  }
 
  
 