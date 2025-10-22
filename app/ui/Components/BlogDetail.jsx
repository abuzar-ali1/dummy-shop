"use client";
import React from 'react'
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  CalendarIcon,
  ClockIcon,
  UserIcon,
  EyeIcon,
  HeartIcon,
  ArrowLeftIcon,
  ShareIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';


const BlogDetail = ({blogPosts}) => {

   const params = useParams();
   const blog = blogPosts.find(post => post.id === parseInt(params.id));

  if (!blog) {
    notFound();
  };

  return (
 <div className="min-h-screen bg-gray-50 pt-20">
      {/* Navigation */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Link 
              href="/"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-200"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* Hero Image */}
          <div className="relative h-64 md:h-96">
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>
            <img className='w-full h-64 md:h-64' src={blog.image} alt="" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {blog.title}
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span className="font-medium text-gray-700">{blog.author}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.authorRole}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {blog.date}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  {blog.readTime}
                </div>
                <div className="flex items-center">
                  <EyeIcon className="w-4 h-4 mr-2" />
                  {blog.views}
                </div>
                <div className="flex items-center">
                  <HeartIcon className="w-4 h-4 mr-2" />
                  {blog.likes}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Excerpt */}
            <div className="bg-cyan-50 rounded-xl p-6 mb-8 border border-cyan-100">
              <p className="text-lg text-cyan-800 font-medium leading-relaxed">
                {blog.excerpt}
              </p>
            </div>

            {/* Blog Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-cyan-600 hover:prose-a:text-cyan-700 prose-a:no-underline"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Action Bar */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-gray-600 hover:text-gray-700 transition-colors duration-200"
                >
                  <HeartIcon className="w-5 h-5 mr-2" />
                  Like ({blog.likes})
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-gray-600 hover:text-gray-700 transition-colors duration-200"
                >
                  <ShareIcon className="w-5 h-5 mr-2" />
                  Share
                </motion.button>
              </div>
              
              <Link
                href="/"
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300 inline-flex items-center"
              >
                Explore More Blogs
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-8"
        >
          <div className="flex items-start space-x-4">
            <div className="w-30 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {blog.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.author}</h3>
              <p className="text-cyan-600 font-medium mb-2">{blog.authorRole}</p>
              <p className="text-gray-600">
                {blog.author} is a passionate writer and expert in their field, dedicated to sharing valuable insights and helping readers make informed decisions about their style and lifestyle choices.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(post => post.id !== blog.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  href={`/blogs/${relatedPost.id}`}
                  className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-6">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </article>
    </div> 
     )
}

export default BlogDetail