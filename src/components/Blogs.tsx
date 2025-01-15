import { useEffect, useState } from 'react';
// import './blogs.css';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, ChevronDown, ExternalLink } from 'lucide-react';

type Blog = {
  guid: string;
  link: string;
  title: string;
  contentSnippet: string;
  content: string;
  date?: string; // Added date field
};
export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<string | null>(null);
  const [hoveredBlog, setHoveredBlog] = useState<string | null>(null);

  const truncateContent = (content: string, wordLimit: number) => {
    const words = content.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return content;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          'https://backend-medium.onrender.com/fetch-blogs'
        );
        if (!response.ok) throw new Error('Failed to fetch blogs');

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
        const items = xmlDoc.getElementsByTagName('item');

        const blogArray: Blog[] = Array.from(items)
          .slice(0, 6)
          .map((item) => ({
            guid: item.getElementsByTagName('guid')[0]?.textContent || '',
            link: item.getElementsByTagName('link')[0]?.textContent || '',
            title: item.getElementsByTagName('title')[0]?.textContent || '',
            contentSnippet:
              item.getElementsByTagName('description')[0]?.textContent || '',
            content:
              item.getElementsByTagName('content:encoded')[0]?.textContent ||
              '',
            date: new Date(
              item.getElementsByTagName('pubDate')[0]?.textContent || ''
            ).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            }),
          }));
        setBlogs(blogArray);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to toggle collapsed state of a blog snippet
  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1], // Scale animation
            // rotate: [0, 360, 0], // Full rotation (returns to 0°)
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='w-16 h-16 border-4 border-indigo-500 rounded-full border-t-transparent'
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-red-500 text-center'>
          <h2 className='text-2xl font-bold mb-2'>Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='py-16 mt-25'>
      <div className='min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-35'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-7xl mx-auto'
        >
          <h1 className='text-4xl font-bold text-gray-900 text-center mb-16'>
            Latest from the Blog
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogs.map((blog) => (
              <motion.div
                key={blog.guid}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredBlog(blog.guid)}
                onHoverEnd={() => setHoveredBlog(null)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden relative ${
                  selectedBlog === blog.guid ? 'col-span-full' : ''
                }`}
              >
                <div className='p-6'>
                  <div className='flex items-center text-gray-500 text-sm mb-4'>
                    <Calendar className='w-4 h-4 mr-2' />
                    <span>{blog.date}</span>
                  </div>

                  <h2 className='text-xl font-semibold text-gray-900 mb-4 line-clamp-2'>
                    {blog.title}
                  </h2>

                  <motion.div
                    initial={false}
                    animate={{
                      height: selectedBlog === blog.guid ? 'auto' : '100px',
                    }}
                    className='overflow-hidden'
                  >
                    <div
                      className='prose prose-sm text-gray-600'
                      dangerouslySetInnerHTML={{
                        __html:
                          selectedBlog === blog.guid
                            ? blog.content
                            : truncateContent(blog.contentSnippet, 200),
                      }}
                    />
                  </motion.div>

                  <div className='mt-6 flex items-center justify-between'>
                    <button
                      onClick={() =>
                        setSelectedBlog(
                          selectedBlog === blog.guid ? null : blog.guid
                        )
                      }
                      className='flex items-center text-indigo-600 hover:text-indigo-500 transition-colors'
                    >
                      <BookOpen className='w-4 h-4 mr-2' />
                      {selectedBlog === blog.guid ? 'Read less' : 'Read more'}
                      <motion.div
                        animate={{
                          rotate: selectedBlog === blog.guid ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className='w-4 h-4 ml-1' />
                      </motion.div>
                    </button>

                    <a
                      href={blog.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center text-gray-500 hover:text-gray-700 transition-colors'
                    >
                      <ExternalLink className='w-4 h-4 mr-1' />
                      <span>Medium</span>
                    </a>
                  </div>
                </div>

                <AnimatePresence>
                  {hoveredBlog === blog.guid && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent pointer-events-none'
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
