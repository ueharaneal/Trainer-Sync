import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <div className="md:flex ">
            {/* Main navBar */}
             <div className="md:flex flex-Row">
                {/* <Link>Home</Link>
                <Link>Profile</Link> */}
            </div>
            {/* Mobile NavBar */}
            <div className="md:hidden">

            </div>
        </div>
    )
}

export default NavBar