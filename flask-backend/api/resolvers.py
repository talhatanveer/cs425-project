from models import Employees, Customers, Orders, Locations
from api import mutation, query, db
from sqlalchemy import update, text

@query.field("employee")
def employee_resolver(obj, info, employeeID):
    try:
        return Employees.query.get(employeeID).to_dict()
    except Exception as error:
        print(error)
        payload = {
            "success": False,
            "errors": ["Post item matching {email} not found"]
        }
    
    return payload

@query.field("login")
def login_resolver(obj, info, email, password):
    try:
        employee = Employees.query.filter_by(email = email, password = password).first()
    except Exception as e:
        print(e)
        employee = False

    return {
        'success': False if not employee else True,
        'employee': {} if not employee else employee.to_dict()
    }

@query.field("employees")
def employees_resolver(obj, info):
    try:
        employees = [d.to_dict() for d in Employees.query.all()]
        return employees
    except Exception as error:
        print(error)
        return []

@query.field("customers")
def customers_resolver(obj, info):
    try:
        customers = [d.to_dict() for d in Customers.query.all()]
        return customers
    except Exception as error:
        print(error)
        return []

@query.field("orders")
def orders_resolver(obj, info, delivered = False):
    try:
        # orders = [d.to_dict() for d in Orders.query.filter_by(delivered = delivered).all()]
        fields = [
            "orderID", "packageWeight", "packageType", 
            "packageDescription", "employeeID", "customerID", 
            "originLocationID", "destinationLocationID",
            "senderFirstName", "senderLastName",
            "originCountry", "originState", "originCity",
            "originStreet", "originZipCode",
            "destinationCountry", "destinationState", "destinationCity",
            "destinationStreet", "destinationZipCode", "delivered"
        ]

        stmt = text(f'\
            SELECT \
                Orders."orderID", Orders."packageWeight", Orders."packageType",\
                Orders."packageDescription", Orders."employeeID", Orders."customerID", \
                Orders."originLocationID", Orders."destinationLocationID", \
                Customers."firstName" AS "senderFirstName", Customers."lastName" AS "senderLastName", \
                o."country" AS "originCountry", o."state" AS "originState", \
                o."city" AS "originCity", o."street" AS "originStreet", \
                o."zipCode" AS "originZipCode", \
                d."country" AS "destinationCountry", d."state" AS "destinationState", \
                d."city" AS "destinationCity", d."street" AS "destinationStreet", \
                d."zipCode" AS "destinationZipCode", \
                Orders."delivered" \
            FROM Orders \
            JOIN Customers ON \
                Customers."customerID" = Orders."customerID" \
            LEFT JOIN Locations as o ON \
                o."locationID" = Orders."originLocationID" \
            LEFT JOIN Locations as d ON \
                d."locationID" = Orders."destinationLocationID" \
            WHERE Orders.delivered={delivered}\
        ')

        results = db.session.execute(stmt)
        orders = []

        for r in results:
            d = {}
            for i in range(0, len(fields)):
                d[fields[i]] = r[i]
            orders.append(d)

        return orders
    except Exception as error:
        print(error)
        return []

@query.field("locations")
def locations_resolver(obj, info):
    try:
        locations = [d.to_dict() for d in Locations.query.all()]
        return locations
    except Exception as error:
        print(error)
        return []

@mutation.field("createCustomer")
def create_customer_resolver(_, info, input):
    try:
        customer = Customers(**input)
        db.session.add(customer)
        db.session.commit()
        return {
            "customer": customer.to_dict(),
            "status": "success"        
        }
    except Exception as error:
        print(error)
        return {
            "status": "error",
            "customer": {}
        } 

@mutation.field("createOrder")
def create_order_resolver(_, info, input):
    try:
        order = Orders(**input)
        db.session.add(order)
        db.session.commit()
        return {
            "order": order.to_dict(),
            "success": True
        }
    except Exception as e:
        print(e)
        return {
            "success": False,
            "order": {}
        }

@query.field("statistics")
def statistics_resolver(_, info):
    try:
        totalOrders = Orders.query.count()
        totalCustomers = Customers.query.count()
        totalEmployees = Employees.query.count()
        completedOrders = Orders.query.filter_by(delivered = True).count()
        pendingOrders = Orders.query.filter_by(delivered = False).count()
    
        return {
            "totalOrders": totalOrders,
            "pendingOrders": pendingOrders,
            "totalCustomers": totalCustomers,
            "totalEmployees": totalEmployees,
            "completedOrders": completedOrders
        }
    except Exception as e:
        print(e)
        return {}

@mutation.field("updateOrderStatus")
def update_order_resolver(_, info, orderID, delivered):
    try:
        stmt = (
            update(Orders).
            where(Orders.orderID == orderID).
            values(delivered = delivered)
        )
        db.session.execute(stmt)
        db.session.commit()
        return {
            "success": True
        }
    except Exception as e:
        print(e)
        return {
            "success": False
        }

@mutation.field("addLocation")
def add_location_resolver(_, info, input):
    try:
        location = Locations(**input)
        db.session.add(location)
        db.session.commit()
        return {
            "location": location.to_dict(),
            "status": "success"
        }
    except Exception as error:
        print(error)
        return {
            "status": "error",
            "location": {}
        }