import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 32px;
  display: inline-flex;
  align-items: center;
  height: 65px;
  line-height: 20px;

  &:hover img {
    transform: rotate(5deg);
  }
`

const Logo = () => {
  const logoBase = `/images/base${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoBase} width={65} height={65} alt="Logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="Josefin Sans"
            fontWeight="400"
            ml={3}
            mt={7}
          >
            BelleDelphine
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
