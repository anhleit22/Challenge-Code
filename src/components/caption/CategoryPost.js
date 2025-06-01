import React, { useState } from 'react';
import './CategoryPost.css';
import { generatePost, savePost } from '../../api/generation-post';
import { useLogin } from '../../LoginProvider';

function CategoryPost() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Friendly');
  const [listPost, setListContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useLogin();


  const handleGenerate = async () => {
    if (!topic) return;

    const data = {
      socialNetwork: "Facebook",
      subject: topic,
      tone: tone
    };

    setLoading(true);

    try {
      const res = await generatePost(data);
      if (res) {
        console.log(res.data);
        setListContent(res.data.data)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSavePost = async(post) => {
    if(post){
      let data = {
        ...post,
        id_author: id
      }
      const res = await saveListPost(data);
      if(res){
        alert(res.data.message)
      }
    }
  }
  const saveListPost = async (data) => {
    try {
      const res = await savePost(data);
      if (res) {
        return res
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='body-container-post'>
      <div className="container-item-fb">
        <h2 className="caption-title">Facebook post</h2>

        <label className="label-fb" htmlFor="topic-input">
          What topic do you want a caption for?
        </label>
        <input
          id="topic-input"
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="What topic is your caption about?"
          className="input-fb"
        />

        <label className="label-fb" htmlFor="tone-select">
          What should your caption sound like?
        </label>
        <select
          id="tone-select"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="select-fb"
        >
          <option value="Friendly">Friendly</option>
          <option value="luxury">Luxury</option>
          <option value="relaxed">Relaxed</option>
          <option value="professional">Professional</option>
          <option value="bold">Bold</option>
          <option value="adventurous">Adventurous</option>
          <option value="witty">Witty</option>
          <option value="persuasive">Persuasive</option>
          <option value="empathetic">Empathetic</option>
        </select>

        <button
          onClick={handleGenerate}
          className="button-fb"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Generate caption'}
        </button>
        
      </div>
      {listPost.length > 0 && <div className="header-list-post"><h2>Captions generated for you</h2></div>}
        <div className='caption-wrapper-listpost'>
          {listPost?.map((item) => {
              return (
              <div className="caption-item-post">
                <div className='caption-header-post'>{item.social}</div>
                <p className="caption-content">{item.content}</p>
                <div className="caption-buttons-post">
                  <button className="btn-share">Share</button>
                  <button onClick={()=>handleSavePost(item)} className="btn-save">Save</button>
                </div>
              </div>
              )})}
        </div>
    </div>
  );
}

export default CategoryPost;
