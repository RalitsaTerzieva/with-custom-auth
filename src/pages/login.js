import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './../styles/app.module.css';

export default function Home() {
    const [loginError, setLoginError] = useState(null);

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email'/>

                <label htmlFor='password'>Password</label>
                <input type='password' id='password'/>

                <button type='Submit'>Login</button>

                {loginError && (
                    <div className={styles.formError}>{loginError}</div>
                )}
            </form>
        </div>
    )
}