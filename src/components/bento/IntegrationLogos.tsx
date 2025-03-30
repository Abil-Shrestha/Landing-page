import React from 'react';
import { cn } from '../../lib/utils'; // Assuming cn is available for class merging

// Main Logo (first one provided)
export const Logo1: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        width="42"
        height="24"
        viewBox="0 0 42 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // Original uses var(--secondary), mapped to secondary color in tailwind.config.js
        // Use text-secondary directly which resolves to the correct HSL variable
        className={cn("size-6 text-secondary fill-current", className)} // Increased size slightly
    >
        <g clipPath="url(#clip0_322_9172_logo1)">
            <path
                d="M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z"
                fill="currentColor"
            />
            <path
                d="M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_322_9172_logo1">
                <rect width="42" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

// SOC2 Logo
export const Soc2Logo: React.FC<{ className?: string }> = ({ className }) => (
    <>
        {/* Light Mode SVG */}
        <svg
            width="46" height="45" viewBox="0 0 46 45" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("size-6 dark:hidden", className)} // Increased size, hide in dark
        >
            <g filter="url(#filter0_ddd_1_4900_soc2)">
                <rect x="3" y="0.863281" width="40" height="40" rx="20" fill="url(#paint0_linear_1_4900_soc2)" />
                <g filter="url(#filter1_d_1_4900_soc2)">
                    <rect x="6.15784" y="4.021" width="33.6842" height="33.6842" rx="16.8421" fill="url(#paint1_linear_1_4900_soc2)" />
                    <path d="M15.0475 29.6233C13.7506 29.6233 12.9548 28.8938 12.8738 27.8033L13.8464 27.7443C13.9348 28.4222 14.3401 28.798 15.0622 28.798C15.6812 28.798 16.0348 28.5696 16.0348 28.1201C16.0348 27.7148 15.8285 27.4717 14.7601 27.2212C13.4633 26.9264 12.977 26.558 12.977 25.7033C12.977 24.7896 13.6917 24.1559 14.8633 24.1559C16.1159 24.1559 16.8012 24.8854 16.9191 25.8948L15.9538 25.9391C15.8875 25.3717 15.5117 24.9812 14.8485 24.9812C14.2959 24.9812 13.957 25.2612 13.957 25.6664C13.957 26.0938 14.2001 26.2559 15.1359 26.4696C16.5433 26.7717 17.0148 27.2875 17.0148 28.0685C17.0148 29.0264 16.2338 29.6233 15.0475 29.6233ZM19.9915 29.6233C18.4367 29.6233 17.5009 28.5843 17.5009 26.897C17.5009 25.2096 18.4367 24.1559 19.9915 24.1559C21.5536 24.1559 22.4894 25.2096 22.4894 26.897C22.4894 28.5843 21.5536 29.6233 19.9915 29.6233ZM19.9915 28.7906C20.942 28.7906 21.502 28.0906 21.502 26.897C21.502 25.7033 20.942 24.9885 19.9915 24.9885C19.0557 24.9885 18.4883 25.7033 18.4883 26.897C18.4883 28.0906 19.0557 28.7906 19.9915 28.7906ZM25.324 29.6233C23.8945 29.6233 22.8997 28.6064 22.8997 26.897C22.8997 25.2169 23.865 24.1559 25.3313 24.1559C26.665 24.1559 27.3797 24.8559 27.6082 26.0422L26.6061 26.0938C26.4734 25.4085 26.0534 24.9885 25.3313 24.9885C24.4397 24.9885 23.8871 25.7327 23.8871 26.897C23.8871 28.0759 24.4545 28.7906 25.324 28.7906C26.105 28.7906 26.5176 28.3412 26.6355 27.5896L27.6376 27.6412C27.4313 28.8717 26.6429 29.6233 25.324 29.6233ZM29.6489 29.5054C29.6489 28.238 30.1205 27.5085 31.5573 26.7569C32.2721 26.3812 32.53 26.1748 32.53 25.7327C32.53 25.298 32.2426 24.9885 31.6826 24.9885C31.0858 24.9885 30.7321 25.3348 30.651 25.9685L29.6637 25.9096C29.7668 24.8191 30.4889 24.1559 31.6826 24.1559C32.8395 24.1559 33.5173 24.7896 33.5173 25.718C33.5173 26.5212 33.1416 26.897 32.1173 27.4422C31.2479 27.9064 30.8279 28.3485 30.7984 28.6727H33.5173V29.5054H29.6489Z" fill="#101828" />
                    <path d="M14.883 12.6566H15.5462L17.4546 17.8882H16.9094L16.3494 16.3187H14.159L13.599 17.8882H13.0537ZM14.3285 15.8324H16.2516L15.2937 13.1061L14.3285 15.8324ZM18.026 17.8882V12.6566H18.5271V17.8882H18.026ZM21.5495 18.0061C20.1642 18.0061 19.2506 16.9745 19.2506 15.2798C19.2506 13.585 20.1642 12.5387 21.5495 12.5387C22.7727 12.5387 23.4506 13.2387 23.6642 14.3292L23.1337 14.3661C23.1277 13.9485 22.9533 13.6219 22.6831 13.3861C22.4178 13.1503 22.0617 13.0324 21.6147 13.0324C21.261 13.0324 20.9491 13.1233 20.6789 13.305C20.4136 13.4819 20.2073 13.7398 20.0599 14.0787C19.9175 14.4177 19.8462 14.818 19.8462 15.2798C19.8462 15.7415 19.9175 16.1419 20.0599 16.4808C20.2073 16.8149 20.4136 17.0703 20.6789 17.2471C20.9491 17.424 21.261 17.5124 21.5495 17.5124C22.0862 17.5124 22.4596 17.3871 22.7347 17.1366C23.0098 16.8812 23.1817 16.5226 23.2505 16.0608L23.781 16.0977C23.6877 16.6871 23.4519 17.1538 23.0736 17.4977C22.7003 17.8366 22.214 18.0061 21.6147 18.0061ZM24.571 12.6566H26.4058C26.784 12.6566 27.1082 12.7205 27.3784 12.8482C27.6535 12.971 27.8647 13.1503 28.0121 13.3861C28.1594 13.617 28.2331 13.8945 28.2331 14.2187C28.2331 14.538 28.1594 14.8156 28.0121 15.0513C27.8647 15.2871 27.6535 15.4689 27.3784 15.5966C27.1082 15.7194 26.784 15.7808 26.4058 15.7808H25.0721V17.8882H24.571V12.6566ZM26.4058 15.2945C26.8331 15.2945 27.1549 15.2036 27.371 15.0219C27.5921 14.8401 27.7026 14.5724 27.7026 14.2187C27.7026 13.865 27.5921 13.5973 27.371 13.4156C27.1549 13.2338 26.8331 13.1429 26.4058 13.1429H25.0721V15.2945H26.4058ZM29.923 12.6566H30.5861L32.4945 17.8882H31.9493L31.3893 16.3187H29.1272L28.5672 17.8882H28.0219L29.923 12.6566ZM31.2198 15.8324L30.2545 13.1061L29.2967 15.8324H31.2198Z" fill="#6A7282" />
                    <line x1="10.4938" y1="21.2488" x2="34.988" y2="21.2488" stroke="#E5E7EB" strokeWidth="0.263158" />
                </g>
            </g>
            <defs>
                {/* Filters and Gradients for Light Mode */}
                <filter id="filter0_ddd_1_4900_soc2" x="0.857143" y="0.148996" width="44.2857" height="44.2857" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    {/* ... filter definitions ... */}
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="0.714286" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_4900" />
                    <feOffset dy="0.714286" />
                    <feGaussianBlur stdDeviation="0.357143" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4900" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="0.714286" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_4900" />
                    <feOffset dy="1.42857" />
                    <feGaussianBlur stdDeviation="1.42857" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1_4900" result="effect2_dropShadow_1_4900" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="0.714286" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_1_4900" />
                    <feOffset />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_1_4900" result="effect3_dropShadow_1_4900" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_4900" result="shape" />
                </filter>
                <filter id="filter1_d_1_4900_soc2" x="5.44355" y="3.30671" width="35.1128" height="35.1127" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    {/* ... filter definitions ... */}
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="0.714286" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_4900" />
                    <feOffset />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4900" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4900" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1_4900_soc2" x1="9.88803" y1="6.55415" x2="36.0447" y2="35.5773" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F9FAFB" />
                    <stop offset="1" stopColor="#E5E7EB" />
                </linearGradient>
                <linearGradient id="paint1_linear_1_4900_soc2" x1="11.9583" y1="8.8133" x2="33.9849" y2="33.2538" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E5E7EB" />
                    <stop offset="1" stopColor="#F9FAFB" />
                </linearGradient>
            </defs>
        </svg>

        {/* Dark Mode SVG */}
        <svg
            width="46" height="45" viewBox="0 0 46 45" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("size-6 hidden dark:block", className)} // Increased size, show in dark
        >
            <g filter="url(#filter0_ddd_1_2018_soc2_dark)">
                <rect x="3" y="0.863281" width="40" height="40" rx="20" fill="url(#paint0_linear_1_2018_soc2_dark)" />
                <g filter="url(#filter1_d_1_2018_soc2_dark)">
                    <rect x="6.1579" y="4.021" width="33.6842" height="33.6842" rx="16.8421" fill="url(#paint1_linear_1_2018_soc2_dark)" />
                    <path d="M15.0441 29.6233C14.6118 29.6233 14.2385 29.5496 13.9241 29.4022C13.6097 29.2499 13.3617 29.0362 13.1799 28.7612C12.9982 28.4861 12.8925 28.1668 12.8631 27.8033L13.8357 27.7443C13.8701 27.9752 13.9364 28.1692 14.0346 28.3264C14.1329 28.4787 14.2655 28.5966 14.4325 28.6801C14.6045 28.7587 14.8132 28.798 15.0589 28.798C15.3683 28.798 15.6066 28.7415 15.7736 28.6285C15.9455 28.5106 16.0315 28.3412 16.0315 28.1201C16.0315 27.9777 15.9971 27.8573 15.9283 27.7591C15.8596 27.6559 15.7343 27.5626 15.5525 27.4791C15.3708 27.3906 15.1055 27.3047 14.7567 27.2212C14.3097 27.118 13.9585 27.005 13.7031 26.8822C13.4476 26.7545 13.261 26.5973 13.1431 26.4106C13.0301 26.224 12.9736 25.9882 12.9736 25.7033C12.9736 25.3987 13.0473 25.131 13.1946 24.9001C13.3469 24.6643 13.5655 24.4826 13.8504 24.3548C14.1353 24.2222 14.4718 24.1559 14.8599 24.1559C15.2627 24.1559 15.6115 24.2296 15.9062 24.3769C16.201 24.5243 16.4318 24.7282 16.5989 24.9885C16.7659 25.2489 16.869 25.551 16.9083 25.8948L15.9431 25.9391C15.9234 25.7475 15.8669 25.5805 15.7736 25.438C15.6803 25.2906 15.555 25.1777 15.3978 25.0991C15.2455 25.0205 15.0613 24.9812 14.8452 24.9812C14.5701 24.9812 14.3515 25.045 14.1894 25.1727C14.0273 25.2955 13.9462 25.4601 13.9462 25.6664C13.9462 25.8089 13.9806 25.9268 14.0494 26.0201C14.1182 26.1134 14.2336 26.1945 14.3957 26.2633C14.5627 26.3271 14.8059 26.3959 15.1252 26.4696C15.5869 26.5678 15.9553 26.6931 16.2304 26.8454C16.5055 26.9927 16.702 27.1671 16.8199 27.3685C16.9427 27.565 17.0041 27.7984 17.0041 28.0685C17.0041 28.3829 16.9231 28.658 16.761 28.8938C16.5989 29.1247 16.368 29.304 16.0683 29.4317C15.7736 29.5594 15.4322 29.6233 15.0441 29.6233ZM19.9881 29.6233C19.4723 29.6233 19.0277 29.5152 18.6544 29.2991C18.2811 29.078 17.9937 28.7636 17.7923 28.3559C17.5909 27.9433 17.4902 27.4569 17.4902 26.897C17.4902 26.3369 17.5909 25.8506 17.7923 25.438C17.9937 25.0254 18.2811 24.7085 18.6544 24.4875C19.0277 24.2664 19.4723 24.1559 19.9881 24.1559C20.5039 24.1559 20.9484 24.2664 21.3218 24.4875C21.7 24.7085 21.9874 25.0254 22.1839 25.438C22.3853 25.8506 22.486 26.3369 22.486 26.897C22.486 27.4569 22.3853 27.9433 22.1839 28.3559C21.9874 28.7636 21.7 29.078 21.3218 29.2991C20.9484 29.5152 20.5039 29.6233 19.9881 29.6233ZM19.9881 28.7906C20.942 28.7906 21.502 28.0906 21.502 26.897C21.502 25.7033 20.942 24.9885 19.9915 24.9885C19.0557 24.9885 18.4883 25.7033 18.4883 26.897C18.4883 28.0906 19.0557 28.7906 19.9915 28.7906ZM25.3276 29.6233C23.8945 29.6233 22.8997 28.6064 22.8997 26.897C22.8997 25.2169 23.865 24.1559 25.3313 24.1559C26.665 24.1559 27.3797 24.8559 27.6082 26.0422L26.6061 26.0938C26.4734 25.4085 26.0534 24.9885 25.3313 24.9885C24.4397 24.9885 23.8871 25.7327 23.8871 26.897C23.8871 28.0759 24.4545 28.7906 25.324 28.7906C26.105 28.7906 26.5176 28.3412 26.6355 27.5896L27.6376 27.6412C27.4313 28.8717 26.6429 29.6233 25.324 29.6233ZM29.6489 29.5054C29.6489 28.238 30.1205 27.5085 31.5573 26.7569C32.2721 26.3812 32.53 26.1748 32.53 25.7327C32.53 25.298 32.2426 24.9885 31.6826 24.9885C31.0858 24.9885 30.7321 25.3348 30.651 25.9685L29.6637 25.9096C29.7668 24.8191 30.4889 24.1559 31.6826 24.1559C32.8395 24.1559 33.5173 24.7896 33.5173 25.718C33.5173 26.5212 33.1416 26.897 32.1173 27.4422C31.2479 27.9064 30.8279 28.3485 30.7984 28.6727H33.5173V29.5054H29.6489Z" fill="#F4F4F5" />
                    <path d="M13.0537 17.8882L14.9621 12.6566H15.6253L17.5263 17.8882H16.9811L16.4211 16.3187H14.159L13.599 17.8882H13.0537ZM14.3285 15.8324H16.2516L15.2937 13.1061L14.3285 15.8324ZM18.026 17.8882V12.6566H18.5271V17.8882H18.026ZM21.5495 18.0061C20.1642 18.0061 19.2506 16.9745 19.2506 15.2798C19.2506 13.585 20.1642 12.5387 21.5495 12.5387C22.7727 12.5387 23.4506 13.2387 23.6642 14.3292L23.1337 14.3661C23.1277 13.9485 22.9533 13.6219 22.6831 13.3861C22.4178 13.1503 22.0617 13.0324 21.6147 13.0324C21.261 13.0324 20.9491 13.1233 20.6789 13.305C20.4136 13.4819 20.2073 13.7398 20.0599 14.0787C19.9175 14.4177 19.8462 14.818 19.8462 15.2798C19.8462 15.7415 19.9175 16.1419 20.0599 16.4808C20.2073 16.8149 20.4136 17.0703 20.6789 17.2471C20.9491 17.424 21.261 17.5124 21.5495 17.5124C22.0862 17.5124 22.4596 17.3871 22.7347 17.1366C23.0098 16.8812 23.1817 16.5226 23.2505 16.0608L23.781 16.0977C23.6877 16.6871 23.4519 17.1538 23.0736 17.4977C22.7003 17.8366 22.214 18.0061 21.6147 18.0061ZM24.571 12.6566H26.4058C26.784 12.6566 27.1082 12.7205 27.3784 12.8482C27.6535 12.971 27.8647 13.1503 28.0121 13.3861C28.1594 13.617 28.2331 13.8945 28.2331 14.2187C28.2331 14.538 28.1594 14.8156 28.0121 15.0513C27.8647 15.2871 27.6535 15.4689 27.3784 15.5966C27.1082 15.7194 26.784 15.7808 26.4058 15.7808H25.0721V17.8882H24.571V12.6566ZM26.4058 15.2945C26.8331 15.2945 27.1549 15.2036 27.371 15.0219C27.5921 14.8401 27.7026 14.5724 27.7026 14.2187C27.7026 13.865 27.5921 13.5973 27.371 13.4156C27.1549 13.2338 26.8331 13.1429 26.4058 13.1429H25.0721V15.2945H26.4058ZM29.923 12.6566H30.5861L32.4945 17.8882H31.9493L31.3893 16.3187H29.1272L28.5672 17.8882H28.0219L29.923 12.6566ZM31.2198 15.8324L30.2545 13.1061L29.2967 15.8324H31.2198Z" fill="#D4D4D8" />
                    <line x1="10.4938" y1="21.2488" x2="34.9881" y2="21.2488" stroke="#E4E4E7" strokeWidth="0.263158" />
                </g>
            </g>
            <defs>
                {/* Filters and Gradients for Dark Mode */}
                <filter id="filter0_ddd_1_2018_soc2_dark" x="0.857143" y="0.148996" width="44.2857" height="44.2857" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    {/* ... filter definitions ... */}
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="0.714286" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_2018" />
                    <feOffset dy="0.714286" />
                    <feGaussianBlur stdDeviation="0.357143" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2018" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="0.714286" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_2018" />
                    <feOffset dy="1.42857" />
                    <feGaussianBlur stdDeviation="1.42857" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_1_2018" result="effect2_dropShadow_1_2018" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="0.714286" operator="dilate" in="SourceAlpha" result="effect3_dropShadow_1_2018" />
                    <feOffset />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_1_2018" result="effect3_dropShadow_1_2018" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_2018" result="shape" />
                </filter>
                <filter id="filter1_d_1_2018_soc2_dark" x="5.44361" y="3.30671" width="35.1128" height="35.1127" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    {/* ... filter definitions ... */}
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="0.714286" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_2018" />
                    <feOffset />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2018" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2018" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1_2018_soc2_dark" x1="9.88803" y1="6.55415" x2="36.0447" y2="35.5773" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#27272A" />
                    <stop offset="1" stopColor="#52525C" />
                </linearGradient>
                <linearGradient id="paint1_linear_1_2018_soc2_dark" x1="11.9583" y1="8.8133" x2="33.9849" y2="33.2538" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#52525C" />
                    <stop offset="1" stopColor="#27272A" />
                </linearGradient>
            </defs>
        </svg>
    </>
);

