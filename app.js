const startBtn = document.getElementById('startBtn');
const conversation = document.getElementById('conversation');
const message = document.getElementById('message');

const welcomeMessages = [
  "Bem-vindo ao Positive Thoughts, onde sua energia se eleva!",
  "Prepare-se para manifestar uma vida plena com amor e abundância.",
  "Sinta a vibração positiva e permita a transformação interna."
];

function appendMessage(text, isUser = false) {
  const p = document.createElement('p');
  p.textContent = text;
  p.style.fontWeight = isUser ? 'bold' : 'normal';
  conversation.appendChild(p);
  conversation.scrollTop = conversation.scrollHeight;
}

function startConversation() {
  message.textContent = '';
  appendMessage(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);
  appendMessage("Onde você sente mais tensão no seu corpo agora?");
  startBtn.style.display = 'none';

  // Aqui podemos adicionar interação para receber resposta do usuário, etc.
}

startBtn.addEventListener('click', startConversation);