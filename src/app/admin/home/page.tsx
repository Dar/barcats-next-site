import dynamic from "next/dynamic";

const ProtectedRoute = dynamic(
  () => import("@/app/components/ProtectedRoute"),
  { ssr: false }
);
const HomeForm = dynamic(() => import("@/app/components/HomeForm"), {
  ssr: false,
});

const isClient = typeof window !== "undefined";

export default function HomePage() {
  return (
    <ProtectedRoute>
      <section
        className={`feature-height items-center justify-center flex px-10 py-10 bg-fit ${
          isClient ? "bg-fixed" : ""
        } bg-cover md:bg-cover`}
      >
        <div>
          <h1 className="text-center text-lg font-bold">Home Page Admin</h1>
          <HomeForm />
        </div>
      </section>
    </ProtectedRoute>
  );
}