// Vercel Logo
export const VercelLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-6", className)}>
        <g filter="url(#filter0_dddd_1_4108_vercel)">
            <path d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z" fill="black" />
            <g clipPath="url(#clip0_1_4108_vercel)">
                <path d="M26 8L39.5 31.3829H12.5L26 8Z" fill="white" />
            </g>
        </g>
        <defs>
            <filter id="filter0_dddd_1_4108_vercel" x="0" y="0" width="52" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                {/* ... filter definitions ... */}
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4108" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_1_4108" result="effect2_dropShadow_1_4108" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_1_4108" result="effect3_dropShadow_1_4108" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_1_4108" result="effect4_dropShadow_1_4108" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1_4108" result="shape" />
            </filter>
            <clipPath id="clip0_1_4108_vercel">
                <rect width="27" height="23.4141" fill="white" transform="translate(12.5 8)" />
            </clipPath>
        </defs>
    </svg>
);

// Replit Logo
export const ReplitLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-6", className)}>
        <g filter="url(#filter0_dddd_1_4111_replit)">
            <path d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z" fill="white" />
            <g clipPath="url(#clip0_1_4111_replit)">
                <path d="M15.5 8.875C15.5 7.83947 16.3395 7 17.375 7H26.125C27.1605 7 28 7.83947 28 8.875V17H17.375C16.3395 17 15.5 16.1605 15.5 15.125V8.875Z" fill="#F26207" />
                <path d="M28 17H38.625C39.6605 17 40.5 17.8395 40.5 18.875V25.125C40.5 26.1605 39.6605 27 38.625 27H28V17Z" fill="#F26207" />
                <path d="M15.5 28.875C15.5 27.8395 16.3395 27 17.375 27H28V35.125C28 36.1605 27.1605 37 26.125 37H17.375C16.3395 37 15.5 36.1605 15.5 35.125V28.875Z" fill="#F26207" />
            </g>
        </g>
        <defs>
            <filter id="filter0_dddd_1_4111_replit" x="0" y="0" width="52" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                {/* ... filter definitions ... */}
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4111" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_1_4111" result="effect2_dropShadow_1_4111" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_1_4111" result="effect3_dropShadow_1_4111" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_1_4111" result="effect4_dropShadow_1_4111" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1_4111" result="shape" />
            </filter>
            <clipPath id="clip0_1_4111_replit">
                <rect width="25" height="30" fill="white" transform="translate(15.5 7)" />
            </clipPath>
        </defs>
    </svg>
);

