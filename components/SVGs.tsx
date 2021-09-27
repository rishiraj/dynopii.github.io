import React from "react";

interface Props {
  height?: number;
  width?: number;
  fill?: string;
  className?: string;
}

export const DynopiiLogo: React.FC<Props> = ({ height, width, fill }) => {
  return (
    <svg
      width={width || 40}
      height={height || 29}
      viewBox="0 0 40 29"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M39.672 14.5243C39.6601 18.3176 38.1661 21.9557 35.5096 24.6608C32.853 27.3659 29.2446 28.9233 25.4559 29H24.9464C24.8778 29.0004 24.8093 28.9963 24.7412 28.9878C24.6746 28.9958 24.6076 28.9998 24.5405 29C24.1157 28.9991 23.7072 28.8361 23.3984 28.5441C23.0895 28.2521 22.9035 27.8532 22.8783 27.4287C22.8532 27.0042 22.9907 26.5861 23.2629 26.2596C23.5351 25.9331 23.9214 25.7228 24.3431 25.6717C24.3326 25.6825 24.3226 25.6939 24.3134 25.7059C24.3775 25.6869 24.4426 25.6718 24.5086 25.6606H24.5427C24.6106 25.6608 24.6783 25.6648 24.7457 25.6728H25.1416C25.0521 25.6546 24.9614 25.6431 24.8703 25.6385H24.7931C24.6977 25.6382 24.6025 25.6463 24.5086 25.6628C24.4532 25.6631 24.398 25.6668 24.3431 25.6739C24.3562 25.655 24.3677 25.6351 24.3773 25.6142C24.6254 25.6308 24.8758 25.6407 25.1283 25.6407C31.2896 25.6407 36.2842 20.6654 36.2842 14.5287C36.2842 8.392 31.2907 3.41332 25.1272 3.41332C25.0169 3.41332 24.9067 3.41332 24.7909 3.41332H5.27798C4.80764 3.42497 4.36048 3.62018 4.03194 3.95729C3.7034 4.29441 3.5195 4.74672 3.5195 5.21768C3.5195 5.68864 3.7034 6.14095 4.03194 6.47806C4.36048 6.81517 4.80764 7.01039 5.27798 7.02203V7.03197H24.7909C24.9011 7.02645 25.0114 7.02424 25.1272 7.02424C27.0804 7.01475 28.96 7.76924 30.3655 9.1269C31.771 10.4846 32.5912 12.338 32.6513 14.2923C32.7115 16.2465 32.0067 18.147 30.6873 19.5887C29.3679 21.0303 27.5382 21.8991 25.5882 22.0099H24.7688V22.0541H16.9257L16.8981 22.0243H12.6855L12.7042 22.0541H9.56566C9.33264 22.06 9.10081 22.0191 8.88382 21.9339C8.66683 21.8487 8.46907 21.7208 8.30219 21.5579C8.13531 21.395 8.00269 21.2003 7.91214 20.9853C7.82159 20.7703 7.77494 20.5394 7.77494 20.306C7.77494 20.0727 7.82159 19.8418 7.91214 19.6268C8.00269 19.4118 8.13531 19.2171 8.30219 19.0542C8.46907 18.8913 8.66683 18.7634 8.88382 18.6782C9.10081 18.593 9.33264 18.5521 9.56566 18.558H14.74C14.8683 18.5281 14.9997 18.5133 15.1315 18.5138H24.428C24.5383 18.5238 24.6552 18.5282 24.7721 18.5282H24.7942C24.8482 18.5282 24.9045 18.5282 24.9585 18.5282L25.1151 18.5127L25.2143 18.5017L25.3026 18.4907C25.4906 18.467 25.6767 18.4302 25.8595 18.3803L25.9256 18.3615L26.0712 18.314L26.1583 18.2831C27.0717 17.9448 27.8317 17.2868 28.2978 16.4307C28.3143 16.402 28.3286 16.3733 28.3441 16.3446C28.3904 16.2541 28.4323 16.1625 28.4731 16.0687L28.5029 15.9914C28.5697 15.8241 28.6242 15.6522 28.6661 15.477C28.6738 15.4471 28.6815 15.4162 28.6882 15.3853C28.6948 15.3544 28.7014 15.3268 28.7069 15.297C28.7074 15.2937 28.7074 15.2904 28.7069 15.2871C28.7124 15.2595 28.7179 15.233 28.7223 15.2054C28.7323 15.1502 28.7411 15.095 28.7477 15.0365L28.7576 14.9526V14.9162C28.7631 14.8554 28.7676 14.7947 28.7709 14.7329C28.7742 14.6711 28.7764 14.5971 28.7764 14.5276C28.7738 13.4669 28.3518 12.4503 27.6027 11.7001C26.8537 10.9498 25.8384 10.5269 24.7787 10.5237H5.95951C5.73348 10.5525 5.50584 10.5669 5.27798 10.5667C3.87818 10.5667 2.5357 10.0101 1.54589 9.01926C0.556072 8.02844 0 6.68459 0 5.28336C0 3.88213 0.556072 2.53828 1.54589 1.54746C2.5357 0.556639 3.87818 1.41654e-06 5.27798 1.41654e-06C5.50584 -0.000164332 5.73348 0.0142157 5.95951 0.0430542H24.7909C24.9011 0.0430542 25.0114 0.0430542 25.1272 0.0430542C33.1589 0.0397425 39.672 6.52417 39.672 14.5243Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M14.7322 29C15.6931 29 16.4722 28.221 16.4722 27.26C16.4722 26.299 15.6931 25.52 14.7322 25.52C13.7712 25.52 12.9922 26.299 12.9922 27.26C12.9922 28.221 13.7712 29 14.7322 29Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M19.1399 29C20.1009 29 20.8799 28.221 20.8799 27.26C20.8799 26.299 20.1009 25.52 19.1399 25.52C18.1789 25.52 17.3999 26.299 17.3999 27.26C17.3999 28.221 18.1789 29 19.1399 29Z"
          fill="url(#paint2_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-0.0264671"
          y1="14.5"
          x2="39.9896"
          y2="14.5"
          gradientUnits="userSpaceOnUse"
        >
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
        <linearGradient
          id="paint1_linear"
          x1="12.9922"
          y1="27.26"
          x2="16.4733"
          y2="27.26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3A0CA3" />
          <stop offset="0.17" stopColor="#3B15AB" />
          <stop offset="0.45" stopColor="#3E2FC2" />
          <stop offset="0.53" stopColor="#3F37C9" />
          <stop offset="0.63" stopColor="#4041D2" />
          <stop offset="1" stopColor="#4361EE" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="570.755"
          y1="886.368"
          x2="676.164"
          y2="886.368"
          gradientUnits="userSpaceOnUse"
        >
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
  );
};

