/*
 * File: src/pages/HomePage.jsx
 * Student's Name: Mo'ath Zaghdad
 * Date: Sep 24, 2024
 */

const HomePage = () => {

  return (
    <div>
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col">

              <div className="text-center text-xxl-start">
                <h1 className="display-6 fw-bolder mb-4"><span className="text-gradient d-inline">Welcome to a space where innovative software solutions meet your business needs, enhancing efficiency and driving growth.</span></h1>
                <div className="fs-5 fw-light text-muted">Specializing in custom software solutions that prioritize efficiency and innovation, the focus is on delivering high-performing digital products through full-stack development and system optimization. By collaborating closely with businesses, solutions are crafted to meet evolving demands, whether enhancing existing systems or developing new ones from the ground up. The goal is to drive success through thoughtful and tailored approaches.</div>
              </div>

            </div>
          </div>
        </div>
      </header>

      <section className="bg-light py-5">
        <div className="container px-md-5 px-2">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-12">
              <div className="text-center my-2">
                <h2 className="display-6 fw-bolder mb-4"><span className="text-gradient">Mission Statement</span></h2>
                <p className="fs-4 text-muted">My mission is to provide robust, scalable, and efficient software solutions that align with business objectives. With a focus on precision, quality, and innovation, I strive to optimize and elevate digital infrastructures.</p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a className="text-gradient" href="https://www.linkedin.com/in/MoathZ"><i className="bi bi-linkedin"></i></a>
                  <a className="text-gradient" href="https://github.com/Moath-Zaghdad"><i className="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
