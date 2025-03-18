import { getRecipeInfo } from "@/app/utils/fetchUtils";
import { IIngredients } from "@/app/types/types";

const ReciepPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await getRecipeInfo(id);

  if (!data) return <div>Error fetching data</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <ul>
        <span className="text-xl">Ingredients:</span>
        {data.extendedIngredients.map((e: IIngredients) => (
          <li key={e.id}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReciepPage;
