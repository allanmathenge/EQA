import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function BlogForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }

        axios.post('/api/blogs/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                history.push('/');
            })
            .catch(error => {
                console.error('There was an error creating the blog!', error);
            });
    };

    return (
        <div>
            <h1>Create Blog</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                <div>
                    <label>Image</label>
                    <input
                        type="file"
                        onChange={e => setImage(e.target.files[0])}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default BlogForm;
