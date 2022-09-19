import { useEffect, useState } from 'react';
import { getBlogs } from '../services/getBlogs';

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchData();

    //empty array only runs on load, nothing runs with every change, defining something runs only with the change of the defined
  }, []);

  return blogs;
}
