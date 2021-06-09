import EditReservationForm from '../Components/Edit-reservation-form/edit-reservation-form';
import Navbar from '../Components/Navbar/navbar';

const EditReservation = ({ loggedInStatus, handleLogout }) => {
    return (
        <div>
            <Navbar active="reservations" loggedInStatus={loggedInStatus} handleLogout={handleLogout} />
            <EditReservationForm loggedInStatus={loggedInStatus} />
        </div>
    )
}

export default EditReservation
