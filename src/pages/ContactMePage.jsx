
const ContactMePage = () => {

  return (
    <div className="container">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Concat Me</span></h1>
      </div>
      <div className="row justify-content-center px-5 my-5">

        <div className="col-lg-8">
          <p> If you'd like to reach out, the best way to contact me is through LinkedIn. Feel free to connect with me directly there for any inquiries or opportunities. </p>
          <a href="https://www.linkedin.com/in/MoathZ" className="btn btn-primary mb-3">Connect on LinkedIn</a>
          <p> Alternatively, you can use the form below to send a direct message. </p>
        </div>

        <div className="col-lg-8">
          <div className="card border-0 rounded-3 shadow-lg">
            <div className="card-body p-4">
              <div className="text-center">
                <div className="h1 fw-light">Contact Form</div>

              </div>

              <form id="contactForm" action="/">

                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Name" required />
                  <label htmlFor="name">Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" required />
                  <label htmlFor="emailAddress">Email Address</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea className="form-control" id="message" type="text" placeholder="Message" style={{ height: '10rem' }} required></textarea>
                  <label htmlFor="message">Message</label>
                </div>

                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
export default ContactMePage;
