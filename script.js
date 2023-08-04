// Retrieve DOM elements
const chatLog = document.querySelector(".chat-log"); 
const userInput = document.querySelector("#user-input");

// The chat log 
function addMessage(message,sender)
{
  const messageElement=document.createElement('div');

  messageElement.textContent = `${sender}: ${message}`;
  chatLog.appendChild(messageElement);
  chatLog.scrollTop = chatLog.scrollHeight;
}
  
function handleUserInput()
{
  const userMessage = userInput.value;
  addMessage(userMessage, 'You');
  
// Clear the user input by setting
  userInput.value = '';
  
  // Process a user's message with this function
  processUserMessage(userMessage);
}

function processUserMessage(message)
{

  // Deal with the user's message deal withUserMessage(userMessage);
  
  const response = getChatbotResponse(message);
  // Sample response from the chatbot var
  addMessage(response, 'Bot');
}

function getChatbotResponse(message)
{




  if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi') || message.toLowerCase().includes('hlo') || message.toLowerCase().includes('hii')) 
  {
    return "Hello! How may I be of service to you?";
  }

  else if (message.toLowerCase().includes('webdevelopment') ) 
  {
    return "Web development involves building and maintaining websites and web applications using programming languages, frameworks, and technologies to create interactive and engaging online experiences";
  }


  // else if(message.toLowerCase().includes('tell me something about web development') )
  // {
  //   return  'Web development involves building and maintaining websites and web applications using programming languages, frameworks, and technologies to create interactive and engaging online experiences.'  ;
  // }


  else if (message.toLowerCase().includes('bye') || message.toLowerCase().includes('goodbye'))
  {
   return 'Goodbye! Have a wonderful day!';
  }
  else{
    return "I'm sorry, but I'm unable to help with that. ";
  }
} 
 // Change this to reflect the logic of your chatbot or incorporate a natural language processing library.
  // Examples of answers

userInput.addEventListener('keydown', function(event)
{
  if (event.key === 'Enter')
  {
    event.preventDefault();
    handleUserInput()
  } 
});