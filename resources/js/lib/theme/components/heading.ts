import { defineRecipe } from '@chakra-ui/react'

const headingRecipe = defineRecipe({
  className: 'heading',
  base: {
    color: '{black}',
    fontWeight: '700',
    fontFamily: 'heading',
  },
  variants: {
    size: {
      sm: {
        fontSize: '16px',
        lineHeight: '1.2rem',
      },
      md: {
        fontSize: '24px',
        lineHeight: '32px',
      },
      lg: {
        fontSize: '32px',
        lineHeight: '2.5rem',
      },
      xl: {
        fontSize: '48px',
        lineHeight: '56px',
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export default headingRecipe