// Posthog Logo
export const PosthogLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-6", className)}>
        <g filter="url(#filter0_dddd_1_4116_posthog)">
            <path d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z" fill="#EEEFE8" />
            <path d="M18.2508 23.0069C18.1951 23.118 18.1096 23.2115 18.0038 23.2768C17.898 23.3421 17.7762 23.3767 17.6518 23.3767C17.5275 23.3767 17.4057 23.3421 17.2999 23.2768C17.1941 23.2115 17.1086 23.118 17.0529 23.0069L16.462 21.8257C16.4155 21.7327 16.3913 21.6302 16.3913 21.5262C16.3913 21.4223 16.4155 21.3197 16.462 21.2267L17.0529 20.0456C17.1086 19.9344 17.1941 19.841 17.2999 19.7757C17.4057 19.7104 17.5275 19.6758 17.6518 19.6758C17.7762 19.6758 17.898 19.7104 17.9537 19.8216L18.5446 21.0028C18.5911 21.0958 18.6153 21.1984 18.6153 21.3024C18.6153 21.4064 18.5911 21.5089 18.5446 21.6019L17.9537 22.7831C17.9073 22.8761 17.8831 22.9787 17.8831 23.0827ZM17.8831 29.6233C17.8831 29.0674 17.7315 28.5619 17.4788 28.1071L12.5762 19.515C11.6159 17.8471 10.6756 17.1395 9.80914 17.598C8.93304 18.0616 8.52404 18.7966 8.52944 19.8181C8.55164 24.0349 8.53364 28.2517 8.54754 32.4685C8.54884 32.8495 8.59964 33.2636 8.75504 33.6041C9.17924 34.5327 10.3171 34.9878 11.3845 34.7229C12.4053 34.4695 13.0036 33.6924 13.0041 32.596Z" fill="#1D4AFF" />
            <path d="M10.9531 27.1607C10.9531 26.5644 11.6747 26.2649 12.0968 26.687L15.1673 29.7575C15.5894 30.1796 15.2906 30.9019 14.6936 30.9019H11.6231C11.4454 30.9019 11.275 30.8313 11.1494 30.7056C11.0237 30.58 10.9531 30.4096 10.9531 30.2319V27.1607ZM10.9531 23.926C10.9531 24.0141 10.9704 24.1013 11.004 24.1827C11.0377 24.2641 11.0871 24.3381 11.1494 24.4004L17.4546 30.7049C17.5168 30.7672 17.5906 30.8167 17.6719 30.8505C17.7532 30.8843 17.8403 30.9018 17.9283 30.9019H21.3921C21.9884 30.9019 22.2879 30.1803 21.8658 29.7582L12.0975 19.9899C11.6747 19.5671 10.9531 19.8659 10.9531 20.4622V23.926ZM10.9531 17.2282C10.9532 17.4059 11.0238 17.5762 11.1494 17.7019L24.1518 30.7062C24.2774 30.8319 24.4478 30.9025 24.6255 30.9025H28.0893C28.6856 30.9025 28.985 30.1803 28.563 29.7582L12.0968 13.2914C11.6747 12.8693 10.9531 13.1681 10.9531 13.765V17.2282ZM17.6509 17.2282C17.651 17.4059 17.7216 17.5762 17.8472 17.7019L29.9029 29.7582C30.325 30.1803 31.0466 29.8808 31.0466 29.2839V25.8207C31.0465 25.643 30.9759 25.4727 30.8503 25.347L17.6509 17.2282Z" fill="#F4F4F5" />
            <path d="M25.4924 13.2914C25.0703 12.8693 24.3488 13.1681 24.3488 13.765V17.2289C24.349 17.4063 24.4196 17.5764 24.5451 17.7019L29.9029 23.0604C30.325 23.4825 31.0466 23.183 31.0466 22.586V19.1229C31.0465 18.9452 30.9759 18.7748 30.8503 18.6492L25.4924 13.2914Z" fill="#F9BD2B" />
            <path d="M29.6598 29.5054C29.6598 28.238 30.1205 27.5085 31.5573 26.7569C32.2721 26.3812 32.53 26.1748 32.53 25.7327C32.53 25.298 32.2426 24.9885 31.6826 24.9885C31.0858 24.9885 30.7321 25.3348 30.651 25.9685L29.6637 25.9096C29.7668 24.8191 30.4889 24.1559 31.6826 24.1559C32.8395 24.1559 33.5173 24.7896 33.5173 25.718C33.5173 26.5212 33.1416 26.897 32.1173 27.4422C31.2479 27.9064 30.8279 28.3485 30.7984 28.6727H33.5173V29.5054H29.6598Z" fill="#F4F4F5" />
        </g>
        <defs>
            <filter id="filter0_dddd_1_4116_posthog" x="0" y="0" width="52" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                {/* ... filter definitions ... */}
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4116" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_1_4116" result="effect2_dropShadow_1_4116" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_1_4116" result="effect3_dropShadow_1_4116" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_1_4116" result="effect4_dropShadow_1_4116" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1_4116" result="shape" />
            </filter>
        </defs>
    </svg>
);

