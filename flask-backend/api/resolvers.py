from models import Employees

def getEmployee_resolver(obj, info, email):
    try:
        employee = Employees.query.get(email)
        payload = {
            "success": True,
            "employee": employee.to_dict()
        }
    except AttributeError:  # todo not found
        payload = {
            "success": False,
            "errors": ["Post item matching {email} not found"]
        }
    
    return payload

def listEmployees_resolver(obj, info):
    try:
        employees = [d.to_dict() for d in Employees.query.all()]
        return employees
    except Exception as error:
        print(error)
        return []