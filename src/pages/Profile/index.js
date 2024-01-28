import React, { useEffect } from 'react';
import './Profile.scss';
import 'boxicons/css/boxicons.min.css';
import { Typed } from 'react-typed';
import blackLeft3Img from '~/assets/images/black-left3.png';
import travelImg from '~/assets/images/travel.png';
import prj4Img from '~/assets/images/prj-4.png';
import prj5Img from '~/assets/images/prj-5.png';
import blackRight2Img from '~/assets/images/black-right2.png';

function Profile() {
    const styles = {
        home: {
            position: 'relative',
            width: '100%',
            justifyContent: 'space-between',
            height: '100vh',
            background: `url(${blackRight2Img}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            padding: '70px 10% 0',
        },
    };

    useEffect(() => {
        const typed = new Typed('.text', {
            strings: ['Front-end Developer', 'React Native Developer', 'Bridge System Engineer'],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1300,
            loop: true,
        });

        // Optional: You can destroy the Typed instance when the component unmounts
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="wrapper">
            {/* Header Navbar */}
            {/* <header className="header">
                <a href="" className="logo">
                    Portfolio.
                </a>
                <nav className="navbar">
                    <a href="#home" style={{ '--i': 1 }} className="active">
                        Home
                    </a>
                    <a href="#about" style={{ '--i': 2 }}>
                        About
                    </a>
                    <a href="#skills" style={{ '--i': 3 }}>
                        Skills
                    </a>
                    <a href="#services" style={{ '--i': 4 }}>
                        Services
                    </a>
                    <a href="#projects" style={{ '--i': 4 }}>
                        Projects
                    </a>
                    <a href="#contact" style={{ '--i': 5 }}>
                        Contact
                    </a>
                </nav>
            </header> */}

            {/* Home */}
            <section className="home" id="home" style={styles.home}>
                <div className="home-content">
                    <h3>Hello, It's me</h3>
                    <h1>Duy Luan</h1>
                    <h3>
                        And I'm a <span className="text"></span>
                    </h3>
                    <p>
                        I'm a Web Developer with extensive experience for over 2 years,
                        <br />
                        expertise is to create and website design, front-end design, and many more...
                    </p>
                    <div className="home-sci">
                        <a href="https://www.facebook.com/pdl2705" style={{ '--i': 7 }}>
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/xmasterno1" style={{ '--i': 8 }}>
                            <i className="bx bxl-instagram"></i>
                        </a>
                        <a href="https://github.com/luanphungduy" style={{ '--i': 9 }}>
                            <i className="bx bxl-github" style={{ color: '#00eeff' }}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/luanphung2705" style={{ '--i': 10 }}>
                            <i className="bx bxl-linkedin"></i>
                        </a>
                    </div>
                    <a href="#" className="btn-box">
                        More About Me
                    </a>
                </div>
                <span className="home-imgHover"></span>
            </section>

            {/* About me */}
            <section className="about" id="about">
                <div className="about-img">
                    <img src={blackLeft3Img} alt="" />
                </div>
                <div className="about-text">
                    <h2>
                        About <span>Me</span>
                    </h2>
                    <h4>Full Stack Developer</h4>
                    <p>
                        I have worked for more than 3 years in software development as Moblie development (React-Native,
                        Android) and Front-End development(ReactJs, Angular, VueJs). In some projects, I work as
                        Back-End development using Java, Spring boot and hibernate. I'm a huge fan of React-Native, I
                        knew it and have worked since second year of university (2022). Now, I wanna focus on
                        React-Native so I looking for a React-Native job, a work environment to expand my knowledge and
                        my English communication skills.
                    </p>
                    <a href="#" className="btn-box">
                        More About Me
                    </a>
                </div>
            </section>

            {/* Skills */}
            <section id="skills">
                <h1 className="sub-title">
                    My <span>Skills</span>
                </h1>
                <div className="container-skills">
                    <div className="container1">
                        <h1 className="heading1">Technical Skills</h1>
                        <div className="technical-bars">
                            <div className="bar">
                                <i className="bx bxl-html5" style={{ color: '#c95d2e' }}></i>
                                <div className="info">
                                    <span>HTML</span>
                                </div>
                                <div className="progress-line html">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <i className="bx bxl-css3" style={{ color: '#147bbc' }}></i>
                                <div className="info">
                                    <span>CSS</span>
                                </div>
                                <div className="progress-line css">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <i className="bx bxl-javascript" style={{ color: '#b0bc1e' }}></i>
                                <div className="info">
                                    <span>Javascript</span>
                                </div>
                                <div className="progress-line javascript">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <i className="bx bxl-python" style={{ color: '#c32ec9' }}></i>
                                <div className="info">
                                    <span>Python</span>
                                </div>
                                <div className="progress-line python">
                                    <span></span>
                                </div>
                            </div>
                            <div className="bar">
                                <i className="bx bxl-react" style={{ color: '#69bcbc' }}></i>
                                <div className="info">
                                    <span>React</span>
                                </div>
                                <div className="progress-line react">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container1">
                        <h1 className="heading1">Professional Skills</h1>
                        <div className="radial-bars">
                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">90%</div>
                                <div className="text">Creativity</div>
                            </div>
                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">65%</div>
                                <div className="text">Communication</div>
                            </div>
                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-3" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">75%</div>
                                <div className="text">Problem Solving</div>
                            </div>
                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-4" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">85%</div>
                                <div className="text">Teamworking</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services">
                <div className="services">
                    <div className="container">
                        <h1 className="sub-title">
                            My <span>Services</span>
                        </h1>
                        <div className="services-list">
                            <div>
                                <i className="bx bx-code" style={{ color: '#00eeff' }}></i>
                                <h2>Full-stack development</h2>
                                <p>
                                    I'm a Full Stack Developer specialized in crafting tailored web applications. I
                                    excel in both Front-End and Back-End development to ensure a seamless user
                                    experience. Let's collaborate and bring your ideas to life. I'm a Full Stack
                                    Developer specialized in crafting tailored web applications. I excel in both
                                    Front-End and Back-End development to ensure a seamless user experience. Let's
                                    collaborate and bring your ideas to life.
                                </p>
                                <a href="#" className="read">
                                    Learn more
                                </a>
                            </div>
                            <div>
                                <i className="bx bx-crop" style={{ color: '#00eeff' }}></i>
                                <h2>UI/UX Design</h2>
                                <p>
                                    I specialize in UI/UX design, creating captivating digital experiences that resonate
                                    with users. Let's collaborate to bring your visions to life and deliver designs that
                                    engage and impress. I specialize in UI/UX design, creating captivating digital
                                    experiences that resonate with users. Let's collaborate to bring your visions to
                                    life and deliver designs that engage and impress.
                                </p>
                                <a href="#" className="read">
                                    Learn more
                                </a>
                            </div>
                            <div>
                                <i className="bx bxl-apple" style={{ color: '#00eeff' }}></i>
                                <h2>Mobile App Development</h2>
                                <p>
                                    I'm a React Native Developer, specializing in creating powerful and seamless mobile
                                    apps. Let's collaborate to bring your app ideas to life and provide users with
                                    outstanding mobile experiences. I'm a React Native Developer, specializing in
                                    creating powerful and seamless mobile apps. Let's collaborate to bring your app
                                    ideas to life and provide users with outstanding mobile experiences.
                                </p>
                                <a href="#" className="read">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project */}
            <section id="projects">
                <div className="portfolio">
                    <div className="main-text" id="project">
                        <h2>
                            Latest <span>Project</span>
                        </h2>

                        <div className="portfolio-content">
                            <div className="row">
                                <img src={prj5Img} alt="" />
                                <div className="layer">
                                    <h5>SPOTLIRA</h5>
                                    <p>
                                        With a polished UI/UX, my e-wallet app harmonizes aesthetics and unique
                                        functionality. From wireframes to user testing, each element is optimized for
                                        intuitive use. The innovative interface makes a profound impact on users and
                                        partners alike.
                                    </p>
                                    <a href="#">
                                        <i className="bx bx-link-external" style={{ color: 'aliceblue' }}></i>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <img src={travelImg} alt="" />
                                <div className="layer">
                                    <h5>XPLORE</h5>
                                    <p>
                                        Discover a seamless way to book your travel accommodations with our newly
                                        launched website. Browse, compare, and effortlessly reserve rooms for your next
                                        adventure. Simplify your travel planning and elevate your journey with our
                                        user-friendly platform designed to make booking accommodations a breeze.
                                    </p>
                                    <a href="#">
                                        <i className="bx bx-link-external" style={{ color: 'aliceblue' }}></i>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <img src={prj4Img} alt="" />
                                <div className="layer">
                                    <h5>EVENT VENUE</h5>
                                    <p>
                                        The Event Venue app transforms event planning. Explore an array of venues,
                                        compare options, and secure bookings seamlessly. Elevate your event experience
                                        with our intuitive interface, making planning memorable events smoother than
                                        ever.
                                    </p>
                                    <a href="#">
                                        <i className="bx bx-link-external" style={{ color: 'aliceblue' }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="contact" id="contact">
                <div className="contact-text">
                    <h2>
                        Contact <span>Me</span>
                    </h2>
                    <h4>Let's work together</h4>
                    <p>
                        Discover a world of tailored experiences awaiting you. Join us and unlock exceptional services
                        catered just for you. Your journey with us starts now.
                    </p>
                    <div className="contact-list">
                        <ul>
                            <li>
                                <i className="bx bxs-send"></i>luanphungduy@gmail.com
                            </li>
                            <li>
                                <i className="bx bxs-phone"></i>036 303 0729
                            </li>
                        </ul>
                    </div>
                    <div className="contact-icons">
                        <a href="https://www.facebook.com/pdl2705">
                            <i className="bx bxl-facebook-circle" style={{ color: '#00eeff' }}></i>
                        </a>
                        <a href="https://www.instagram.com/xmasterno1">
                            <i className="bx bxl-instagram" style={{ color: '#00eeff' }}></i>
                        </a>
                        <a href="https://web.whatsapp.com">
                            <i className="bx bxl-whatsapp" style={{ color: '#00eeff' }}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/luanphung2705">
                            <i className="bx bxl-linkedin" style={{ color: '#00eeff' }}></i>
                        </a>
                    </div>
                </div>

                <div className="contact-form">
                    <form action="">
                        <input type="text" placeholder="Enter your name" required />
                        <input type="text" placeholder="Enter your email" required />
                        <input type="text" placeholder="Enter your subject" />
                        <textarea name="" id="" cols="40" rows="10" placeholder="Enter your message"></textarea>
                        <input type="submit" value="SUBMIT" className="send" />
                    </form>
                </div>
            </section>

            {/* Footer */}
            <div className="last-text">
                <p>
                    Developed with <i className="bx bxs-heart" style={{ color: '#ff0409' }}></i> by Duy Luan Dep Trai ©
                    2023
                </p>
            </div>
            <a href="#" className="top">
                <i className="bx bx-up-arrow-alt"></i>
            </a>
        </div>
    );
}

export default Profile;