// Gemini Logo
export const GeminiLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-6", className)}>
        <g filter="url(#filter0_dddd_1_4143_gemini)">
            <path d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z" fill="white" />
            <g clipPath="url(#clip0_1_4143_gemini)">
                <path d="M26 34C25.5426 30.9809 24.131 28.1874 21.9718 26.0282C19.8126 23.869 17.0191 22.4574 14 22C17.0191 21.5426 19.8126 20.131 21.9718 17.9718C24.131 15.8126 25.5426 13.0191 26 10C26.4575 13.0191 27.8692 15.8125 30.0283 17.9717C32.1875 20.1308 34.9809 21.5425 38 22C34.9809 22.4575 32.1875 23.8692 30.0283 26.0283C27.8692 28.1875 26.4575 30.9809 26 34Z" fill="url(#paint0_linear_1_4143_gemini)" />
            </g>
        </g>
        <defs>
            <filter id="filter0_dddd_1_4143_gemini" x="0" y="0" width="52" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                {/* ... filter definitions ... */}
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4143" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_1_4143" result="effect2_dropShadow_1_4143" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="0.714286" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_4143" />
                <feOffset />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_1_4143" result="effect2_dropShadow_1_4143" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_4143" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_1_4143_gemini" x1="13.9999" y1="24" x2="38" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1C7DFF" />
                <stop offset="0.52021" stopColor="#1C69FF" />
                <stop offset="1" stopColor="#F0DCD6" />
            </linearGradient>
            <clipPath id="clip0_1_4143_gemini">
                <rect width="24" height="24" fill="white" transform="translate(14 10)" />
            </clipPath>
        </defs>
    </svg>
);

