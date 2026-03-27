import { Spinner } from "@/shared/component/ui/spinner";

const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300">
      <div className="flex flex-col items-center gap-3">
        <Spinner />

        <p className="text-sm text-green-800">Loading...</p>
      </div>
    </div>
  );
};

export default loading;
