import { getPosts } from "../../services/posts"
import { Link } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import './profile-styles.css';

export function PostList() {
    const { loading, error, value: posts } = useAsync(getPosts)

    if (loading) return <div className="ball" />
    if (error) return <h1>className="error-msg"</h1>
    return posts.map(post => {
        return (
            <h1 className="ForumPost" key={post.id}>
                <Link to={`/posts/${post.id}`} > {post.title}</Link>
            </h1 >

        )
    })
}


//{ `/posts/${4c07822f - 9a77 - 48a1 - 9c9b - c095b86d0ac7 } `}
