import { ReactComponent as JuneCareLogo } from '../../assets/images/juneCare-logo.svg'
import Buttons from './Buttons'
import { A, Border, Footer, H2, H5, Login, Main, P, Section, Span, Wrapper} from './styled'

 function Welcome () {
  return (
    <Section>
        <Wrapper>
        <JuneCareLogo/>
        <H5>Welcome to June Care. ChildCare for families, by families</H5>
          <P>Tell us what you're looking for:</P>
          <Main>
            <Buttons text="I'm looking for a childcare"/>
            <Buttons text="I want to become a host"/>
        </Main>
        <Login>
            <Span>Login</Span>
        <Border></Border>
        </Login>
        <Footer>
            <H2>For More Information</H2>
          {" "} 
           <A> visit our website</A>
        </Footer>
        </Wrapper>
    </Section>
  )
}

export default Welcome