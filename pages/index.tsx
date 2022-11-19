import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {ShopLayout} from '../components/layouts';
import { Typography } from '@mui/material';

export default function Home() {
  return (
   <ShopLayout title={'Absurdo'} pageDescription={'Encuentra cosas absurdas'}>
    <Typography variant='h1' component={'h1'}> Tienda </Typography>
    <Typography variant='h2' style={{ marginBottom:1 }}> Tienda </Typography>
   </ShopLayout>
  )
}
