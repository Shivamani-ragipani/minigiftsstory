import React, { useState, useRef, useEffect } from 'react';
import './ClientTestimonials.css';
import client1 from "../../assets/videos/client1.mp4";
import client2 from "../../assets/videos/client2.mp4";


const ClientTestimonials = () => {

  const videos = [client1, client2];


  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [index]);

  const next = () => setIndex((i) => (i + 1) % videos.length);
  const prev = () => setIndex((i) => (i - 1 + videos.length) % videos.length);
  const goTo = (i) => setIndex(i);

  return (
    <section className="client-testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Stories From Our Clients</h2>
          <div className="title-underline"></div>
          <p className="section-intro">Real reactions. Real moments. Real memories.</p>
        </div>

        <div className="testimonials-content">
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="testimonial-video"
              controls
              preload="metadata"
            >
              <source src={videos[index]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="slider-controls">
              <button
                className="nav-button prev-button"
                onClick={prev}
                aria-label="Previous video"
              >
                ‹
              </button>
              <button
                className="nav-button next-button"
                onClick={next}
                aria-label="Next video"
              >
                ›
              </button>
            </div>

            <div className="dots">
              {videos.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === index ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="testimonial-note">
          <p className="note-text">
            Every order is a relationship. Every delivery, a promise kept. Thank you for
            trusting us with your memories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;