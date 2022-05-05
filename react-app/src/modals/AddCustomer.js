import { useState } from 'react';

import {
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    TextField,
    Button
} from '@mui/material';

import {
    useMutation
} from '@apollo/client';

import {
    CREATE_CUSTOMER,
    LIST_CUSTOMERS
} from 'queries/customers'

const AddCustomer = ({
    open = false,
    onClose = () => {},
    onCreate
}) => {

    const [CreateCustomer, { loading }] = useMutation(CREATE_CUSTOMER, {
        refetchQueries: [
            { query: LIST_CUSTOMERS }
        ]
    });

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const create = () => {
        CreateCustomer({
            variables: {
                firstName, 
                lastName, 
                phone, 
                email
            }
        });
        onClose();
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Customer</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="fname"
                    value={firstName}
                    label="First Name"
                    onChange={({target}) => setFirstName(target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="lname"
                    value={lastName}
                    label="Last Name"
                    onChange={({target}) => setLastName(target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    margin="dense"
                    id="email"
                    value={email}
                    label="Email Address"
                    onChange={({target}) => setEmail(target.value)}
                    type="email"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    margin="dense"
                    id="phone"
                    value={phone}
                    label="Phone"
                    onChange={({target}) => setPhone(target.value)}
                    type="tel"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={create} disabled={loading}>Create</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddCustomer;