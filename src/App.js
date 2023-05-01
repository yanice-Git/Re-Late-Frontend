import { Routes, Route } from "react-router-dom"
import { Post } from "./components/Post Components/Post"
import { PostProvider } from "./contexts/PostContext"
import { ProfileProvider } from "./contexts/ProfileContext"
import Sidebar from './components/Sidebar';
import { Header } from "./siteTools/header"
import { ProfileList } from "./components/Profile Components/ProfileList";
import { Homepage } from "./pages/homepage"
import {Login} from "./pages/Login"
import './styles.css';



function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">

        <Sidebar />
        <div className="posts">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profiles" element={<ProfileList />} />
            <Route path="/profiles/:id" element={<ProfileProvider> <ProfileList /></ProfileProvider>} />
            <Route path="/posts/:id" element={<PostProvider> <Post /></PostProvider>} />
          </Routes>
        </div>

        <div className="overflowbox" style={{ marginLeft: 'auto', justifyContent: "center" }}>
          <p>Take a look at the post of the week!</p>
          <div className="overflowView" style={{ justifyContent: "center" }}>
            <PostProvider>
              <Post />
            </PostProvider>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App


