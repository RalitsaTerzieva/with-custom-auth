import styles from './../styles/app.module.css';

export default function ProtectedRoute() {
    return (
        <div className={styles.container}>
            <h1>Protected Route</h1>
            <p>You cannot see me if you are not logged in!</p>
        </div>
    )
}