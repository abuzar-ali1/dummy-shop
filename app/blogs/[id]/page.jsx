import { blogPosts } from '../../../data/blogs';
import BlogDetail from '@/app/ui/Components/BlogDetail';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function Blog() {
 

  return (
   <BlogDetail blogPosts={blogPosts}/>
  );
}