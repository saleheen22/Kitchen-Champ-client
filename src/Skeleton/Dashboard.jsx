import { AnimatePresence, motion } from 'framer-motion';
import './Dashboard.css';
import { FaBars, FaCartArrowDown, FaChalkboardTeacher, FaHome, FaLaptop, FaLaptopHouse, FaMoneyCheckAlt, FaPlus, FaRegEdit, FaSchool, FaUsers } from 'react-icons/fa'

import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useStudent from '../hooks/useStudent';


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInst] = useInstructor();
    const [isStudent] = useStudent();
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div >
            <div className="main-container mx-0 ">
                <motion.div animate={{ width: isOpen ? "200px" : "45px" }} className='sidebar  text-white'>
                    <div className="top_section  pt-5 ">
                        {isOpen && <h1 className='logo1 '>
                            <Link to="/">Kitchen Champ</Link>  </h1>}
                        <div className="bars ">
                            <FaBars onClick={toggle}></FaBars>
                        </div>

                    </div>
                    <section className='routes animate__animated animate__bounceInLeft mt-16'>

                        {
                            isAdmin && <>

                                <NavLink to="allusers" className="link mt-24 my-2">
                                    <div className="icon text-2xl block float-left">
                                        <FaUsers></FaUsers>
                                    </div>
                                    {isOpen && <AnimatePresence>
                                        <motion.div className='link_text font-medium '>Manage Users</motion.div>
                                    </AnimatePresence>}

                                </NavLink>


                                <NavLink to="allclass" className="link mb-2">
                                    <div className="icon text-2xl block float-left">
                                        <FaRegEdit></FaRegEdit>
                                    </div>
                                    {isOpen && <AnimatePresence>
                                        <motion.div className='link_text '>Manage Class</motion.div>
                                    </AnimatePresence>}
                                </NavLink>
                            </>
                        }
                        {
                            isStudent && <>
                                <NavLink to="student/selectedclass
" className="link mt-24 my-2">
                                    <div className="icon text-2xl block float-left">
                                        <FaLaptopHouse></FaLaptopHouse>
                                    </div>
                                    {isOpen && <AnimatePresence>
                                        <motion.div className='link_text font-medium '>My Enrolled Classes</motion.div>
                                    </AnimatePresence>}

                                </NavLink>


                                <NavLink to="student/enrolledclass" className="link mb-2">
                                    <div className="icon text-2xl block float-left">
                                        <FaCartArrowDown></FaCartArrowDown>
                                    </div>
                                    {isOpen && <AnimatePresence>
                                        <motion.div className='link_text '>My Selected Classes</motion.div>
                                    </AnimatePresence>}
                                </NavLink>


                                <NavLink to="student/payment" className="link mb-2">
                                    <div className="icon text-2xl block float-left">
                                        <FaMoneyCheckAlt></FaMoneyCheckAlt>
                                    </div>
                                    {isOpen && <AnimatePresence>
                                        <motion.div className='link_text '>Payment</motion.div>
                                    </AnimatePresence>}
                                </NavLink>
                            </>
                        }


                        {
                            isInst && <>
                                <NavLink to="instructor/addclass" className="link mt-24 my-2">
                                    <div className="icon text-2xl block float-left">
                                        <FaPlus></FaPlus>
                                    </div>
                                    {isOpen && <AnimatePresence>
                                        <motion.div className='link_text font-medium '>Add a Class</motion.div>
                                    </AnimatePresence>}

                                </NavLink>


                                <NavLink to="instructor/myclass" className="link mb-2">
                                    <div className="icon text-2xl block float-left">
                                        <FaSchool></FaSchool>
                                    </div>
                                    {isOpen && <AnimatePresence>
                                        <motion.div className='link_text '>My Classes</motion.div>
                                    </AnimatePresence>}
                                </NavLink>
                            </>
                        }

                        <NavLink to="/classes" className="link mb-2 ">
                            <div className="icon text-2xl block float-left">
                                <FaLaptop></FaLaptop>

                            </div>
                            {isOpen && <AnimatePresence>
                                <motion.div className='link_text font-medium flex-1'>See Class</motion.div>
                            </AnimatePresence>}

                        </NavLink>
                        <NavLink to="/instructors" className="link mb-2 ">
                            <div className="icon text-2xl block float-left">

                                <FaChalkboardTeacher></FaChalkboardTeacher>
                            </div>
                            {isOpen && <AnimatePresence>
                                <motion.div className='link_text font-medium flex-1'>Instructor</motion.div>
                            </AnimatePresence>}

                        </NavLink>
                        <NavLink to="/" className="link mb-2">
                            <div className="text-2xl block float-left">
                                <FaHome></FaHome>
                            </div>
                            {isOpen && <AnimatePresence>
                                <motion.div className='link_text font-medium flex-1'>Home</motion.div>
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