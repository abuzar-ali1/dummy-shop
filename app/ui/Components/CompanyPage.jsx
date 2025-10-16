"use client";
import { motion } from 'framer-motion';
import { 
  BuildingStorefrontIcon,
  HeartIcon,
  ShieldCheckIcon,
  UsersIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const CompanyPage = () => {
  // Company values data
  const values = [
    {
      icon: ShieldCheckIcon,
      title: "Quality First",
      description: "Every product undergoes rigorous testing to ensure it meets our high standards for durability and craftsmanship."
    },
    {
      icon: HeartIcon,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We listen, adapt, and constantly improve based on your feedback."
    },
    {
      icon: BuildingStorefrontIcon,
      title: "Sustainable Practices",
      description: "Committed to eco-friendly materials and ethical manufacturing processes for a better tomorrow."
    }
  ];

  // Team members data
  const team = [
    {
      name: "Sarah Chen",
      position: "Founder & CEO",
      description: "15+ years in fashion retail, passionate about creating products that make everyday life better."
    },
    {
      name: "Marcus Rodriguez",
      position: "Head of Design",
      description: "Award-winning designer focused on blending functionality with modern aesthetics."
    },
    {
      name: "Dr. Elena Petrova",
      position: "Sustainability Director",
      description: "Leading our commitment to environmental responsibility and ethical manufacturing."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BuildingStorefrontIcon className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              More Than Just a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"> Brand</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a team of passionate creators dedicated to designing everyday essentials 
              that combine style, functionality, and sustainability. Your trust drives everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every product we create.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-500 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-cyan-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-white text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <UsersIcon className="w-4 h-4 mr-2" />
              Meet Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The People Behind DummyShop</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to bringing you the best products and experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-cyan-600 font-semibold text-sm mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

       {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Have questions about our products or want to learn more about our mission? 
              We'd love to hear from you.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="w-5 h-5 mr-3" />
                <span>hello@dummyshop.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="w-5 h-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPinIcon className="w-5 h-5 mr-3" />
                <span>New York, NY</span>
              </div>
            </div>

            <motion.button
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "4.8/5", label: "Average Rating" },
              { number: "100%", label: "Quality Guarantee" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default CompanyPage;