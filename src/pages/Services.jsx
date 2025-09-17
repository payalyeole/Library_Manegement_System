import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { icon: "📚", title: "Manage Books", desc: "Easily add, update, and organize library books with advanced search options." },
    { icon: "👩‍🎓", title: "Student & Staff Records", desc: "Keep track of students and staff with detailed record management." },
    { icon: "📊", title: "Reports & Analytics", desc: "Generate insightful reports and analytics for smarter decision-making." },
    { icon: "🔑", title: "Secure Login System", desc: "Ensure data safety with role-based authentication and secure login." }
  ];

  return (
    <section className="p-10 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-blue-700 mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md p-6 rounded-2xl hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
