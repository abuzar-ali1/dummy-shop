import { notFound } from 'next/navigation';
import { blogPosts } from '../../../data/blogs';
import BlogDetail from '@/app/ui/Components/BlogDetail';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function Blog({ params }) {
  const blog = blogPosts.find(post => post.id === parseInt(params.id));

  if (!blog) {
    notFound();
  }

  return (
   <BlogDetail blog={blog} blogPosts={blogPosts}/>
  );
}