// Supabase Logo
export const SupabaseLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-6", className)}>
        <g filter="url(#filter0_dddd_1_4134_supabase)">
            <path d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z" fill="#121212" />
            <g clipPath="url(#clip0_1_4134_supabase)">
                <path d="M28.5219 36.7564C27.7374 37.7443 26.1469 37.2031 26.128 35.9417L25.8516 17.4922H38.257C40.5039 17.4922 41.7571 20.0874 40.3599 21.8472L28.5219 36.7564Z" fill="url(#paint0_linear_1_4134_supabase)" />
                <path d="M28.5219 36.7564C27.7374 37.7443 26.1469 37.2031 26.128 35.9417L25.8516 17.4922H38.257C40.5039 17.4922 41.7571 20.0874 40.3599 21.8472L28.5219 36.7564Z" fill="url(#paint1_linear_1_4134_supabase)" fillOpacity="0.2" />
                <path d="M23.48 7.06882C24.2645 6.08082 25.8551 6.62217 25.874 7.88359L25.9951 26.333H13.745C11.4979 26.333 10.2447 23.7378 11.642 21.978L23.48 7.06882Z" fill="#3ECF8E" />
            </g>
        </g>
        <defs>
            <filter id="filter0_dddd_1_4134_supabase" x="0" y="0" width="52" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                {/* ... filter definitions ... */}
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4134" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_1_4134" result="effect2_dropShadow_1_4134" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_1_4134" result="effect3_dropShadow_1_4134" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_1_4134" result="effect4_dropShadow_1_4134" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1_4134" result="shape" />
            </filter>
            <linearGradient id="paint0_linear_1_4134_supabase" x1="25.8516" y1="21.5829" x2="36.8771" y2="26.207" gradientUnits="userSpaceOnUse">
                <stop stopColor="#249361" />
                <stop offset="1" stopColor="#3ECF8E" />
            </linearGradient>
            <linearGradient id="paint1_linear_1_4134_supabase" x1="20.9634" y1="14.8902" x2="25.9916" y2="24.3555" gradientUnits="userSpaceOnUse">
                <stop />
                <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_1_4134_supabase">
                <rect width="29.9027" height="31" fill="white" transform="translate(11.0469 6.5)" />
            </clipPath>
        </defs>
    </svg>
);

