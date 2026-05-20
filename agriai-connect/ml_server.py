from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load CSV datasets
growers = pd.read_csv("growers.csv")
retailer_pos = pd.read_csv("retailer_pos.csv")
@app.route("/predict", methods=["POST"])
def predict():

    data = request.json
    district = data.get("district")

    # Filter growers by district
    filtered = growers[growers.astype(str).apply(
        lambda row: row.str.contains(district, case=False).any(),
        axis=1
    )]

    count = len(filtered)

    if count > 50:
        crop = "Rice"
        market = "High Demand"
    else:
        crop = "Maize"
        market = "Emerging Market"

    result = {
        "district": district,
        "recommended_crop": crop,
        "market_status": market,
        "grower_count": count
    }

    return jsonify(result)

if __name__ == "__main__":
    app.run(port=5000)