'use client';

import { useState } from 'react';
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

export default function Knowledge() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const blogData = [
    { id: 1, category: 'article', image: '1tv.jpg', title: 'Understanding Network Infrastructure', excerpt: 'A comprehensive guide to building and maintaining robust network infrastructure for modern businesses.', date: 'Nov 20, 2025' },
    { id: 2, category: 'case-study', image: '15.jpg', title: 'Enterprise Connectivity Success', excerpt: 'How we helped a Fortune 500 company achieve 99.9% uptime with our managed network solutions.', date: 'Nov 18, 2025' },
    { id: 3, category: 'article', image: '16.jpg', title: 'Cybersecurity Best Practices', excerpt: 'Essential security measures every business should implement to protect their network infrastructure.', date: 'Nov 15, 2025' },
    { id: 4, category: 'white-paper', image: '18.jpg', title: '5G and Future Connectivity', excerpt: 'Exploring the impact of 5G technology on enterprise networks and IoT infrastructure.', date: 'Nov 12, 2025' },
    { id: 5, category: 'article', image: '11.jpeg', title: 'Cloud Integration Strategies', excerpt: 'Seamlessly integrate cloud services with your existing network infrastructure for maximum efficiency.', date: 'Nov 10, 2025' },
    { id: 6, category: 'multimedia', image: '111.jpeg', title: 'Network Setup Video Tutorial', excerpt: 'Watch our step-by-step video guide on setting up enterprise-grade network infrastructure.', date: 'Nov 8, 2025' }
  ];

  const filteredBlogs = activeFilter === 'all' 
    ? blogData 
    : blogData.filter(blog => blog.category === activeFilter);

  const getCategoryColor = (category) => {
    const colors = {
      'article': '#28a745',
      'case-study': '#fd9330',
      'white-paper': '#fd9330',
      'multimedia': '#fd9330'
    };
    return colors[category] || '#28a745';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      'article': 'ARTICLE',
      'case-study': 'CASE STUDY',
      'white-paper': 'WHITE PAPER',
      'multimedia': 'MULTIMEDIA'
    };
    return labels[category] || category.toUpperCase();
  };

  return (
    <NextLayout header={1} footer={1}>
      <Breadcrumb pageName="Knowledge Center" />

      {/* Hero Section */}
      <section className="section-padding" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 style={{ 
                fontSize: '3.5rem', 
                fontWeight: '700', 
                marginBottom: '2rem',
                color: '#000'
              }}>
                Stay Informed, Stay Inspired
              </h1>
              
              <p style={{ 
                fontSize: '1.3rem', 
                lineHeight: '1.8', 
                color: '#333', 
                maxWidth: '800px', 
                margin: '0 auto 3rem'
              }}>
                Fresh perspectives, helpful guides, and industry news — all in one place.
              </p>

              {/* Recent Posts Section */}
              <div style={{
                maxWidth: '500px',
                margin: '0 auto',
                padding: '3rem 2.5rem',
                border: '2px solid #000',
                borderRadius: '10px',
                background: '#fff'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '0',
                  color: '#000'
                }}>
                  Recent Post appears here
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(/assets/img/4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          {/* Filter Tabs */}
          <div className="row justify-content-center mb-4">
            <div className="col-12">
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2rem'
              }}>
                <button 
                  onClick={() => setActiveFilter('all')}
                  style={{
                    padding: '0.875rem 2rem',
                    background: activeFilter === 'all' ? 'linear-gradient(135deg, #28a745 0%, #34d058 100%)' : '#fff',
                    color: activeFilter === 'all' ? '#fff' : '#28a745',
                    border: activeFilter === 'all' ? 'none' : '2px solid #e0e0e0',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: activeFilter === 'all' ? '0 4px 15px rgba(40, 167, 69, 0.3)' : 'none'
                  }}>
                  All
                </button>
                <button 
                  onClick={() => setActiveFilter('article')}
                  style={{
                    padding: '0.875rem 2rem',
                    background: activeFilter === 'article' ? 'linear-gradient(135deg, #28a745 0%, #34d058 100%)' : '#fff',
                    color: activeFilter === 'article' ? '#fff' : '#28a745',
                    border: activeFilter === 'article' ? 'none' : '2px solid #e0e0e0',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: activeFilter === 'article' ? '0 4px 15px rgba(40, 167, 69, 0.3)' : 'none'
                  }}>
                  Articles
                </button>
                <button 
                  onClick={() => setActiveFilter('case-study')}
                  style={{
                    padding: '0.875rem 2rem',
                    background: activeFilter === 'case-study' ? 'linear-gradient(135deg, #28a745 0%, #34d058 100%)' : '#fff',
                    color: activeFilter === 'case-study' ? '#fff' : '#28a745',
                    border: activeFilter === 'case-study' ? 'none' : '2px solid #e0e0e0',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: activeFilter === 'case-study' ? '0 4px 15px rgba(40, 167, 69, 0.3)' : 'none'
                  }}>
                  Case Studies
                </button>
                <button 
                  onClick={() => setActiveFilter('multimedia')}
                  style={{
                    padding: '0.875rem 2rem',
                    background: activeFilter === 'multimedia' ? 'linear-gradient(135deg, #28a745 0%, #34d058 100%)' : '#fff',
                    color: activeFilter === 'multimedia' ? '#fff' : '#28a745',
                    border: activeFilter === 'multimedia' ? 'none' : '2px solid #e0e0e0',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: activeFilter === 'multimedia' ? '0 4px 15px rgba(40, 167, 69, 0.3)' : 'none'
                  }}>
                  Multimedia
                </button>
                <button 
                  onClick={() => setActiveFilter('white-paper')}
                  style={{
                    padding: '0.875rem 2rem',
                    background: activeFilter === 'white-paper' ? 'linear-gradient(135deg, #28a745 0%, #34d058 100%)' : '#fff',
                    color: activeFilter === 'white-paper' ? '#fff' : '#28a745',
                    border: activeFilter === 'white-paper' ? 'none' : '2px solid #e0e0e0',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: activeFilter === 'white-paper' ? '0 4px 15px rgba(40, 167, 69, 0.3)' : 'none'
                  }}>
                  White Papers
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="row mb-5">
            <div className="col-12">
              <div style={{
                background: '#f8f9fa',
                padding: '2rem',
                borderRadius: '15px',
                border: '2px solid #e0e0e0'
              }}>
                <div className="row g-3 align-items-center">
                  <div className="col-lg-4">
                    <div style={{ position: 'relative' }}>
                      <input 
                        type="text"
                        placeholder="Search keywords"
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem 0.875rem 3rem',
                          border: '2px solid #e0e0e0',
                          borderRadius: '10px',
                          fontSize: '1rem',
                          background: '#fff'
                        }}
                      />
                      <i className="fas fa-search" style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#28a745',
                        fontSize: '1.1rem'
                      }}></i>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <select style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      background: '#fff',
                      cursor: 'pointer',
                      color: '#999'
                    }}>
                      <option>Order By</option>
                      <option>Newest First</option>
                      <option>Oldest First</option>
                      <option>Most Popular</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <select style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      background: '#fff',
                      cursor: 'pointer',
                      color: '#999'
                    }}>
                      <option>Month</option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <select style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      background: '#fff',
                      cursor: 'pointer',
                      color: '#999'
                    }}>
                      <option>Year</option>
                      <option>2025</option>
                      <option>2024</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="row g-4 mb-5">
            {filteredBlogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6">
              <Link href={`/knowledge/blog-${blog.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff',
                  border: '2px solid #e0e0e0',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    height: '220px',
                    backgroundImage: `url(/assets/img/${blog.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{
                      fontSize: '0.85rem',
                      color: getCategoryColor(blog.category),
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {getCategoryLabel(blog.category)}
                    </span>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      marginTop: '0.5rem',
                      marginBottom: '0.75rem',
                      color: '#000',
                      lineHeight: '1.4'
                    }}>
                      {blog.title}
                    </h4>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#666',
                      lineHeight: '1.6',
                      marginBottom: '1rem'
                    }}>
                      {blog.excerpt}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      color: '#999'
                    }}>
                      <span>{blog.date}</span>
                      <span style={{ color: getCategoryColor(blog.category), fontWeight: '600' }}>
                        {blog.category === 'multimedia' ? 'Watch Now →' : 'Read More →'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-12">
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                <button style={{
                  padding: '0.75rem 1.25rem',
                  border: '2px solid #28a745',
                  background: '#28a745',
                  color: '#fff',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  1
                </button>
                <button style={{
                  padding: '0.75rem 1.25rem',
                  border: '2px solid #e0e0e0',
                  background: '#fff',
                  color: '#333',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#28a745';
                  e.currentTarget.style.color = '#28a745';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.color = '#333';
                }}>
                  2
                </button>
                <button style={{
                  padding: '0.75rem 1.25rem',
                  border: '2px solid #e0e0e0',
                  background: '#fff',
                  color: '#333',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#28a745';
                  e.currentTarget.style.color = '#28a745';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.color = '#333';
                }}>
                  3
                </button>
                <button style={{
                  padding: '0.75rem 1.25rem',
                  border: '2px solid #e0e0e0',
                  background: '#fff',
                  color: '#333',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#28a745';
                  e.currentTarget.style.color = '#28a745';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.color = '#333';
                }}>
                  ...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(/assets/img/3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div style={{
                background: '#fff',
                border: '2px solid #e0e0e0',
                borderRadius: '15px',
                padding: '3rem 2rem'
              }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: '#000'
                }}>
                  Want to Stay Updated?
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#666',
                  marginBottom: '2rem'
                }}>
                  Subscribe to our newsletter and get the latest insights, guides, and updates delivered to your inbox.
                </p>
                <form className="d-flex gap-3 justify-content-center flex-wrap">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    style={{
                      flex: '1',
                      minWidth: '250px',
                      maxWidth: '400px',
                      padding: '0.875rem 1.5rem',
                      border: '2px solid #e0e0e0',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                  <button 
                    type="submit"
                    style={{
                      padding: '0.875rem 2.5rem',
                      background: 'linear-gradient(135deg, #fd9330 0%, #fc9546 100%)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </NextLayout>
  );
}
