from models import Employees, Customers, Orders

def employee_resolver(obj, info, email):
    try:
        employee = Employees.query.get(email)
        payload = {
            "success": True,
            "employee": employee.to_dict()
        }
    except AttributeError: 
        payload = {
            "success": False,
            "errors": ["Post item matching {email} not found"]
        }
    
    return payload

def employees_resolver(obj, info):
    try:
        employees = [d.to_dict() for d in Employees.query.all()]
        return employees
    except Exception as error:
        print(error)
        return []

def customers_resolver(obj, info):
    try:
        customers = [d.to_dict() for d in Customers.query.all()]
        return customers
    except Exception as error:
        print(error)
        return []

def orders_resolver(obj, info):
    try:
        orders = [d.to_dict() for d in Orders.query.all()]
        return orders
    except Exception as error:
        print(error)
        return []

def create_customer_resolver(_, info, req):
    cust = {
        "firstName": req.get("firstName"),
        "lastName": req.get("lastName"),
        "email": req.get("email"),
        "phone": req.get("phone")
    }

    try:
        return {
            
        }
    except Exception as error:
        return {
            "status": False,
            "customer": {}
        } 