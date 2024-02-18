import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
	logo: <svg width="80" height="54.400000000000006" viewBox="0 0 100 68" fill="none" xmlns="http://www.w3.org/2000/svg">
	    <path d="M48.8474 21.6751H30.4809V27.1982C31.961 25.8808 33.7438 25.2221 35.8294 25.2221C38.8232 25.2221 41.2283 26.1679 43.0448 28.0596C44.8949 29.9175 45.8199 32.2991 45.8199 35.2042C45.8199 38.3458 44.7772 40.8624 42.6916 42.7541C40.606 44.612 37.9318 45.541 34.6689 45.541C34.1643 45.541 33.7775 45.5241 33.5084 45.4903V39.7645C33.7102 39.7983 33.9793 39.8152 34.3157 39.8152C35.6949 39.8152 36.7545 39.3929 37.4945 38.5484C38.2682 37.7039 38.655 36.6229 38.655 35.3055C38.655 34.0894 38.3018 33.0591 37.5954 32.2146C36.889 31.3363 35.863 30.8972 34.5175 30.8972C33.3402 30.8972 32.3647 31.3363 31.591 32.2146C30.851 33.0591 30.4809 34.1908 30.4809 35.6095V50H23.316V44.1222C21.8696 45.4059 20.0867 46.0477 17.9675 46.0477C14.9737 46.0477 12.5518 45.1187 10.7017 43.2608C8.88521 41.3691 7.97698 38.9707 7.97698 36.0656C7.97698 32.924 9.01976 30.4242 11.1053 28.5663C13.1909 26.6746 15.8651 25.7288 19.128 25.7288C19.599 25.7288 19.9858 25.7457 20.2886 25.7794V31.5052C20.0867 31.4714 19.8176 31.4545 19.4812 31.4545C18.1021 31.4545 17.0257 31.8768 16.252 32.7213C15.5119 33.5658 15.1419 34.6468 15.1419 35.9642C15.1419 37.1803 15.4951 38.2275 16.2015 39.1058C16.9079 39.9503 17.9339 40.3726 19.2794 40.3726C20.4568 40.3726 21.4154 39.9503 22.1555 39.1058C22.9292 38.2275 23.316 37.079 23.316 35.6602V21.6751H5V16H48.8474V21.6751ZM46.5563 37.0283V31.4545H50.391C53.4858 31.4545 55.0331 30.1709 55.0331 27.6036V21.6751H43.2766V16H67.3447V21.6751H62.0971V28.0089C62.0971 30.2722 61.5253 32.1808 60.3816 33.7347C59.2715 35.2548 57.6569 36.2176 55.5377 36.623C55.2686 36.6905 55.0163 36.7243 54.7808 36.7243L65.1246 50H56.5468L46.5563 37.0283ZM61.7941 21.6751V16H79V21.6751H73.9543V50H66.8398V21.6751H61.7941Z" fill="#1A1A1A"/>
	    <path d="M6 12.9321V6.04848H6.90023V12.9321H6ZM12.1993 12.9321V6.04848H15.2401C15.5535 6.04848 15.8402 6.11311 16.1003 6.24238C16.3604 6.36519 16.5871 6.53324 16.7805 6.74654C16.9739 6.95337 17.1239 7.18929 17.2306 7.4543C17.3373 7.71284 17.3906 7.97784 17.3906 8.24931C17.3906 8.56602 17.3273 8.86658 17.2006 9.15097C17.0806 9.43537 16.9072 9.67775 16.6805 9.87812C16.4604 10.0785 16.2003 10.2175 15.9003 10.295L17.6207 12.9321H16.6004L14.98 10.4598H13.0995V12.9321H12.1993ZM13.0995 9.68421H15.2501C15.4968 9.68421 15.7102 9.61957 15.8903 9.4903C16.077 9.35457 16.2203 9.17683 16.3204 8.95707C16.4271 8.73731 16.4804 8.50139 16.4804 8.24931C16.4804 7.99077 16.4204 7.75485 16.3004 7.54155C16.1803 7.32179 16.0236 7.14728 15.8302 7.01801C15.6369 6.88874 15.4235 6.8241 15.1901 6.8241H13.0995V9.68421ZM22.3743 12.9321V6.04848H23.2745V12.9321H22.3743ZM32.7445 7.49307C32.6645 7.40258 32.5578 7.31533 32.4244 7.2313C32.291 7.14728 32.141 7.07295 31.9743 7.00831C31.8076 6.93721 31.6242 6.88227 31.4242 6.84349C31.2308 6.79824 31.0274 6.77562 30.814 6.77562C30.2672 6.77562 29.8637 6.87581 29.6037 7.07618C29.3436 7.27655 29.2136 7.55125 29.2136 7.90028C29.2136 8.14589 29.2803 8.3398 29.4136 8.48199C29.547 8.62419 29.7504 8.74054 30.0238 8.83103C30.3039 8.92152 30.6573 9.01524 31.0841 9.11219C31.5775 9.21561 32.0043 9.34164 32.3644 9.4903C32.7245 9.63897 33.0012 9.83934 33.1946 10.0914C33.388 10.337 33.4847 10.6667 33.4847 11.0803C33.4847 11.41 33.418 11.6976 33.2846 11.9432C33.1579 12.1824 32.9779 12.3827 32.7445 12.5443C32.5111 12.6994 32.2377 12.8158 31.9243 12.8934C31.6109 12.9645 31.2708 13 30.904 13C30.5439 13 30.1905 12.9645 29.8437 12.8934C29.5036 12.8158 29.1802 12.7059 28.8735 12.5637C28.5667 12.4215 28.28 12.2438 28.0133 12.0305L28.4434 11.2936C28.5501 11.4035 28.6868 11.5134 28.8535 11.6233C29.0269 11.7267 29.2202 11.8236 29.4336 11.9141C29.6537 12.0046 29.8904 12.0789 30.1438 12.1371C30.3972 12.1888 30.6573 12.2147 30.924 12.2147C31.4308 12.2147 31.8243 12.1274 32.1043 11.9529C32.3844 11.7719 32.5244 11.5102 32.5244 11.1676C32.5244 10.9091 32.4444 10.7022 32.2844 10.5471C32.131 10.392 31.9009 10.2627 31.5942 10.1593C31.2874 10.0559 30.914 9.95245 30.4739 9.84903C29.9938 9.73269 29.5903 9.60665 29.2636 9.47092C28.9368 9.32872 28.6901 9.14451 28.5234 8.91828C28.3634 8.69206 28.2833 8.39797 28.2833 8.03601C28.2833 7.59649 28.3934 7.22484 28.6134 6.92105C28.8335 6.61727 29.1369 6.38781 29.5237 6.23269C29.9104 6.07756 30.3472 6 30.834 6C31.1541 6 31.4508 6.03232 31.7242 6.09696C32.0043 6.16159 32.2644 6.25208 32.5044 6.36842C32.7445 6.48477 32.9646 6.62373 33.1646 6.78532L32.7445 7.49307ZM43.9813 6.04848V12.9321H43.081V9.80056H39.17V12.9321H38.2698V6.04848H39.17V9.02493H43.081V6.04848H43.9813ZM55.4264 12.9321V7.67729L53.0858 11.7202H52.5357L50.1851 7.67729V12.9321H49.2848V6.04848H50.2351L52.8057 10.518L55.3864 6.04848H56.3267V12.9321H55.4264ZM63.7888 6.04848H64.549L67.4497 12.9321H66.4895L65.6493 10.9155H62.6685L61.8383 12.9321H60.878L63.7888 6.04848ZM65.4492 10.2368L64.1689 7.05679L62.8485 10.2368H65.4492ZM72.8987 7.6579V12.9321H71.9984V6.04848H72.7586L77.0998 11.4294V6.05817H78V12.9321H77.1798L72.8987 7.6579Z" fill="#1A1A1A"/>
	    <path d="M82 44.5C82 42.567 83.567 41 85.5 41H87.5C89.433 41 91 42.567 91 44.5V46.5C91 48.433 89.433 50 87.5 50H85.5C83.567 50 82 48.433 82 46.5V44.5Z" fill="#F53178"/>
	    <path d="M82 33.5C82 31.567 83.567 30 85.5 30H87.5C89.433 30 91 31.567 91 33.5V35.5C91 37.433 89.433 39 87.5 39H85.5C83.567 39 82 37.433 82 35.5V33.5Z" fill="#7931EE"/>
	    <path d="M82 22.5C82 20.567 83.567 19 85.5 19H87.5C89.433 19 91 20.567 91 22.5V24.5C91 26.433 89.433 28 87.5 28H85.5C83.567 28 82 26.433 82 24.5V22.5Z" fill="#3AB1D7"/>
	    <path transform="translate(85, 55)" d="M0.505682 6V0.181818H2.80114C3.24053 0.181818 3.61553 0.260417 3.92614 0.417614C4.23864 0.572917 4.47633 0.793561 4.6392 1.07955C4.80398 1.36364 4.88636 1.69792 4.88636 2.08239C4.88636 2.46875 4.80303 2.80114 4.63636 3.07955C4.4697 3.35606 4.22822 3.56818 3.91193 3.71591C3.59754 3.86364 3.21686 3.9375 2.76989 3.9375H1.23295V2.94886H2.57102C2.80587 2.94886 3.00095 2.91667 3.15625 2.85227C3.31155 2.78788 3.42708 2.69129 3.50284 2.5625C3.58049 2.43371 3.61932 2.27367 3.61932 2.08239C3.61932 1.8892 3.58049 1.72633 3.50284 1.59375C3.42708 1.46117 3.31061 1.3608 3.15341 1.29261C2.99811 1.22254 2.80208 1.1875 2.56534 1.1875H1.7358V6H0.505682ZM3.64773 3.35227L5.09375 6H3.7358L2.32102 3.35227H3.64773Z" fill="#2CB569" />
	    <path transform="translate(78, 55)" d="M0.505682 6V0.181818H4.42614V1.19602H1.7358V2.58239H4.22443V3.59659H1.7358V4.9858H4.4375V6H0.505682Z" fill="#2CB569" />
	    <path transform="translate(70, 55)" d="M2.56818 6H0.505682V0.181818H2.58523C3.17045 0.181818 3.67424 0.298295 4.09659 0.53125C4.51894 0.76231 4.84375 1.0947 5.07102 1.52841C5.30019 1.96212 5.41477 2.48106 5.41477 3.08523C5.41477 3.69129 5.30019 4.21212 5.07102 4.64773C4.84375 5.08333 4.51705 5.41761 4.09091 5.65057C3.66667 5.88352 3.15909 6 2.56818 6ZM1.7358 4.94602H2.51705C2.88068 4.94602 3.18655 4.88163 3.43466 4.75284C3.68466 4.62216 3.87216 4.42045 3.99716 4.14773C4.12405 3.87311 4.1875 3.51894 4.1875 3.08523C4.1875 2.6553 4.12405 2.30398 3.99716 2.03125C3.87216 1.75852 3.68561 1.55777 3.4375 1.42898C3.18939 1.30019 2.88352 1.2358 2.51989 1.2358H1.7358V4.94602Z" fill="#2CB569" />
	    <path transform="translate(62, 55)" d="M5.37216 0.181818V6H4.30966L1.77841 2.33807H1.7358V6H0.505682V0.181818H1.58523L4.09659 3.84091H4.14773V0.181818H5.37216Z" fill="#2CB569" />
	    <path transform="translate(55, 55)" d="M0.505682 6V0.181818H4.42614V1.19602H1.7358V2.58239H4.22443V3.59659H1.7358V4.9858H4.4375V6H0.505682Z" fill="#2CB569" />
	    <path transform="translate(47, 55)" d="M0.505682 6V0.181818H2.80114C3.24053 0.181818 3.61553 0.260417 3.92614 0.417614C4.23864 0.572917 4.47633 0.793561 4.6392 1.07955C4.80398 1.36364 4.88636 1.69792 4.88636 2.08239C4.88636 2.46875 4.80303 2.80114 4.63636 3.07955C4.4697 3.35606 4.22822 3.56818 3.91193 3.71591C3.59754 3.86364 3.21686 3.9375 2.76989 3.9375H1.23295V2.94886H2.57102C2.80587 2.94886 3.00095 2.91667 3.15625 2.85227C3.31155 2.78788 3.42708 2.69129 3.50284 2.5625C3.58049 2.43371 3.61932 2.27367 3.61932 2.08239C3.61932 1.8892 3.58049 1.72633 3.50284 1.59375C3.42708 1.46117 3.31061 1.3608 3.15341 1.29261C2.99811 1.22254 2.80208 1.1875 2.56534 1.1875H1.7358V6H0.505682ZM3.64773 3.35227L5.09375 6H3.7358L2.32102 3.35227H3.64773Z" fill="#2CB569" />
	    <path transform="translate(44, 55)" d="" fill="#2CB569" />
	    <path transform="translate(37, 55)" d="M0.505682 6V0.181818H2.80114C3.24242 0.181818 3.61837 0.266098 3.92898 0.434659C4.23958 0.601326 4.47633 0.833333 4.6392 1.13068C4.80398 1.42614 4.88636 1.76705 4.88636 2.15341C4.88636 2.53977 4.80303 2.88068 4.63636 3.17614C4.4697 3.47159 4.22822 3.7017 3.91193 3.86648C3.59754 4.03125 3.21686 4.11364 2.76989 4.11364H1.30682V3.12784H2.57102C2.80777 3.12784 3.00284 3.08712 3.15625 3.00568C3.31155 2.92235 3.42708 2.80777 3.50284 2.66193C3.58049 2.5142 3.61932 2.3447 3.61932 2.15341C3.61932 1.96023 3.58049 1.79167 3.50284 1.64773C3.42708 1.50189 3.31155 1.3892 3.15625 1.30966C3.00095 1.22822 2.80398 1.1875 2.56534 1.1875H1.7358V6H0.505682Z" fill="#2CB569" />
	    <path transform="translate(29, 55)" d="M1.50852 6H0.190341L2.19886 0.181818H3.78409L5.78977 6H4.47159L3.0142 1.51136H2.96875L1.50852 6ZM1.42614 3.71307H4.53977V4.6733H1.42614V3.71307Z" fill="#2CB569" />
	    <path transform="translate(20, 55)" d="M0.505682 0.181818H2.02273L3.625 4.09091H3.69318L5.29545 0.181818H6.8125V6H5.61932V2.21307H5.57102L4.06534 5.97159H3.25284L1.74716 2.19886H1.69886V6H0.505682V0.181818Z" fill="#2CB569" />
	    <rect x="20" y="53" width="71" height="1" fill="#2CB569"/>
	</svg>,
	docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
	footer: {
		text: '© 2024 Irishman Cloud Inc.',
	},
}

export default config