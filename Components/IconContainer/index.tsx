import React from "react";
import Image from "next/image";

interface IconContainerProps {
	iconPath: string;
	size?: number;
}

export const IconContainer: React.FC<IconContainerProps> = ({ iconPath, size }) => {
	return (
		<div className={`w-[80px] h-[80px] bg-gradient-to-br from-eccblue to-[#0953A4] -rotate-[8deg] rounded-[16px] flex items-center justify-center`}>
			<Image
				src={iconPath}
				width={size ? size / 2 : 40}
				height={size ? size / 2 : 40}
			/>
		</div>
	);
};
