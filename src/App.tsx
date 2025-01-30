import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { heroContent, featuredCoffees, aboutContent } from "@/data/coffee";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="coffee-theme">
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="pt-16 md:pt-20 lg:pt-24">
          <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {heroContent.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-6">
                  {heroContent.subtitle}
                </p>
                <p className="text-base sm:text-lg mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                  {heroContent.description}
                </p>
                {/* CTA Button */}
                <motion.a
                  href="#menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 bg-primary dark:text-black text-white text-sm sm:text-lg font-medium rounded-xl shadow-md hover:bg-primary-dark transition-all"
                >
                  {heroContent.cta}
                </motion.a>
              </motion.div>

              {/* Image Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-first lg:order-last"
              >
                <img
                  src={heroContent.image}
                  alt="Coffee"
                  className="rounded-lg shadow-xl w-full max-w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>


        {/* Featured Coffee Section */}
        <section id="menu" className="bg-muted/50 py-12 md:py-16 lg:py-20">
          <div className="max-w-screen-xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
            >
              Featured Coffees
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredCoffees.map((coffee, index) => (
                <motion.div
                  key={coffee.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <img
                      src={coffee.image}
                      alt={coffee.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {coffee.name}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      {coffee.description}
                    </p>
                    <p className="text-base sm:text-lg font-bold">
                      {coffee.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-16 lg:py-20">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  {aboutContent.title}
                </h2>
                <p className="text-base sm:text-lg mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                  {aboutContent.description}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-first lg:order-last"
              >
                <img
                  src={aboutContent.image}
                  alt="About Us"
                  className="rounded-lg shadow-xl w-full max-w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted/50 py-12 md:py-16 lg:py-20">
          <div className="max-w-screen-md mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-8 md:mb-10"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Have questions? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
