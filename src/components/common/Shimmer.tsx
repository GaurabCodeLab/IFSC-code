import { Skeleton } from "../ui/skeleton";

const Shimmer = () => {
  return (
    <div className="space-y-2" aria-live="polite" aria-busy="true">
      <h2 className="text-xl font-semibold">Bank Details</h2>
      <Skeleton className="h-4 w-[250px] bg-gray-300" />
      <Skeleton className="h-4 w-[200px] bg-gray-300" />
      <Skeleton className="h-4 w-[150px] bg-gray-300" />
      <Skeleton className="h-4 w-[180px] bg-gray-300" />
      <Skeleton className="h-4 w-[300px] bg-gray-300" />
    </div>
  );
};

export default Shimmer;
