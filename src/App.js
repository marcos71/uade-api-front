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
import SignIn from './views/Login';
import { AuthProvider } from './contexts/UserAuth';
import { RequireAuth } from './RequireAuth';
import SignUp from './views/SignUp';
import CursosAlumno from './views/CursosAlumno';
import CursosProfesor from './views/CursosProfesor';
import NuevoCurso from './views/NuevoCurso';
import Curso from './views/Curso';
import CursoAlumno from './views/CursoAlumno';
import SolicitudesAlumno from './views/SolicitudesAlumno';
import SolicitudesProfesor from './views/SolicitudesProfesor';
import BuscarCursos from './views/BuscarCursos';
import LandingPage from './views/LandingPage';
import CursoAlumnoCompra from './views/CursoAlumnoCompra';
import OlvidePassword from './views/OlvidePassword';

function App() {
  const [user, setUser] = useState();
  return (

    <AuthProvider>
      <Routes>
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/olvidePassword' element={<OlvidePassword />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='home' element={<RequireAuth />}>
          <Route path="alumno">
            <Route index element={<BuscarCursos />} />
            <Route path="cursos" element={<CursosAlumno />} />
            <Route path="solicitudes" element={<SolicitudesAlumno />} />
            <Route path="curso/:id" element={<CursoAlumno />} />
            <Route path="contratar/curso/:id" element={<CursoAlumnoCompra />} />
          </Route>
          <Route path="profesor">
            <Route index element={<CursosProfesor />} />
            <Route path="nuevoCurso" element={<NuevoCurso />} />
            <Route path="solicitudes" element={<SolicitudesProfesor />} />
            <Route path="curso/:id" element={<Curso />} />
          </Route>
          <Route path="perfilAlumno" element={<PerfilEstudiante />} />
          <Route path="perfilProfesor" element={<PerfilProfesor />} />
        </Route>


      </Routes>
    </AuthProvider >
  );
}

export default App;
