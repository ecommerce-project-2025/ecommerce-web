import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <h1 className="text-center text-2xl mt-10">Contenido de la página</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
