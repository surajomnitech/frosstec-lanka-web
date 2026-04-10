'use client';

export default function ExampleSection() {
  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading mb-4">Professional HVAC Solutions</h1>
            <p className="subheading">Industrial Refrigeration Excellence</p>
            <p className="text-muted mt-4 text-lg">
              Leading provider of commercial and industrial refrigeration systems in Sri Lanka
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary rounded-lg mb-4"></div>
              <h3 className="subheading mb-3">Cold Storage Systems</h3>
              <p className="text-muted">
                State-of-the-art refrigeration solutions for large-scale cold storage facilities
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-accent rounded-lg mb-4"></div>
              <h3 className="subheading mb-3">Commercial HVAC</h3>
              <p className="text-muted">
                Energy-efficient heating and cooling systems for commercial buildings
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-light rounded-lg mb-4"></div>
              <h3 className="subheading mb-3">Industrial Cooling</h3>
              <p className="text-muted">
                Specialized cooling solutions for industrial processes and manufacturing
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="btn-primary mr-4">
              Get Quote
            </button>
            <button className="btn-secondary">
              View Projects
            </button>
          </div>

          {/* Features Section */}
          <div className="mt-16 pt-16 border-t border-default">
            <h2 className="heading mb-8 text-center">Why Choose Frosstec Lanka</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-primary-dark mb-2">24/7 Support</h4>
                  <p className="text-muted">Round-the-clock technical support and maintenance services</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-primary-dark mb-2">Energy Efficient</h4>
                  <p className="text-muted">Sustainable solutions that reduce operational costs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-primary-dark mb-2">Expert Team</h4>
                  <p className="text-muted">Certified technicians with decades of experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-primary-dark mb-2">Quality Guaranteed</h4>
                  <p className="text-muted">ISO certified processes and premium equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
