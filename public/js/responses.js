function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Simple responses
  if (input == "hello") {
    return "Hello there! Welcome to United hospital";
  } else if (input == "time") {
    return "we are open 24/7";
  } else if (
    input == "i am social media addict" ||
    input == " i am drug addict" ||
    input == " i am suppliment addict" ||
    input == "how to remove addiction"
  ) {
    return "No worry if you have any addiction Book an appointment with our best doctors and get rid of your addictions";
  } else if (input == "best doctor for social media addiction") {
    return "Dr Nazmeen Khan";
  } else if (input == "best doctor for shpping addiction") {
    return "Dr Amit Gupta";
  } else if (input == "best doctor for supplimentary addiction") {
    return "Dr Vikas Dubey";
  } else if (input == "what is addiction") {
    return "Addiction refers to a psychological and/or physical dependence on a substance, behavior, or activity that can lead to negative consequences such as impaired health, social and occupational functioning, and relationships. It is characterized by compulsive use despite negative consequences, cravings, and withdrawal symptoms when use is discontinued.";
  } else if (input == "--") {
    return "--";
  } else if (input == "--") {
    return "--";
  } else if (input == "--") {
    return "--";
  } else if (input == "--") {
    return "--";
  } else if (input == "--") {
    return "--";
  } else {
    return "Sorry, I did't get it, I am still learning..";
  }
}
