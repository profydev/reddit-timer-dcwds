import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const fetchPosts = async (
  subreddit,
  postAmount = 500,
  lastPostId,
  fetchedPosts,
) => {
  let postId = typeof (lastPostId) === 'undefined' ? null : lastPostId;
  let posts = typeof (fetchedPosts) === 'undefined' ? [] : fetchedPosts;
  let noMorePosts = false;

  const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100&after=${postId}`);

  if (!response.ok) return posts;

  const { data: { children, after } } = await response.json();

  postId = after;
  posts = posts.concat(children);
  noMorePosts = children.length < 100; // based on `limit` parameter in url

  if (posts.length >= postAmount || noMorePosts) return posts.slice(0, postAmount);
  return fetchPosts(subreddit, postAmount, postId, posts);
};

const useFetchPosts = () => {
  const { subreddit } = useParams();
  const [posts, setPosts] = useState({
    error: false,
    loading: true,
    results: [],
  });

  useEffect(() => {
    const getPosts = async (subr) => {
      try {
        const fetchedPosts = await fetchPosts(subr, 500);
        setPosts((s) => ({ ...s, loading: false, results: fetchedPosts }));
      } catch (err) {
        setPosts((s) => ({ ...s, error: true, loading: false }));
      }
    };

    getPosts(subreddit);
  }, [subreddit]);

  return posts;
};

export default useFetchPosts;
