import { Outlet } from "react-router-dom";
import NavBar from '../../components/NavBar';
import { Section } from "./style"
import Header from '../../components/Header';

export default function MainWrapper() {
  return (
    <>
      <Header />
      <Section>
        <Outlet />
      </Section>
      <NavBar />
    </>
  )
}