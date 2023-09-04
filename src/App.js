import React, { useState, useEffect } from 'react';
import { database } from './Firebase/firebase';
import { ref, onValue, off } from 'firebase/database';
import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
// import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar';
function App() {
  const [data, setData] = useState(null);
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth <= 768); // 768px es un punto de ruptura común para dispositivos móviles

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    const dbRef = ref(database, 'clientes');
    const listener = onValue(dbRef, (snapshot) => {
      setData(snapshot.val());
    });

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
      off(dbRef, listener);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 768) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [windowWidth]);

  return (
    <div className="App">
      <h1>Datos de Firebase:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );

  // return (
  //   <div className="App">
  //     {/* <Navbar onMenuClick={handleSidebarOpen} windowWidth={windowWidth} />
  //     <Sidebar open={sidebarOpen} onClose={handleSidebarClose} windowWidth={windowWidth}  /> */}
  //     <main className="mt-14">
  //       {/* Contenido principal */}
  //     </main>
  //   </div>
  // );
}

export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Inicio from './Pages/Chocofrutas';
// // import Navbar from './Components/Navbar';

// function App() {
//   return (
//     <BrowserRouter>
//       {/* <Navbar /> */}
//       <Routes>
//         <Route path="/" element={<Inicio />} />
//         {/* <Route path="/choco" element={<Choco />} />
//         <Route path="/mini-jardines" element={<MiniJardines />} />
//         <Route path="/contacto" element={<Contacto />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// // export default App;
