import { useState } from 'react';

import {
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    TextField,
    Button
} from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useMutation, useQuery } from '@apollo/client';

import { LIST_LOCATIONS } from 'queries/locations';
import { LIST_CUSTOMERS } from 'queries/customers';
import { LIST_ORDERS, CREATE_ORDER } from 'queries/orders';

const CreateOrder = ({
    open = false,
    onClose = () => {},
    onCreate
}) => {

    const customersQuery = useQuery(LIST_CUSTOMERS)?.data || {};
    const locationsQuery = useQuery(LIST_LOCATIONS)?.data || {};

    const [CreateOrder, { loading }] = useMutation(CREATE_ORDER, {
        refreshQueries: [
            { query: LIST_ORDERS, variables: { delivered: true } },
            { query: LIST_ORDERS, variables: { delivered: false } }
        ]
    });

    const [packageType, setPackageType] = useState('');
    const [packageDescription, setPackageDescription] = useState('');
    const [packageWeight, setPackageWeight] = useState(0);
    const [destinationLocationID, setDestinationLocationID] = useState(1);
    const [originLocationID, setOriginLocationID] = useState(2);
    const [customerID, setCustomerID] = useState(2);

    const create = () => {
        CreateOrder({
            variables: {
                packageType,
                packageWeight,
                packageDescription,
                employeeID: localStorage.getItem('employeeId'),
                destinationLocationID,
                originLocationID,
                customerID
            }
        });
        onClose();
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Create Order</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="packageType"
                    value={packageType}
                    label="Package Type"
                    onChange={({target}) => setPackageType(target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="packageWeight"
                    value={packageWeight}
                    label="Package Weight"
                    onChange={({target}) => setPackageWeight(parseFloat(target.value))}
                    type="number"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    margin="dense"
                    id="packageDescription"
                    value={packageDescription}
                    label="Package Description"
                    onChange={({target}) => setPackageDescription(target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <br /> <br /> 
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Customer</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={customerID}
                        label="Customer"
                        sx={{height:40}}
                        onChange={({target}) => setCustomerID(target.value)}
                    >
                        {
                            (customersQuery?.customers || []).map(({
                                customerID,
                                firstName,
                                lastName,
                                email
                            }) => (
                                <MenuItem value={customerID}>
                                    {firstName} {lastName} ({email})
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <br /> <br /> 
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="destination-label">
                        Destination Location
                    </InputLabel>
                    <Select
                        labelId="destination-label"
                        id="destination-select"
                        size='medium'
                        value={destinationLocationID}
                        sx={{height:40}}
                        label="Destination Location"
                        onChange={({target}) => setDestinationLocationID(target.value)}
                    >
                        {
                            (locationsQuery?.locations || []).map(({
                                locationID,
                                country,
                                state,
                                city,
                                street,
                                zipCode
                            }) => (
                                <MenuItem value={locationID}>
                                    {street}, {city}, {zipCode}, {state}, {country} 
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <br /> <br /> 
                <FormControl fullWidth>
                    <InputLabel id="origin-label">
                        Origin Location
                    </InputLabel>
                    <Select
                        labelId="origin-label"
                        id="origin-select"
                        value={originLocationID}
                        sx={{height:40}}
                        label="Destination Location"
                        onChange={({target}) => setOriginLocationID(target.value)}
                    >
                        {
                            (locationsQuery?.locations || []).map(({
                                locationID,
                                country,
                                state,
                                city,
                                street,
                                zipCode
                            }) => (
                                <MenuItem value={locationID}>
                                    {street}, {city}, {zipCode}, {state}, {country} 
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={create} disabled={loading}>Add</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateOrder;