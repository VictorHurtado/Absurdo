import styles from '../styles/Home.module.css'
import { ShopLayout } from '../components/layouts';
import { Typography } from '@mui/material';
import { initialData } from '../database/products';
import ProductList from '../components/products/ProductList';
initialData
export default function Home() {
  return (
    <ShopLayout title={'Absurdo'} pageDescription={'Encuentra cosas absurdas'}>
      <Typography variant='h1' component={'h1'}> Tienda </Typography>
      <Typography variant='h2' style={{ marginBottom: 1 }}> Todos los productos </Typography>
      <ProductList
        products={initialData.products as any}
      />
    </ShopLayout>
  )
}
