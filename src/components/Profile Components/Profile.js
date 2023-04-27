import { getPosts } from "../../services/user"
import { Link } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import './profile-styles.css';

export function Profile() {
    const { loading, error, value: user } = useAsync(getPosts)

    if (loading) return <h1>Loading</h1>
    if (error) return <h1>className="error-msg"</h1>
    return user.map(post => {
        return (
            <h1 className="ForumPost" key={post.id}>
                <Link to={`/user/${post.id}`} > {post.name}</Link>
            </h1 >
        )
    })
}
