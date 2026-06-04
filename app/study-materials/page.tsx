'use client';

import { Navbar } from '@/components/sections/Navbar';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { Footer } from '@/components/sections/Footer';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Category {
  _id: string;
  categoryTitle: string;
}

interface Book {
  _id: string;
  bookTitle: string;
  bookDescription: string;
  thumbnail: string;
  bookPdf: string;
  sellingPrice: number;
  maxPrice: number;
  category?: Category;
}

interface BookSet {
  _id: string;
  booksetTitle: string;
  booksetDescription: string;
  thumbnail: string;
  booksetPdf?: string;
  bookPdf?: string;
  sellingPrice: number;
  maxPrice: number;
  category?: Category;
}

export default function StudyMaterials() {
  const [selectedBookCategory, setSelectedBookCategory] = useState('all');
  const [selectedBooksetCategory, setSelectedBooksetCategory] = useState('all');

  const [materials, setMaterials] = useState<Book[]>([]);
  const [booksets, setBooksets] = useState<BookSet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [booksRes, booksetsRes] = await Promise.all([
          fetch(
            'https://examyug-dashboard-backend.onrender.com/api/v1/book/view-all-books?page=1&limit=5'
          ),
          fetch(
            'https://examyug-dashboard-backend.onrender.com/api/v1/bookset/view-all-booksets?page=1&limit=5'
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
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading study materials...</p>
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
      id: category as string,
      label: category as string,
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
      id: category as string,
      label: category as string,
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
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Study Materials
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive study materials, books, book sets,
            notes, and resources created by our expert instructors.
          </p>
        </div>
      </section>

      {/* BOOKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Books
        </h2>

        {/* Books Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {bookCategories.map((category) => (
            <Button
              key={category.id}
              variant={
                selectedBookCategory === category.id
                  ? 'default'
                  : 'outline'
              }
              onClick={() =>
                setSelectedBookCategory(category.id)
              }
              className="hover:scale-105 transition-transform duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMaterials.map((material) => (
            <div
              key={material._id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-60 relative">
                <Image
                  src={material.thumbnail}
                  alt={material.bookTitle}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium w-fit mb-3">
                  {material.category?.categoryTitle || 'General'}
                </span>

                <h3 className="text-lg font-bold mb-2">
                  {material.bookTitle}
                </h3>

                <p className="text-muted-foreground text-sm flex-grow mb-4 line-clamp-3">
                  {material.bookDescription}
                </p>

                <div className="flex justify-between items-center border-t pt-4">
                  <div>
                    <span className="line-through text-muted-foreground text-sm">
                      ₹{material.maxPrice}
                    </span>

                    <span className="ml-2 text-primary font-bold text-lg">
                      ₹{material.sellingPrice}
                    </span>
                  </div>

                  <Button
                    size="sm"
                    onClick={() =>
                      window.open(material.bookPdf, '_blank')
                    }
                  >
                    <Download className="w-4 h-4 mr-2" />
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

      {/* BOOK SETS SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Book Sets
        </h2>

        {/* BookSet Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {booksetCategories.map((category) => (
            <Button
              key={category.id}
              variant={
                selectedBooksetCategory === category.id
                  ? 'default'
                  : 'outline'
              }
              onClick={() =>
                setSelectedBooksetCategory(category.id)
              }
              className="hover:scale-105 transition-transform duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* BookSet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooksets.map((bookset) => (
            <div
              key={bookset._id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-60 relative">
                <Image
                  src={bookset.thumbnail}
                  alt={bookset.booksetTitle}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium w-fit mb-3">
                  {bookset.category?.categoryTitle || 'General'}
                </span>

                <h3 className="text-lg font-bold mb-2">
                  {bookset.booksetTitle}
                </h3>

                <p className="text-muted-foreground text-sm flex-grow mb-4 line-clamp-3">
                  {bookset.booksetDescription}
                </p>

                <div className="flex justify-between items-center border-t pt-4">
                  <div>
                    <span className="line-through text-muted-foreground text-sm">
                      ₹{bookset.maxPrice}
                    </span>

                    <span className="ml-2 text-primary font-bold text-lg">
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
                    <Download className="w-4 h-4 mr-2" />
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

      {/* Stats */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {materials.length}
              </div>
              <p className="font-medium">Books Available</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {booksets.length}
              </div>
              <p className="font-medium">Book Sets Available</p>
            </div>

            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {materials.length + booksets.length}
              </div>
              <p className="font-medium">Total Resources</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
