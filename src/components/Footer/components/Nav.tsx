import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink>
        target="_blank"
        href="https://bscscan.com/address/0xb7fb8c26300fdd2d5798f3495099884f2ab0d414">
        Lps Contract
      </StyledLink>
      <StyledLink>
        target="_blank"
        href="https://catsswap.info/pair/0xb7fb8c26300Fdd2D5798F3495099884F2aB0D414">
        Catswap FCAT-BNB
      </StyledLink> 
      <StyledLink target="_blank" href="https://exchange.cats.finance/">
        Exchange
      </StyledLink>
      <StyledLink target="_blank" href="https://app.cats.finance/">
        Farm
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/catsexchange">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="http://t.me/catsexchange">
        Telegram
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[600]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
