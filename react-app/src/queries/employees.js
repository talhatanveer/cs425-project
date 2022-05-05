import { gql } from '@apollo/client';

export const LOGIN_QUERY = gql`
    query Login($email: String!, $password: String!){
        login (email: $email, password: $password){
            success
            employee {
                employeeID
            }
        }
    }
`;

export const GET_EMPLOYEE = gql`
    query GetEmployee($employeeID: ID!) {
        employee ( employeeID: $employeeID ) {
            employeeID
            firstName
            lastName
            email
        }
    }
`