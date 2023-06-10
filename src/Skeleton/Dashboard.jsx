import {AnimatePresence, motion} from 'framer-motion';
import './Dashboard.css';
import {FaBars, FaChalkboardTeacher, FaHome, FaUsers} from 'react-icons/fa'
import {  Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../pages/Shared/Footer/Footer';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div >
            <div className="main-container mx-0 ">
                <motion.div animate = {{width: isOpen? "200px" : "45px"}} className='sidebar  text-white'>
                    <div className="top_section  pt-5 ">
                        {isOpen && <h1 className='logo1 '>
                            <Link to="/">Kitchen Champ</Link>  </h1>}
                            <div className="bars ">
                                <FaBars onClick={toggle}></FaBars>
                            </div>
                       
                    </div>
                    <section className='routes animate__animated animate__bounceInLeft mt-16'>
                        <NavLink to="allusers" className="link mt-24 ">
                            <div className="icon">
                                <FaUsers></FaUsers>
                                </div>
                                {isOpen && <AnimatePresence>
                                        <motion.div className='link_text '>Manage Users</motion.div>
                                    </AnimatePresence>}
                            
                        </NavLink>
                        <NavLink to="allclass" className="link">
                        <div className="">
                        <FaChalkboardTeacher></FaChalkboardTeacher>
                                </div>
                        {isOpen && <AnimatePresence>
                                        <motion.div className='link_text '>Manage Class</motion.div>
                                    </AnimatePresence>}
                        </NavLink>
                        <NavLink to="/" className="link">
                        <div className="">
                        <FaHome></FaHome>
                                </div>
                        {isOpen && <AnimatePresence>
                                        <motion.div className='link_text '>Home</motion.div>
                                    </AnimatePresence>}

                        </NavLink>
                    </section>
                </motion.div>
                <div>
               
                </div>
                <div className='mt-12' >
                <p className='mx-auto ms-96 ps-40 text-3xl'>Dashboard </p>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;