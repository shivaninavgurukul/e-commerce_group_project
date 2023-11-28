import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="container_my-5">
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#008080' }}>
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              	              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">E-Commerce</h6>
                <p>
              		This is E-Commerce website , you can buy product for women , men and kids also
              		and you can reach to us by folllowing on social media and contact on phone
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><a className="text-white">Women</a></p>
                <p><a className="text-white">men</a></p>
                <p><a className="text-white">Kids</a></p>
                <p><a className="text-white">Accesiores</a></p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
 
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              </div>
            </div>
              <div>
              <a
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: '#3b5998' }}
                href="https://www.facebook.com/"
                role="button">
                <i className="fab fa-facebook-f"></i>
                <FacebookIcon/>
              </a>

              <a
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: '#dd4b39' }}
                href="https://www.google.co.in/"
                role="button">
                <i className="fab fa-google"></i>
                <GoogleIcon/>
              </a>

              <a
                  data-mdb-ripple-init
                  className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: '#333333' }}
                  href="https://github.com/"
                  role="button">
                  <i className="fab fa-github"></i>
                  <GitHubIcon/>
              </a>

              <a
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: '#55acee' }}
                href="https://twitter.com/home"
                role="button">
                <i className="fab fa-twitter"></i>
                <TwitterIcon/>
              </a>

              <a
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: '#ac2bac' }} 
                href="https://www.instagram.com/"
                role="button"
              >
                <i className="fab fa-instagram"></i> 
                <InstagramIcon /> 
              </a>  
                <a
                  class="btn text-white btn-floating m-1"
                  style={{backgroundColor: "#0082ca" }}
                  href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                  role="button"
                  ><i class="fab fa-linkedin-in"></i>
                  <LinkedInIcon/>
                </a>    
            </div>
                </section>
              </div>
              <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">Bootstrap.com</a>
              </div>
            
            </footer>
    </div>
  );
}

export default Footer;


