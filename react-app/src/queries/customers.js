import {
    gql
} from '@apollo/client';

export const LIST_CUSTOMERS = gql`
    query customers {
        customerID,
        firstName,
        lastName,
        email,
        phone
    }
`;