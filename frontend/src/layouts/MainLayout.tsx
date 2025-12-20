import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
