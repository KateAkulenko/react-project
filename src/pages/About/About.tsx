import { Outlet } from "react-router";

function About() {
  return (
    <>
      <h1>About page</h1>
      <Outlet />
    </>
  );
}

export default About;
