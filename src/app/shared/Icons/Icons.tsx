export const SideBarIcon = ({
  color,
  size,
  desc,
}: {
  color: string;
  desc: string;
  size: number;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="SmileySticker"
      data-size={`${size}px`}
      data-weight="regular"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill={`#${color}`}
        viewBox="0 0 256 256"
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,152H56a8,8,0,0,0,0-16H40V120H56a8,8,0,0,0,0-16H40V88H56a8,8,0,0,0,0-16H40V56H80V200H40Zm176,48H96V56H216V200Z"></path>
      </svg>
    </div>
  );
};

export const Recycle = ({
  color,
  size,
  desc,
}: {
  desc: string;
  color: string;
  size: number;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="SmileySticker"
      data-size={`${size}px`}
      data-weight="regular"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill={`#${color}`}
        viewBox="0 0 256 256"
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <path d="M96,208a8,8,0,0,1-8,8H40a24,24,0,0,1-20.77-36l34.29-59.25L39.47,124.5A8,8,0,1,1,35.33,109l32.77-8.77a8,8,0,0,1,9.8,5.66l8.79,32.77A8,8,0,0,1,81,148.5a8.37,8.37,0,0,1-2.08.27,8,8,0,0,1-7.72-5.93l-3.8-14.15L33.11,188A8,8,0,0,0,40,200H88A8,8,0,0,1,96,208Zm140.73-28-23.14-40a8,8,0,0,0-13.84,8l23.14,40A8,8,0,0,1,216,200H147.31l10.34-10.34a8,8,0,0,0-11.31-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.31-11.32L147.31,216H216a24,24,0,0,0,20.77-36ZM128,32a7.85,7.85,0,0,1,6.92,4l34.29,59.25-14.08-3.78A8,8,0,0,0,151,106.92l32.78,8.79a8.23,8.23,0,0,0,2.07.27,8,8,0,0,0,7.72-5.93l8.79-32.79a8,8,0,1,0-15.45-4.14l-3.8,14.17L148.77,28a24,24,0,0,0-41.54,0L84.07,68a8,8,0,0,0,13.85,8l23.16-40A7.85,7.85,0,0,1,128,32Z"></path>
      </svg>
    </div>
  );
};

export const HappyFace = ({
  color,
  size,
  desc,
}: {
  desc: string;
  color: string;
  size: number;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="SmileySticker"
      data-size={`${size}px`}
      data-weight="regular"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill={`#${color}`}
        viewBox="0 0 256 256"
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <path d="M174.92,156c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.93-28a8,8,0,1,1,13.86-8c7.46,12.91,19.2,20,33.07,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM232,128a104.35,104.35,0,0,1-4.56,30.56,8,8,0,0,1-2,3.31l-63.57,63.57a7.9,7.9,0,0,1-3.3,2A104,104,0,1,1,232,128Zm-16,0a87.89,87.89,0,1,0-64,84.69L212.69,152A88.05,88.05,0,0,0,216,128ZM92,120a12,12,0,1,0-12-12A12,12,0,0,0,92,120Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,96Z"></path>
      </svg>
    </div>
  );
};

