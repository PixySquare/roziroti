import BlogComponent from "../components/BlogComponent";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroComponent from "../components/IntroComponent";
import styles from "../styles/Blogs.module.css";

function blogs() {
  return (
    <div>
      <Header />
      <IntroComponent />
      <BlogComponent />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default blogs;