export const MenuToggle: React.FC<Props> = ({ height, width, fill }) => {
  return (
    <svg
      width={width || 18}
      height={height || 11}
      viewBox="0 0 18 11"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginLeft: "20px" }}
    >
      <path d="M0 0H18V1H0V0Z" fill="white"></path>
      <path d="M0 10H18V11H0V10Z" fill="white"></path>
    </svg>
  );
};

export const DhwaniLogo: React.FC<Props> = ({ height, width, fill }) => {
  return (
    <svg
      width="83"
      height="83"
      viewBox="0 0 83 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.8504 63.9442C88.246 44.9728 82.9153 19.5453 63.9444 7.1498C44.973 -5.24575 19.5455 0.0847828 7.14997 19.0559C-5.24552 38.0269 0.0850113 63.4545 19.0561 75.8502C38.0272 88.2458 63.4547 82.9151 75.8504 63.9442Z"
        fill="url(#paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.6478 20.6839C21.2517 20.6652 13.6159 30.0577 13.5928 41.6624C24.4887 41.6843 25.5593 41.6865 26.0552 41.6876L30.606 41.6966C33.7545 41.7027 34.793 41.705 35.422 41.7061C35.443 53.1963 43.0774 62.503 52.4917 62.503C61.9188 62.503 69.5609 53.1705 69.5609 41.6585C57.9496 41.6585 57.4594 41.6585 56.9691 41.6585H52.4917H47.6193C47.6109 30.0868 40.0246 20.7026 30.6478 20.6839Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-90.3796"
          y1="-42.0223"
          x2="93.6978"
          y2="78.938"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.207643" stopColor="#A5A5A5" />
          <stop offset="0.869037" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="17.3677"
          y1="29.6772"
          x2="67.5914"
          y2="54.9534"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8B5BF1" />
          <stop offset="1" stopColor="#D637A6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Feature Box SVGs
export const SAAS: React.FC<Props> = ({ height, width, fill }) => {
  return (
    <svg
      width={width || 52}
      height={height || 41}
      viewBox="0 0 52 41"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.2186 19.6263C51.2186 24.6065 47.1677 28.6573 42.1797 28.6573H39.638V25.8296C39.638 24.948 39.0026 24.2093 38.1447 24.0663L36.3655 23.7724L37.4219 22.303C37.9223 21.5882 37.8349 20.6192 37.2234 20.0076L34.0541 16.8463C33.7206 16.5048 33.2678 16.3221 32.7913 16.3221C32.4179 16.3221 32.0605 16.4333 31.7508 16.6557L30.2972 17.6962L30.0033 15.9329C29.8604 15.0592 29.1217 14.4317 28.24 14.4317H23.7603C22.8865 14.4317 22.1399 15.0592 21.997 15.9249L21.7031 17.6962L20.2416 16.6478C19.9398 16.4333 19.5824 16.3221 19.209 16.3221C18.7325 16.3221 18.2797 16.5048 17.9461 16.8463L14.777 20.0075C14.1654 20.6192 14.078 21.5882 14.5864 22.311L15.6348 23.7724L13.8715 24.0663C13.0057 24.2093 12.3703 24.948 12.3703 25.8297V28.6573H9.81272C4.83256 28.6573 0.781738 24.6065 0.781738 19.6263C0.781738 15.917 3.05338 12.5969 6.47672 11.2467C7.46162 5.09892 12.831 0.5 19.1058 0.5C24.6499 0.5 29.5506 4.07427 31.2663 9.28475C32.0446 8.98293 32.8866 8.8241 33.7444 8.8241C35.7778 8.8241 37.6602 9.68189 38.9867 11.1831C39.9875 10.8019 41.0597 10.6033 42.1797 10.6033C47.1677 10.6033 51.2186 14.6541 51.2186 19.6263Z"
        fill="#777777"
      />
      <path
        d="M37.946 25.2418L35.3249 24.8049C35.1977 24.4476 35.0548 24.106 34.8959 23.7803L36.4448 21.6199C36.6116 21.3816 36.5877 21.056 36.3813 20.8494L33.212 17.6882C33.0056 17.4817 32.6799 17.4579 32.4416 17.6247L30.2891 19.1656C29.9555 19.0067 29.614 18.8637 29.2645 18.7446L28.8276 16.1235C28.78 15.8296 28.5338 15.6231 28.2399 15.6231H23.7601C23.4662 15.6231 23.22 15.8375 23.1724 16.1235L22.7355 18.7446C22.386 18.8637 22.0444 19.0067 21.7109 19.1656L19.5583 17.6247C19.3201 17.4579 18.9944 17.4817 18.7879 17.6882L15.6187 20.8494C15.4122 21.056 15.3884 21.3816 15.5552 21.6199L17.104 23.7803C16.9452 24.106 16.8022 24.4476 16.6751 24.8049L14.0619 25.2418C13.768 25.2895 13.5615 25.5357 13.5615 25.8296V30.3014C13.5615 30.5953 13.768 30.8415 14.0619 30.8892L16.6751 31.326C16.8022 31.6834 16.9452 32.025 17.0961 32.3506L15.5552 34.5111C15.3884 34.7494 15.4122 35.075 15.6187 35.2815L18.7879 38.4428C18.9944 38.6493 19.3201 38.6731 19.5583 38.5063L21.7188 36.9575C22.0444 37.1163 22.386 37.2593 22.7355 37.3864L23.1724 39.9996C23.22 40.2855 23.4662 40.5 23.7601 40.5H28.2399C28.5338 40.5 28.78 40.2934 28.8276 39.9996L29.2645 37.3864C29.614 37.2593 29.9555 37.1163 30.2811 36.9575L32.4416 38.5063C32.6799 38.6731 33.0056 38.6493 33.212 38.4428L36.3813 35.2815C36.5877 35.075 36.6116 34.7494 36.4448 34.5111L34.9039 32.3506C35.0548 32.025 35.1977 31.6834 35.3249 31.334L37.946 30.8892C38.2399 30.8415 38.4464 30.5953 38.4464 30.3014V25.8296C38.4464 25.5357 38.2399 25.2895 37.946 25.2418ZM26 33.6612C22.9182 33.6612 20.4082 31.1513 20.4082 28.0615C20.4082 24.9797 22.9182 22.4698 26 22.4698C29.0897 22.4698 31.5997 24.9797 31.5997 28.0615C31.5997 31.1513 29.0897 33.6612 26 33.6612Z"
        fill="#777777"
      />
    </svg>
  );
};

export const PlayButton: React.FC<Props> = ({ fill, height, width }) => {
  return (
    <svg
      className="transform hover:scale-105 transition-all"
      width={width || 106}
      height={height || 106}
      viewBox="0 0 106 106"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="53" cy="53" r="53" fill="white" />
      <path
        d="M53 3C25.3884 3 3 25.3884 3 53C3 80.6116 25.3884 103 53 103C80.6116 103 103 80.6116 103 53C103 25.3884 80.6116 3 53 3ZM69.0826 53.7701L44.7076 71.5045C44.574 71.6005 44.4164 71.6578 44.2523 71.6702C44.0883 71.6825 43.9239 71.6493 43.7775 71.5744C43.631 71.4994 43.508 71.3855 43.422 71.2452C43.3361 71.1049 43.2904 70.9436 43.2902 70.779V35.3326C43.2896 35.1677 43.3348 35.0059 43.4206 34.8651C43.5064 34.7243 43.6295 34.61 43.7762 34.5349C43.923 34.4597 44.0877 34.4267 44.2521 34.4395C44.4165 34.4522 44.5742 34.5103 44.7076 34.6071L69.0826 52.3304C69.1977 52.4118 69.2917 52.5197 69.3565 52.6449C69.4213 52.7702 69.4552 52.9092 69.4552 53.0502C69.4552 53.1913 69.4213 53.3302 69.3565 53.4555C69.2917 53.5808 69.1977 53.6887 69.0826 53.7701Z"
        fill="#27AE60"
      />
    </svg>
  );
};
export const ZoomSVG: React.FC<Props> = ({
  fill,
  height,
  width,
  className,
}) => {
  return (
    <svg
      className={className || ""}
      width={width || 80}
      height={height || 80}
      viewBox="0 0 80 80"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 3C60.4348 3 77 19.5652 77 40C77 60.4348 60.4348 77 40 77C19.5652 77 3 60.4348 3 40C3 19.5652 19.5652 3 40 3Z"
        stroke="white"
        strokeWidth="6"
      />
      <path
        d="M16.4639 28.6976V45.6507C16.4789 49.4843 19.6101 52.5698 23.4287 52.5541H48.1405C48.843 52.5541 49.4082 51.9889 49.4082 51.3015V34.3485C49.3931 30.5148 46.2619 27.4294 42.4439 27.445H17.7321C17.0297 27.445 16.4645 28.0102 16.4645 28.6976H16.4639ZM50.981 35.3109L61.1835 27.8579C62.0695 27.1248 62.7563 27.3078 62.7563 28.6368V51.3629C62.7563 52.875 61.9161 52.692 61.1835 52.1418L50.981 44.7039V35.3109Z"
        fill="white"
      />
    </svg>
  );
};

export const CheckSVG: React.FC<Props> = ({ fill, height, width }) => {
  return (
    <svg
      width={width || 20}
      height={height || 20}
      viewBox="0 0 20 20"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z"
        fill="#FFC059"
      />
    </svg>
  );
};

export const CrossSVG: React.FC<Props> = ({ fill, height, width }) => {
  return (
    <svg
      width={width || 20}
      height={height || 20}
      viewBox="0 0 20 20"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99983 0C4.47716 0 0 4.47722 0 9.9999C0 15.5224 4.47709 20 9.9997 20C15.5223 20 19.9999 15.5224 19.9999 9.9999C19.9999 4.47722 15.5224 0 9.99983 0ZM13.7721 13.8113C13.3728 14.2102 12.726 14.2102 12.3271 13.8113C11.0704 12.5546 9.03288 12.5546 7.77619 13.8113L7.67259 13.9149C7.27353 14.3138 6.62667 14.3138 6.22781 13.9149C5.82854 13.5155 5.82854 12.8688 6.22781 12.4695L6.3918 12.3055C7.61502 11.0823 7.61499 9.0991 6.39174 7.87592C5.99281 7.47653 5.99281 6.82986 6.39174 6.43074C6.7908 6.03167 7.43779 6.03167 7.83692 6.43074L7.94025 6.53407C9.10636 7.70018 10.997 7.70015 12.1631 6.534C12.5621 6.13507 13.2093 6.13494 13.6081 6.534C14.0073 6.9334 14.0073 7.58046 13.6081 7.97919C12.4421 9.1453 12.4421 11.0358 13.6081 12.2019L13.7722 12.366C14.1711 12.7649 14.1713 13.4121 13.7721 13.8113Z"
        fill="#FB3F3F"
      />
    </svg>
  );
};
