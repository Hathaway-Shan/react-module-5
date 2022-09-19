import React from 'react';
import BlogCard from '../../BlogCard/BlogCard';
import useBlogs from '../../../hooks/useBlogs';

export default function Main() {
  return (
    <main>
      {useBlogs().map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
