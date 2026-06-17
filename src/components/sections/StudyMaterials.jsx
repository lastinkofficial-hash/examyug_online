import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import Button from "../ui/button";
import MaterialCard from "../components/MaterialCard";

export default function StudyMaterials() {
  const [selectedBookCategory, setSelectedBookCategory] = useState("all");
  const [selectedBooksetCategory, setSelectedBooksetCategory] = useState("all");
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [booksets, setBooksets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [booksRes, booksetsRes] = await Promise.all([
          fetch("https://examyug-dashboard-backend.onrender.com/api/v1/book/view-all-books?page=1&limit=5"),
          fetch("https://examyug-dashboard-backend.onrender.com/api/v1/bookset/view-all-booksets?page=1&limit=5"),
        ]);

        const booksData = await booksRes.json();
        const booksetsData = await booksetsRes.json();

        if (booksData?.success) {
          setMaterials(booksData.allBooks || []);
        }
        if (booksetsData?.success) {
          setBooksets(booksetsData.allBookSets || booksetsData.allBooksets || []);
        }
      } catch (error) {
        console.error("Error fetching study materials:", error);
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
    { id: "all", label: "All Books" },
    ...Array.from(
      new Set(materials.map((book) => book.category?.categoryTitle).filter(Boolean))
    ).map((category) => ({ id: category, label: category })),
  ];

  const booksetCategories = [
    { id: "all", label: "All Book Sets" },
    ...Array.from(
      new Set(booksets.map((bookset) => bookset.category?.categoryTitle).filter(Boolean))
    ).map((category) => ({ id: category, label: category })),
  ];

  const filteredMaterials =
    selectedBookCategory === "all"
      ? materials
      : materials.filter((book) => book.category?.categoryTitle === selectedBookCategory);

  const filteredBooksets =
    selectedBooksetCategory === "all"
      ? booksets
      : booksets.filter((bookset) => bookset.category?.categoryTitle === selectedBooksetCategory);

  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      {/* Hero Section */}
      <section className="container-lg px-3 py-5">
        <div className="text-center mb-5">
          <h1 className="fs-2 fs-md-1 fw-bold text-dark mb-4">Study Materials</h1>
          <p className="fs-6 text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Access comprehensive study materials, books, book sets, notes, and resources created by our expert instructors.
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className="container-lg px-3 py-5" style={{ backgroundColor: "#f5f5f5" }}>
        <h2 className="fs-3 fw-bold mb-5 text-center text-dark">Books</h2>

        <div className="d-flex flex-wrap gap-3 justify-content-center mb-5">
          {bookCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedBookCategory(category.id)}
              variant={selectedBookCategory === category.id ? "danger" : "outline"}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredMaterials.map((material) => (
            <div key={material._id} className="col">
              <div className="card h-100 border" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <img
                  src={material.thumbnail}
                  alt={material.bookTitle}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge" style={{ backgroundColor: "rgba(220, 38, 38, 0.1)", color: "#dc2626", width: "fit-content", marginBottom: "10px" }}>
                    {material.category?.categoryTitle || "General"}
                  </span>
                  <h5 className="card-title fw-bold text-dark">{material.bookTitle}</h5>
                  <p className="card-text text-muted small flex-grow-1">
                    {material.bookDescription?.length > 100
                      ? `${material.bookDescription.substring(0, 100)}...`
                      : material.bookDescription}
                  </p>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <div>
                      <span className="text-muted small" style={{ textDecoration: "line-through" }}>₹{material.maxPrice}</span>
                      <span className="ms-2 fw-bold text-danger">₹{material.sellingPrice}</span>
                    </div>
                    <Button onClick={() => setSelectedMaterial(material)} variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">No books found.</p>
          </div>
        )}
      </section>

      {/* Book Sets Section */}
      <section className="container-lg px-3 py-5">
        <h2 className="fs-3 fw-bold mb-5 text-center text-dark">Book Sets</h2>

        <div className="d-flex flex-wrap gap-3 justify-content-center mb-5">
          {booksetCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedBooksetCategory(category.id)}
              variant={selectedBooksetCategory === category.id ? "danger" : "outline"}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredBooksets.map((bookset) => (
            <div key={bookset._id} className="col">
              <MaterialCard
                title={bookset.booksetTitle}
                description={bookset.booksetDescription}
                image={bookset.thumbnail}
                category={bookset.category?.categoryTitle}
                maxPrice={bookset.maxPrice}
                sellingPrice={bookset.sellingPrice}
                pdfUrl={bookset.booksetPdf || bookset.bookPdf}
              />
            </div>
          ))}
        </div>

        {filteredBooksets.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">No book sets found.</p>
          </div>
        )}
      </section>

      {/* View More Button */}
      <div className="text-center py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <Button
          variant="danger"
          onClick={() => {
            window.location.href = "/study-materials";
          }}
        >
          View More Materials
        </Button>
      </div>

      {/* Detail Modal */}
      {selectedMaterial && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
          onClick={() => setSelectedMaterial(null)}
        >
          <div
            className="bg-white rounded-3 w-100 mx-auto"
            style={{ maxWidth: "900px", maxHeight: "90vh", overflow: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="row g-0">
              <div className="col-12 col-md-6">
                <img
                  src={selectedMaterial.thumbnail}
                  alt={selectedMaterial.bookTitle}
                  className="w-100"
                  style={{ minHeight: "300px", objectFit: "cover" }}
                />
              </div>
              <div className="col-12 col-md-6 p-4">
                <span className="badge" style={{ backgroundColor: "rgba(220, 38, 38, 0.1)", color: "#dc2626" }}>
                  {selectedMaterial.category?.categoryTitle || "General"}
                </span>
                <h2 className="fs-4 fw-bold text-dark my-3">{selectedMaterial.bookTitle}</h2>
                <p className="text-muted" style={{ maxHeight: "200px", overflow: "auto" }}>
                  {selectedMaterial.bookDescription}
                </p>
                <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                  <div>
                    <span className="text-muted" style={{ textDecoration: "line-through" }}>₹{selectedMaterial.maxPrice}</span>
                    <span className="ms-2 fw-bold text-danger fs-5">₹{selectedMaterial.sellingPrice}</span>
                  </div>
                </div>
                <div className="d-flex gap-3 mt-4">
                  <Button variant="outline" onClick={() => setSelectedMaterial(null)}>
                    Close
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      if (selectedMaterial.bookPdf) {
                        window.open(selectedMaterial.bookPdf, "_blank", "noopener,noreferrer");
                      }
                    }}
                  >
                    <Download className="w-4 h-4 me-2" style={{ display: "inline-block" }} />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
