from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

chat_history = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=['POST'])
def send():
    user_msg = request.form['message']
    chat_history.append(("أنت", user_msg))
    bot_response = "✅ تم استلام رسالتك: " + user_msg
    chat_history.append(("بوت", bot_response))
    return jsonify({'reply': bot_response})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
