from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import models

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://mycreds.db.elephantsql.com:5432/ngimluxm"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

db.create_all()

@app.route('/')
def hello():
    return 'My First API !!'