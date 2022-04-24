from app import db

class Employees(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String)
    lastName = db.Column(db.String)
    email = db.Column(db.String)

    def to_dict(self):
        return {
            "employeeID": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "email": self.email
        }