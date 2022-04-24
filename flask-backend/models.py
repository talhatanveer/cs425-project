from app import db

class Employees(db.Model):
    employeeID = db.Column(db.Integer)
    firstName = db.Column(db.String)
    lastName = db.Column(db.String)
    email = db.Column(db.String, primary_key=True)
    password = db.Column(db.String)

    def to_dict(self):
        return {
            "employeeID": self.employeeID,
            "email": self.email,
            "password": self.password,
            "firstName": self.firstName,
            "lastName": self.lastName,
        }