import styles from './../styles/app.module.css';
import { useRouter } from 'next/router';
import { useAuth } from './../lib/hooks/auth';

export default function ProtectedRoute() {
    const router = useRouter();
    const { loading, error, loggedIn } = useAuth();

    if(!loading && !loggedIn) {
        router.push('/login')
    }

    return (
        <div className={styles.container}>
            {loading && <p>Loading...</p>}
            {error && <p>An error occured.</p>}
            {loggedIn && (
                <>
                <h1>Protected Route</h1>
                <p>You cannot see me if you are not logged in!</p>
                </>
            )}
        </div>
    )
}