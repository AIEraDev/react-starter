import AppAside from "~/components/app-aside";
import AppNavbar from "~/components/app-navbar";

export default function AppLayout() {
  return (
    <div className="h-screen ">
      <AppAside />

      <main>
        <AppNavbar />

        <div></div>
      </main>
    </div>
  );
}
