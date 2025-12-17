import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import './ProductDemoVideo.css';

const ProductDemoVideo = ({
    posterUrl = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop',
    videoUrl,
    title = 'See 4Sight in Action',
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const handlePlayClick = () => {
        if (videoUrl) {
            setIsPlaying(true);
        }
    };

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

    return (
        <section className="demo-section">
            <div className="demo-container">
                <motion.div
                    className="demo-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="demo-title">
                        Product <span className="text-gradient">Demo</span>
                    </h2>
                    <p className="demo-subtitle">
                        Watch how 4Sight transforms your business operations with intelligent automation
                    </p>
                </motion.div>

                <motion.div
                    className="demo-video-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="demo-video-container">
                        {!isPlaying ? (
                            <>
                                <img
                                    src={posterUrl}
                                    alt={title}
                                    className="demo-poster"
                                />
                                <div className="demo-overlay">
                                    <motion.button
                                        className="play-button"
                                        onClick={handlePlayClick}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label="Play video"
                                    >
                                        <Play size={32} fill="currentColor" />
                                    </motion.button>
                                    <span className="play-text">{title}</span>
                                </div>
                            </>
                        ) : (
                            <div className="video-player">
                                {videoUrl ? (
                                    <video
                                        src={videoUrl}
                                        autoPlay
                                        controls
                                        onLoadedData={handleVideoLoad}
                                        className="demo-video"
                                    />
                                ) : (
                                    <div className="video-placeholder">
                                        <p>Video coming soon...</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Decorative Elements */}
                    <div className="demo-glow" />
                    <div className="demo-border-glow" />
                </motion.div>
            </div>
        </section>
    );
};

export default ProductDemoVideo;
