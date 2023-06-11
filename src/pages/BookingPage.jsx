import { useEffect, useState } from 'react'
import '../css/bookingStyle.css'
import {collection, getDocs, addDoc, doc, deleteDoc, updateDoc} from 'firebase/firestore'
import {db} from "../firebase/firebase"

const BookingPage = () => {

  const [users, setUser] = useState([])
  const useCollectionRef = collection(db, 'Reserva')
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [partySize, setPartySize] = useState(0);
  const [hour, setHour] = useState("");
  const [date, setDate] = useState("");

    const createUser = async() => {
      await addDoc(useCollectionRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        partySize: partySize,
        hour: hour,
        date: date});
      getUser();
    }

    const getUser = async() => {
      const data = await getDocs(useCollectionRef)
      setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    useEffect(() => {
      getUser
    }, []);
 
  return (
   <> 
   
<div className="container-sm" id="reservation-form">
  <h1>Table Reservation</h1>
  <form>
  <div className="row g-2">
  <hr className="my-4" />
  <div className="col-md-4">
        <label htmlFor="party-size" className="form-label">Party Size</label>
        <input className="form-control" type="number" id="party-size" name="party-size" min="1" max="8" required
        onChange={(e) => setPartySize(e.target.value)}/>
  </div>
  <div className="col-md-4">
        <label htmlFor="date" className="form-label">Date</label>
        <input type="date" className="form-control" id="date" required
        onChange={(e) => setDate(e.target.value)} />
  </div>
  <div className="col-md-4">
        <label htmlFor="hour" className="form-label">Hour</label>
        <input type="time" className="form-control" id="time" required
        onChange={(e) => setHour(e.target.value)} />
  </div>
  </div>
  <div className="row g-2">
  <hr className="my-4" />
    <div className="col-md-6">
      <div>
        <label className="form-label" for="first-name" >First Name</label>
        <input className="form-control" type="text" id="first-name" name="first-name" placeholder="First Name" required 
        onChange={(e) => setFirstName(e.target.value)}/>
      </div>
    </div>
    <div className="col-md-6">
      <div>
        <label className="form-label" for="last-name" >Last Name</label>
        <input className="form-control" type="text" id="last-name" name="last-name" placeholder="Last Name" required
        onChange={(e) => setLastName(e.target.value)} />
      </div>
    </div>
  </div>
  <div className="row g-2">
    <div className="col-md-6">
        <label className="form-label" for="email" >Email Address</label>
        <input className="form-control" type="email" id="email" name="email" placeholder="email@address.com" required
        onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div className="col-md-6">
        <label className="form-label" for="phone" >Phone Number</label>
        <input className="form-control" type="tel" id="phone" name="phone" placeholder="Phone Number" required/>
    </div>
  </div>
  <div className="row g-2">
  <hr className="my-4" />
  <div className="col-md">
        <label className="form-label" for="special-request" >Special Request</label>
        <input className="form-control" type="text" id="special-request" name="special-request" placeholder="Special-request"/>
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
    <button type="submit" class="btn btn-outline-success btn-lg" onClick={createUser}>🗓️ Book Now</button>
  </div>
  </form>

</div>
   </>
  )
}

export default BookingPage