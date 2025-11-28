import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Help & Support" />
      
      <section className="service-details-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="service-details-content">
                <h2>Help & Support</h2>
                <p>We're here to help you with any questions or concerns you may have.</p>
                
                <div className="mt-5">
                  <h3>Contact Us</h3>
                  <p>For immediate assistance, please reach out to our support team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default page;