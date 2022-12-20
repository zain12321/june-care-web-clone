import { P, Section} from './styled'
import {FiArrowRight} from 'react-icons/fi'
interface IButton{
    text: string;
}
 function Buttons (props: IButton) {
    const {text} = props;
  return (
    <Section>
        <P>{text}</P>
        <FiArrowRight className='arrow-icon'/>
    </Section>
  )
}

export default Buttons