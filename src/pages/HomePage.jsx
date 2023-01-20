import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";
import "../styles/homepage.css";
import img1 from "../assests/homepage/img1.webp";
import img2 from "../assests/homepage/img2.svg";
import img_desktop from "../assests/homepage/grid-img-desktop.webp";
import img_mobile from "../assests/homepage/grid-img-mobile.webp";
import img1_mobile from "../assests/homepage/img1-mobile.webp";
import img_tab2 from "../assests/homepage/grid-img-tab2.webp";
import img_tab from "../assests/homepage/grid-img-tab.webp";
import img1_tab1 from "../assests/homepage/img1-tab1.webp";
import img4 from "../assests/homepage/img4.svg";
import img6 from "../assests/homepage/img6.svg";
import feather from "../assests/homepage/feather.svg";
import eye from "../assests/homepage/eye.svg";
import sun from "../assests/homepage/sun.svg";
export function HomePage() {
	return (
		<div className="homepage">
			<div className="Hero">
				<Navbar />
				<div className="hero-content">
					<div className="hero-bold">
						Experience the difference with us
					</div>
					<div className="hero-para">
						This survey is conducted by GET to know and acknowledge
						the students struggling with their curriculum.
						<br className="Remove_when_small" />
						You are kindly requested to be a part of this survey and
						help GET with its campaign.
					</div>
					<Link className="link" to="/survey">
						<button className="hero-button">Take Survey</button>
					</Link>
				</div>
			</div>
			<div className="home-grid-section">
				<img src={img_desktop} className="img-desktop" alt="" />
				<img
					src={img_mobile}
					className="img-mobile first-img"
					style={{ display: "none" }}
					alt=""
				/>
				<img
					src={img_tab}
					className="img-tab1"
					style={{ display: "none" }}
					alt=""
				/>
				<img
					src={img_tab2}
					className="img-tab2"
					style={{ display: "none" }}
					alt=""
				/>
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
						<img src={img2} alt="" />
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
						<img src={img4} alt="" />
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
						<img src={img6} alt="" />
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
					<div className="home-feature-img1">
						<img src={img1} className="img-desktop" alt="" />
						<img
							src={img1_mobile}
							className="img-mobile first-img"
							style={{ display: "none" }}
							alt=""
						/>
						<img
							src={img1_tab1}
							className="img-tab1 sec-img"
							style={{ display: "none" }}
							alt=""
						/>
						<img
							src={img1_tab1}
							className="img-tab2 sec-img"
							style={{ display: "none" }}
							alt=""
						/>
					</div>
					<div className="home-feature1-paraxyz">
						Every student's
						<br /> Education companion
					</div>
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
					<Link className="link" to="/survey">
						<button>Start Now</button>
					</Link>
				</div>
			</div>
			<footer>All rights reserved @Gyaanam2023</footer>
		</div>
	);
}
