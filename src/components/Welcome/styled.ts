import { Heading3, Heading4 } from './../../assets/typography';
import { Black1, Blue1, White } from './../../common/styles';
import styled from "styled-components";
import { Heading1, Heading2 } from "../../assets/typography";


export const Section = styled.div`
    background: linear-gradient(192.04deg, rgb(255, 243, 233) 0%, rgb(242, 233, 242) 100%);
    min-height: 100vh;
    min-width: 100vw;
    display:  flex;
    align-items: center;
    justify-content: center;
`
export const Wrapper  = styled.div`
max-width: 400px;
display:  flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const H5 = styled.h5`
${Heading1};
color: ${Black1};
`
export const P = styled.p`
${Heading2};
color: ${Black1};
`
export const Main = styled.div`
display: flex;
align-items: center;
flex-direction: column;
max-width: 230px;
`
export const Login = styled.div`
  color: ${Blue1};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  cursor: pointer;
`

export const Border = styled.p`
width: 100%;
    height: 1px;
    background-color: ${Blue1};
    margin-top: 4px;
`
export const Span = styled.span`
  ${Heading3};
`
export const Footer = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
`
export const H2 = styled.h2`
${Heading4};
`
export const A = styled.a`
padding-left: 4px;
${Heading4};
font-weight: 600;
cursor: pointer;
`