import Header from "./components/header";
import Footer from "./components/footer.jsx";
import Sidebar from "./components/sidebar.jsx";
import CreatePost from "./components/createPost.jsx";
import PostList from "./components/postList.jsx";
import { useState } from "react";
import css from "./socialMediaApp.module.css";
const SocialMediaApp = () => {
  const [selectedTab, setSelectedTab] = useState("Create Post");

  return (
    <div className={css["app-container"]}>
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Sidebar>
      <div className={css.contents1}>
        <Header></Header>
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
        <Footer></Footer>
      </div>
    </div>
  );
};
export default SocialMediaApp;
