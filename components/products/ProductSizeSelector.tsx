import { Box, Button } from '@mui/material'
import React, { FC } from 'react'
import { ISize } from '../../interfaces'
interface Props{
    selectedSize?: ISize,
    sizes: ISize[]
}
export const ProductSizeSelector:FC<Props> = ({selectedSize, sizes}) => {
  return (
    <Box>
      {
        sizes.map(size=>(
            <Button
                key={size}
                size={'small'}
                color={selectedSize === size ? 'inherit': 'primary' }
            >
                {size}
            </Button>
        ))
      }  
    </Box>
  )
}
