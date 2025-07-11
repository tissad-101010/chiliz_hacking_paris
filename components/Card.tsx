import React from 'react';
import Image from 'next/image';
interface CardProps {
	title: string;
	backgroundImage: string; // path relative to public folder, e.g. '/images/bg.jpg'
}

const Card: React.FC<CardProps> = ({ title, backgroundImage }) => {
	return (
		<div className="relative rounded-lg text-white p-4 md:p-6 lg:p-8 flex flex-col justify-end overflow-hidden aspect-[3/2]">
			<Image
				src={backgroundImage}
				alt={title}
				fill
				className="object-cover z-0"
				priority
				draggable={false}
				unselectable="on"
				style={{ pointerEvents: 'none', userSelect: 'none' }}
			/>
			<div className="relative z-10">
				<h2 className="text-lg md:text-xl lg:text-2xl font-bold drop-shadow">{title}</h2>
				{/* Card content goes here */}
			</div>
		</div>
	);
};

export default Card;
