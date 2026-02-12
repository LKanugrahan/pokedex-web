export const PokemonCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export const PokemonListSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <PokemonCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const PokemonDetailSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="h-48 bg-gray-300 rounded"></div>
        <div className="h-48 bg-gray-300 rounded"></div>
        <div className="h-48 bg-gray-300 rounded"></div>
      </div>

      <div className="space-y-4">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>
    </div>
  );
};
