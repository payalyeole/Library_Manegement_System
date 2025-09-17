export default function About() {
  return (
    <section className="p-10 min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to the <span className="font-semibold">Library Management System</span>, 
          a platform designed to simplify and digitalize book management, 
          student records, and staff operations. Our goal is to provide 
          a seamless experience for administrators, librarians, and students 
          while ensuring efficiency and accessibility.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether it's tracking borrowed books, managing student profiles, 
          or automating library workflows, this system is built to make 
          library operations smooth and effective.
        </p>
      </div>
    </section>
  );
}
