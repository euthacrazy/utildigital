import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  width = 140, 
  height = 40, 
  color = '#FFFFFF', 
  textColor = '#FFFFFF'
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        {/* U00datil Digital logo */}
        <text x="5" y="26" fontFamily="Inter, Poppins, sans-serif" fontSize="20" fontWeight="bold" fill={textColor}>U00datil</text>
        <text x="46" y="26" fontFamily="Inter, Poppins, sans-serif" fontSize="20" fontWeight="normal" fill={textColor}>Digital</text>
        <path d="M2 34H138" stroke={color} strokeWidth="1.5" />
      </g>
    </svg>
  );
};

export default Logo;
