import { useState, useEffect } from "react";
import { Download } from "lucide-react";

import Navbar  from "../components/sections/Navbar";
import Footer  from "../components/sections/Footer";
import Button  from "../components/ui/button";
import AnnouncementBar from "../components/sections/AnnouncementBar";

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
            'https://examyug-dashboard-backend.onrender.com/api/v1/book/view-all-books?page=1&limit=6'
          ),
          fetch(
            'https://examyug-dashboard-backend.onrender.com/api/v1/bookset/view-all-booksets?page=1&limit=6'
          ),
        ]);

        const booksData = await booksRes.json();
        const booksetsData = await booksetsRes.json();

        console.log('Books API Response:', booksData);
        console.log('BookSets API Response:', booksetsData);

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
        console.error('Error fetching study materials:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="min-vh-100 d-flex align-items-center justify-content-center">
        <p className="fs-6">Loading study materials...</p>
      </main>
    );
  }

  const bookCategories = [
    { id: 'all', label: 'All Books' },
    ...Array.from(
      new Set(
        materials
          .map((book) => book.category?.categoryTitle)
          .filter(Boolean)
      )
    ).map((category) => ({
      id: category,
      label: category
    })),
  ];

  const booksetCategories = [
    { id: 'all', label: 'All Book Sets' },
    ...Array.from(
      new Set(
        booksets
          .map((bookset) => bookset.category?.categoryTitle)
          .filter(Boolean)
      )
    ).map((category) => ({
      id: category ,
      label: category,
    })),
  ];

  const filteredMaterials =
    selectedBookCategory === 'all'
      ? materials
      : materials.filter(
          (book) =>
            book.category?.categoryTitle === selectedBookCategory
        );

  const filteredBooksets =
    selectedBooksetCategory === 'all'
      ? booksets
      : booksets.filter(
          (bookset) =>
            bookset.category?.categoryTitle ===
            selectedBooksetCategory
        );

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/study-materials" />
      {/* Hero Section */}
      <section className="container-lg d-d-flex justify-content-center px-3 py-5">
        <div className="text-center mb-5">
          <h1 className="display-5 md:display-4 fw-bold text-foreground mb-5">
            Study Materials
          </h1>

          <p className="fs-6 text-muted-foreground max-w-2xl d-d-flex justify-content-center">
            Access comprehensive study materials, books, book sets,
            notes, and resources created by our expert instructors.
          </p>
        </div>
      </section>

      {/* BOOKS SECTION */}
      <section className="container-lg d-d-flex justify-content-center px-3 py-3">
        <h2 className="fs-3 fw-bold mb-5 text-center">
          Books
        </h2>

        {/* Books Categories */}
        <div className="d-flex d-flex-wrap gap-3 justify-content-center mb-5">
          {bookCategories.map((category) => (
            <Button
              key={category.id}
              variant={
                selectedBookCategory === category.id
                  ? 'destructive'
                  : 'outline'
              }
              onClick={() =>
                setSelectedBookCategory(category.id)
              }
              className="-transform"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="row row-cols-1 md:row-cols-2 lg:row-cols-3 gap-4">
          {filteredMaterials.map((material) => (
            <div
              key={material._id}
              className="bg-white border border-border rounded-2 overflow-d-none hover:shadow-sm-lg d-flex d-flex-column"
            >
              <div className="h-60 relative">
                <Image
                  src={material.thumbnail}
                  alt={material.bookTitle}
                  fill
                  className="object-fit-cover"
                />
              </div>

              <div className="p-6 d-flex d-flex-column d-flex-grow">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-circle small fw-bold w-fit mb-3">
                  {material.category?.categoryTitle || 'General'}
                </span>

                <h3 className="fs-6 fw-bold mb-2">
                  {material.bookTitle}
                </h3>

                <p className="text-muted-foreground small d-flex-grow mb-4 line-clamp-3">
                  {material.bookDescription}
                </p>

                <div className="d-flex justify-content-between align-items-center border-top pt-4">
                  <div>
                    <span className="line-through text-muted-foreground small">
                      ₹{material.maxPrice}
                    </span>

                    <span className="ms-2 text-primary fw-bold fs-6">
                      ₹{material.sellingPrice}
                    </span>
                  </div>

                  <Button
                    size="sm"
                    onClick={() =>
                      window.open(material.bookPdf, '_blank')
                    }
                  >
                    <Download className="w-4 h-4 me-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {filteredMaterials.length === 0 && (
            <div className="col-span-full text-center py-5">
              No books found.
            </div>
          )}
        </div>
      </section>

      {/* BOOK SETS SECTION */}
      <section className="container-lg d-d-flex justify-content-center px-3 py-5">
        <h2 className="fs-3 fw-bold mb-5 text-center">
          Book Sets
        </h2>

        {/* BookSet Categories */}
        <div className="d-flex d-flex-wrap gap-3 justify-content-center mb-5">
          {booksetCategories.map((category) => (
            <Button
              key={category.id}
              variant={
                selectedBooksetCategory === category.id
                  ? 'destructive'
                  : 'outline'
              }
              onClick={() =>
                setSelectedBooksetCategory(category.id)
              }
              className="-transform"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* BookSet Grid */}
        <div className="row row-cols-1 md:row-cols-2 lg:row-cols-3 gap-4">
          {filteredBooksets.map((bookset) => (
            <div
              key={bookset._id}
              className="bg-white border border-border rounded-2 overflow-d-none hover:shadow-sm-lg d-flex d-flex-column"
            >
              <div className="h-60 relative">
                <Image
                  src={bookset.thumbnail}
                  alt={bookset.booksetTitle}
                  fill
                  className="object-fit-cover"
                />
              </div>

              <div className="p-6 d-flex d-flex-column d-flex-grow">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-circle small fw-bold w-fit mb-3">
                  {bookset.category?.categoryTitle || 'General'}
                </span>

                <h3 className="fs-6 fw-bold mb-2">
                  {bookset.booksetTitle}
                </h3>

                <p className="text-muted-foreground small d-flex-grow mb-4 line-clamp-3">
                  {bookset.booksetDescription}
                </p>

                <div className="d-flex justify-content-between align-items-center border-top pt-4">
                  <div>
                    <span className="line-through text-muted-foreground small">
                      ₹{bookset.maxPrice}
                    </span>

                    <span className="ms-2 text-primary fw-bold fs-6">
                      ₹{bookset.sellingPrice}
                    </span>
                  </div>

                  <Button
                    size="sm"
                    onClick={() =>
                      window.open(
                        bookset.booksetPdf ||
                          bookset.bookPdf ||
                          '#',
                        '_blank'
                      )
                    }
                  >
                    <Download className="w-4 h-4 me-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {filteredBooksets.length === 0 && (
            <div className="col-span-full text-center py-5">
              No book sets found.
            </div>
          )}
        </div>
      </section>

      {/* View More Button */}
      <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => {
              window.location.href = '/study-materials';
            }}
          >
            View More Courses
          </Button>
        </div>
        <Footer />
    </main>
  );
}