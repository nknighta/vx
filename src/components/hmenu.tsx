import React from 'react'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Divider,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const LightMenu = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { auth } = router.query
  return (
    <Box>
      <Button
        colorScheme="black"
        onClick={onOpen}
        fontSize={30}
        w={45}
        h={45}
        ml={4}
        mr={4}
      >
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={'#000016'} color={'#fff'}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Box bgColor={'#4826b0'} borderRadius={4} h={100} p={2}></Box>
            <Divider marginY={6} />
            <Box m={'7px'}>
              <NextLink href={'/'} onClick={onClose}>
                Home
              </NextLink>
            </Box>
            <Box m={'7px'}>
              <NextLink href={'/dashboard'} onClick={onClose}>
                Dashboard
              </NextLink>
            </Box>

            <Box m={'7px'}>
              <NextLink href={'/about'} onClick={onClose}>
                About
              </NextLink>
            </Box>

            <Box m={'7px'}>
              <NextLink href={'/docs'} onClick={onClose}>
                Documentation
              </NextLink>
            </Box>

            <Box m={'7px'}>
              <NextLink href={'/settings'} onClick={onClose}>
                Settings
              </NextLink>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              colorScheme="white"
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default LightMenu
