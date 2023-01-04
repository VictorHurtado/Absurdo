import { Grid, Typography, Link, CardMedia, CardActionArea, Box, Button } from '@mui/material';
import NextLink from 'next/link';
import { initialData } from '../../database/products';
import { ItemCounter } from '../ui';
import { FC } from 'react';
const productsInCart = initialData.products.slice(0, 3);
interface Props {
    editable?: boolean
}
export const CartList: FC<Props> = ({ editable = false }) => {
    return (<>

        {
            productsInCart.map(product =>
                <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
                    <Grid item xs={3}>
                        {/* TODO: Llevar a la pagina del slug */}
                        <NextLink href={'product/slug'} passHref prefetch={false} legacyBehavior>
                            <Link>
                                <CardActionArea>
                                    <CardMedia
                                        component={'img'}
                                        image={`/products/${product.images[0]}`}
                                        alt={product.type}
                                        sx={{ borderRadius: '5px' }}
                                    />
                                </CardActionArea>
                            </Link>
                        </NextLink>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography variant='body1'>{product.title}</Typography>
                            <Typography variant='body1'>Talla <strong>M</strong></Typography>
                            {/* Condicional */}
                            {editable ? <ItemCounter /> : <Typography variant='h6'>3 items</Typography>}

                        </Box>
                    </Grid>
                    <Grid item xs={2} display='flex' alignItems={'center'} flexDirection='column'>
                        <Typography variant='subtitle1'>${product.price}</Typography>
                        {editable && <Button variant='text' color='secondary'>
                            Remover
                        </Button>}
                    </Grid>
                </Grid>
            )
        }

    </>
    );
}

