import {motion} from 'framer-motion';
import './AdminDashboard.css';
import {FaBars, FaHome} from 'react-icons/fa'
import {  NavLink } from 'react-router-dom';
const AdminDashboard = () => {
    return (
        <div className='text-white'>
            <div className="main-container mx-0 ">
                <motion.div animate = {{width: "200px"}} className='sidebar'>
                    <div className="top_section flex align-items-center justify-evenly pt-5">
                        <h1 className='logo1 '>
                            Kitchen Champ  </h1>
                            <div className="bars ">
                                <FaBars></FaBars>
                            </div>
                       
                    </div>
                    <section className='routes'>
                        <NavLink to="/" className="link mt-12">
                            <div className="icon">
                                <FaHome></FaHome>
                                </div>
                                <div className='link_text'>Manage Users</div>
                            
                        </NavLink>
                        <NavLink to="/" className="link">
                        <FaHome></FaHome>
                                <div className='link_text'>Manage Classes</div>
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