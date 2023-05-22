import '../css/bookingStyle.css'

const BookingPage = () => {
  return (
   <> 
   
<div className="container-sm" id="reservation-form">
  <h1>Table Reservation</h1>
  <form>
  <div className="row g-2">
    <div className="col-md-6">
      <div>
        <label className="form-label" for="first-name" >First Name</label>
        <input className="form-control" type="text" id="first-name" name="first-name" placeholder="First Name" required />
      </div>
    </div>
    <div className="col-md-6">
      <div>
        <label className="form-label" for="last-name" >Last Name</label>
        <input className="form-control" type="text" id="last-name" name="last-name" placeholder="Last Name" required />
      </div>
    </div>
  </div>
  <div className="row g-2">
    <div className="col-md-6">
        <label className="form-label" for="email" >Email Address</label>
        <input className="form-control" type="email" id="email" name="email" placeholder="email@address.com" required/>
    </div>
    <div className="col-md-6">
        <label className="form-label" for="phone" >Phone Number</label>
        <input className="form-control" type="tel" id="phone" name="phone" placeholder="Phone Number" required/>
    </div>
  </div>
  <div className="row g-2">
  <div className="col-md-4">
        <label htmlFor="party-size" className="form-label">Party Size</label>
        <input className="form-control" type="number" id="party-size" name="party-size" min="1" max="8" required/>
  </div>
  <div className="col-md-4">
        <label htmlFor="date" className="form-label">Date</label>
        <input type="date" className="form-control" id="date" required />
  </div>
  <div className="col-md-4">
        <label htmlFor="hour" className="form-label">Hour</label>
        <input type="time" className="form-control" id="time" required />
  </div>

  </div>
  <div className="row g-2">
  <div className="col-md-6">
        <label className="form-label" for="special-request" >Special Request</label>
        <input className="form-control" type="text" id="special-request" name="special-request" placeholder="special-request"/>
  </div>
  </div>
  <hr className="my-4" />
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="same-address" />
      <label className="form-check-label" htmlFor="same-address">Sign me up to receive dining offers and news by email</label>
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="save-info" />
      <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
    </div>
    <hr className="my-4" />
  <div className="col-md-6">
    <button type="submit" class="btn btn-outline-success btn-lg">🗓️ Book Now</button>
  </div>
  </form>

</div>
   </>
  )
}

export default BookingPage