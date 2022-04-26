import { MdElectricBike,MdOutlineShoppingCart,MdFavorite,MdSearch } from "react-icons/md";
const Navbar = () => {
    return ( 
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <MdElectricBike color="green"/>
      eVehiclez360
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center align-center" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link "  href="#">E-Scooters</a>
        <a className="nav-link" href="/">E-Bikes</a>
        <a className="nav-link" href="/">Franchisee</a>
        <a className="nav-link "  href="#">Careers</a>
        <a className="nav-link" href="/">Inside eVehiclez360</a>
        </div>
        <div className="collapse navbar-collapse justify-content-end align-center" id="navbarNavAltMarkup">
        <button type="button" class="btn btn-sm btn-success">Login/Register</button>
        <a className="nav-link "  href="#"><MdSearch color="black" size={'30px'}/></a>
        <a className="nav-link "  href="#"><MdFavorite color="crimson" size={'30px'}/></a>
        <a className="nav-link" href="/"><MdOutlineShoppingCart color="green" size={'30px'}/></a>
        
        
      </div>
    </div>
  </div>
</nav>
      </div>
     );
}
 
export default Navbar;