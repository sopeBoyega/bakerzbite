import logoText from '../../assets/logo.png';
import logoIcon from '../../assets/logo-icon-2.svg';
import checkmark from '../../assets/check.svg';
import image14 from '../../assets/pexels-kampus-6605421.jpg';
import image15 from '../../assets/pexels-tim-douglas-6205509.jpg';
import "./about.css"
import { Link } from 'react-router-dom';
function AboutUs ()
{
    return (
        <>  
            <div className = "logo">
                <img src = {logoText} alt = "" height = "20px"/>
                
                <img src = {logoIcon} alt = "" height = "40px"/>
            </div>

            <div className = "about">
                <div className = "grid">
                    <img src = {image14} alt = "" height = "375px" width = "250px"/>
                    
                    <img src = {image15} alt = "" height = "375px" width = "250px"/>
                </div>

                <div className = "descr">
                    <p>The Faces and Stories Behind BakerzBite</p>

                    <h3>
                        Every great recipe has a story, and at BakerzBite, every creation reflects the passion, dedication, and dreams of the people behind it. This is more than just a bakery; it's a tapestry woven with the faces of talented bakers, the hands that craft each treat, and the hearts that pour love into every bite. <br/> <br/> Here, we share the stories of our team, the inspiration behind our creations, and the journey that brought BakerzBite to life. From humble beginnings to sweet success, meet the bakers, creators, and dreamers who make every bite unforgettable.
                    </h3>

                    <h2>
                        <img src = {checkmark} alt = "" height/>
                        Quality Products
                    </h2>
                    
                    <h2>
                        <img src = {checkmark} alt = ""/>
                        Sharing Authetic Experiences
                    </h2>
                    
                    <h2>
                        <img src = {checkmark} alt = ""/>
                        Over 300+ products to choose from
                    </h2>

                    <Link
                    to='/gallery'
                    className='button'>Shop Now!</Link>
                </div>
            </div>
        </>
    )
}

export default AboutUs;