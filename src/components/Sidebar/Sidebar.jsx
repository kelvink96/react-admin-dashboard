import React, {useState} from 'react';
import LogoImg from '../../assets/images/logo.png'
import {UilSignOutAlt} from "@iconscout/react-unicons";

import './Sidebar.css'
import {SidebarData} from "../../mocks/mocks";

const Sidebar = () => {
	const [selected, setSelected] = useState(0);

	return (
		<div className="Sidebar">
			{/*logo*/}
			<div className="logo">
				<img src={LogoImg} alt=""/>
				<span>Sh<span>o</span>ps</span>
			</div>
			{/*menu*/}
			<div className="menu">
				{SidebarData.map((item, idx) => (
					<div
						className={selected === idx ? "menuItem active" : "menuItem"}
						key={`sidebar-menu-${idx}`}
						onClick={() => setSelected(idx)}
					>
						<item.icon/>
						<span>{item.heading}</span>
					</div>
				))}
				<div className="menuItem">
					<div>
						<UilSignOutAlt/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
