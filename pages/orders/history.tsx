import React from 'react'
import { ShopLayout } from '../../components/layouts';
import { Chip, Grid, Typography, Link, Box } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { GridRenderCellParams } from '@mui/x-data-grid/models';
import NextLink from 'next/link';
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'fullname', headerName: 'Nombre Completo', minWidth: 100, flex: 1 },
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si esta pagada la orden',
        minWidth: 100,
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
            return (
                params.row.paid
                    ? <Chip color='success' label='pagada' variant='outlined' /> :
                    <Chip color='error' label='No pagada' variant='outlined' />
            )
        }
    },
    {
        field: 'actions',
        headerName: 'Acciones',
        description: 'Muestra información navengando a detalle de orden',
        minWidth: 100,
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <>
                    <NextLink href={`/orders/${params.row.id}`} passHref prefetch={false} legacyBehavior>
                        <Link underline='always'>
                            Ver Orden
                        </Link>
                    </NextLink>
                </>

            )
        }
    }
];

const rows: GridRowsProp = [
    { id: 1, paid: false, fullname: 'Victor Hurtado' },
    { id: 2, paid: true, fullname: 'Manuel Hurtado' },
    { id: 3, paid: false, fullname: 'Luisa Hurtado' },
    { id: 4, paid: true, fullname: 'Julio Hurtado' },
    { id: 5, paid: false, fullname: 'Gloria Hurtado' },
]
const History = () => {
    return (
        <ShopLayout title='Historial de Ordenes' pageDescription='Historial de ordenes del cliente'>
            <Typography variant={'h1'} component={'h1'}>Historial de Ordenes</Typography>
            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        page={0}
                        rowsPerPageOptions={[10]}

                    />
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default History