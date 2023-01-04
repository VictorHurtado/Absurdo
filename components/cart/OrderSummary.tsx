import { Grid, Typography } from '@mui/material'
import React from 'react'

export const OrderSummary = () => {
    return (
        <Grid container>
            <Grid xs={6} >
                <Typography variant='subtitle2'>No. Productos</Typography>
            </Grid>
            <Grid xs={6} display={'flex'} justifyContent='end' >
                <Typography>3</Typography>
            </Grid>
            <Grid xs={6} >
                <Typography variant='subtitle2'>Subtotal</Typography>
            </Grid>
            <Grid xs={6} display={'flex'} justifyContent='end' >
                <Typography>$35.43</Typography>
            </Grid>
            <Grid xs={6} >
                <Typography variant='subtitle2'>Impuestos (15%)</Typography>
            </Grid>
            <Grid xs={6} display={'flex'} justifyContent='end' >
                <Typography>$35.43</Typography>
            </Grid>
            <Grid xs={6} sx={{mt: 1, }} >
                <Typography  variant={'subtitle1'}>Total</Typography>
            </Grid>
            <Grid xs={6} sx={{mt: 1}} display={'flex'} justifyContent='end' >
                <Typography variant={'subtitle1'}>$71.06</Typography>
            </Grid>
        </Grid>
    )
}

