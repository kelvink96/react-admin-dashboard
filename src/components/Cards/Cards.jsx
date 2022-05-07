import React from 'react';
import {CardsData} from "../../mocks/mocks";
import Card from "../Card/Card";

import "./Cards.css"

const Cards = () => {
	return (
		<div className="Cards">
			{CardsData.map((card, idx) => (
				<div className="parentContainer" key={`stats-card-${idx}`}>
					<Card
						title={card.title}
						color={card.color}
						barValue={card.barValue}
						value={card.value}
						png={card.png}
						series={card.series}
					/>
				</div>))
			}
		</div>
	);
};

export default Cards;
