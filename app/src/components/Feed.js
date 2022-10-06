import Moment from 'react-moment';
import Data from '../data.json';

import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXmarkCircle, faTrashCan, faHeart, faComment, faEye } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faCheck, faShare } from '@fortawesome/free-solid-svg-icons';

function Feed() {

	const ReplaceImage = (error) => {
        error.target.src = "/images/no-post-image.png"; 
    }

	const GetStatusColor = (status) => {

		var color;
		switch(status) {
			case 0:
			  	color = "--status-yellow";
			  	break;
			case 1:
				color = "--status-green";
				break;
			case 2:
				color = "--status-blue";
				break;
			case 3:
				color = "--status-grey";
				break;
			case 4:
				color = "--status-red";
				break;
		}
		return "var(" + color + ")";
	}

	const GetChannel = (channel) => {
		var channelIcon;
		switch(channel) {
			case "facebook":
				channelIcon = faFacebook;
				break;
			case "twitter":
				channelIcon = faTwitter;
				break;
			case "instagrambusiness":
				channelIcon = faInstagram;
				break;
		}

		return (
			<Fa className="icon" icon={channelIcon}></Fa>
		)

	}

	const feed = Object.entries(Data.posts_by_date).map(section => {
		const sectionDate = section[0];

		const cards = section[1].map((card, index) => {

			return (
				<div className="card" key={index}>
					<div className="statusBar" style={{backgroundColor: GetStatusColor(card.status)}}>
						{GetChannel(card.account.channel)}
					</div>

					<div className="cardContent">
						<div className="cardHeader">
							<div className="icons">  
								{card.status==0 ? <Fa icon={faCheck}></Fa> : null}
								{card.status==1 ? <Fa icon={faXmarkCircle}></Fa> : null}
								<Fa icon={faTrashCan}></Fa>
								<Fa icon={faEllipsis}></Fa>
							</div>
							<h3><Moment format="DD MMMM YYYY - HH:mm">{card.published_at}</Moment></h3>
						</div>
						
						<p>{card.entry.message}</p>
						<img src={card.entry.image[0]} onError={ReplaceImage}/>
						<div className="stats">
							<Fa icon={faHeart}></Fa>
							<h4>0</h4>
							<Fa icon={faComment}></Fa>
							<h4>0</h4>
							<Fa icon={faShare}></Fa>
							<h4>0</h4>
							<Fa icon={faEye}></Fa>
							<h4>0</h4>
						</div>
					</div>

				</div>
			)
		}) 

		return (
			<div className="section" key={sectionDate}>
				<h2><Moment format="DD MMMM YYYY">{sectionDate}</Moment></h2>
				<div className="cards">
					{cards}
				</div>
				
			</div>
		)
	})


  	return (
    	<div className="feed">
			<div className="profile">
				<img src="/images/pp.png"/>
			</div>
			<div className="legend">
				<p>published</p>
				<p>scheduled</p>
				<p>need approval</p>
				<p>error</p>
				<p>notes</p>
			</div>
			<div className="content">
				{feed}
			</div>

    	</div>
  	);
}

export default Feed;