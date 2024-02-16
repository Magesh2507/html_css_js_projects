const senderInbox = document.getElementById('sender-inbox');
const receiverInbox = document.getElementById('receiver-inbox');
const senderInput = document.getElementById('sender-input');
const receiverInput = document.getElementById('receiver-input');
const senderInfo = document.getElementById('sender');
const receiverInfo = document.getElementById('receiver');
const senderId = document.getElementById('senderId');
const receiverId = document.getElementById('receiverId');



function createMessageElement(message, className) {

    const messageElement = document.createElement('span');
    messageElement.classList.add(className);
    messageElement.textContent = message;
    return messageElement;
}

function sendMessage(senderContainer, receiverContainer, message, senderClassName, receiverClassName) {
    if (message.trim() !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('receiver-message-div');
        messageDiv.appendChild(createMessageElement(message, receiverClassName));
        receiverContainer.appendChild(messageDiv);
        receiverContainer.scrollTop = receiverContainer.scrollHeight;
        senderContainer.appendChild(createMessageElement(message, senderClassName));
        senderContainer.scrollTop = senderContainer.scrollHeight;
    }
}

function sendByPerson(person, input, senderContainer, receiverContainer, info, senderClassName, receiverClassName) {
    const message = input.value;
    sendMessage(senderContainer, receiverContainer, message, senderClassName, receiverClassName);
    input.value = '';
    info.style.display = 'none';
    person.style.visibility = "hidden";
}

function send(person) {
    const id = person.id
    if(id === "senderId"){
        sendByPerson(person, senderInput, senderInbox, receiverInbox, receiverInfo, 'sender','receiver');
    }
    else{
        sendByPerson(person, receiverInput, receiverInbox, senderInbox, senderInfo, 'sender','receiver');  
    }
}

function handleTyping(input, info, targetId) {

    if (input.value.trim() !== '') {
        info.style.display = 'inline'; 
        targetId.style.visibility = 'visible';      
    } else {
        info.style.display = 'none';
        targetId.style.visibility = "hidden";
    }
}

senderInput.addEventListener('input', () => {
    handleTyping(senderInput, receiverInfo, senderId);
});

receiverInput.addEventListener('input', () => {
    handleTyping(receiverInput, senderInfo, receiverId);
});

senderInput.addEventListener("keypress", function(event) {
    handleKeyPress(event, "senderId")
})

receiverInput.addEventListener("keypress", function(event) {
   handleKeyPress(event, "receiverId")
})

function handleKeyPress(event, targetId){
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById(targetId).click();
    }
}