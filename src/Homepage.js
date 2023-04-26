import { Routes, Route } from "react-router-dom"
import { Post } from "./components/Post"
import { PostList } from "./components/PostLists"
import { PostProvider } from "./contexts/PostContext"
import Sidebar from './components/Sidebar';
import { Header } from "./siteTools/header"

import './styles.css';



function Homepage() {
  return (
    <div className="App">
      <Header />
      <div className="container">

        <Sidebar />
        <div className="posts">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route
              path="/posts/:id"
              element={
                <PostProvider>
                  <Post />
                </PostProvider>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Homepage