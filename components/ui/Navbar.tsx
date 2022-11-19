import NextLink from 'next/link';
import { AppBar, Box, Link, Toolbar, Typography, Button } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

interface ButtonRefProps {
  onClick?: () => void;
  title: string;
}


export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
          <Link display={'flex'} alignItems={'center'} >
            <Typography variant='h6' >Absurdo |</Typography>
            <Typography sx={{ ml: 0.5 }} >Shop </Typography>

          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display:{xs: 'none', sm: 'block'}}}>
          <NextLink href="/Category/Men" passHref legacyBehavior>

            <Link>
              <Button >
                {'Hombres'}
              </Button>
            </Link>

          </NextLink>
          <NextLink href="/Category/Women" passHref legacyBehavior>

            <Link>
              <Button >
                {'Mujeres'}
              </Button>
            </Link>

          </NextLink>
          <NextLink href="/Category/Kid" passHref legacyBehavior>

            <Link>
              <Button >
                {'Niños'}
              </Button>
            </Link>

          </NextLink>
        </Box>



        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href="/Category/Women" passHref legacyBehavior>

          <Link>
            <IconButton>
              <Badge badgeContent={2} color={'secondary'}>
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>

        </NextLink>
        <Button>
          Menú
        </Button>
      </Toolbar>
    </AppBar>
  )
}