// Figma Logo
export const FigmaLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-6", className)}>
        <g filter="url(#filter0_dddd_1_4123_figma)">
            <path d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z" fill="white" />
            <g clipPath="url(#clip0_1_4123_figma)">
                <mask id="mask0_1_4123_figma" maskUnits="userSpaceOnUse" x="15" y="7" width="21" height="30">
                    <path d="M35.875 7H15.875V37H35.875V7Z" fill="white" />
                </mask>
                <g mask="url(#mask0_1_4123_figma)">
                    <path d="M20.875 37.0001C23.635 37.0001 25.875 34.7601 25.875 32.0001V27.0001H20.875C18.115 27.0001 15.875 29.2401 15.875 32.0001C15.875 34.7601 18.115 37.0001 20.875 37.0001Z" fill="#0ACF83" />
                    <path d="M15.875 21.9999C15.875 19.2399 18.115 16.9999 20.875 16.9999H25.875V26.9999H20.875C18.115 26.9999 15.875 24.7599 15.875 21.9999Z" fill="#A259FF" />
                    <path d="M15.875 12C15.875 9.24 18.115 7 20.875 7H25.875V17H20.875C18.115 17 15.875 14.76 15.875 12Z" fill="#F24E1E" />
                    <path d="M25.875 7H30.875C33.635 7 35.875 9.24 35.875 12C35.875 14.76 33.635 17 30.875 17H25.875V7Z" fill="#FF7262" />
                    <path d="M35.875 21.9999C35.875 24.7599 33.635 26.9999 30.875 26.9999C28.115 26.9999 25.875 24.7599 25.875 21.9999C25.875 19.2399 28.115 16.9999 30.875 16.9999C33.635 16.9999 35.875 19.2399 35.875 21.9999Z" fill="#1ABCFE" />
                </g>
            </g>
        </g>
        <defs>
            <filter id="filter0_dddd_1_4123_figma" x="0" y="0" width="52" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                {/* ... filter definitions ... */}
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4123" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_1_4123" result="effect2_dropShadow_1_4123" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_1_4123" result="effect3_dropShadow_1_4123" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_1_4123" result="effect4_dropShadow_1_4123" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1_4123" result="shape" />
            </filter>
            <clipPath id="clip0_1_4123_figma">
                <rect width="20.25" height="30" fill="white" transform="translate(15.875 7)" />
            </clipPath>
        </defs>
    </svg>
);

