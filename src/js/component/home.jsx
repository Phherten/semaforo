import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//const [luz, setLuz] = useState("");

const Home = () => {
	const [luz, setLuz] = useState("");
	return (
		<div className="container d-flex-column align-items-center mt-5 ">
			<div className="semaforo d-flex-column">
				<div
					className={
						luz == "rojo"
							? "rojobrillante m-2 pt-2"
							: "rojo m-2 pt-2"
					}
					onClick={() => {
						setLuz("rojo");
					}}></div>

				<div
					className={
						luz == "naranja"
							? "naranjabrillante m-2 pt-2"
							: "naranja m-2 pt-2"
					}
					onClick={() => {
						setLuz("naranja");
					}}></div>
				<div
					className={
						luz == "verde"
							? "verdebrillante m-2 pt-2"
							: "verde m-2 pt-2"
					}
					onClick={() => {
						setLuz("verde");
					}}></div>
			</div>
			<div className="row">
				<div className="palo bg-black"></div>
			</div>
		</div>
	);
};

export default Home;
