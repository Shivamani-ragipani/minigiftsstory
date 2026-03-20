import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import './ClientTestimonials.css';
import client1 from '../../assets/videos/client1.mp4';
import client2 from '../../assets/videos/client2.mp4';

const TEXT_TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Wedding Planner',
    rating: 5,
    text: 'The fridge magnets we ordered for our client\'s wedding were absolutely stunning! Every guest loved them. The quality is exceptional and delivery was super quick.',
    location: 'Mumbai',
  },
  {
    name: 'Ravi Kumar',
    role: 'Corporate Manager',
    rating: 5,
    text: 'Ordered 200 custom badges for our company event. Mini Gifts Story delivered beyond expectations — sharp prints, fast turnaround, and great packaging. Highly recommend!',
    location: 'Hyderabad',
  },
  {
    name: 'Sneha Patel',
    role: 'Birthday Mom',
    rating: 5,
    text: 'Got personalized magnets for my daughter\'s birthday party as return gifts. All the kids and parents loved them! Will definitely order again for every occasion.',
    location: 'Bangalore',
  },
];

const ClientTestimonials = () => {
  const videos = [client1, client2];
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [videoIndex]);

  const nextVideo = () => {
    if (videoRef.current) videoRef.current.pause();
    setVideoIndex((i) => (i + 1) % videos.length);
  };

  const prevVideo = () => {
    if (videoRef.current) videoRef.current.pause();
    setVideoIndex((i) => (i - 1 + videos.length) % videos.length);
  };

  const handleVideoChange = (index) => {
    if (videoRef.current) videoRef.current.pause();
    setVideoIndex(index);
  };

  return (
    <section className="testimonials-section" id="testimonials" aria-label="Client Testimonials">
      <div className="container">

        <div className="testimonials-header">
          <span className="section-badge">💬 Stories</span>
          <h2 className="section-title">Stories From Our Clients</h2>
          <div className="title-underline centered" />
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Real reactions. Real moments. Real memories from people who trusted us.
          </p>
        </div>

        <div className="testimonials-layout">

          <div className="video-column">
            <div className="video-wrapper">

              <video
                ref={videoRef}
                className="testimonial-video"
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
                muted={false}
                aria-label={`Client testimonial video ${videoIndex + 1}`}
              >
                <source src={videos[videoIndex]} type="video/mp4" />
              </video>

              <div className="video-controls">
                <button className="vid-nav-btn" onClick={prevVideo}>
                  <ChevronLeft size={20} />
                </button>

                <div className="vid-dots">
                  {videos.map((_, i) => (
                    <button
                      key={i}
                      className={`vid-dot${i === videoIndex ? ' active' : ''}`}
                      onClick={() => handleVideoChange(i)}
                    />
                  ))}
                </div>

                <button className="vid-nav-btn" onClick={nextVideo}>
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>

            <p className="video-caption">
              Watch what our customers say about us 💝
            </p>
          </div>

          <div className="text-testimonials">
            {TEXT_TESTIMONIALS.map(({ name, role, rating, text, location }) => (
              <div className="text-testimonial-card" key={name}>
                <div className="testimonial-quote-icon">
                  <Quote size={20} />
                </div>

                <div className="testimonial-stars">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="t-star" />
                  ))}
                </div>

                <p className="testimonial-text">"{text}"</p>

                <div className="testimonial-author">
                  <div className="author-avatar">{name[0]}</div>
                  <div>
                    <div className="author-name">{name}</div>
                    <div className="author-meta">
                      {role} · {location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="testimonial-footer-note">
          <p>
            Every order is a relationship. Every delivery, a promise kept. Thank you for trusting us with your memories. 🙏
          </p>
        </div>

      </div>
    </section>
  );
};

export default ClientTestimonials;