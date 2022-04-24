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