import type React from 'react';
import { cn } from '../lib/utils'; // Assuming utils file exists for cn
import { Play } from "lucide-react"
import { useState } from 'react';
import { useRef } from 'react';

// --- Recreate Badge Icon SVG Component ---
const BadgeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("dark:fill-white fill-[#364153]", className)} // Use theme color
    >
        <path d="M7.62758 1.09876C7.74088 1.03404 7.8691 1 7.99958 1C8.13006 1 8.25828 1.03404 8.37158 1.09876L13.6216 4.09876C13.7363 4.16438 13.8316 4.25915 13.8979 4.37347C13.9642 4.48779 13.9992 4.6176 13.9992 4.74976C13.9992 4.88191 13.9642 5.01172 13.8979 5.12604C13.8316 5.24036 13.7363 5.33513 13.6216 5.40076L8.37158 8.40076C8.25828 8.46548 8.13006 8.49952 7.99958 8.49952C7.8691 8.49952 7.74088 8.46548 7.62758 8.40076L2.37758 5.40076C2.26287 5.33513 2.16753 5.24036 2.10123 5.12604C2.03492 5.01172 2 4.88191 2 4.74976C2 4.6176 2.03492 4.48779 2.10123 4.37347C2.16753 4.25915 2.26287 4.16438 2.37758 4.09876L7.62758 1.09876Z" />
        <path d="M2.56958 7.23928L2.37758 7.34928C2.26287 7.41491 2.16753 7.50968 2.10123 7.624C2.03492 7.73831 2 7.86813 2 8.00028C2 8.13244 2.03492 8.26225 2.10123 8.37657C2.16753 8.49089 2.26287 8.58566 2.37758 8.65128L7.62758 11.6513C7.74088 11.716 7.8691 11.75 7.99958 11.75C8.13006 11.75 8.25828 11.716 8.37158 11.6513L13.6216 8.65128C13.7365 8.58573 13.8321 8.49093 13.8986 8.3765C13.965 8.26208 14 8.13211 14 7.99978C14 7.86745 13.965 7.73748 13.8986 7.62306C13.8321 7.50864 13.7365 7.41384 13.6216 7.34828L13.4296 7.23828L9.11558 9.70328C8.77568 9.89744 8.39102 9.99956 7.99958 9.99956C7.60814 9.99956 7.22347 9.89744 6.88358 9.70328L2.56958 7.23928Z" />
        <path d="M2.37845 10.5993L2.57045 10.4893L6.88445 12.9533C7.22435 13.1474 7.60901 13.2496 8.00045 13.2496C8.39189 13.2496 8.77656 13.1474 9.11645 12.9533L13.4305 10.4883L13.6225 10.5983C13.7374 10.6638 13.833 10.7586 13.8994 10.8731C13.9659 10.9875 14.0009 11.1175 14.0009 11.2498C14.0009 11.3821 13.9659 11.5121 13.8994 11.6265C13.833 11.7409 13.7374 11.8357 13.6225 11.9013L8.37245 14.9013C8.25915 14.966 8.13093 15 8.00045 15C7.86997 15 7.74175 14.966 7.62845 14.9013L2.37845 11.9013C2.2635 11.8357 2.16795 11.7409 2.10148 11.6265C2.03501 11.5121 2 11.3821 2 11.2498C2 11.1175 2.03501 10.9875 2.10148 10.8731C2.16795 10.7586 2.2635 10.6638 2.37845 10.5983V10.5993Z" />
    </svg>
);

// Updated HeroVideoDialog to show video's first frame as thumbnail
const HeroVideoDialog: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlayClick = () => {
        setIsPlaying(true)
        if (videoRef.current) {
            videoRef.current.play()
        }
    }

    return (
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl">
            {/* Always render the video element, use preload="metadata" to show the first frame */}
            <video
                ref={videoRef}
                src={videoSrc}
                controls={isPlaying} // Show controls only when playing
                preload="metadata" // Important to load the first frame for thumbnail
                className="w-full h-full object-cover"
                onClick={!isPlaying ? handlePlayClick : undefined} // Allow clicking video to play if not already playing
                playsInline // Good practice for mobile
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay with play button, hidden when playing */}
            {!isPlaying && (
                <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
                    aria-label="Play video"
                >
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="h-5 w-5 text-white fill-white ml-1" />
                    </div>
                </button>
            )}
        </div>
    )
}

