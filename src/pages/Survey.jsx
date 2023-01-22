import React from "react";
import { useState } from "react";
import "../styles/Survey.css";
export function Survey() {
	// const [isToggled, setIsToggled] = useState(false);
	const [num, setNum] = useState(1);
	const [progress, setProgress] = useState(0);
	const [name, setName] = useState("");
	const [review, setReview] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [survey, setSurvey] = useState("");
	const [studyStais, setStudyStais] = useState("");
	const [subject, setSubject] = useState("");
	const [help, setHelp] = useState("");
	const [exam, setExam] = useState("");
	const [rate, setRate] = useState("");
	const [avls, setAvls] = useState("");
	const [avlsHelp, setAvlsHelp] = useState("");
	const [failNAme, setFailName] = useState(false);
	const [failEmail, setFailEmail] = useState(false);
	const [failPhone, setFailPhone] = useState(false);

	function isEmail(email) {
		if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			return true;
		}
		return false;
	}
	function isPhone(phone) {
		if (
			/^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
				phone
			)
		) {
			return true;
		}
		return false;
	}
	// function handleClick() {
	// 	setIsToggled(!isToggled);
	// }
	// var progress = document.getElementsByClassName("progress-bar");
	// progress.array.htmlForEach((element) => {
	// 	console.log(element);
	// });
	return (
		<>
			<div
				className="progress-bar"
				style={{
					width: `${progress}%`,
					background: "#69e6a6",
					height: "10px",
				}}
			></div>
			<div className="main">
				<div
					className={
						num === 1 ? "container container-1" : "container "
					}
				>
					<div className="survey-number">1 of 10</div>
					<div className="survey-header">Basic Info</div>
					<div className="survey-inputs">
						<input
							className={failNAme ? "fail que1" : "que1"}
							type="text"
							name="Name"
							id="name"
							placeholder={
								failNAme ? "Enter your Name" : "Your Name"
							}
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<label htmlFor="name"></label>
						<br />
						<input
							type="tel"
							name="Phone"
							id="phone"
							placeholder={
								failPhone
									? "Enter your Phone Number"
									: "Your Phone Number"
							}
							className={failPhone ? "fail que1" : "que1"}
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
						<label htmlFor="name"></label>
						<br />
						<input
							type="email"
							name="Email"
							id="email"
							placeholder={
								failEmail ? "Enter your Email" : "Your Email"
							}
							className={failEmail ? "fail que1" : "que1"}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<label htmlFor="name"></label>
					</div>
					<div className="survey-buttons">
						<div className="next">
							<button
								onClick={() => {
									console.log(isPhone(phone));
									if (
										name !== "" &&
										isEmail(email) &&
										isPhone(phone)
									) {
										setNum(num + 1);
										setProgress((100 / 10) * 1);
									} else {
										if (name === "") {
											setFailName(true);
										}
										if (!isEmail(email)) {
											setFailEmail(true);
										}
										if (!isPhone(phone)) {
											setFailPhone(true);
										}
									}
								}}
							>
								Next
							</button>
						</div>
					</div>
				</div>
				<div
					className={
						num === 2 ? "container container-2" : "container "
					}
				>
					<div className="survey-number">2 of 10</div>
					<div className="survey-header">Field Chosen</div>
					<div className="survey-inputs">
						<input
							type="radio"
							id="Science"
							name="branch"
							value="Science"
							onChange={(e) => setSurvey(e.target.value)}
						/>
						<label htmlFor="Science">
							<div className="survey-options"> Science</div>
						</label>
						<br />
						<input
							type="radio"
							id="Commerce"
							name="branch"
							value="Commerce"
							onChange={(e) => setSurvey(e.target.value)}
						/>
						<label htmlFor="Commerce">
							<div className="survey-options"> Commerce</div>
						</label>
						<br />
						<input
							type="radio"
							id="Arts"
							name="branch"
							value="Arts"
							onChange={(e) => setSurvey(e.target.value)}
						/>
						<label htmlFor="Arts">
							<div className="survey-options"> Arts</div>
						</label>
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button
								onClick={() => {
									setNum(num - 1);
									setProgress(0);
								}}
							>
								Previous
							</button>
						</div>
						<div className="next">
							<button
								onClick={() => {
									if (survey === "") {
									} else {
										setNum(num + 1);
										setProgress((100 / 10) * 2);
									}
								}}
							>
								Next
							</button>
						</div>
					</div>
				</div>
				<div
					className={
						num === 3 ? "container container-3" : "container "
					}
				>
					<div className="survey-number">3 of 10</div>
					<div className="survey-header">
						How satisfied were you with your studies currently?
					</div>
					<div className="survey-inputs">
						<input
							type="radio"
							id="highly"
							name="satisfaction-studies"
							value="highly"
							onChange={(e) => setStudyStais(e.target.value)}
						/>
						<label htmlFor="highly">
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
							onChange={(e) => setStudyStais(e.target.value)}
						/>
						<label htmlFor="satisfied">
							<div className="survey-options"> Satisfied</div>
						</label>
						<br />
						<input
							type="radio"
							id="not-so"
							name="satisfaction-studies"
							value="not-so"
							onChange={(e) => setStudyStais(e.target.value)}
						/>
						<label htmlFor="not-so">
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
							onChange={(e) => setStudyStais(e.target.value)}
						/>
						<label htmlFor="not-at-all">
							<div className="survey-options">
								{" "}
								Not satisfied at all
							</div>
						</label>
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button
								onClick={() => {
									setNum(num - 1);
									setProgress(100 / 10);
								}}
							>
								Previous
							</button>
						</div>
						<div className="next">
							<button
								onClick={() => {
									if (studyStais === "") {
									} else {
										setNum(num + 1);
										setProgress((100 / 10) * 3);
									}
								}}
							>
								Next
							</button>
						</div>
					</div>
				</div>
				<div
					className={
						num === 4 ? "container container-4" : "container "
					}
				>
					<div className="survey-number">4 of 10</div>
					<div className="survey-header">
						What subject seems to be the most troublesome for you?
					</div>
					<div className="survey-inputs">
						<input
							type="radio"
							id="maths"
							name="subject"
							value="maths"
							onChange={(e) => setSubject(e.target.value)}
						/>
						<label htmlFor="maths">
							<div className="survey-options"> Maths</div>
						</label>
						<br />
						<input
							type="radio"
							id="physics"
							name="subject"
							value="physics"
							onChange={(e) => setSubject(e.target.value)}
						/>
						<label htmlFor="physics">
							<div className="survey-options"> Physics</div>
						</label>
						<br />
						<input
							type="radio"
							id="chem"
							name="subject"
							value="chem"
							onChange={(e) => setSubject(e.target.value)}
						/>
						<label htmlFor="chem">
							<div className="survey-options"> Chemistry</div>
						</label>
						<br />
						<input
							type="radio"
							id="bio"
							name="subject"
							value="bio"
							onChange={(e) => setSubject(e.target.value)}
						/>
						<label htmlFor="bio">
							<div className="survey-options"> Biology</div>
						</label>
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button
								onClick={() => {
									setNum(num - 1);
									setProgress((100 / 10) * 2);
								}}
							>
								Previous
							</button>
						</div>
						<div className="next">
							<button
								onClick={() => {
									if (subject !== "") {
										setNum(num + 1);
										setProgress((100 / 10) * 4);
									}
								}}
							>
								Next
							</button>
						</div>
					</div>
				</div>
				<div
					className={
						num === 5 ? "container container-5" : "container "
					}
				>
					<div className="survey-number">5 of 10</div>
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
							onChange={(e) => setHelp(e.target.value)}
						/>
						<label htmlFor="help-yes">
							<div className="survey-options"> Yes</div>
						</label>
						<br />
						<input
							type="radio"
							id="help-no"
							name="help"
							value="help-no"
							onChange={(e) => setHelp(e.target.value)}
						/>
						<label htmlFor="help-no">
							<div className="survey-options"> No</div>
						</label>
						<br />
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button
								onClick={() => {
									setNum(num - 1);
									setProgress((100 / 10) * 3);
								}}
							>
								Previous
							</button>
						</div>
						<div className="next">
							<button
								onClick={() => {
									if (help !== "") {
										setNum(num + 1);
										setProgress((100 / 10) * 5);
									}
								}}
							>
								Next
							</button>
						</div>
					</div>
				</div>
				<div
					className={
						num === 6 ? "container container-6" : "container "
					}
				>
					<div className="survey-number">6 of 10</div>
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
							onChange={(e) => setExam(e.target.value)}
						/>
						<label htmlFor="neet">
							<div className="survey-options"> Neet</div>
						</label>
						<br />
						<input
							type="radio"
							id="mh-cet"
							name="exam"
							value="mh-cet"
							onChange={(e) => setExam(e.target.value)}
						/>
						<label htmlFor="mh-cet">
							<div className="survey-options"> MH-CET</div>
						</label>
						<br />
						<input
							type="radio"
							id="jee"
							name="exam"
							value="jee"
							onChange={(e) => setExam(e.target.value)}
						/>
						<label htmlFor="jee">
							<div className="survey-options"> JEE</div>
						</label>
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button
								onClick={() => {
									setNum(num - 1);
									setProgress((100 / 10) * 4);
								}}
							>
								Previous
							</button>
						</div>
						<div className="next">
							<button
								onClick={() => {
									if (exam !== "") {
										setNum(num + 1);
										setProgress((100 / 10) * 6);
									}
								}}
							>
								Next
							</button>
						</div>
					</div>
				</div>
				<div
					className={
						num === 7 ? "container container-7" : "container "
					}
				>
					<div className="survey-number">7 of 10</div>
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
							onChange={(e) => setRate(e.target.value)}
						/>
						<label htmlFor="excellent">
							<div className="survey-options"> Excellent</div>
						</label>
						<br />
						<input
							type="radio"
							id="good"
							name="self-rate"
							value="good"
							onChange={(e) => setRate(e.target.value)}
						/>
						<label htmlFor="good">
							<div className="survey-options"> Good</div>
						</label>
						<br />
						<input
							type="radio"
							id="average"
							name="self-rate"
							value="average"
							onChange={(e) => setRate(e.target.value)}
						/>
						<label htmlFor="average">
							<div className="survey-options"> Average</div>
						</label>
						<br />
						<input
							type="radio"
							id="below-average"
							name="self-rate"
							value="below-average"
							onChange={(e) => setRate(e.target.value)}
						/>
						<label htmlFor="below-average">
							<div className="survey-options"> Below Average</div>
						</label>
						<br />
						<input
							type="radio"
							id="Poor"
							name="self-rate"
							value="Poor"
							onChange={(e) => setRate(e.target.value)}
						/>
						<label htmlFor="Poor">
							<div className="survey-options"> Poor</div>
						</label>
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button
								onClick={() => {
									setNum(num - 1);
									setProgress((100 / 10) * 5);
								}}
							>
								Previous
							</button>
						</div>
						<div className="next">
							<button
								onClick={() => {
									if (rate !== "") {
										setNum(num + 1);
										setProgress((100 / 10) * 7);
									}
								}}
							>
								Next
							</button>
						</div>
					</div>
				</div>
				<div
					className={
						num === 8 ? "container container-8" : "container"
					}
				>
					<div className="survey-number">8 of 10</div>
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
							onChange={(e) => setAvls(e.target.value)}
						/>
						<label htmlFor="avls-yes">
							<div className="survey-options"> Yes</div>
						</label>
						<br />
						<input
							type="radio"
							id="avls-no"
							name="avls"
							value="avls-no"
							onChange={(e) => setAvls(e.target.value)}
						/>
						<label htmlFor="avls-no">
							<div className="survey-options"> No</div>
						</label>
						<br />
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button
								onClick={() => {
									setNum(num - 1);
									setProgress((100 / 10) * 6);
								}}
							>
								Previous
							</button>
						</div>
						<div className="next">
							<button
								onClick={() => {
									if (avls !== "") {
										setNum(num + 1);
										setProgress((100 / 10) * 8);
									}
								}}
							>
								Next
							</button>
						</div>
					</div>
				</div>
				<div
					className={
						num === 9 ? "container container-9" : "container "
					}
				>
					<div className="survey-number">9 of 10</div>
					<div className="survey-header">
						What are your views on the audio visual learning? Will
						it make a positive difference in your learning method?
					</div>
					<div className="survey-inputs">
						<input
							type="radio"
							id="avls-help-yes"
							name="help"
							value="avls-help-yes"
							onChange={(e) => setAvlsHelp(e.target.value)}
						/>
						<label htmlFor="avls-help-yes">
							<div className="survey-options"> Yes</div>
						</label>
						<br />
						<input
							type="radio"
							id="avls-help-no"
							name="help"
							value="avls-help-no"
							onChange={(e) => setAvlsHelp(e.target.value)}
						/>
						<label htmlFor="avls-help-no">
							<div className="survey-options"> No</div>
						</label>
						<br />
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button
								onClick={() => {
									setNum(num - 1);
									setProgress((100 / 10) * 7);
								}}
							>
								Previous
							</button>
						</div>
						<div className="next">
							<button
								onClick={() => {
									if (avlsHelp !== "") {
										setNum(num + 1);
										setProgress((100 / 10) * 9);
									}
								}}
							>
								Next
							</button>
						</div>
					</div>
				</div>
				<div
					className={
						num === 10 ? "container container-10" : "container"
					}
				>
					<div className="survey-number">10 of 10</div>
					<div className="survey-header">
					What are your opinions as a student, that would lead to betterment in the learning pattern
					</div>
					<div className="survey-inputs">
						<input type="textarea" name="review" placeholder="Your message here"/>
					</div>
					<div className="survey-buttons">
						<div className="previous">
							<button
								onClick={() => {
									setNum(num - 1);
									setProgress((100 / 10) * 8);
								}}
							>
								Previous
							</button>
						</div>
						<div className="next">
							<button
								onClick={() => {
									if (review !== "") {
										setNum(num + 1);
										setProgress((100 / 10) * 10);
									}
								}}
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
