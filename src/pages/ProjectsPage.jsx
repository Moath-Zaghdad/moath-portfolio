/*
 * File: src/pages/ProjectsPage.jsx
 * Student's Name: Mo'ath Zaghdad
 * Date: Sep 24, 2024
 */

import svgEditImg from '../assets/SvgEdit.png'
import uuidImg from '../assets/uuid-backfill.png'

const ProjectsPage = () => {

  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
      </div>
      <div className="row justify-content-center px-sm-5 my-5">
        <div className="col">

          <section>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">SVG-Edit</div>
                      <div className="mb-2">
                        <div className="small fw-bolder"><a href="https://github.com/SVG-Edit/svgedit">GitHub.com/SVG-Edit/svgedit</a></div>
                        <div className="small text-muted"><img src={svgEditImg} alt="SVG-Edit Project Image" width="32" height="32" /></div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">Open-source vector graphics editor with web-based tools.</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7"><div>Contributed bug fixes to this open-source vector graphics editor, improving functionality and stability.</div></div>
                </div>
              </div>
            </div>

            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">Django-NativeShortUUIDField</div>
                      <div className="mb-2">
                        <div className="small fw-bolder"><a href="https://github.com/foundertherapy/django-nativeshortuuidfield">GitHub.com/foundertherapy/django-nativeshortuuidfield</a></div>
                        <div className="small text-muted">
                          <img src={uuidImg} alt="UUID Image" width="32" height="32" />
                        </div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">Django extension for handling and optimizing UUID fields.</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7"><div>Implemented new features and resolved bugs for this Django extension, optimizing its handling of UUID fields and enhancing its overall usability.</div></div>
                </div>
              </div>
            </div>

            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">Packman</div>
                      <div className="mb-2">
                        <div className="small fw-bolder"><a href="https://github.com/Moath-Zaghdad/Packman">GitHub.com/Moath-Zaghdad/Packman</a></div>
                        <div className="small text-muted"><img src="https://raw.githubusercontent.com/Moath-Zaghdad/Packman/refs/heads/master/pictures/Winner.png" alt="Packman Image" width="32" height="32" /></div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">Classic game developed in C.</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7"><div>Developed the entire game from scratch in C, including gameplay mechanics and overall structure, showcasing full project ownership and technical proficiency.</div></div>
                </div>
              </div>
            </div>


          </section>

        </div>
      </div>
    </div>
  );
}



export default ProjectsPage;
