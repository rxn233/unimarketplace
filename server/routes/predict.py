import sys
import joblib
import pandas as pd

product_Condition = float(sys.argv[1])
product_Duration = float(sys.argv[2])
productOriginalPrice = float(sys.argv[3])

input_data = [[product_Condition, product_Duration, productOriginalPrice]]
linear_reg_model = joblib.load('./models/linear_reg_model.pkl')
prediction_input = pd.DataFrame(input_data, columns=["Condition", "Used_for_Duration", "Original_Price"])
estimated_price = linear_reg_model.predict(prediction_input)[0]
print(estimated_price)

# sys.stdout.flush()

