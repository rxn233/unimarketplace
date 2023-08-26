import joblib
import sys
import json
import pandas as pd

number = int(sys.argv[1])
new_num = number+1

print(new_num)

# # Load the trained model
# model = joblib.load('/Users/rohitnair/Documents/rxn233/unimarketplace/server/models/linear_reg_model.pkl')

# # Get input from Node.js as a JSON string and parse it
# input_json = sys.argv[1]
# input_data = [[1, 700, 1000]]

# # Convert input data to a DataFrame
# prediction_input = pd.DataFrame(input_data, columns=["Condition", "Used_for_Duration", "Original_Price"])

# # Make predictions
# predictions = model.predict(prediction_input)

# # Print predictions as JSON
# response = {
#     "predicted_price": predictions.tolist()  # Convert the NumPy array to a list
# }

# # Print the JSON response
# print(json.dumps(response))
