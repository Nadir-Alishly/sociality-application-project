import SwitchingTab from './SwitchingTab.js';
import AccordionMenu from './AccordionMenu.js';

function Sidebar() {
  	return (
    	<div className="sidebar">
			<div className='sidebarLogo'>
				<img alt="logo" src="/images/logo.png"></img>
			</div>
			<SwitchingTab/>
			<AccordionMenu/>
    	</div>
  	);
}

export default Sidebar;