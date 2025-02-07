import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../constants";

export default function RecipesPage() {
  const recipes = [
    {
      id: "soft-boiled",
      title: "Soft Boiled",
      time: "6 minutes",
      image: IMAGES.SOFT_BOILED,
    },
    {
      id: "hard-boiled",
      title: "Hard Boiled",
      time: "8 minutes",
      image: IMAGES.HARD_BOILED,
    },
    {
      id: "poached",
      title: "Poached",
      time: "3 minutes",
      image: IMAGES.POACHED,
    },
    // Add more recipes as needed
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <header className="mb-12">
        <Link href="/" className="text-sm hover:underline mb-8 inline-block">
          ← Back to home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Egg Recipes</h1>
        <p className="text-gray-600">Select your preferred egg style</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.id}`}
            className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
          >
            <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-500">Cooking time: {recipe.time}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
