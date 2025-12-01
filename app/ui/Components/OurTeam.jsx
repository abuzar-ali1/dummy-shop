"use client";
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { useComingSoon } from '../hooks/useComingSoon';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Founder & CEO",
      description: "Former fashion director with 15+ years in retail industry. Passionate about sustainable fashion and customer experience.",
      image: "/images/ Sarahchen .png",
      email: "sarah@dummyshop.com",
      phone: "+1 (555) 010-1001",
      department: "Leadership",
      expertise: ["Strategy", "Product Development", "Brand Vision"],
      joinDate: "2018"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "Head of Design",
      description: "Award-winning product designer focused on creating functional yet beautiful everyday essentials.",
      image: "/images/MarcusRodriguez.png",
      email: "marcus@dummyshop.com",
      phone: "+1 (555) 010-1002",
      department: "Design",
      expertise: ["Product Design", "Materials", "User Experience"],
      joinDate: "2019"
    },
    {
      id: 3,
      name: "Dr. Elena Petrova",
      position: "Sustainability Director",
      description: "PhD in Environmental Science. Leads our sustainability initiatives and ethical sourcing practices.",
      image: "/images/Dr.ElenaPetrova.png",
      email: "elena@dummyshop.com",
      phone: "+1 (555) 010-1003",
      department: "Sustainability",
      expertise: ["Eco Materials", "Supply Chain", "Certifications"],
      joinDate: "2020"
    },
    {
      id: 4,
      name: "James Kim",
      position: "Head of Customer Experience",
      description: "Dedicated to creating exceptional shopping experiences and building lasting customer relationships.",
      image: "/images/JamesKim.png",
      email: "james@dummyshop.com",
      phone: "+1 (555) 010-1004",
      department: "Customer Service",
      expertise: ["Support Systems", "Customer Journey", "Retention"],
      joinDate: "2019"
    },
    {
      id: 5,
      name: "Olivia Parker",
      position: "Creative Director",
      description: "Visionary creative lead shaping our brand identity and visual storytelling across all platforms.",
      image: "/images/ OliviaParker.png",
      email: "olivia@dummyshop.com",
      phone: "+1 (555) 010-1005",
      department: "Marketing",
      expertise: ["Brand Strategy", "Content Creation", "Campaigns"],
      joinDate: "2020"
    },
    {
      id: 6,
      name: "David Thompson",
      position: "Operations Manager",
      description: "Ensures seamless operations from inventory management to fast, reliable order fulfillment.",
      image: "/images/DavidThompson.png",
      email: "david@dummyshop.com",
      phone: "+1 (555) 010-1006",
      department: "Operations",
      expertise: ["Logistics", "Inventory", "Process Optimization"],
      joinDate: "2018"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const {handleComingSoon} = useComingSoon();

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center  bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <UserGroupIcon className="w-4 h-4 mr-2" />
            Meet Our Team
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The People Behind
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"> Your Style</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Passionate experts dedicated to bringing you quality products, exceptional service, 
            and a shopping experience that puts you first.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Placeholder for team member image */}
                  <img src={member.image} alt="Member image" />
                </motion.div>
                
                {/* Department Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {member.department}
                  </span>
                </div>

                {/* Join Date */}
                <div className="absolute top-4 right-4">
                  <span className="bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Since {member.joinDate}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end justify-center pb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-900 font-semibold text-sm"
                  >
                    View Profile
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name & Position */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-cyan-600 font-semibold text-sm">{member.position}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>

                {/* Expertise */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex items-center hover:text-cyan-600 transition-colors duration-300"
                      >
                        <EnvelopeIcon className="w-4 h-4 mr-1" />
                        Email
                      </a>
                      <a 
                        href={`tel:${member.phone}`}
                        className="flex items-center hover:text-cyan-600 transition-colors duration-300"
                      >
                        <PhoneIcon className="w-4 h-4 mr-1" />
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: "25+", label: "Years Combined Experience" },
            { number: "50K+", label: "Customers Served" },
            { number: "100%", label: "Quality Commitment" },
            { number: "24/7", label: "Dedicated Support" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <BuildingStorefrontIcon className="w-12 h-12 mx-auto mb-4 text-white/80" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-cyan-100 mb-6 max-w-xl mx-auto text-lg">
            We're always looking for passionate individuals who share our vision for quality, 
            sustainability, and exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
            onClick={handleComingSoon}
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
            <motion.button
            onClick={handleComingSoon}
              className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact HR
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;