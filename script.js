const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const questions = [
  "Hey there! Let's discover your career path together. What subjects do you enjoy the most?",
  "What are your hobbies? Don't be shy, tell me all about them!",
  "Are you more into technical stuff or do you have a creative side waiting to be unleashed?",
  "Do you prefer being a lone wolf or do you thrive in a pack?",
  "Do you enjoy solving puzzles and brain teasers?",
  "Do you dream of tinkering with computers and gadgets?",
  "What are your biggest career goals? No dream is too big!",
];

let currentQuestionIndex = 0;

function sendMessage() {
  const userResponse = userInput.value.trim();
  if (userResponse !== '') {
    appendMessage(userResponse, 'user');
    userInput.value = '';
    if (currentQuestionIndex < questions.length) {
      setTimeout(askQuestion, 500);
    } else {
      suggestCareer(userResponse);
    }
  }
}

function askQuestion() {
  appendMessage(questions[currentQuestionIndex], 'bot');
  currentQuestionIndex++;
}

function appendMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function suggestCareer(userResponse) {
  // Simple logic for suggesting careers based on user's interests
  let careerSuggestions = [];
  if (userResponse.toLowerCase().includes('computers') || userResponse.toLowerCase().includes('technology')) {
    careerSuggestions.push("Software Developer", "Web Developer", "Data Analyst");
  }
  if (userResponse.toLowerCase().includes('art') || userResponse.toLowerCase().includes('design')) {
    careerSuggestions.push("Graphic Designer", "UX/UI Designer", "Animator");
  }
  if (careerSuggestions.length === 0) {
    careerSuggestions.push("We couldn't determine specific careers based on your response. Please seek personalized advice from a career counselor.");
  }
  
  appendMessage("Based on your interests, we suggest exploring these careers: " + careerSuggestions.join(", "), 'bot');
}

askQuestion();
function suggestCareer(userResponse) {
    let careerSuggestions = [];
  
    // Check user response for commerce-related keywords
    if (userResponse.toLowerCase().includes('commerce') || userResponse.toLowerCase().includes('business')) {
      careerSuggestions.push(
        "Accountant",
        "Financial Analyst",
        "Marketing Manager",
        "Human Resources Specialist",
        "Business Consultant",
        "Entrepreneur",
      );
    }
  
    // Check user response for science-related keywords
    if (userResponse.toLowerCase().includes('science') || userResponse.toLowerCase().includes('technology')) {
      careerSuggestions.push(
        "Software Developer",
        "Data Scientist",
        "Biomedical Engineer",
        "Environmental Scientist",
        "Pharmacist",
        "Research Scientist",
      );
    }
  
    // Check user response for arts-related keywords
    if (userResponse.toLowerCase().includes('art') || userResponse.toLowerCase().includes('design')) {
      careerSuggestions.push(
        "Graphic Designer",
        "UX/UI Designer",
        "Interior Designer",
        "Fashion Designer",
        "Photographer",
        "Art Director",
      );
    }
  
    // If no specific field is determined, provide general advice
    if (careerSuggestions.length === 0) {
      careerSuggestions.push("We couldn't determine specific careers based on your response. Please seek personalized advice from a career counselor.");
    }
  
    // Display career suggestions
    appendMessage("Based on your interests, we suggest exploring these careers: " + careerSuggestions.join(", "), 'bot');
  }
  