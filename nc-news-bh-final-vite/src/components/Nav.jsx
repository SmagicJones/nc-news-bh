import {Link} from 'react-router-dom';

const Nav =()=>{
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/:article_id"></Link>
        
        </nav>
    )
}

export default Nav;