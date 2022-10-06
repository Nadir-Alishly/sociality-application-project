import {useState} from 'react';

function SwitchingTab() {

	const [brandState, SetBrandState] = useState(1);

	const ChangeBrand = (index) => {
		SetBrandState(index);
	}

  	return (
    	<div className="switchingTab">
			<div className={brandState===1 ? "brand brand-active" : "brand"} onClick={() => ChangeBrand(1)}>
				<img alt="brand logo" src="/images/logo1.png"></img>
			</div>
			<div className={brandState===2 ? "brand brand-active" : "brand"} onClick={() => ChangeBrand(2)}>
				<img alt="brand logo" src="/images/logo2.png"></img>
				<span><p>99</p></span>
			</div>
			<div className={brandState===3 ? "brand brand-active" : "brand"} onClick={() => ChangeBrand(3)}>
				<img alt="brand logo" src="/images/logo3.png"></img>
			</div>
			<div className={brandState===4 ? "brand brand-active" : "brand"} onClick={() => ChangeBrand(4)}>
				<img alt="brand logo" src="/images/logo4.png"></img>
			</div>
			<div className={brandState===5 ? "brand brand-active" : "brand"} onClick={() => ChangeBrand(5)}>
				<img alt="brand logo" src="/images/logo5.png"></img>
			</div>
			<div className={brandState===6 ? "brand brand-active" : "brand"} onClick={() => ChangeBrand(6)}>
				<img alt="brand logo" src="/images/logo6.png"></img>
			</div>
    	</div>
  	);
}

export default SwitchingTab;