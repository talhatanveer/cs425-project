import { useState } from 'react';

import {
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    TextField,
    Button
} from '@mui/material';

import { useMutation } from '@apollo/client';

import { ADD_LOCATION, LIST_LOCATIONS } from 'queries/locations';

const AddLocation = ({
    open = false,
    onClose = () => {},
    onCreate
}) => {

    const [AddLocation, { loading }] = useMutation(ADD_LOCATION, {
        refetchQueries: [
            { query: LIST_LOCATIONS }
        ]
    });

    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [zipCode, setZipCode] = useState('');

    const create = () => {
        AddLocation({
            variables: {
                country, 
                street, 
                state, 
                city,
                zipCode
            }
        });
        onClose();
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Location</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Country"
                    value={country}
                    label="Country"
                    onChange={({target}) => setCountry(target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="City"
                    value={city}
                    label="City"
                    onChange={({target}) => setCity(target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    margin="dense"
                    id="email"
                    value={state}
                    label="State"
                    onChange={({target}) => setState(target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    margin="dense"
                    id="Street"
                    value={street}
                    label="Street"
                    onChange={({target}) => setStreet(target.value)}
                    type="tel"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    margin="dense"
                    id="zipcode"
                    value={zipCode}
                    label="Zip Code"
                    onChange={({target}) => setZipCode(target.value)}
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={create} disabled={loading}>Add</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddLocation;