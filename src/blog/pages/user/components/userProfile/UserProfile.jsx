import getFirebaseApp from "../../../../firebase/firebaseApp/getFirebaseApp";
import { getAuth } from "firebase/auth";

const app = getFirebaseApp();
const auth = getAuth(app);

const UserProfile = () => {

    return (
        <div>
            <h1>User Profile</h1>

            <button type="button" onClick={ () => auth.signOut()}>Logout</button>
        </div>
    );
}

export default UserProfile;