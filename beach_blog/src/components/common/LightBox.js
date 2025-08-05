import { SlideshowLightbox } from 'lightbox.js-react';
import './LightBox.css';

function LightBox() {
  return (
    <div className="py-4 bg-white">
      <h2 className="text-center mb-4">Photo Gallery</h2>
      <SlideshowLightbox className="d-flex justify-content-center gap-3 flex-wrap gallery-lightbox">
        <img
          className="gallery-img"
          src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Mountains with clouds"
        />
        <img
          className="gallery-img"
          src="https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Mountains with blue sky"
        />
        <img
          className="gallery-img"
          src="https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Lake and mountains"
        />
        <img
          className="gallery-img"
          src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Mountains with clouds"
        />
        <img
          className="gallery-img"
          src="https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Mountains with blue sky"
        />
        <img
          className="gallery-img"
          src="https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Lake and mountains"
        />
        <img
          className="gallery-img"
          src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Mountains with clouds"
        />
        <img
          className="gallery-img"
          src="https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Mountains with blue sky"
        />
        <img
          className="gallery-img"
          src="https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Lake and mountains"
        />
      </SlideshowLightbox>
    </div>
  );
}

export default LightBox;
