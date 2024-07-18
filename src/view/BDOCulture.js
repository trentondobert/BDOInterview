import React from 'react';
import "../css/BDOCulture.css"
import CultureList from './CultureList';
import CultureImage from '../Images/values.png';
function BDOCulture() {
	return (    
		<div class="CulturePage">
			<h1>BDO Cultures I align with</h1>
			<div className="sectionDiv">
				<div className="content">
					<CultureList></CultureList>
				</div>
				<div className="image-container">
					<img id="" src={CultureImage} alt="BDO Culture"></img>
				</div>
			</div>
		</div>
	);

}
export default BDOCulture;