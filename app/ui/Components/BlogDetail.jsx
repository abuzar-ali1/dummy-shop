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
  ShareIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useComingSoon } from '../hooks/useComingSoon';

const BlogDetail = ({blogPosts}) => {
  const params = useParams();
  const blog = blogPosts.find(post => post.id === parseInt(params.id));

  if (!blog) {
    notFound();
  };
  const {handleComingSoon} = useComingSoon();
   return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50/30 pt-20">
      {/* Enhanced Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60 sticky top-20 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center justify-between">
            <Link 
              href="#"
              onClick={handleComingSoon}
              className="group inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-all duration-300"
            >
              <motion.div
                whileHover={{ x: -4 }}
                className="flex items-center"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Back to Home
              </motion.div>
            </Link>
            
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-500 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all duration-200"
              >
                <BookmarkIcon className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-500 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all duration-200"
              >
                <ShareIcon className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Enhanced Hero Image */}
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 md:p-12">
                {/* Header Section */}
                <div className="mb-8 text-center">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    {blog.title}
                  </motion.h1>
                  
                  {/* Enhanced Meta Information */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 mb-6"
                  >
                    <div className="flex items-center bg-cyan-50 px-4 py-2 rounded-full">
                      <UserIcon className="w-4 h-4 mr-2 text-cyan-600" />
                      <span className="font-semibold text-gray-700">{blog.author}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-cyan-600" />
                      {blog.date}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-2 text-cyan-600" />
                      {blog.readTime}
                    </div>
                    <div className="flex items-center">
                      <EyeIcon className="w-4 h-4 mr-2 text-cyan-600" />
                      {blog.views} views
                    </div>
                  </motion.div>

                  {/* Enhanced Tags */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-3"
                  >
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/25"
                      >
                        #{tag}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Enhanced Excerpt */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-10 border-l-4 border-cyan-400"
                >
                  <p className="text-xl text-cyan-800 font-semibold leading-relaxed text-center">
                    {blog.excerpt}
                  </p>
                </motion.div>

                {/* Blog Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="prose prose-lg max-w-none 
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-p:text-gray-700 prose-p:leading-relaxed
                    prose-li:text-gray-700 
                    prose-strong:text-gray-900 
                    prose-a:text-cyan-600 hover:prose-a:text-cyan-700 prose-a:no-underline prose-a:font-semibold
                    prose-blockquote:border-cyan-400 prose-blockquote:bg-cyan-50 prose-blockquote:rounded-xl
                    prose-img:rounded-2xl prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Enhanced Action Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center gap-6"
                >
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "#fef2f2" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-gray-600 hover:text-red-500 px-4 py-3 rounded-xl transition-all duration-200 border border-gray-200"
                    >
                      <HeartIcon className="w-5 h-5 mr-2" />
                      Like ({blog.likes})
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-gray-600 hover:text-cyan-600 px-4 py-3 rounded-xl transition-all duration-200 border border-gray-200"
                    >
                      <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                      Comment
                    </motion.button>
                  </div>
                  
                  <Link
                    href="#"
                    onClick={handleComingSoon}
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center shadow-lg shadow-cyan-500/25"
                  >
                    Explore More Blogs
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Enhanced Author Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-32"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {blog.author.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.author}</h3>
                <p className="text-cyan-600 font-semibold mb-4">{blog.authorRole}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.author} is a passionate writer and expert in their field, dedicated to sharing valuable insights and helping readers make informed decisions about their style and lifestyle choices.
                </p>
                
                <div className="mt-4 flex justify-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-cyan-600 hover:text-cyan-700 text-sm font-semibold"
                  >
                    Follow
                  </motion.button>
                  <span className="text-gray-300">•</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-cyan-600 hover:text-cyan-700 text-sm font-semibold"
                  >
                    View Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Related Posts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                Related Articles
              </h2>
              <div className="space-y-6">
                {blogPosts
                  .filter(post => post.id !== blog.id)
                  .slice(0, 3)
                  .map(relatedPost => (
                    <motion.div
                      key={relatedPost.id}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <Link
                        href={`/blogs/${relatedPost.id}`}
                        className="block"
                      >
                        <div className="flex space-x-4">
                          <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium mb-2">
                              {relatedPost.category}
                            </span>
                            <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                              {relatedPost.title}
                            </h3>
                            <div className="flex items-center text-xs text-gray-500">
                              <span>{relatedPost.date}</span>
                              <span className="mx-1">•</span>
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-cyan-100 text-sm mb-4">
                Get the latest articles and insights delivered to your inbox
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 placeholder-cyan-200 text-white border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-cyan-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogDetail;