import { NavLink } from "react-router-dom";


const HomePage = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="./public/burrito.jpeg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Best Food in Town
            </h1>
            <p className="lead">
                Our menu is full of deliciuos options and fresh ingredients

            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Menu
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
<div className="container col-xl-10 col-xxl-8 px-4 py-5">
  <div className="row align-items-center g-lg-5 py-5">
    <div className="col-lg-7 text-center text-lg-start">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Subscribe</h1>
      <p className="col-lg-10 fs-4">Subscribe and be notified about our discounts and offers.</p>
    </div>
    <div className="col-md-10 mx-auto col-lg-5">
      <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
      <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="name" />
          <label htmlFor="floatingInput">Name</label>
        </div>        
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Subscribe</button>
        <hr className="my-4" />
        <small className="text-body-secondary"></small>
      </form>
    </div>
  </div>
</div>

    </>
  );
}

export default HomePage