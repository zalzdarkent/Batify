import { defineRecipe } from '@chakra-ui/react'

const IconButton = defineRecipe({
  className: 'icon-button',
  base: {
    fontWeight: '500',
  },
  defaultVariants: { variant: ['primary'] },
  variants: {
    variant: {
      primary: {
        bg: '{colors.primary.500}',
        color: '{colors.white}',
        _hover: {
          bg: '{colors.primary.600}',
        },
      },
      filled: {
        bg: '{colors.{colorScheme}.500}',
        color: '{colors.white}',
        _hover: {
          bg: '{colors.{colorScheme}.600}',
        },
      },
      bordered: {
        bg: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '{colors.{colorScheme}.500}',
        color: '{colors.{colorScheme}.500}',
        _hover: {
          bg: '{colors.{colorScheme}.50}',
        },
      },
      flat: {
        bg: '{colors.{colorScheme}.100}',
        color: '{colors.{colorScheme}.600}',
        _hover: {
          bg: '{colors.{colorScheme}.200}',
        },
      },
      light: {
        bg: 'transparent',
        color: '{colors.neutral.500}',
        _hover: {
          bg: '{colors.{colorScheme}.50}',
          color: '{colors.{colorScheme}.500}',
        },
      },
    },
  },
})

export default IconButton
