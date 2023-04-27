import { Routes, Route } from "react-router-dom"
import { Post } from "./components/Post"
import { PostList } from "./components/PostLists"
import { PostProvider } from "./contexts/PostContext"
import { ProfileProvider } from "./contexts/ProfileContext"
import Sidebar from './components/Sidebar';
import { Header } from "./siteTools/header"
import { ProfileList } from "./components/Profile Components/ProfileList";

import './styles.css';



function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">

        <Sidebar />
        <div className="posts">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/profiles" element={<ProfileList />} />
            <Route path="/profiles/:id" element={<ProfileProvider> <ProfileList /></ProfileProvider>} />
            <Route path="/posts/:id" element={<PostProvider> <Post /></PostProvider>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App