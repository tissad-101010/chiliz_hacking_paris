import React from "react";
import Card from "@/components/Card";

export default function Home() {
	return (
		<div>
			<h1 className="text-3xl font-bold text-center my-8">Welcome to My App</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
				<Card
					title="Para Athletism"
					backgroundImage="/images/para-athletism.png"
				/>
				<Card
					title="Wheelchair Basketball"
					backgroundImage="/images/wheelchair-basketball.png"
				/>
				<Card
					title="Wheelchair Basketball"
					backgroundImage="/images/wheelchair-basketball.png"
				/>
			</div>	
		</div>
	);
}
