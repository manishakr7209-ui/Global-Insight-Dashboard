from flask import Flask, jsonify
from data import country_data
app = Flask(__name__)
@app.route("/api/world")
def world_data():
    country_data = {
    "india": {
        "population": "1.43 Billion",
        "birth_rate": "16.4 per 1000",
        "death_rate": "7.3 per 1000",
        "life_expectancy": "69.4 years",
        "info": "India is the world's most populous country."
    },
    "usa": {
        "population": "339 Million",
        "birth_rate": "11 per 1000",
        "death_rate": "10.4 per 1000",
        "life_expectancy": "77.5 years",
        "info": "USA has a highly developed economy."
    }
}

@app.route("/api/country/<name>")
def get_country(name):
    country = country_data.get(name.lower())
    if country:
        return jsonify(country)
    else:
        return jsonify({"error": "Country not found"}), 404

def home():
    return "World Dashboard Backend Running"
# @app.route("/country/<name>")
# def get_country(name):
#     name = name.lower()
#     if name in country_data:
#         return jsonify(country_data[name])
#     else:
#         return jsonify({"error": "Country not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)