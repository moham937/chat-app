const form = document.getElementById("chat-form");
const input = document.getElementById("message-input");
const messages = document.getElementById("messages");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // لا تُحدّث الصفحة

  const message = input.value.trim();
  if (message === "") return;

  // عرض الرسالة في الصفحة
  const item = document.createElement("li");
  item.textContent = message;
  messages.appendChild(item);

  // إرسالها إلى الخادم (server)
  await fetch("/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: message }),
  });

  input.value = "";
});
