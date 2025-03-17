import {Link} from 'react-router-dom'
const  Navbar=()=>{
    return(
        <div >
        <h1>RECIPE HUB</h1>
        <Link to={'/'}>Home</Link>
        <Link to={'/Recipe'}>Recipes</Link>
        </div>
    );
}
export default Navbar