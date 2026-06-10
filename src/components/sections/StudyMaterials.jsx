import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import Button  from "../ui/Button"; // Adjust path as needed

export default function StudyMaterials() {
  const [selectedBookCategory, setSelectedBookCategory] =
    useState("all");
  const [selectedBooksetCategory, setSelectedBooksetCategory] =
    useState("all");

  const [materials, setMaterials] = useState([]);
  const [booksets, setBooksets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [booksRes, booksetsRes] = await Promise.all([
          fetch(
            "https://examyug-dashboard-backend.onrender.com/api/v1/book/view-all-books?page=1&limit=5"
          ),
          fetch(
            "https://examyug-dashboard-backend.onrender.com/api/v1/bookset/view-all-booksets?page=1&limit=5"
          ),
        ]);

        const booksData = await booksRes.json();
        const booksetsData = await booksetsRes.json();

        if (booksData?.success) {
          setMaterials(booksData.allBooks || []);
        }

        if (booksetsData?.success) {
          setBooksets(
            booksetsData.allBookSets ||
              booksetsData.allBooksets ||
              []
          );
        }
      } catch (error) {
        console.error(
          "Error fetching study materials:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg">
          Loading study materials...
        </p>
      </main>
    );
  }

  const bookCategories = [
    { id: "all", label: "All Books" },
    ...Array.from(
      new Set(
        materials
          .map((book) => book.category?.categoryTitle)
          .filter(Boolean)
      )
    ).map((category) => ({
      id: category,
      label: category,
    })),
  ];

  const booksetCategories = [
    { id: "all", label: "All Book Sets" },
    ...Array.from(
      new Set(
        booksets
          .map((bookset) => bookset.category?.categoryTitle)
          .filter(Boolean)
      )
    ).map((category) => ({
      id: category,
      label: category,
    })),
  ];

  const filteredMaterials =
    selectedBookCategory === "all"
      ? materials
      : materials.filter(
          (book) =>
            book.category?.categoryTitle ===
            selectedBookCategory
        );

  const filteredBooksets =
    selectedBooksetCategory === "all"
      ? booksets
      : booksets.filter(
          (bookset) =>
            bookset.category?.categoryTitle ===
            selectedBooksetCategory
        );

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Study Materials
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive study materials,
            books, book sets, notes, and resources
            created by our expert instructors.
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Books
        </h2>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {bookCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() =>
                setSelectedBookCategory(category.id)
              }
              className={`hover:scale-105 transition-transform duration-300 ${
                selectedBookCategory === category.id
                  ? "bg-red-600 text-white"
                  : ""
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMaterials.map((material) => (
            <div
              key={material._id}
              className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={material.thumbnail}
                  alt={material.bookTitle}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium w-fit mb-3">
                  {material.category?.categoryTitle ||
                    "General"}
                </span>

                <h3 className="text-lg font-bold mb-2">
                  {material.bookTitle}
                </h3>

                <p className="text-gray-500 text-sm flex-grow mb-4">
                  {material.bookDescription}
                </p>

                <div className="flex justify-between items-center border-t pt-4">
                  <div>
                    <span className="line-through text-gray-400 text-sm">
                      ₹{material.maxPrice}
                    </span>

                    <span className="ml-2 text-blue-600 font-bold text-lg">
                      ₹{material.sellingPrice}
                    </span>
                  </div>

                  <Button
                    onClick={() => {
                      if (material.bookPdf) {
                        window.open(
                          material.bookPdf,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }
                    }}
                  >
                    <Download className="w-4 h-4 mr-2 inline" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {filteredMaterials.length === 0 && (
            <div className="col-span-full text-center py-8">
              No books found.
            </div>
          )}
        </div>
      </section>

      {/* Book Sets Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Book Sets
        </h2>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {booksetCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() =>
                setSelectedBooksetCategory(
                  category.id
                )
              }
              className={`hover:scale-105 transition-transform duration-300 ${
                selectedBooksetCategory === category.id
                  ? "bg-blue-600 text-white"
                  : ""
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooksets.map((bookset) => (
            <div
              key={bookset._id}
              className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={bookset.thumbnail}
                  alt={bookset.booksetTitle}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium w-fit mb-3">
                  {bookset.category?.categoryTitle ||
                    "General"}
                </span>

                <h3 className="text-lg font-bold mb-2">
                  {bookset.booksetTitle}
                </h3>

                <p className="text-gray-500 text-sm flex-grow mb-4">
                  {bookset.booksetDescription}
                </p>

                <div className="flex justify-between items-center border-t pt-4">
                  <div>
                    <span className="line-through text-gray-400 text-sm">
                      ₹{bookset.maxPrice}
                    </span>

                    <span className="ml-2 text-blue-600 font-bold text-lg">
                      ₹{bookset.sellingPrice}
                    </span>
                  </div>

                  <Button
                    onClick={() => {
                      const pdf =
                        bookset.booksetPdf ||
                        bookset.bookPdf;

                      if (pdf) {
                        window.open(
                          pdf,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }
                    }}
                  >
                    <Download className="w-4 h-4 mr-2 inline" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {filteredBooksets.length === 0 && (
            <div className="col-span-full text-center py-8">
              No book sets found.
            </div>
          )}
        </div>
      </section>

      {/* View More */}
      <div className="text-center pb-16">
        <Button
          variant="danger"
          onClick={() => {
            window.location.href =
              "/study-materials";
          }}
        >
          View More Materials
        </Button>
      </div>
    </main>
  );
}