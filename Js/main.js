var preloader = document.getElementById('loader');

function spinner() {
    setTimeout (() => {
        preloader.style.opacity = 0;
        preloader.style.display = 'none' ;
    }, 4000);    
}

function toggleChatBot() {
  var body = document.getElementById('ai-chatbot-body');
 if (body.classList.contains('open')) {
    body.classList.remove('open');
  } else {
    body.classList.add('open');
  }
}
document.getElementById('ai-chatbot-header').onclick = function(event) {
  event.stopPropagation();
 toggleChatBot();
}

function sendChatMessage() {
  var input = document.getElementById('ai-chatbot-input');
  var msg = input.value.trim();
  if (!msg) return;
  addChatMessage('You', msg);

  // Simulate AI response
  setTimeout(function() {
    addChatMessage('Bot', getBotReply(msg));
  }, 700);

  input.value = '';
}

function addChatMessage(sender, text) {
  var messages = document.getElementById('ai-chatbot-messages');
  var msgDiv = document.createElement('div');
  msgDiv.innerHTML = '<b>' + sender + ':</b> ' + text;
  msgDiv.style.margin = '6px 0';
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;
}

// Basic FAQ logic for your site
function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes('your name') || msg.includes('who are you') || msg.includes('Hi')) {
    return "I'm the SarboM AI chat bot, here to help you learn about Sarbojit Majumder and this website!";
  }
  if (msg.includes('sarbojit') || msg.includes('owner')) {
    return "Sarbojit Majumder is a Technical Consultant and Web Developer. This website showcases his portfolio, skills, projects, and contact info.";
  }
  if (msg.includes('What are his technical skills') || msg.includes('skills') || msg.includes('what are his skills')) {
    return "Sarbojit is skilled in C++, Java, Python, JavaScript, HTML, CSS, Java Springboot, and more!";
  }
  if (msg.includes('contact') || msg.includes('email')) {
    return "You can contact Sarbojit at majumdersarbojit2k16@gmail.com or through the links in the Contact section below.";
  }
  if (msg.includes('projects') || msg.includes('achievements')) {
    return "Check out the Achievements section for details on Sarbojit's projects and events!";
  }
  if (msg.includes('about')) {
    return "This website is a personal portfolio for Sarbojit Majumder. It includes information about his background, education, skills, interests, and achievements.";
  }
  if (msg.includes('education')) {
    return "Sarbojit completed his B.Tech from National Institute of Technology, Durgapur, and studied at Ram Mohan Mission High School.";
  }
  if (msg.includes('cv') || msg.includes('resume')) {
    return "You can download Sarbojit's CV from the About section.";
  }
  if (msg.includes('interests')) {
    return "Sarbojit's interests include Competitive Programming, Web Development, and Metal Manufacturing.";
  }
  if (msg.includes('help')) {
    return "Ask me about Sarbojit Majumder, his skills, education, projects, or how to contact him!";
  }
  return "Sorry, I can answer questions about this website and Sarbojit Majumder. Try asking about skills, education, or projects!";
}
