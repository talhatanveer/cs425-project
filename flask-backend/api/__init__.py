from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from ariadne import MutationType, ObjectType

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgres@localhost:5433/"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

query = ObjectType("Query")
mutation = MutationType()

@app.route('/')
def hello():
    return 'My First API !!'