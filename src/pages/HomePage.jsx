import React from "react";
import {link} from "react-router-dom";
import { Navbar } from "../components/navbar";
import "../styles/homepage.css";
import img1 from "../assests/homepage/img1.jpeg";
import img2 from "../assests/homepage/img2.svg";
import img3 from "../assests/homepage/img3.jpeg";
import img4 from "../assests/homepage/img4.svg";
import img5 from "../assests/homepage/img5.jpeg";
import img6 from "../assests/homepage/img6.svg";
import feather from "../assests/homepage/feather.svg";
import eye from "../assests/homepage/eye.svg";
import sun from "../assests/homepage/sun.svg";
export function HomePage() {
	return (
		<>
			<div className="Hero">
				<Navbar />
				<div className="hero-content">
					<div className="hero-bold">
						Experience the difference with us
					</div>
					<div className="hero-para">
						This survey is conducted by GET to know and acknowledge
						the students struggling with their curriculum.
						<br />
						You are kindly requested to be a part of this survey and
						help GET with its campaign.
					</div>
					<button className="hero-button">Take Survey</button>
				</div>
			</div>
			<div className="home-grid-section">
				<div className="item1 item">
					<img src={img1} alt="" />
				</div>
				<div className="item2 item">
					<img src={img3} alt="" />
				</div>
				<div className="item3 item">
					<img src={img2} alt="" />
				</div>
				<div className="item4 item">
					<img src={img4} alt="" />
				</div>
				<div className="item5 item">
					<img src={img5} alt="" />
				</div>
			</div>
			<div className="home-center-content">
				<div className="home-center-p1">Our vision</div>
				<div className="home-center-bold">Connecting with Students</div>
				<div className="home-center-p2">
					We understand that studying can be a challenging task for
					students, and we want to help. That's why we're conducting a
					survey to understand the difficulties and hardships that
					students face when it comes to their studies.
					<br />
					<br /> By participating in this survey, you'll be helping us
					improve our platform to better serve you and other students
					like you.
				</div>
			</div>
			<div className="home-services-content">
				<div className="home-services-header">
					<div className="home-services-p1">Our values</div>
					<div className="home-services-bold">
						Why Gyaanam Educare Tutorials?
					</div>
					<div className="home-services-p2">
						Be a part of this survey and help us provide better
						education for all.
					</div>
				</div>
				<div className="home-services">
					<div className="home-service1 home-service-common">
						<img src={img2} height="150px" alt="" />
						<div className="home-services-content-body home-services-content-common-body">
							<div className="home-services-body-headers">
								Accessible to all
							</div>
							<div className="home-services-body-para">
								Gyaanam Educare Tutorials learning system is
								designed to make learning easy and accessible
								for all students.
							</div>
						</div>
					</div>
					<div className="home-service2 home-service-common">
						<img src={img4} height="150px" alt="" />
						<div className="home-services-content-body home-services-content-common-body">
							<div className="home-services-body-headers">
								Student-friendly
							</div>
							<div className="home-services-body-para">
								We have a dedicated team of educators who are
								constantly working to improve our platform and
								make it more student-friendly.
							</div>
						</div>
					</div>
					<div className="home-service3 home-service-common">
						<img src={img6} height="150px" alt="" />
						<div className="home-services-content-body home-services-content-common-body">
							<div className="home-services-body-headers">
								Better support
							</div>
							<div className="home-services-body-para">
								You will be playing a vital role in helping us
								understand the challenges that students face and
								how we can better support you.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="home-features">
				<div className="home-feature1 features">
					<div className="home-feature1-content">
						<div className="home-feature1-para">
							Every student's
							<br /> Education companion
						</div>
						<div className="home-feature1-points">
							<ul>
								<li>
									<img src={feather} alt="" />
									<div className="home-feature1-paragr">
										Understanding the problem
									</div>
								</li>
								<li>
									<img src={eye} alt="" />
									<div className="home-feature1-paragr">
										Unlocking their potential
									</div>
								</li>
								<li>
									<img src={sun} alt="" />
									<div className="home-feature1-paragr">
										Unfold your future
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="home-feature-img1"></div>
				</div>
				{/* <div className="home-feature2 features">
					<div className="home-feature2-content">
						<div className="home-feature2-para">
							Every student's <br/>Education companion
							<div className="home-feature2-points">
								<ul>
									<li>
										<img src={feather} alt="" />
									</li>
									<li>
										<img src={eye} alt="" />
									</li>
									<li>
										<img src={sun} alt="" />
									</li>
								</ul>
							</div>
						</div>
						<div className="home-feature-img2"></div>
					</div>
				</div> */}
			</div>
			<div className="home-survey">
				Take Survey CTA
				<div className="home-survey-button">
					<button>Start now</button>
				</div>
			</div>
			<footer>
			All rights reserved @Gyaanam2023
			</footer>
		</>
	);
}
