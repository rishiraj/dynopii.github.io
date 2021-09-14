/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
export const Header = () => {
	return (
		<header
			className="
          sticky
          flex flex-grow
          items-center
          justify-between
          navbar_container
          nav_header_base
        "
		>
			<div className="content_container flex items-center justify-between" style={{ height: '66px' }}>
				<a className="flex items-center" href="/">
					<svg width="40" height="29" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0)">
							<path d="M39.672 14.5243C39.6601 18.3176 38.1661 21.9557 35.5096 24.6608C32.853 27.3659 29.2446 28.9233 25.4559 29H24.9464C24.8778 29.0004 24.8093 28.9963 24.7412 28.9878C24.6746 28.9958 24.6076 28.9998 24.5405 29C24.1157 28.9991 23.7072 28.8361 23.3984 28.5441C23.0895 28.2521 22.9035 27.8532 22.8783 27.4287C22.8532 27.0042 22.9907 26.5861 23.2629 26.2596C23.5351 25.9331 23.9214 25.7228 24.3431 25.6717C24.3326 25.6825 24.3226 25.6939 24.3134 25.7059C24.3775 25.6869 24.4426 25.6718 24.5086 25.6606H24.5427C24.6106 25.6608 24.6783 25.6648 24.7457 25.6728H25.1416C25.0521 25.6546 24.9614 25.6431 24.8703 25.6385H24.7931C24.6977 25.6382 24.6025 25.6463 24.5086 25.6628C24.4532 25.6631 24.398 25.6668 24.3431 25.6739C24.3562 25.655 24.3677 25.6351 24.3773 25.6142C24.6254 25.6308 24.8758 25.6407 25.1283 25.6407C31.2896 25.6407 36.2842 20.6654 36.2842 14.5287C36.2842 8.392 31.2907 3.41332 25.1272 3.41332C25.0169 3.41332 24.9067 3.41332 24.7909 3.41332H5.27798C4.80764 3.42497 4.36048 3.62018 4.03194 3.95729C3.7034 4.29441 3.5195 4.74672 3.5195 5.21768C3.5195 5.68864 3.7034 6.14095 4.03194 6.47806C4.36048 6.81517 4.80764 7.01039 5.27798 7.02203V7.03197H24.7909C24.9011 7.02645 25.0114 7.02424 25.1272 7.02424C27.0804 7.01475 28.96 7.76924 30.3655 9.1269C31.771 10.4846 32.5912 12.338 32.6513 14.2923C32.7115 16.2465 32.0067 18.147 30.6873 19.5887C29.3679 21.0303 27.5382 21.8991 25.5882 22.0099H24.7688V22.0541H16.9257L16.8981 22.0243H12.6855L12.7042 22.0541H9.56566C9.33264 22.06 9.10081 22.0191 8.88382 21.9339C8.66683 21.8487 8.46907 21.7208 8.30219 21.5579C8.13531 21.395 8.00269 21.2003 7.91214 20.9853C7.82159 20.7703 7.77494 20.5394 7.77494 20.306C7.77494 20.0727 7.82159 19.8418 7.91214 19.6268C8.00269 19.4118 8.13531 19.2171 8.30219 19.0542C8.46907 18.8913 8.66683 18.7634 8.88382 18.6782C9.10081 18.593 9.33264 18.5521 9.56566 18.558H14.74C14.8683 18.5281 14.9997 18.5133 15.1315 18.5138H24.428C24.5383 18.5238 24.6552 18.5282 24.7721 18.5282H24.7942C24.8482 18.5282 24.9045 18.5282 24.9585 18.5282L25.1151 18.5127L25.2143 18.5017L25.3026 18.4907C25.4906 18.467 25.6767 18.4302 25.8595 18.3803L25.9256 18.3615L26.0712 18.314L26.1583 18.2831C27.0717 17.9448 27.8317 17.2868 28.2978 16.4307C28.3143 16.402 28.3286 16.3733 28.3441 16.3446C28.3904 16.2541 28.4323 16.1625 28.4731 16.0687L28.5029 15.9914C28.5697 15.8241 28.6242 15.6522 28.6661 15.477C28.6738 15.4471 28.6815 15.4162 28.6882 15.3853C28.6948 15.3544 28.7014 15.3268 28.7069 15.297C28.7074 15.2937 28.7074 15.2904 28.7069 15.2871C28.7124 15.2595 28.7179 15.233 28.7223 15.2054C28.7323 15.1502 28.7411 15.095 28.7477 15.0365L28.7576 14.9526V14.9162C28.7631 14.8554 28.7676 14.7947 28.7709 14.7329C28.7742 14.6711 28.7764 14.5971 28.7764 14.5276C28.7738 13.4669 28.3518 12.4503 27.6027 11.7001C26.8537 10.9498 25.8384 10.5269 24.7787 10.5237H5.95951C5.73348 10.5525 5.50584 10.5669 5.27798 10.5667C3.87818 10.5667 2.5357 10.0101 1.54589 9.01926C0.556072 8.02844 0 6.68459 0 5.28336C0 3.88213 0.556072 2.53828 1.54589 1.54746C2.5357 0.556639 3.87818 1.41654e-06 5.27798 1.41654e-06C5.50584 -0.000164332 5.73348 0.0142157 5.95951 0.0430542H24.7909C24.9011 0.0430542 25.0114 0.0430542 25.1272 0.0430542C33.1589 0.0397425 39.672 6.52417 39.672 14.5243Z" fill="url(#paint0_linear)" />
							<path d="M14.7322 29C15.6931 29 16.4722 28.221 16.4722 27.26C16.4722 26.299 15.6931 25.52 14.7322 25.52C13.7712 25.52 12.9922 26.299 12.9922 27.26C12.9922 28.221 13.7712 29 14.7322 29Z" fill="url(#paint1_linear)" />
							<path d="M19.1399 29C20.1009 29 20.8799 28.221 20.8799 27.26C20.8799 26.299 20.1009 25.52 19.1399 25.52C18.1789 25.52 17.3999 26.299 17.3999 27.26C17.3999 28.221 18.1789 29 19.1399 29Z" fill="url(#paint2_linear)" />
						</g>
						<defs>
							<linearGradient id="paint0_linear" x1="-0.0264671" y1="14.5" x2="39.9896" y2="14.5" gradientUnits="userSpaceOnUse">
								<stop stopColor="#8760F6" />
								<stop offset="0.14" stopColor="#8C58ED" />
								<stop offset="0.38" stopColor="#9943D3" />
								<stop offset="0.68" stopColor="#AF21AA" />
								<stop offset="0.76" stopColor="#B5179E" />
								<stop offset="0.88" stopColor="#B7199E" />
								<stop offset="0.93" stopColor="#BE1FA0" />
								<stop offset="0.96" stopColor="#C92BA3" />
								<stop offset="0.98" stopColor="#DA3BA7" />
								<stop offset="0.99" stopColor="#E849AA" />
								<stop offset="1" stopColor="#EC5EA0" />
							</linearGradient>
							<linearGradient id="paint1_linear" x1="12.9922" y1="27.26" x2="16.4733" y2="27.26" gradientUnits="userSpaceOnUse">
								<stop stopColor="#3A0CA3" />
								<stop offset="0.17" stopColor="#3B15AB" />
								<stop offset="0.45" stopColor="#3E2FC2" />
								<stop offset="0.53" stopColor="#3F37C9" />
								<stop offset="0.63" stopColor="#4041D2" />
								<stop offset="1" stopColor="#4361EE" />
							</linearGradient>
							<linearGradient id="paint2_linear" x1="570.755" y1="886.368" x2="676.164" y2="886.368" gradientUnits="userSpaceOnUse">
								<stop stopColor="#3A0CA3" />
								<stop offset="0.17" stopColor="#3B15AB" />
								<stop offset="0.45" stopColor="#3E2FC2" />
								<stop offset="0.53" stopColor="#3F37C9" />
								<stop offset="0.63" stopColor="#4041D2" />
								<stop offset="1" stopColor="#4361EE" />
							</linearGradient>
							<clipPath id="clip0">
								<rect width="40" height="29" fill="white" />
							</clipPath>
						</defs>
					</svg>

				</a>
				<div className="desktop_nav_content md:hidden text-lightGray flex flex-row">
					<a href="" className="ml-8">
						About Us
					</a>
					<a href="" className="ml-8">
						Products
					</a>
					<a href="/blogs" className="ml-8">
						Blogs
					</a>
					<a href="" className="ml-8">
						Media
					</a>
					<a href="" className="ml-8">
						We're hiring
					</a>
				</div>
				<div className="mobile spacer hidden md:flex md:flex-grow"></div>
				<div className="signin_row flex items-center">
					<a href="/siginin" className="signin text-primary mr-4">
						Log in
					</a>
					<button type="submit" className="signin_btn">
						Sign up
					</button>
				</div>
				<div className="mobile menuToggle hidden md:flex cursor-pointer">
					<svg
						width="18"
						height="11"
						viewBox="0 0 18 11"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						style={{ marginLeft: '20px' }}
					>
						<path d="M0 0H18V1H0V0Z" fill="white"></path>
						<path d="M0 10H18V11H0V10Z" fill="white"></path>
					</svg>
				</div>
			</div>
			<div className="hidden mobile mobileMenu md:flex md:flex-col w-full" x-show="open">
				<div className="navigation flex flex-grow justify-center items-center">
					<div className="content w-full flex flex-col m-0 pb-3">
						<a className="mobile_nav_link secondary" href="/method">
							Method
						</a>
						<a className="mobile_nav_link secondary" href="/changelog">
							Changelog
						</a>
						<a className="mobile_nav_link secondary" href="/customers">
							Customers
						</a>
						<a className="mobile_nav_link secondary" href="/about">
							About us
						</a>
						<a className="mobile_nav_link secondary" href="/pricing">
							Pricing
						</a>
						<a className="mobile_nav_link secondary" href="/readme">
							We're hiring
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};
