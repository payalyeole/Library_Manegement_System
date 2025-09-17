export default function Show() {
  return (
    <section className="p-10 min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
          Show Available Books
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This page will display a list of all available books in the library. 
          Users can browse through the collection, view book details, and check availability status.
        </p>
        <p className="text-gray-600 leading-relaxed">
          (This is a placeholder page. The actual implementation to fetch and display books will be added later.)
        </p>
      </div>
    </section>
  );
}