const VideoGrid: React.FC = () => {
    const videos = [
        {
            id: 1,
            title: "Product Showcase",
            category: "E-commerce",
            videoSrc: "/placeholder-1.mp4",
            // Removed thumbnailSrc
        },
        {
            id: 3,
            title: "How-to Tutorial",
            category: "Educational",
            videoSrc: "/placeholder-3.mp4",
            // Removed thumbnailSrc
        },
        {
            id: 2,
            title: "Customer Review",
            category: "Testimonial",
            videoSrc: "/placeholder-2.mp4",
            // Removed thumbnailSrc
        },
        {
            id: 4,
            title: "Lifestyle Usage",
            category: "Lifestyle",
            videoSrc: "/placeholder-4.mp4",
            // Removed thumbnailSrc
        },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full mt-12">
            {videos.map((video) => (
                <div
                    key={video.id}
                    className="relative overflow-hidden rounded-xl border border-white/10 dark:border-black/10 bg-white/5 dark:bg-black/5 backdrop-blur-sm"
                >
                    {/* Pass only videoSrc, removed thumbnailAlt and thumbnailSrc */}
                    <HeroVideoDialog videoSrc={video.videoSrc} />

                </div>
            ))}
        </div>
    )
}
// Hero Section Data (updated for AI UGC)
const heroData = {
    badgeIcon: <BadgeIcon />,
    badge: "Generate Authentic UGC with AI",
    title: "UGC That Converts Effortlessly!",
    description: "Stop chasing creators. Our AI generates realistic, engaging user-generated content tailored to your brand voice and campaign goals in minutes.",
    cta: {
        primary: {
            text: "Start",
            href: "#" // Replace with actual link
        },
        secondary: {
            text: "Log in",
            href: "#" // Replace with actual link
        }
    }
};

// Placeholder video/thumbnail URLs (replace with actual ones)
const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Example YouTube embed URL
const THUMBNAIL_URL = "/placeholder-video-thumbnail.jpg"; // Example local thumbnail path

const HeroSection: React.FC = () => {
    return (
        <section id="hero" className="w-full relative">
            {/* Main container for content and background */}
            <div className="relative flex flex-col items-center w-full px-6 h-[600px] md:h-[800px] mt-2">

                {/* Background Gradient Container */}
                {/* <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full rounded-b-xl bg-cover bg-center bg-no-repeat "
                        style={{ backgroundImage: 'url(/dithered_image1.png)' }}
                    />
                </div> */}

                {/* Content Container - Adjusted padding for mobile */}
                {/* <div className="relative z-10 pt-20 md:pt-32 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
                    <div className="w-full p-8 md:p-12 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/10 dark:border-black/10 shadow-lg">

                        <p className="border border-border bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-md text-sm h-8 px-3 flex items-center gap-2 w-fit mx-auto">
                            <BadgeIcon />
                            {heroData.badge}
                        </p>


                        <div className="flex flex-col items-center justify-center gap-5 mt-8">

                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-black dark:text-white">
                                {heroData.title}
                            </h1>
                            <p className="text-base md:text-lg text-center text-black/80 dark:text-white/80 font-medium text-balance leading-relaxed tracking-tight">
                                {heroData.description}
                            </p>
                        </div>


                        <div className="flex flex-col sm:flex-row items-center mt-8 gap-2.5 w-full sm:w-auto justify-center">
                            <a
                                href={heroData.cta.primary.href}
                                className="bg-black dark:bg-white h-9 flex items-center justify-center text-sm font-medium tracking-wide rounded-md text-white dark:text-black w-full sm:w-32 px-4 shadow-lg border border-white/20 dark:border-black/20 hover:bg-black/80 dark:hover:bg-white/80 transition-all ease-out active:scale-95"
                            >
                                {heroData.cta.primary.text}
                            </a>
                            <a
                                href={heroData.cta.secondary.href}
                                className="h-10 flex items-center justify-center w-full sm:w-32 px-5 text-sm font-normal tracking-wide text-primary rounded-md transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80"
                            >
                                {heroData.cta.secondary.text}
                            </a>
                        </div>
                    </div>
                </div> */}

                {/* Video Grid Section */}
                <div className="w-full mt-8 md:mt-12">
                    <div className="flex flex-col items-center justify-center gap-5 mt-8">

                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center text-black dark:text-white">
                            {heroData.title}
                        </h1>
                    </div>
                    <VideoGrid />
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 