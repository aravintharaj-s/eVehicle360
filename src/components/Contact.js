import './Contact.css';
import bg from '../img/contact-img.jpg';
const Contact = () => {
    return ( 
        <div className="container-fluid bg-secondary contacts">
            
            <div className="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-3 mt-3  ">
                    <div className="container ct ">
                        <h5 className='mb-3'>About eVehiclez360</h5>
                            <ul className='ul-list'>
                                <li><a href="/" className='item'> Inside eVehiclez360</a></li>
                                <li><a href="/" className='item'>Careers</a></li>
                                <li><a href="/" className='item'>Blogs</a></li>
                                <li><a href="/" className='item'>Faqs</a></li>
                            </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-3 ">
                    <div className="container ct">
                    <h5 className='mb-3'>Customer Service</h5>
                    <ul className='ul-list'>
                                <li><a href="/" className='item'>Terms & Condition</a></li>
                                <li><a href="/" className='item'> Shipping Policy</a></li>
                                <li><a href="/" className='item'>Return Policy</a></li>
                                <li><a href="/" className='item'>Privacy Policy</a></li>
                    </ul>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-3 ">
                    <div className="container ct">
                    <h5 className='mb-3'>Contact Us</h5>
                    <p>   Tel: 03498349984</p>
                    <p>   E-mail: evehicles360@gmail.com</p>
                    <p>   Address: </p>
                        
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mt-3 ">
                    <div className="container ct">
                    <h5 className='mb-3'>Blogs</h5>
                    <p>   Some random blogs</p>
                        <hr/>
                        <p>   Some random blog</p>
                    </div>
                </div>
            </div>
            </div>
            <hr/>
            <p className="text-light ">eVechiclez360 © 2021</p>
        </div>
     );
}
 
export default Contact;