import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//const [luz, setLuz] = useState("");

const Home = () => {
	const [luz, setLuz] = (useState = "");
	return (
		<div className="container d-flex-column align-items-center mt-5 ">
			<div className="semaforo d-flex-column">
				<div
					onClick={setLuz("rojo")}
					className={
						luz == "rojo"
							? "rojo m-2 pt-2" 
							: "rojobrillante m-2 pt-2"
					}></div>
				<div className="naranja m-2"></div>
				<div className="verde m-2"></div>
			</div>
			<div className="row">
				<div className="palo bg-black">
					<p></p>
				</div>
			</div>
		</div>
	);
};

export default Home;
