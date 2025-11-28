import Link from "next/link";

const Breadcrumb = ({ pageName = "About Company", pageTitle }) => {
  return (
    <div
      className="breadcrumb-wrapper section-padding bg-cover"
      style={{ 
        backgroundImage: 'url("/assets/img/2.jpg")'
      }}
    >
      <div className="container">
        <div className="page-heading">
          <h1 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: '#1a1a1a' }}>
            {pageTitle ? pageTitle : pageName}
          </h1>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s" style={{ color: '#333' }}>
            <li>
              <Link href="/" style={{ color: '#333' }}>Home</Link>
            </li>
            <li>
              <i className="fas fa-chevron-right" style={{ color: '#333' }} />
            </li>
            <li className="style-2" style={{ color: '#1a1a1a', fontWeight: '600' }}>{pageName}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
