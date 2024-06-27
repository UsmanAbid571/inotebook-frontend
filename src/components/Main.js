import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <div>

            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>iNotebook - Your Notes, Organized</h1>
                            <p>Take control of your notes and stay organized with iNotebook.</p>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Get Started</Link>
                        </div>
                        <div className="col-md-6">
                            <img src="" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="features my-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-4">
                            <div className="feature">
                                <i className="fas fa-lock"></i>
                                <h3>Secure Notes</h3>
                                <p>Your notes are safe and secure with iNotebook.</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-4">
                            <div className="feature">
                                <i className="fas fa-tag"></i>
                                <h3>Organize Notes</h3>
                                <p>Keep your notes organized with tags and categories.</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-4">
                            <div className="feature">
                                <i className="fas fa-mobile-alt"></i>
                                <h3>Access Anywhere</h3>
                                <p>Access your notes from anywhere, on any device.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="cta mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 my-2">
                            <h2>Get Started with iNotebook Today!</h2>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container my-5">
                <div className=" row gap-5">
                    <div className="testimonial col-md-3 mx-lg-4">
                        <p>"Effortlessly Organized!<br/>
                            "iNotebook has transformed the way I manage my notes. With its intuitive interface and seamless syncing across devices, my notes are always at my fingertips, perfectly organized."</p>
                        <p className="testimonial-author"></p>
                    </div>

                    <div className="testimonial col-md-3 mx-lg-4">
                        <p>"A Game Changer!<br/>
                            "I've tried many note-taking apps, but iNotebook stands out. Its simplicity and robust features make it a game changer for anyone serious about staying organized and productive."</p>
                        <p className="testimonial-author"></p>
                    </div>

                    <div className="testimonial col-md-3 mx-lg-4">
                        <p>"Perfect for Students!<br/>
                            "As a student, iNotebook has been a lifesaver. From organizing lecture notes to creating study guides, it's my go-to tool. Plus, the ability to add multimedia and share notes easily is a huge bonus."</p>
                        <p className="testimonial-author"></p>
                    </div>

              
                </div>
            </section>



        </div>
    )
}

export default Main
