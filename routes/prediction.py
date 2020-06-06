import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn import metrics
from sklearn.model_selection import train_test_split
import sys

df = pd.read_csv('routes\covid-final.csv')

X = df[['temperature', 'Cough', 'fatigue', 'breathing', 'pain in chest', 'heart disease', 'lung disease']].values
y = df['Corona result'].values

model = DecisionTreeClassifier(criterion='entropy', max_depth=7)
model.fit(X, y)
try:
    l1 = []
    for i in sys.argv[1]:
        if(not( i == ',')):
            l1.append(int(i))
    l2 = [l1]
    pred = model.predict(l2)
    print(pred)
except:
    print("An error occured!")


