import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import getFirebaseApp from "../../../firebase/firebaseApp/getFirebaseApp";


const RegisterForm = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
    
        const onSubmit = async (event) => {
            event.preventDefault();
    
            const app = getFirebaseApp();
            const auth = getAuth(app);
    
            try {
                const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    
                console.log(userCredentials);
                
            }
            catch (err) {
                console.log('Registration failed');
                console.log(err);
            }
        }
    
        return (
            <div>
                <form onSubmit={onSubmit}>
    
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
    
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            minLength={8}
                        />
                    </div>
    
                    <button type="submit">Register</button>
    
                    <p>
                        Already have an account? <a href="/login">Login</a> here.
                    </p>
    
                </form>
            </div>
    );
}

export default RegisterForm;