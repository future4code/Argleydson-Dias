import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import React, { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress'

import axios from 'axios'
import { useHistory } from 'react-router'

import { baseUrl } from '../constants'
import NewPostForm from './NewPostForm'
import PostCard from './PostCard'
import styled from 'styled-components';

const FeedWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 300px;
  margin: 0 auto;
`

const FeedPage = (props) => {
  const history = useHistory();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      history.push("/login");
    }
  }, [])

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = () => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    setIsLoading(true)
    axios.get(`${baseUrl}/posts`, axiosConfig).then((response) => {
      setPosts(response.data.posts);
      setIsLoading(false)
    })
  }

  const handleVotePost = async (postId, direction) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      direction: direction
    }

    try{
      await axios.put(`${baseUrl}/posts/${postId}/vote`, body, axiosConfig);
      fetchPosts();
    } catch (error) {
      alert("Não foi possível votar no post, tente novamente");
      console.error(error);
    }
  }

  const handleCreatePost = async (text, title) => {
    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    const body = {
      text: text,
      title: title,
    }

    try{
      setIsLoading(true)
      await axios.post(`${baseUrl}/posts`, body, axiosConfig)
      fetchPosts();
    } catch(error) {
      alert("Não foi possível criar o post");
      console.error(error)
    }
  }

  return (
    <FeedWrapper>
      <NewPostForm
        handleCreatePost={handleCreatePost}
      />
      <hr/>
      {isLoading && <LinearProgress/>}
      {posts.map(post => {
        return (<PostCard key={post.id} handleVotePost={handleVotePost} post={post}/>)
      })}
    </FeedWrapper>
  )
}

export default FeedPage;