// Workos Logo
export const WorkosLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-6", className)}>
        <g filter="url(#filter0_dddd_1_4101_workos)">
            <path d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z" fill="#6363F1" />
            <g clipPath="url(#clip0_1_4101_workos)">
                <path d="M12 22.0011C12 22.557 12.1516 23.0624 12.4043 23.5173L17.3069 32.0083C17.8123 32.8675 18.5704 33.5751 19.5307 33.8783C21.3502 34.4848 23.3213 33.7267 24.2816 32.1094L25.444 30.0372L20.7942 21.9505L25.7473 13.409L26.9097 11.3873C27.2635 10.7808 27.7184 10.2754 28.2744 9.87109H20.6931C19.3791 9.87109 18.1155 10.5787 17.4585 11.7411L12.4043 20.4848C12.1516 20.9397 12 21.4451 12 22.0011Z" fill="white" />
                <path d="M40.0009 22.0019C40.0009 21.446 39.8493 20.9405 39.5966 20.4857L34.6435 11.8936C33.6832 10.2257 31.7121 9.51816 29.8926 10.1247C28.9323 10.4279 28.1742 11.1355 27.6688 11.9947L26.5063 13.9153L31.2067 22.0019L26.2536 30.5434L25.0912 32.6156C24.7374 33.2221 24.2825 33.7275 23.7266 34.1319H31.3583C32.6724 34.1319 33.9359 33.4243 34.593 32.2618L39.6471 23.5182C39.8493 23.0633 40.0009 22.5579 40.0009 22.0019Z" fill="white" />
            </g>
        </g>
        <defs>
            <filter id="filter0_dddd_1_4101_workos" x="0" y="0" width="52" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                {/* ... filter definitions ... */}
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4101" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_1_4101" result="effect2_dropShadow_1_4101" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_1_4101" result="effect3_dropShadow_1_4101" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_1_4101" result="effect4_dropShadow_1_4101" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1_4101" result="shape" />
            </filter>
            <clipPath id="clip0_1_4101_workos">
                <rect width="28" height="28" fill="white" transform="translate(12 8)" />
            </clipPath>
        </defs>
    </svg>
);