export const Facebook = ({
  desc,
  color,
  size,
}: {
  desc: string;
  color: string;
  size: number;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="SmileySticker"
      data-size={`${size}px`}
      data-weight="regular"
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        stroke={`#${color}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </div>
  );
};

export const Instagram = ({
  color,
  size,
  desc,
}: {
  desc: string;
  color: string;
  size: number;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="SmileySticker"
      data-size={`${size}px`}
      data-weight="regular"
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        stroke={`#${color}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    </div>
  );
};

export const EmailIcon = ({
  desc,
  color,
  size,
}: {
  desc: string;
  color: string;
  size: number;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="SmileySticker"
      data-size={`${size}px`}
      data-weight="regular"
    >
      <svg
        width="24px"
        height="24px"
        fill="none"
        viewBox="0 0 24 24"
        stroke={`#${color}`}
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
};

export const PhoneIcon = ({
  color,
  size,
  desc,
}: {
  color: string;
  size: number;
  desc: string;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="SmileySticker"
      data-size={`${size}px`}
      data-weight="regular"
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        stroke={`#${color}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </div>
  );
};

export const ArrowRight = ({
  color,
  size,
  desc,
}: {
  color: string;
  size: number;
  desc: string;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="SmileySticker"
      data-size={`${size}px`}
      data-weight="regular"
    >
      <svg
        className="-mr-1 ml-2 h-4 w-4"
        fill={`#${color}`}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export const ChatsCircle = ({
  color,
  size,
  desc,
}: {
  color: string;
  size: number;
  desc: string;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="ChatsCircle"
      data-size={size}
      data-weight="regular"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill={`#${color}`}
        viewBox="0 0 256 256"
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <path d="M231.79,187.33A80,80,0,0,0,169.57,72.59,80,80,0,1,0,24.21,139.33l-7.66,26.82a14,14,0,0,0,17.3,17.3l26.82-7.66a80.15,80.15,0,0,0,25.75,7.63,80,80,0,0,0,108.91,40.37l26.82,7.66a14,14,0,0,0,17.3-17.3ZM61.53,159.23a8.22,8.22,0,0,0-2.2.3l-26.41,7.55,7.55-26.41a8,8,0,0,0-.68-6,63.95,63.95,0,1,1,25.57,25.57A7.94,7.94,0,0,0,61.53,159.23Zm154,29.44,7.55,26.41-26.41-7.55a8,8,0,0,0-6,.68,64.06,64.06,0,0,1-86.32-24.64A79.93,79.93,0,0,0,174.7,89.71a64,64,0,0,1,41.51,92.93A8,8,0,0,0,215.53,188.67Z"></path>
      </svg>
    </div>
  );
};

export const NotionLogo = ({
  color,
  size,
  desc,
}: {
  color: string;
  desc: string;
  size: number;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="NotionLogo"
      data-size={size}
      data-weight="regular"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill={`#${color}`}
        viewBox="0 0 256 256"
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <path d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM77.53,56H99.27l79.2,144H156.73Z"></path>
      </svg>
    </div>
  );
};

export const SignOut = ({
  color,
  size,
  desc,
}: {
  color: string;
  size: number;
  desc: string;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="SignOut"
      data-size={size}
      data-weight="regular"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill={`#${color}`}
        viewBox="0 0 256 256"
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z"></path>
      </svg>
    </div>
  );
};

export const UserCirclePlus = ({
  color,
  size,
  desc,
}: {
  color: string;
  desc: string;
  size: number;
}) => {
  return (
    <div
      className={`text-[#${color}]`}
      data-icon="UserCirclePlus"
      data-size={size}
      data-weight="regular"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill={`#${color}`}
        viewBox="0 0 256 256"
      >
        <title>Bar Cats Commercial Cleaning</title>
        <desc>{desc}</desc>
        <path d="M168,56a8,8,0,0,1,8-8h16V32a8,8,0,0,1,16,0V48h16a8,8,0,0,1,0,16H208V80a8,8,0,0,1-16,0V64H176A8,8,0,0,1,168,56Zm62.56,54.68a103.92,103.92,0,1,1-85.24-85.24,8,8,0,0,1-2.64,15.78A88.07,88.07,0,0,0,40,128a87.62,87.62,0,0,0,22.24,58.41A79.66,79.66,0,0,1,98.3,157.66a48,48,0,1,1,59.4,0,79.66,79.66,0,0,1,36.06,28.75A87.62,87.62,0,0,0,216,128a88.85,88.85,0,0,0-1.22-14.68,8,8,0,1,1,15.78-2.64ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Zm0,64a87.57,87.57,0,0,0,53.92-18.5,64,64,0,0,0-107.84,0A87.57,87.57,0,0,0,128,216Z"></path>
      </svg>
    </div>
  );
};
