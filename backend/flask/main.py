from flask import Flask, request, jsonify

from flask_cors import CORS

import sklearn
import warnings
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.impute import KNNImputer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import f1_score
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_score
 
warnings.filterwarnings('ignore')

import pandas as pd

df=pd.read_csv('5_yrs_data_of_wind.csv')
new_df=pd.read_csv('train.csv')

X = df.iloc[:,1:4]
y=df.iloc[:,4]

new_X = new_df.iloc[:,1:4]
new_Y=new_df.iloc[:,4]

# Fitting Random Forest Regression to the dataset
regressor = RandomForestRegressor(n_estimators=100, random_state=42, oob_score=True)
 
# Fit the regressor with x and y data
regressor.fit(X, y)
print("done")

from sklearn.metrics import mean_squared_error, r2_score
 
# Access the OOB Score
# oob_score = regressor.oob_score_
# print(f'Out-of-Bag Score: {oob_score}')
 
# # Making predictions on the same data or new data
# y_pred=regressor.predict(new_X)
 
# # Evaluating the model
# mse = mean_squared_error(y, y_pred)
# print(f'Mean Squared Error: {mse}')
 
# r2 = r2_score(y, y_pred)
# print(f'R-squared: {r2}')

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes


@app.route('/')
def home():
    return 'Hello'

@app.route('/ab')
def home1():
    return 'bc'


@app.route('/power',methods=['POST'])
def powerCalc():
    data = request.json
    

    # Extracting values from the JSON data
    air = data.get('air')
    pressure = data.get('pressure')
    windspeed = data.get('windspeed')
    new_c={'Air temperature':air,'Pressure':pressure,'Wind speed':windspeed}
    new_c=pd.DataFrame([new_c])
    y_pred=regressor.predict(new_c)
    return jsonify(result=y_pred.tolist())



if __name__ == '__main__':
    app.run(debug=True)