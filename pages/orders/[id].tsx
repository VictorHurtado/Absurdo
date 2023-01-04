import React from 'react'
import { ShopLayout } from '../../components/layouts';
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material';
import { CartList, OrderSummary } from '../../components/cart';
import NextLink from 'next/link';
import { CreditCardOffOutlined, CreditCardOutlined, CreditScoreOutlined } from '@mui/icons-material';
const OrderPage = () => {
    return (
        <ShopLayout title={'Resumen de la orden 12334123'} pageDescription={'Resumen de la orden'} >
            <Typography variant='h1' component={'h1'}>Orden No ABC123</Typography>
            {/* <Chip sx={{ my: 2 }}
                label='Pediente de Pago'
                variant='outlined'
                color={'error'}
                icon={<CreditCardOffOutlined/>}
            /> */}
            <Chip sx={{ my: 2 }}
                label='Orden Pagada'
                variant='outlined'
                color={'success'}
                icon={<CreditScoreOutlined />}
            />
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Resumen (3 Productos)</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box display={'flex'} justifyContent='space-between'>
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
                            <Box display={'flex'} justifyContent='end'>
                                <NextLink href={'/cart'} passHref prefetch={false} legacyBehavior>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>
                            <OrderSummary />
                            <Box sx={{ mt: 3 }}>
                                {/* TODO: Pagar */}
                                <h1>Pagar</h1>
                                <Chip sx={{ my: 2 }}
                                    label='Orden Pagada'
                                    variant='outlined'
                                    color={'success'}
                                    icon={<CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default OrderPage