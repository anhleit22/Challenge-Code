import { useEffect, useState } from "react";
import { getContentPost } from "../../api/profile";
import { useLogin } from "../../LoginProvider";
import { unSavePost } from "../../api/ideas";

function ProfilePage() {
    const {phoneAPI} = useLogin();
    const [listContent, setListContent] = useState([]);
    const [listPost, setListPost] = useState([]);

    useEffect(() => {
        fetchData();
      }, [phoneAPI])

      const fetchData = async () => {
        if (!phoneAPI) return;
  
        try {
          const data = { phone: phoneAPI };
          const res = await getContentPost(data);
          console.log(res);
          if (res?.status == 200) {
              setListPost(res.data.data.posts);
              setListContent(res.data.data.topics);
          } else {
            console.warn("Failed response:", res);
          }
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
   
    const handleUnSavePost = async (item) => {
        try {
          console.log(item);
          if(item) {
            const res = await unSavePostIdea(item.id);
              fetchData();
          }
        } catch (error) {
          console.log(error);
        }
    }
    
    const unSavePostIdea = async (id) => {
        try {
          const res = await unSavePost(id);
          if (res) {
            return res
          }
        } catch (error) {
          return error
        }
    }
  return (
    <div>
      <h1>Saved Content</h1>
      <div className="wrapper-all-posts">
        <div>
          <h2>Skipli is launching SkipliAI</h2>
          <div>
          <div className="">
          {listPost && listPost.length > 0 ? (
              listPost.map((item, index) => (
                  <div className="caption-item-post" key={index}>
                  <div className='caption-header-post'>{item.social}</div>
                  <p className="caption-content">{item.content}</p>
                  <div className="caption-buttons-post">
                      <button className="btn-share">Share</button>
                      <button onClick={() => handleUnSavePost(item)} className="btn-save">UnSave</button>
                  </div>
                  </div>
              ))
              ) : (
              <p>No posts available.</p>
              )}
          </div>
          </div>
        </div>
        <div>
          <h2>Idea generated by AI 2</h2>
          <div >
          { listContent && listContent.length > 0 ? (
              listContent.map((item, index) => (
                  <div className="caption-item-post" key={index}>
                  <div className='caption-header-post'>{item.data}</div>
                  <p className="caption-content">{item.topic}</p>
                  <div className="caption-buttons-post">
                      <button className="btn-share">Share</button>
                      <button onClick={() => handleUnSavePost(item)} className="btn-save">UnSave</button>
                  </div>
                  </div>
              ))
              ) : (
              <p>No posts available.</p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;