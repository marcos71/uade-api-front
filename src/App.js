import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import PerfilEstudiante from './views/PerfilEstudiante';
import PerfilProfesor from './views/PerfilProfesor';
import ResponsiveAppBar from './components/Navbar';
import SignIn from './views/Login';
import { AuthProvider } from './contexts/UserAuth';
import { RequireAuth } from './RequireAuth';
import Home from './views/BuscarCursos';
import SignUp from './views/SignUp';
import CursosAlumno from './views/CursosAlumno';
import CursosProfesor from './views/CursosProfesor';
import Prueba from './views/Prueba';
import NuevoCurso from './views/NuevoCurso';
import Curso from './views/Curso';
import CardProfCurso from './components/CardCursoProfesor';
import CursoAlumno from './views/CursoAlumno';
import SolicitudesAlumno from './views/SolicitudesAlumno';
import SolicitudesProfesor from './views/SolicitudesProfesor';
import BuscarCursos from './views/BuscarCursos';
import LandingPage from './views/LandingPage';
import CursoAlumnoCompra from './views/CursoAlumnoCompra';
import OlvidePassword from './views/OlvidePassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PerfilEstudiante />} />
      <Route path="/profesor" element={<PerfilProfesor />} />
    </>
  )
);

function App() {
  const [user, setUser] = useState();
  return (

    <AuthProvider>
      <Routes>
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/olvidePassword' element={<OlvidePassword />} />
        <Route path='/' element={<LandingPage />}/>
        <Route path='home' element={<RequireAuth />}>
          <Route path="alumno">
            <Route index element={<BuscarCursos />} />
            <Route path="cursos" element={<CursosAlumno />}/>
            <Route path="solicitudes" element={<SolicitudesAlumno />}/>
            <Route path="curso/:id" element={<CursoAlumno />}/>
            <Route path="contratar/curso/:id" element={<CursoAlumnoCompra />}/>
          </Route>
          <Route path="profesor">
            <Route index element={<CursosProfesor />}/>
            <Route path="nuevoCurso" element={<NuevoCurso />}/>
            <Route path="solicitudes" element={<SolicitudesProfesor />}/>
            <Route path="curso/:id" element={<Curso />}/>
          </Route>
          <Route path="perfilAlumno" element={<PerfilEstudiante />}/>
          <Route path="perfilProfesor" element={<PerfilProfesor />}/>
          <Route path='prueba'>
            <Route index element={<Prueba />}/>
            <Route path=":id" element={<CardProfCurso />}/>  
          </Route>
        </Route>

        
      </Routes>
    </AuthProvider >
  );
}
//FUNCA
/*<AuthProvider>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/login' element={<SignIn />} />

        <Route index path="/alumno" element={
          <RequireAuth>
            <PerfilEstudiante />
          </RequireAuth>
        } />
        <Route path="/profesor" element={
          <RequireAuth >
            <PerfilProfesor />
          </RequireAuth>
        } />


      </Routes>
    </AuthProvider >*/

/* <Route path="/" element={<RequireAuth />}>
          <Route index path="/alumno" element={<PerfilEstudiante />} />
          <Route path="/profesor" element={<PerfilProfesor />} />
        </Route>*/

/*<UserContext.Provider value={{ user, setUser }}>
      <ResponsiveAppBar/>
      <Routes>
          <Route path="/" element={<PerfilEstudiante/>}/>
          <Route path="profesor" element={<PerfilProfesor/>}/>
      </Routes>
    </UserContext.Provider>
    */

/*
<Routes>
          <Route path="/" element={<PerfilEstudiante/>}/>
          <Route path="/profesor" element={<PerfilProfesor/>}/>
      </Routes>
      */

export default App;
