import { getProfiles } from "../../services/profiles"
import { Link } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import './profile-styles.css';

export function ProfileList() {
    const { loading, error, value: user } = useAsync(getProfiles)

    if (loading) return <div className="ball" />
    if (error) return <h1>className="error-msg"</h1>
    return user.map(profile => {
        return (
            <h1 className="ForumPost" key={profile.id}>
                <Link to={`/user/${profile.id}`} > {profile.name}</Link>
            </h1 >
        )
    })
}
