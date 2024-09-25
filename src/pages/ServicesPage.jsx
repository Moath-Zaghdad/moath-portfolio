
const ServicesPage = () => {
  return (
    <div className="container">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Services</span></h1>
      </div>

      <div className="d-flex justify-content-center align-items-stretch align-self-stretch flex-wrap" style={{gap: '12px'}}>

        <div className="card" style={{maxWidth: '450px'}}>
          <div className="card-body">
            <h2 className="card-title">Web Development</h2>
            <p className="card-text">Full-stack development of high-performing, scalable web applications tailored to business needs.</p>
          </div>
        </div>

        <div className="card" style={{maxWidth: '450px'}}>
          <div className="card-body">
            <h2 className="card-title">API Integration & Optimization</h2>
            <p className="card-text">Seamless integration of APIs with a focus on optimizing performance and efficiency.</p>
          </div>
        </div>

        <div className="card" style={{maxWidth: '450px'}}>
          <div className="card-body">
            <h2 className="card-title">Software Development</h2>
            <p className="card-text">Custom software solutions for businesses, including desktop applications and scripts.</p>
          </div>
        </div>

        <div className="card" style={{maxWidth: '450px'}}>
          <div className="card-body">
            <h2 className="card-title">Bug Fixes & System Optimization</h2>
            <p className="card-text">Diagnosing and resolving performance issues to enhance system efficiency and user experience.</p>
          </div>
        </div>


      </div>

    </div>
  );
}

export default ServicesPage;
