import { Post } from "../components/Post Components/Post"
import { PostList } from "../components/Post Components/PostLists";
import { PostProvider } from "../contexts/PostContext";

export function Homepage() {
    return (

        [<div className="PageTag"><welcome>Welcome to the Re-late, the social media platform connecting student to student</welcome></div>,
        <h2>Recent Posts:</h2>,
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '40px',
                width: '250px'
            }}>
                <PostList />
            </div>

        </div>]
    )

}