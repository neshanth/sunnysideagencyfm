import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import SquareImage from "./components/square/SquareImage";
import transformImage from "./images/mobile/image-transform.jpg";
import SquareText from "./components/square/SquareText";
import standOutImage from "./images/mobile/image-stand-out.jpg";
import SquareImageWithText from "./components/square/SquareImageWithText";
import graphicDesignImage from "./images/mobile/image-graphic-design.jpg";
import photographyImage from "./images/mobile/image-photography.jpg";
import testimonials from "./data/testimonial";
import Testimonial from "./components/tesitmonial/Testimonial";
import transformImageDesktop from "./images/desktop/image-transform.jpg";
import standOutImageDesktop from "./images/desktop/image-stand-out.jpg";
import graphicDesignDesktop from "./images/desktop/image-graphic-design.jpg";
import photographyDesktop from "./images/desktop/image-photography.jpg";
import galleryDesktop from "./data/galleryDesktop";
import galleryMobile from "./data/galleryMobile";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import menu from "./data/menu";
import socialIcons from "./data/socialcons";

function App() {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!MobileMenu);
  };
  const checkIsDesktop = () => {
    let width = window.innerWidth;
    if (width > 900) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 900) {
      setIsDesktop(true);
    }
    window.addEventListener("resize", checkIsDesktop);
  }, [isDesktop]);

  return (
    <>
      <Header
        isDesktop={isDesktop}
        setMobileMenu={MobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div className="col-1">
        <SquareImage
          image={isDesktop ? transformImageDesktop : transformImage}
          order="2"
        />
        <SquareText
          heading="Transform your brand"
          body=" We are a full-service creative agency specializing in helping brands grow fast. 
          Engage your clients through compelling visuals that do most of the marketing for you."
          learn="LEARN MORE"
          color="hsl(51, 100%, 49%)"
        />
      </div>
      <div className="col-1">
        <SquareImage image={isDesktop ? standOutImageDesktop : standOutImage} />
        <SquareText
          heading="Stand out to the right audience"
          body="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
          learn="LEARN MORE"
          color=" hsl(7, 99%, 70%)"
        />
      </div>
      <div className="col-1">
        <SquareImageWithText
          backgroundImage={
            isDesktop ? graphicDesignDesktop : graphicDesignImage
          }
          heading="Graphic Design"
          body=" Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          color="hsl(167, 40%, 24%)"
        />
        <SquareImageWithText
          backgroundImage={isDesktop ? photographyDesktop : photographyImage}
          heading="Photography"
          body="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          color="hsl(198, 62%, 26%)"
        />
      </div>
      <div className="testimonials">
        <h3 className="testimonial-heading">CLIENT TESTIMONIALS</h3>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => {
            return <Testimonial testimonial={testimonial} />;
          })}
        </div>
      </div>
      <div className="gallery-container">
        {isDesktop
          ? galleryDesktop.map((gallery) => {
              return <Gallery gallery={gallery} />;
            })
          : galleryMobile.map((gallery) => {
              return <Gallery gallery={gallery} />;
            })}
      </div>
      <Footer menu={menu} socialIcons={socialIcons} />
    </>
  );
}

export default App;
