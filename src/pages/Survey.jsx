import React from "react";
// import { useState } from "react";
import "../styles/Survey.css";
export function Survey() {
	// const [isToggled, setIsToggled] = useState(false);

	// function handleClick() {
	// 	setIsToggled(!isToggled);
	// }
	// var progress = document.getElementsByClassName("progress-bar");
	// progress.array.forEach((element) => {
	// 	console.log(element);
	// });
	return (
		<>
			<div className="progress-bar"></div>
			<div className="main">
				<div className="container container-1">
					<div className="survey-number">1 of 8</div>
					<div className="survey-header">Basic Info</div>
					<div className="survey-inputs">
						<input
							type="text"
							name="Name"
							id="name"
							placeholder="Your Name"
							className="que1"
						/>
						<label for="name"></label>
						<br />
						<input
							type="tel"
							name="Phone"
							id="phone"
							placeholder="Your Phone Name"
							className="que1"
						/>
						<label for="name"></label>
						<br />
						<input
							type="email"
							name="Email"
							id="email"
							placeholder="Your Email"
							className="que1"
						/>
						<label for="name"></label>
					</div>
					<div className="survey-buttons">
						<div className="next">
							<button>Next</button>
						</div>
					</div>
				</div>
				<div className="container container-2">
					<div className="survey-number">2 of 8</div>
					<div className="survey-header">Field Chosen</div>
					<div className="survey-inputs">
						<input
							type="radio"
							id="Science"
							name="branch"
							value="Science"
						/>
						<label for="Science">
							<div className="survey-options"> Science</div>
						</label>
						<br />
						<input
							type="radio"
							id="Commerce"
							name="branch"
							value="Commerce"
						/>
						<label for="Commerce">
							<div className="survey-options"> Commerce</div>
						</label>
						<br />
						<input
							type="radio"
							id="Arts"
							name="branch"
							value="Arts"
						/>
						<label for="Arts">
							<div className="survey-options"> Arts</div>
						</label>
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button>Previous</button>
						</div>
						<div className="next">
							<button>Next</button>
						</div>
					</div>
				</div>
				<div className="container container-3">
					<div className="survey-number">3 of 8</div>
					<div className="survey-header">
						How satisfied were you with your studies currently?
					</div>
					<div className="survey-inputs">
						<input
							type="radio"
							id="highly"
							name="satisfaction-studies"
							value="highly"
						/>
						<label for="highly">
							<div className="survey-options">
								{" "}
								Highly satisfied
							</div>
						</label>
						<br />
						<input
							type="radio"
							id="satisfied"
							name="satisfaction-studies"
							value="satisfied"
						/>
						<label for="satisfied">
							<div className="survey-options"> Satisfied</div>
						</label>
						<br />
						<input
							type="radio"
							id="not-so"
							name="satisfaction-studies"
							value="not-so"
						/>
						<label for="not-so">
							<div className="survey-options">
								{" "}
								Not so satisfied
							</div>
						</label>
						<br />
						<input
							type="radio"
							id="not-at-all"
							name="satisfaction-studies"
							value="not-at-all"
						/>
						<label for="not-at-all">
							<div className="survey-options">
								{" "}
								Not satisfied at all
							</div>
						</label>
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button>Previous</button>
						</div>
						<div className="next">
							<button>Next</button>
						</div>
					</div>
				</div>
				<div className="container container-4">
					<div className="survey-number">4 of 8</div>
					<div className="survey-header">
						What subject seems to be the most troublesome for you?
					</div>
					<div className="survey-inputs">
						<input
							type="radio"
							id="maths"
							name="subject"
							value="maths"
						/>
						<label for="maths">
							<div className="survey-options"> Maths</div>
						</label>
						<br />
						<input
							type="radio"
							id="physics"
							name="subject"
							value="physics"
						/>
						<label for="physics">
							<div className="survey-options"> Physics</div>
						</label>
						<br />
						<input
							type="radio"
							id="chem"
							name="subject"
							value="chem"
						/>
						<label for="chem">
							<div className="survey-options"> Chemistry</div>
						</label>
						<br />
						<input
							type="radio"
							id="bio"
							name="subject"
							value="bio"
						/>
						<label for="bio">
							<div className="survey-options"> Biology</div>
						</label>
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button>Previous</button>
						</div>
						<div className="next">
							<button>Next</button>
						</div>
					</div>
				</div>
				<div className="container container-5">
					<div className="survey-number">5 of 8</div>
					<div className="survey-header">
						Have you looked out for help regarding the subject that
						you feel is tough for you?
					</div>
					<div className="survey-inputs">
						<input
							type="radio"
							id="help-yes"
							name="help"
							value="help-yes"
						/>
						<label for="help-yes">
							<div className="survey-options"> Yes</div>
						</label>
						<br />
						<input
							type="radio"
							id="help-no"
							name="help"
							value="help-no"
						/>
						<label for="help-no">
							<div className="survey-options"> No</div>
						</label>
						<br />
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button>Previous</button>
						</div>
						<div className="next">
							<button>Next</button>
						</div>
					</div>
				</div>
				<div className="container container-6">
					<div className="survey-number">6 of 8</div>
					<div className="survey-header">
						Which entrance examination are you preparing to appear
						for?
					</div>
					<div className="survey-inputs">
						<input
							type="radio"
							id="neet"
							name="exam"
							value="neet"
						/>
						<label for="neet">
							<div className="survey-options"> Neet</div>
						</label>
						<br />
						<input
							type="radio"
							id="mh-cet"
							name="exam"
							value="mh-cet"
						/>
						<label for="mh-cet">
							<div className="survey-options"> MH-CET</div>
						</label>
						<br />
						<input type="radio" id="jee" name="exam" value="jee" />
						<label for="jee">
							<div className="survey-options"> JEE</div>
						</label>
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button>Previous</button>
						</div>
						<div className="next">
							<button>Next</button>
						</div>
					</div>
				</div>
				<div className="container container-7">
					<div className="survey-number">7 of 8</div>
					<div className="survey-header">
						So far how good is your preparation for upcoming hurdles
						(examination)?
					</div>
					<div className="survey-inputs">
						<input
							type="radio"
							id="excellent"
							name="self-rate"
							value="excellent"
						/>
						<label for="excellent">
							<div className="survey-options"> Excellent</div>
						</label>
						<br />
						<input
							type="radio"
							id="good"
							name="self-rate"
							value="good"
						/>
						<label for="good">
							<div className="survey-options"> Good</div>
						</label>
						<br />
						<input
							type="radio"
							id="average"
							name="self-rate"
							value="average"
						/>
						<label for="average">
							<div className="survey-options"> Average</div>
						</label>
						<br />
						<input
							type="radio"
							id="below-average"
							name="self-rate"
							value="below-average"
						/>
						<label for="below-average">
							<div className="survey-options"> Below Average</div>
						</label>
						<br />
						<input
							type="radio"
							id="Poor"
							name="self-rate"
							value="Poor"
						/>
						<label for="Poor">
							<div className="survey-options"> Poor</div>
						</label>
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button>Previous</button>
						</div>
						<div className="next">
							<button>Next</button>
						</div>
					</div>
				</div>
				<div className="container container-8">
					<div className="survey-number">8 of 8</div>
					<div className="survey-header">
						Have you ever experienced AVLS(audio visual learning
						system)?
					</div>
					<div className="survey-inputs">
						<input
							type="radio"
							id="avls-yes"
							name="avls"
							value="avls-yes"
						/>
						<label for="avls-yes">
							<div className="survey-options"> Yes</div>
						</label>
						<br />
						<input
							type="radio"
							id="avls-no"
							name="avls"
							value="avls-no"
						/>
						<label for="avls-no">
							<div className="survey-options"> No</div>
						</label>
						<br />
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button>Previous</button>
						</div>
						<div className="next">
							<button>Next</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
