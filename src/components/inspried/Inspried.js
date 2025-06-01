import React, { useState } from 'react';
import './Inspired.css';
import { generateIdeas, generateListIdeasPost } from '../../api/ideas';

function GetInspired() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [listIdeas, setListIdeas] = useState([]); 
  const [selectedIdeas, setSelectedIdeas] = useState();
  const [listPost, setListPost] = useState([]);

  const handleGenerate = async () => {
    if (topic.trim()) {
      setLoading(true);
      try {
        let data = { topic };
        const res = await getListIdeals(data);
        if(res){
            if (res.status == 200) {
                setListIdeas(res.data.data);
            } else {
                alert(res.data.message);
            }
        }
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a topic');
    }
  };

  const getListIdeals = async (data) => {
    try {
      const res = await generateIdeas(data);
      if(res){
          return res;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectIdeas = (item) => {
    if(item) {
      setSelectedIdeas(item);
      console.log(selectedIdeas);
    }
  }

  const handleGenerateIdeas = async (item) => {
    if (item) {
      setLoading(true);
      try {
        let data = { idea: item.title_topic };
        const res = await generationListIdeals(data);
        if(res){
            if (res.status == 200) {
                setListPost(res.data.data); 
            }
        }
      }catch(error){
        console.log(error);
      }
    }
  }
  const generationListIdeals = async (data) => {
    try {
      const res = await generateListIdeasPost(data);
      if(res){
          return res;
      } 
    }catch (error) {
      console.log(error);
    }
  }

  const handleSavePost = async (item) => {
        console.log(item);
  }

  return (
    <div className="get-inspired-container">
    {selectedIdeas ? (
        <div className='select-option-idea'>
        <h2 className='label-ideas'>Your Idea</h2>
        <div className="card-ideas">
            {selectedIdeas.title_topic}
        </div>
        <div className='generate-button-container'><button className="generate-button" onClick={() => handleGenerateIdeas(selectedIdeas)}>Create Caption</button></div>
        <div>
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
        </div>
    ) : listIdeas.length > 0 ? (
        <div>
        <label htmlFor="topic" className="label-ideas">
            Choose an idea to build some posts
        </label>
        {listIdeas.map((item, index) => (
            <div
            key={index}
            onClick={() => handleSelectIdeas(item)}
            className="card-ideas"
            >
            {item.title_topic}
            </div>
        ))}
        </div>
    ) : (
        <div className="get-inspired-box">
        <h2 className="caption-title">Get Inspired</h2>
        <p>
            Stuck staring at a blank page? Tell us what topic you have in mind and Skipli AI
            will generate a list of post ideas and captions for you.
        </p>

        <label htmlFor="topic" className="label-ideas">
            What topic do you want ideas for?
        </label>
        <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic"
            className="input-inspried"
        />

        <button
            onClick={handleGenerate}
            className="generate-button"
            disabled={loading}
        >
            {loading ? 'Generating...' : 'Generate ideas'}
        </button>
        </div>
    )}
    </div>
  );
}

export default GetInspired;
