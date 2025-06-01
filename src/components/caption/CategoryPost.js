import React, { useState } from 'react';
import './CategoryPost.css';
import { generatePost } from '../../api/generation-post';

function CategoryPost() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Friendly');
  const [listPost, setListContent] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className='body-container-post'>
      <div className="container-item-fb">
        <h1 className="title-fb">Facebook post</h1>

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
      {listPost.length > 0 && <h2 className="caption-title-post">Captions generated for you</h2>}
        {listPost?.map((item) => {
            return (
            <div className="caption-wrapper-post">
              <div className='caption-header-post'>{item.social}</div>
              <p className="caption-content">{item.content}</p>
              <div className="caption-buttons-post">
                <button className="btn-share">Share</button>
                <button className="btn-save">Save</button>
              </div>
            </div>
            )})}
    </div>
  );
}

export default CategoryPost;
