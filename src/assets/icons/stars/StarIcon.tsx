export default function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none">
      <path 
        d="M9.5 2.5L10.6322 6.92651C10.7704 7.46667 10.8395 7.73674 10.9758 7.95754C11.0965 8.15291 11.2547 8.31947 11.4404 8.4465C11.6501 8.59 11.9067 8.66275 12.4198 8.80817L16.625 10L12.4198 11.1918C11.9067 11.3372 11.6501 11.41 11.4404 11.5535C11.2547 11.6805 11.0965 11.8471 10.9758 12.0425C10.8395 12.2632 10.7704 12.5333 10.6322 13.0735L9.5 17.5L8.36776 13.0735C8.22961 12.5333 8.1605 12.2632 8.02418 12.0425C7.90349 11.8471 7.74526 11.6805 7.55967 11.5535C7.34991 11.41 7.09333 11.3372 6.58018 11.1918L2.375 10L6.58018 8.80817C7.09333 8.66275 7.34991 8.59 7.55967 8.4465C7.74526 8.31947 7.90349 8.15291 8.02418 7.95754C8.1605 7.73674 8.22961 7.46667 8.36776 6.92651L9.5 2.5Z" 
        fill={filled ? "url(#paint0_linear)" : "none"}
        stroke="url(#paint1_linear)" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="2.375" y1="10" x2="16.625" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4943D0"/>
          <stop offset="1" stopColor="#DB1FFF"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="2.375" y1="10" x2="16.625" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4943D0"/>
          <stop offset="1" stopColor="#DB1FFF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}