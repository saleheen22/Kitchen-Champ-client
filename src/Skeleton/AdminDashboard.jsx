import {motion} from 'framer-motion';
import './AdminDashboard.css';
import {FaBars, FaHome} from 'react-icons/fa'
import {  NavLink } from 'react-router-dom';
import { useState } from 'react';
const AdminDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='text-white'>
            <div className="main-container mx-0 ">
                <motion.div animate = {{width: isOpen? "200px" : "45px"}} className='sidebar'>
                    <div className="top_section  pt-5">
                        {isOpen && <h1 className='logo1 '>
                            Kitchen Champ  </h1>}
                            <div className="bars ">
                                <FaBars onClick={toggle}></FaBars>
                            </div>
                       
                    </div>
                    <section className='routes'>
                        <NavLink to="/" className="link mt-12">
                            <div className="icon">
                                <FaHome></FaHome>
                                </div>
                                {isOpen && <div className='link_text'>Manage Users</div>}
                            
                        </NavLink>
                        <NavLink to="/" className="link">
                        <FaHome></FaHome>
                                {isOpen && <div className='link_text'>Manage Classes</div>}
                        </NavLink>
                        <NavLink to="/"></NavLink>
                    </section>
                </motion.div>
                <h2>hello</h2>
            </div>
        </div>
    );
};

export default AdminDashboard;