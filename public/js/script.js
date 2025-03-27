var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var user = { message: "" };

//Input pengguna dan balasan
var arrayOfPossibleMessage = [
    { message: "hai", response: "hallo" },
    { message: "rekomendasi makanan sehat", response: "1. Salmon 🐟 – Kaya akan asam lemak omega-3 yang baik untuk jantung dan otak.<br>2. Bayam 🥬 – Penuh dengan zat besi, serat, dan vitamin yang baik untuk tubuh.<br>3. Alpukat 🥑 – Mengandung lemak sehat yang baik untuk jantung dan kulit.<br>4. Kacang Almond 🌰 – Sumber protein nabati, serat, dan vitamin E.<br>5. Oatmeal 🥣 – Karbohidrat kompleks yang baik untuk energi dan pencernaan.<br>6. Yogurt Yunani 🥛 – Kaya akan probiotik yang baik untuk kesehatan usus.<br>7. Telur 🍳 – Sumber protein lengkap dan kaya akan kolin untuk otak.<br>8. Blueberry 🫐 – Mengandung antioksidan tinggi untuk melawan radikal bebas.<br>9. Ubi Jalar 🍠 – Mengandung beta-karoten, serat, dan vitamin C.<br>10. Brokoli 🥦 – Sayuran kaya serat, vitamin C, dan senyawa anti-kanker." },
    { message: "terima kasih", response: "sama-sama" }
]

//Membuat pesan user muncul ke chat
function sendMessage(userMessage) {
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";
    messageElement.innerHTML = "<span>You:</span>" +
        "<span>" + userMessage + "</span>";
    chatContainer.appendChild(messageElement);
}

//Bot memberi balasan
function chatbotResponse(userMessage) {
    var chatbotmessage = "";

    if (userMessage.length > 5 || userMessage == "hai") {
        var result = arrayOfPossibleMessage.filter(val => val.message.includes(userMessage.toLowerCase()));

        if (result.length > 0) {
            var response = result[0].response;
            chatbotmessage = response;
        } else {
            chatbotmessage = "Saya tidak mengerti";
        }
    } else {
        chatbotmessage = "Saya tidak mengerti";
    }



    var messageElement = document.createElement('div');
    messageElement.innerHTML = "<span style='margin-left: 10px;'>Chatbot:</span>" +
        "<span>" + chatbotmessage + "</span>";

    //Melakukan jeda saat membalas dan animasi
    setTimeout(() => {
        messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 });
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
}

//Pesan yang dikirim user
sendBtn.addEventListener('click', function (e) {
    var userMessage = textbox.value;

    if (userMessage == "") {
        alert('Please type in a message');
    } else {
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);
    }
});