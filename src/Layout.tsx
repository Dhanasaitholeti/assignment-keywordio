import Navbar from "./components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="m-5 md:m-10">{children}</main>
    </>
  );
};

export default Layout;
