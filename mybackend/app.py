from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
# Allow React frontend at localhost:5173
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello from Python backend!"})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
