import {useState} from 'react';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faBell, faChartBar, faPenToSquare, faComments, faCirclePlay, faCommentDots} from '@fortawesome/free-regular-svg-icons'

function AccordionMenu() {

	const [tabState, setTabState] = useState(0);

	const [subTabState, setSubTabState] = useState(1);

	const ChangeTab = (index) => {
		setTabState(index);
		setSubTabState(1);
	} 

	const ChangeSubTab = (index) => {
		setSubTabState(index);
	}

  	return (
    	<div className="accordionMenu">

			<li className={tabState===0 ? "tab-active" : null}>
				<button className="accordionMenu-notifications" onClick={() => ChangeTab(0)}>
					<Fa className="icon" icon={faBell}></Fa>
					notifications
					<span>29</span>
				</button>
			</li>	
			
			
			<li className={tabState===1 ? "tab-active" : null}>
				<button className="tab" onClick={() => ChangeTab(1)}> <Fa className="icon" icon={faChartBar}></Fa> summary <span/> </button>
				<ul>
					<button className={subTabState===1 ? "subtab subtab-active" : "subtab"} onClick={() => ChangeSubTab(1)}>statistics</button>
					<button className={subTabState===2 ? "subtab subtab-active" : "subtab"} onClick={() => ChangeSubTab(2)}>profit</button>
				</ul>
			</li>
			<li className={tabState===2 ? "tab-active" : null}>
				<button className="tab" onClick={() => ChangeTab(2)}> <Fa className="icon" icon={faPenToSquare}></Fa> publish <span/> </button>
				<ul>
					<button className={subTabState===1 ? "subtab subtab-active" : "subtab"} onClick={() => ChangeSubTab(1)}>compose</button>
					<button className={subTabState===2 ? "subtab subtab-active" : "subtab"} onClick={() => ChangeSubTab(2)}>feed</button>
				</ul>
			</li>
			<li className={tabState===3 ? "tab-active" : null}>
				<button className="tab" onClick={() => ChangeTab(3)}> <Fa className="icon" icon={faComments}></Fa> enagage <span/> </button>
				<ul>
					<button className={subTabState===1 ? "subtab subtab-active" : "subtab"} onClick={() => ChangeSubTab(1)}>share</button>
				</ul>
			</li>
			<li className={tabState===4 ? "tab-active" : null}>
				<button className="tab" onClick={() => ChangeTab(4)}> <Fa className="icon" icon={faCirclePlay}></Fa> listen <span/> </button>
				<ul>
					<button className={subTabState===1 ? "subtab subtab-active" : "subtab"} onClick={() => ChangeSubTab(1)}>music</button>
					<button className={subTabState===2 ? "subtab subtab-active" : "subtab"} onClick={() => ChangeSubTab(2)}>audio book</button>
				</ul>
			</li>
			<li className={tabState===5 ? "tab-active" : null}>
				<button className="tab" onClick={() => ChangeTab(5)}> <Fa className="icon" icon={faCommentDots}></Fa> report <span/> </button>
				<ul>
					<button className={subTabState===1 ? "subtab subtab-active" : "subtab"} onClick={() => ChangeSubTab(1)}>contact</button>
				</ul>
			</li>
    	</div>
  	);
}

export default AccordionMenu;