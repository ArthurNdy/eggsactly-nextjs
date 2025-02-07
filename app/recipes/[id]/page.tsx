import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../constants";

type PageProps = {
  params: Promise<{ id: string }>;
};
export async function generateStaticParams() {
  const recipeIds = ["soft-boiled", "hard-boiled", "poached"];
  return recipeIds.map((id) => ({
    id,
  }));
}
export default async function RecipeDetailPage({ params }: PageProps) {
  const { id } = await params;

  // This would typically come from a database or API
  const recipeDetails = {
    "soft-boiled": {
      title: "Soft Boiled Egg",
      time: "6 minutes",
      image: IMAGES.SOFT_BOILED,
      instructions: [
        "Bring water to a gentle boil",
        "Gently lower egg into water",
        "Set timer for 6 minutes",
        "Prepare ice bath",
        "Remove egg and place in ice bath",
        "Peel and enjoy!",
      ],
      tips: "For the perfect runny yolk, timing is crucial. Start with room temperature eggs.",
    },
    "hard-boiled": {
      title: "Hard Boiled Egg",
      time: "8 minutes",
      image: IMAGES.HARD_BOILED,
      instructions: [
        "Bring water to a gentle boil",
        "Gently lower egg into water",
        "Set timer for 8 minutes",
        "Remove egg and place in ice bath",
        "Peel and enjoy!",
      ],
      tips: "For the perfect hard-boiled egg, timing is crucial. Start with room temperature eggs.",
    },
    poached: {
      title: "Poached Egg",
      time: "3 minutes",
      image: IMAGES.POACHED,
      instructions: [
        "Bring water to a gentle boil",
        "Gently lower egg into water",
        "Set timer for 3 minutes",
        "Remove egg and place in ice bath",
        "Peel and enjoy!",
      ],
      tips: "For the perfect poached egg, timing is crucial. Start with room temperature eggs.",
    },
  };

  const recipe = recipeDetails[id as keyof typeof recipeDetails];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <Link
        href="/recipes"
        className="text-sm hover:underline mb-8 inline-block"
      >
        ← Back to recipes
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-xl text-gray-600 mb-8">
          Cooking time: {recipe.time}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="font-mono text-gray-400">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Pro Tips</h2>
            <p className="text-gray-600">{recipe.tips}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
