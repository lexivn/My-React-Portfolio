import data from './data';
import Nav from 'react-bootstrap/Nav';
// import Scrollspy from 'react-scrollspy';
import Navbar from './Navbar';
import './floating-nav.css'

const FloatingNav = () => {
  return (
    // <ul id='floating__nav'>
    //   <Scrollspy className='scrollspy' items={['header', 'about', 'services', 'portfolio', 'contact']}>
    //     {
    //       data.map(item => <Nav key={item.id} item={item}/>)
    //     }
    //   </Scrollspy>
    // </ul>

    <ul id='floating__nav'>
      <Nav className='navbar'>
        {
          data.map(item => <Navbar key={item.id} item={item} />)
        }
      </Nav>
    </ul>
  )
}

export default FloatingNav