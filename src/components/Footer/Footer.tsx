const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content p-10 font-montserrat">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Listings</a>
        <a className="link link-hover">Property Management</a>
        <a className="link link-hover">Property Valuation</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>

        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">
              Subscribe to our newsletter to get our latest news.
            </span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
