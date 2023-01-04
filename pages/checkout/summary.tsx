import React from 'react'
import { ShopLayout } from '../../components/layouts';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';
import { CartList, OrderSummary } from '../../components/cart';
import NextLink from 'next/link';
const SummaryPage = () => {
    return (
        <ShopLayout title={'Resumen de la orden'} pageDescription={'Resumen de la orden'} >
            <Typography variant='h1' component={'h1'}>Resumen de la Orden</Typography>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Resumen (3 Productos)</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box display={'flex' } justifyContent='space-between'>
                                <Typography variant='subtitle1'> Dirección de entrega</Typography>
                                <NextLink href={'/checkout/address'} passHref prefetch={false} legacyBehavior>
                                    <Link underline='always'>
                                      Editar
                                    </Link>
                                </NextLink>
                            </Box>
                           
                            <Typography >Victor Hurtado</Typography>
                            <Typography >111222333 Algun lugar</Typography>
                            <Typography >Cll 72i 1 #26i - 38</Typography>
                            <Typography >Cali</Typography>
                            <Typography >Colombia</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box display={'flex' } justifyContent='end'>
                                <NextLink href={'/cart'} passHref prefetch={false} legacyBehavior>
                                    <Link underline='always'>
                                      Editar
                                    </Link>
                                </NextLink>
                            </Box>
                            <OrderSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button color={'secondary'} className={'circular-btn'} fullWidth>
                                    Confirmar Orden
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage