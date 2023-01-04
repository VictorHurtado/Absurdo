import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import NextLink from 'next/link'
const EmptyPage = () => {
    return (
        <ShopLayout title='Carrito' pageDescription='Carrito sin articulos'>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'calc(100vh - 200px)'}
                sx={{ flexDirection: { xs: 'column' } }}
            >   
                <Box>
                    <RemoveShoppingCartOutlined fontSize={'large'}/>
                </Box>
                <Box display={'flex'} flexDirection={'row'}>
                    <Typography variant='h3' fontSize={17} fontWeight={'bold'}> Ups... Cuanto vacío! </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} flexWrap={'wrap'} width={400}>
                    <Typography sx={{ ml: 0.5, textAlign: 'center' }}> Tranqui, parece que no has elegido articulos aún. Intentalo y luego regresa</Typography>
                    <NextLink href="/" passHref legacyBehavior>
                        <Link typography={'h6'} color={'secondary'} sx={{textAlign:'center'}}>
                            Regresar
                        </Link>
                    </NextLink>                
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage