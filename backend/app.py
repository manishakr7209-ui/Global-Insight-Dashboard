from flask import Flask, jsonify
from data import country_data
app = Flask(__name__)
@app.route("/")
def home():
    return "World Dashboard Backend Running"

@app.route("/country/<name>")
def get_country(name):
    name = name.lower()
    if name in country_data:
        return jsonify(country_data[name])
    else:
        return jsonify({"error": "Country not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)