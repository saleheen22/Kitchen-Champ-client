
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div className="mt-12">
                   <p className="text-3xl">KITCHEN <br />
                   CHAMP
                   </p>

                </div>
                <div>
                    <span className="footer-title">Courses</span>
                    <a className="link link-hover">Dessert</a>
                    <a className="link link-hover">Basic Cooking</a>
                    <a className="link link-hover">Biryani</a>
                    <a className="link link-hover">Burger</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">@ CopyRight</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;