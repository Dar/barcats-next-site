import Dashboard from "../components/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";



export default function Admin() {
  return (
      <ProtectedRoute>
        <main className=" mt-56 w-full flex lg:flex-row flex-col items-center gap-5 flex-wrap justify-center">
          <Dashboard />
        </main>
      </ProtectedRoute>
  );
}
