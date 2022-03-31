import SEO from "./SEO";

const Layout = ({ children }) => {
  return (
    <div className="bg-bc min-h-screen">
      <SEO />
      {children}
    </div>
  );
};

export default Layout;
