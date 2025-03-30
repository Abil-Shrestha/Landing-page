import {
    Github,
    Instagram,
    Twitter,
    Youtube,
} from "lucide-react"
const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => {
    const sections = {
        product: {
            title: "Product",
            items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "FAQ", href: "#faq" },
            ],
        },
        company: {
            title: "Company",
            items: [
                { label: "About us", href: "#about" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Success Stories", href: "/stories" },
            ],
        },
        resources: {
            title: "Resources",
            items: [
                { label: "Creator Network", href: "/network" },
                {
                    label: "Community",
                    href: "/community",
                    external: true,
                },
                { label: "Contact", href: "/contact" },
                { label: "Support", href: "/support" },
            ],
        },
    }

    return (
        <div className="px-4 xl:px-0">
            <footer
                id="footer"
                className="relative mx-auto flex max-w-6xl flex-wrap pt-4 border-t border-[var(--accents-2)] "
            >
                {/* Vertical Lines */}
                <div className="pointer-events-none inset-0">
                    {/* Left */}
                    <div
                        className="absolute inset-y-0 my-[-5rem] w-px"
                        style={{
                            maskImage: "linear-gradient(transparent, white 5rem)",
                        }}
                    >
                        <svg className="h-full w-full" preserveAspectRatio="none">
                            <line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="100%"
                                className="stroke-[var(--accents-3)]"
                                strokeWidth="2"
                                strokeDasharray="3 3"
                            />
                        </svg>
                    </div>

                    {/* Right */}
                    <div
                        className="absolute inset-y-0 right-0 my-[-5rem] w-px"
                        style={{
                            maskImage: "linear-gradient(transparent, white 5rem)",
                        }}
                    >
                        <svg className="h-full w-full" preserveAspectRatio="none">
                            <line
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="100%"
                                className="stroke-[var(--accents-3)]"
                                strokeWidth="2"
                                strokeDasharray="3 3"
                            />
                        </svg>
                    </div>
                </div>
                <svg
                    className="mb-10 h-20 w-full border-y border-dashed border-[var(--accents-2)] stroke-[var(--accents-3)]"
                >
                    <defs>
                        <pattern
                            id="diagonal-footer-pattern"
                            patternUnits="userSpaceOnUse"
                            width="64"
                            height="64"
                        >
                            {Array.from({ length: 17 }, (_, i) => {
                                const offset = i * 8
                                return (
                                    <path
                                        key={i}
                                        d={`M${-106 + offset} 110L${22 + offset} -18`}
                                        stroke=""
                                        strokeWidth="1"
                                    />
                                )
                            })}
                        </pattern>
                    </defs>
                    <rect
                        stroke="none"
                        width="100%"
                        height="100%"
                        fill="url(#diagonal-footer-pattern)"
                    />
                </svg>
                <div className="mr-auto flex w-full justify-between lg:w-fit lg:flex-col p-8">
                    <a
                        href="/"
                        className="flex items-center font-medium text-[var(--text-primary)] select-none sm:text-sm"
                    >
                        <div className="h-8 w-8 flex items-center justify-center mr-2">
                            <img src="/logo.svg" alt="Logo" className="h-6 w-6 dark:invert" />
                        </div>
                        <span className="text-xl font-semibold">Reel-hyp</span>
                    </a>

                    <div>
                        <div className="mt-4 flex items-center">
                            {/* Social Icons */}
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-sm p-2 text-[var(--text-secondary)] transition-colors duration-200 hover:bg-[var(--accents-1)] hover:text-[var(--text-primary)]"
                            >
                                <Twitter className="size-5" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-sm p-2 text-[var(--text-secondary)] transition-colors duration-200 hover:bg-[var(--accents-1)] hover:text-[var(--text-primary)]"
                            >
                                <Youtube className="size-5" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-sm p-2 text-[var(--text-secondary)] transition-colors duration-200 hover:bg-[var(--accents-1)] hover:text-[var(--text-primary)]"
                            >
                                <Github className="size-5" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-sm p-2 text-[var(--text-secondary)] transition-colors duration-200 hover:bg-[var(--accents-1)] hover:text-[var(--text-primary)]"
                            >
                                <Instagram className="size-5" />
                            </a>
                        </div>
                        <div className="ml-2 hidden text-sm text-[var(--text-secondary)] lg:inline">
                            &copy; {CURRENT_YEAR} AdCreator AI. All rights reserved.
                        </div>
                    </div>
                </div>

                {/* Footer Sections */}
                {Object.entries(sections).map(([key, section]) => (
                    <div key={key} className="mt-10 min-w-44 pl-2 lg:mt-0 lg:pl-0">
                        <h3 className="mb-4 font-medium text-[var(--text-primary)] sm:text-sm">
                            {section.title}
                        </h3>
                        <ul className="space-y-4">
                            {section.items.map((item) => (
                                <li key={item.label} className="text-sm">
                                    <a
                                        href={item.href}
                                        className="text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accents-5)]"
                                        target={item.external ? "_blank" : undefined}
                                        rel={item.external ? "noopener noreferrer" : undefined}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </footer>
        </div>
    )
}

export default Footer