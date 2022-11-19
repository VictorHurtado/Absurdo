import { Box, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { ShopLayout } from '../components/layouts';
const phrasesNotFound = [
    "Whoops! Looks like your link is broken.",
    "Hmmm, we couldn't find this page", "Don't be sad...",
    "Oops! That page can't be found."
]
const Custom404 = () => {
    const [phrase, setPhrase] = useState('')
    const randomPhrase = useCallback(
        () => {
            const ramdomIndex = Math.floor(Math.random() * phrasesNotFound.length)
            setPhrase(phrasesNotFound[ramdomIndex]);
        },
        [phrasesNotFound],
    )
    useEffect(randomPhrase, [])

    return (
        <ShopLayout title='Page Not Found' pageDescription='Parece que no hay nada por aquí'>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'calc(100vh - 200px)'}
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <Box display={'flex'} flexDirection={'row'}>
                    <Typography variant='h3' fontSize={17} fontWeight={'bold'}> 404 </Typography>
                    <Typography variant='h3' fontSize={17} fontWeight={'bold'} sx={{ ml: 0.5, display: { xs: 'none', sm: 'block' } }}> | </Typography>
                </Box>

                <Typography sx={{ ml: 0.5 }}>{phrase} </Typography>
            </Box>
        </ShopLayout>
    )
}

export default Custom404;