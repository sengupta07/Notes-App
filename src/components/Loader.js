import React from 'react';
import './Loader.css';
import gsap from 'gsap';
const Loader = () => {
    return (
      <div className="loader-container">
		<div className="loader-body">
			{
			<div class="content">
				<div class="surface">
					<div class="waves"></div>
					<div class="waves"></div>
				</div>
				<div class="loaders">
					<div class="loader"></div>
				</div>
				<div class="loaders">
					<div class="loader shadow"></div>
				</div>
			</div>
        	}
		</div>
      </div>
    );
  } 
  export default Loader;
