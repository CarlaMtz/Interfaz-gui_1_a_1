
import {VscChromeClose} from 'react-icons/vsc'


const Header = ({ title }) => {
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <VscChromeClose style={{color:'red', cursor:'pointer', fontSize: '30px'}}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Define new node',
}

export default Header