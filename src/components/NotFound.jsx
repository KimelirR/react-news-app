import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
    <body className="vertical-layout vertical-menu 1-column  bg-gradient-directional-danger blank-page blank-page" data-open="click" data-menu="vertical-menu" data-color="bg-gradient-x-purple-blue" data-col="1-column">
      <div className="vertical-layout vertical-menu 1-column fixed  bg-gradient-directional-danger blank-page blank-page" data-open="click" data-menu="vertical-menu" data-color="bg-gradient-x-purple-blue" data-col="1-column">{ /* BEGIN: Content*/}
        <div className="app-content content">
          <div className="content-wrapper">
            <div className="content-wrapper-before" />
            <div className="content-header row">
            </div>
            <div className="content-body"><section className="flexbox-container bg-hexagons-danger">
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-10 p-0">
                  <div className="card-header bg-transparent border-0">
                    <h2 className="error-code text-center mb-2 white">404</h2>
                    <h3 className="text-uppercase text-center white">Page Not Found !</h3>
                  </div>
                  <div className="card-content">
                    {/* <fieldset className="row py-2">
                      <div className="input-group col-12">
                        <input type="text" className="form-control form-control-xl input-xl border-grey border-lighten-1 box-shadow-4" placeholder="How can we help?" aria-describedby="button-addon2" />
                        <span className="input-group-append" id="button-addon2">
                          <button className="btn btn-lg btn-danger border-grey border-lighten-1 box-shadow-4" type="button"><i className="ft-search " /></button>
                        </span>
                      </div>
                    </fieldset> */}
                    <div className="row py-2 text-center">
                      <div className="col-12">
                        <Link to={'/login'} className="btn btn-white danger box-shadow-4"><i className="ft-home" /> Back to Home</Link>
                      </div>

                    </div>
                  </div>
                  <div className="card-footer bg-transparent">
                    <div className="row">
                      <p className="text-muted text-center col-12 py-1 white">© <span className="year" /> <Link to="#" className="white text-bold-700">RonyRyan </Link>Crafted with <i className="ft-heart white "> </i> </p>

                      <div className="col-12 text-center">
                        <Link to="#" className="font-large-1 white p-2 "><span className="ft-facebook" /></Link>
                        <Link to="#" className="font-large-1 white "><span className="ft-twitter" /></Link>
                        <Link to="#" className="font-large-1 white p-2"><span className="ft-instagram" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
          </div>
        </div>
        { /* END: Content*/}</div>
        </body>
    )
}
