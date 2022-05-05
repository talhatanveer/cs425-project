from sqlalchemy import false
from app import db

class Employees(db.Model):
    employeeID = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String)
    lastName = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)

    def to_dict(self):
        return {
            "employeeID": self.employeeID,
            "email": self.email,
            "password": self.password,
            "firstName": self.firstName,
            "lastName": self.lastName,
        }

class Locations(db.Model):
    locationID = db.Column(db.Integer, primary_key = True)
    country = db.Column(db.String)
    state = db.Column(db.String)
    city = db.Column(db.String)
    street = db.Column(db.String)
    zipCode = db.Column(db.String)

    def to_dict(self):
        return {
            "locationID": self.locationID,
            "country": self.country,
            "state": self.state,
            "city": self.city,
            "street": self.street,
            "zipCode": self.zipCode
        }

class Customers(db.Model):
    customerID = db.Column(db.Integer, primary_key = True)
    firstName = db.Column(db.String)
    lastName = db.Column(db.String)
    email = db.Column(db.String)
    phone = db.Column(db.String)
    createdAt = db.Column(db.DateTime)

    def to_dict(self):
        return {
            "customerID": self.customerID,
            "email": self.email,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "phone": self.phone,
            "createdAt": self.createdAt
        }

class Location(db.Model):
    locationID = db.Column(db.Integer, primary_key = True)
    country = db.Column(db.String)
    state = db.Column(db.String)
    street = db.Column(db.String)
    city = db.Column(db.String)
    zipCode = db.Column(db.Integer)

    def to_dict(self):
        return {
            "locationID": self.locationID,
            "country": self.country,
            "state": self.state,
            "street": self.street,
            "city": self.city,
            "zipCode": self.zipCode
        }

class Orders(db.Model):
    orderID = db.Column(db.Integer, primary_key = True)
    customerID = db.Column(db.Integer)
    employeeID = db.Column(db.Integer)
    destinationLocationID = db.Column(db.Integer)
    originLocationID = db.Column(db.Integer)
    packageWeight = db.Column(db.Float)
    packageDescription = db.Column(db.String)
    packageType = db.Column(db.String)
    delivered = db.Column(db.Boolean, default = False)

    def to_dict(self):
        return {
            "orderID": self.orderID,
            "customerID": self.customerID,
            "employeeID": self.employeeID,
            "destinationLocationID": self.destinationLocationID,
            "originLocationID": self.originLocationID,
            "packageWeight": self.packageWeight,
            "packageDescription": self.packageDescription,
            "packageType": self.packageType,
            "delivered": self.delivered
        }

class OrderStatus(db.Model):
    orderID = db.Column(db.Integer, primary_key = True)
    locationID = db.Column(db.Integer)
    nextLocationID = db.Column(db.Integer)
    estimatedArrivalTime = db.Column(db.Integer)

    def to_dict(self):
        return {
            "orderID": self.orderID,
            "locationID": self.locationID,
            "nextLocationID": self.nextLocationID,
            "estimatedArrivalTime": self.estimatedArrivalTime
        }