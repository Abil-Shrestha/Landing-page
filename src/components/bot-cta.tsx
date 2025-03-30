
import TextToSpeech from './TextToSpeech';

const BotCTA = () => {
    return (
        <div className="relative mx-auto mt-24 max-w-7xl sm:mt-56 sm:px-6 lg:px-8 h-[500px]">

            <div className="relative isolate overflow-hidden px-6 py-24 shadow-2xl rounded-lg sm:px-24 xl:py-32 items-center flex flex-col gap-12 bg-black ring ring-neutral-900 ">
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Start Marketing Now!
                </h2>
                
                <TextToSpeech text="Reel-hyp helps you create stunning marketing content with AI. Generate videos, images, and copy that converts. Join thousands of marketers already using our platform to boost their engagement and sales." />
                
                <button
                    type="button"
                    className="bg-black dark:bg-white h-9 flex items-center justify-center text-sm font-medium tracking-wide rounded-md text-white dark:text-black w-full sm:w-32 px-4 shadow-lg border border-white/20 dark:border-black/20 hover:bg-black/80 dark:hover:bg-white/80 transition-all ease-out active:scale-95"
                >
                    Get Started
                </button>
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                    aria-hidden="true"
                >
                    {/* Main gradient circle */}
                    <circle cx={512} cy={512} r={512} fill="url(#gradient-main)" fillOpacity="0.5" />

                    {/* Dithered overlay pattern */}
                    <rect width="1024" height="1024" fill="url(#dither-pattern)" fillOpacity="0.15" />

                    {/* Pixelated noise overlay */}
                    <rect width="1024" height="1024" fill="url(#noise-pattern)" fillOpacity="0.1" />

                    <defs>
                        {/* Main gradient */}
                        <radialGradient
                            id="gradient-main"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(512 512) rotate(90) scale(512)"
                        >
                            <stop stopColor="#000000" />
                            <stop offset={0.4} stopColor="#111111" />
                            <stop offset={0.6} stopColor="#222222" />
                            <stop offset={0.8} stopColor="#333333" />
                            <stop offset={1} stopColor="#444444" stopOpacity={0} />
                        </radialGradient>

                        {/* Dithered pattern */}
                        <pattern id="dither-pattern" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="scale(2)">
                            <rect width="1" height="1" x="0" y="0" fill="#111111" />
                            <rect width="1" height="1" x="4" y="0" fill="#222222" />
                            <rect width="1" height="1" x="2" y="2" fill="#333333" />
                            <rect width="1" height="1" x="6" y="2" fill="#444444" />
                            <rect width="1" height="1" x="1" y="3" fill="#111111" />
                            <rect width="1" height="1" x="5" y="3" fill="#222222" />
                            <rect width="1" height="1" x="3" y="5" fill="#333333" />
                            <rect width="1" height="1" x="7" y="5" fill="#444444" />
                            <rect width="1" height="1" x="0" y="4" fill="#222222" />
                            <rect width="1" height="1" x="4" y="4" fill="#333333" />
                            <rect width="1" height="1" x="2" y="6" fill="#444444" />
                            <rect width="1" height="1" x="6" y="6" fill="#111111" />
                            <rect width="1" height="1" x="1" y="7" fill="#222222" />
                            <rect width="1" height="1" x="5" y="7" fill="#333333" />
                            <rect width="1" height="1" x="3" y="1" fill="#444444" />
                            <rect width="1" height="1" x="7" y="1" fill="#111111" />
                        </pattern>

                        {/* Noise pattern */}
                        <pattern id="noise-pattern" patternUnits="userSpaceOnUse" width="32" height="32">
                            <rect width="32" height="32" fill="#000000" />
                            <rect width="2" height="2" x="4" y="4" fill="#111111" />
                            <rect width="2" height="2" x="22" y="6" fill="#222222" />
                            <rect width="2" height="2" x="10" y="12" fill="#333333" />
                            <rect width="2" height="2" x="26" y="18" fill="#444444" />
                            <rect width="2" height="2" x="8" y="24" fill="#111111" />
                            <rect width="2" height="2" x="20" y="28" fill="#222222" />
                            <rect width="2" height="2" x="16" y="16" fill="#333333" />
                            <rect width="2" height="2" x="28" y="8" fill="#444444" />
                        </pattern>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default BotCTA
