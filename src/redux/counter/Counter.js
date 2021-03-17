import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './counterSlice';

export const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item md={6}>
                    <Button variant="contained" onClick={() => dispatch(increment())}>
                        <AddIcon />
                    </Button>
                    <Box component="span" m={5}>{count}</Box>
                    <Button variant="contained" onClick={() => dispatch(decrement())}>
                        <RemoveIcon />
                    </Button>
                </Grid>
                <Grid item md={6}>
                    <TextField
                        id="increment_amount"
                        label="Set increment amount"
                        value={incrementAmount}
                        onChange={e => setIncrementAmount(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item md={6}>
                    <Button
                        variant="contained"
                        onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}> Add Amount
                    </Button>
                </Grid>
                <Grid item md={6}>
                    <Button
                        variant="contained"
                        onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}> Add Async
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
