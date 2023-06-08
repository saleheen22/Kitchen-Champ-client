import {AnimatePresence, motion} from 'framer-motion';
import './AdminDashboard.css';
import {FaBars, FaHome} from 'react-icons/fa'
import {  NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../pages/Shared/Footer/Footer';
const AdminDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div >
            <div className="main-container mx-0 ">
                <motion.div animate = {{width: isOpen? "200px" : "45px"}} className='sidebar  text-white'>
                    <div className="top_section  pt-5">
                        {isOpen && <h1 className='logo1 '>
                            Kitchen Champ  </h1>}
                            <div className="bars ">
                                <FaBars onClick={toggle}></FaBars>
                            </div>
                       
                    </div>
                    <section className='routes'>
                        <NavLink to="/admin/users" className="link mt-12">
                            <div className="icon">
                                <FaHome></FaHome>
                                </div>
                                {isOpen && <AnimatePresence>
                                        <motion.div className='link_text'>Manage Users</motion.div>
                                    </AnimatePresence>}
                            
                        </NavLink>
                        <NavLink to="/admin/class" className="link">
                        <FaHome></FaHome>
                        {isOpen && <AnimatePresence>
                                        <motion.div className='link_text'>Manage Class</motion.div>
                                    </AnimatePresence>}
                        </NavLink>
                        <NavLink to="/"></NavLink>
                    </section>
                </motion.div>
                <div >
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AdminDashboard;