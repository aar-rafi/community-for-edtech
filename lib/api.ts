import axios from 'axios';

export async function fetchPosts(page: number = 1, limit: number = 10) {
  try {
    const res = await axios.get(`/api/posts`, {
      params: {
        page,
        limit
      },
      headers: {
        'Cache-Control': 'max-age=60' 
      }
    });
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
}

export async function fetchPostReactions(postId: number) {
  try {
    const res = await axios.get(`/api/posts/${postId}/reactions`, {
      headers: {
        'Cache-Control': 'max-age=30' 
      }
    });
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch reactions');
  }
}