// RunwayML Logo
export const RunwayMLLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="52" height="60" viewBox="0 0 52 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("size-6", className)}>
        <g filter="url(#filter0_dddd_1_4106_runway)">
            <path d="M5 22C5 10.402 14.402 1 26 1C37.598 1 47 10.402 47 22C47 33.598 37.598 43 26 43C14.402 43 5 33.598 5 22Z" fill="#101828" />
            <path d="M37.678 13.2664C38.3954 15.4976 38.2063 17.5358 36.7194 19.377C36.0513 20.2045 35.105 20.7428 33.2308 21.2226C33.6954 21.6556 34.1217 22.0294 34.521 22.4302C35.2929 23.2052 36.0595 23.986 36.8108 24.781C38.5668 26.639 38.5001 29.3228 37.3076 31.4453C35.7329 34.2479 31.7191 35.1571 29.2989 33.0723C28.1452 32.0786 27.0621 31.0026 25.9522 29.9584C25.7293 29.7485 25.529 29.5145 25.2864 29.2579C25.0948 29.8493 24.9711 30.4074 24.7399 30.9169C23.4524 33.7547 19.82 34.9039 16.8601 33.4455C14.8504 32.4552 13.9101 30.7587 13.8784 28.6156C13.8134 24.2092 13.8339 19.8011 13.8679 15.3939C13.8907 12.4321 16.3064 9.88977 19.2617 9.83918C23.7709 9.762 28.2832 9.77292 32.793 9.83779C35.1105 9.87113 36.753 11.063 37.678 13.2664ZM21.0218 13.8121C20.2809 13.2306 19.4728 13.0218 18.6063 13.4803C17.7302 13.9439 17.3212 14.6789 17.3266 15.7004C17.3488 19.9172 17.3308 24.134 17.3447 28.3508C17.346 28.7318 17.3968 29.1459 17.5522 29.4864C17.9764 30.415 19.1143 30.8701 20.1817 30.6052C21.2025 30.3518 21.8008 29.5747 21.8013 28.4783C21.804 24.1995 21.7934 19.9206 21.8116 15.6418C21.8147 14.9289 21.594 14.3552 21.0218 13.8121ZM25.8643 21.1924C25.6845 21.2009 25.5046 21.2095 25.2832 21.22C25.2832 22.2251 25.2729 23.1939 25.2932 24.1622C25.2967 24.3236 25.3961 24.5182 25.513 24.6367C27.31 26.4581 29.1012 28.2862 30.9369 30.0681C31.2679 30.3895 31.7728 30.6269 32.2308 30.7023C33.164 30.8562 34.1069 30.2305 34.5663 29.2999C34.9496 28.5235 34.7691 27.5689 34.0724 26.8589C32.4945 25.2511 30.8899 23.6692 29.3299 22.0444C28.7194 21.4085 28.0705 21.0385 27.1623 21.1823C26.7788 21.243 26.3776 21.1924 25.8643 21.1924Z" fill="#FEFEFE" />
        </g>
        <defs>
            <filter id="filter0_dddd_1_4106_runway" x="0" y="0" width="52" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                {/* ... filter definitions ... */}
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4106" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_1_4106" result="effect2_dropShadow_1_4106" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="effect2_dropShadow_1_4106" result="effect3_dropShadow_1_4106" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                <feBlend mode="normal" in2="effect3_dropShadow_1_4106" result="effect4_dropShadow_1_4106" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1_4106" result="shape" />
            </filter>
        </defs>
    </svg>
);

// Google Drive Logo (Example - requires simplifying paths for brevity/clarity)
export const GoogleDriveLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="40" height="35" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" className={cn("size-6", className)}>
        <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
        <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47" />
        <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335" />
        <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
        <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
        <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
    </svg>
);