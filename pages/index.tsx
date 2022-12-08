import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ShopLayout } from '../components/layouts';
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { initialData } from '../database/products';
initialData
export default function Home() {
  return (
    <ShopLayout title={'Absurdo'} pageDescription={'Encuentra cosas absurdas'}>
      <Typography variant='h1' component={'h1'}> Tienda </Typography>
      <Typography variant='h2' style={{ marginBottom: 1 }}> Todos los productos </Typography>
      <Grid container spacing={4}>

        {
          initialData.products.map(product => (
            <Grid item xs={6} sm={4} key={product.slug}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component={'img'}
                    image={`products/${product.images[0]}`}
                    alt={product.type}
                  />
                </CardActionArea>                
              </Card>
            </Grid>
          ))
        }

      </Grid>
    </ShopLayout>
  )
}
