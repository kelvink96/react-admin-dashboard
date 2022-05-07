import React from 'react';

import "./Updates.css"
import {UpdatesData} from "../../mocks/mocks";

const Updates = () => {
	return (
		<div className="Updates">
			{UpdatesData.map((update, index) => (
				<div className="updateItem" key={`update-item-${index}`}>
					<img src={update.img} alt=""/>
					<div className="noti">
						<div>
							<span>{update.name}</span>
							<span>{update.noti}</span>
						</div>
						<span>{update.time}</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default Updates;
