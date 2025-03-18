import { IResponse } from "@/app/types/types";
import { getRecipes } from "@/app/utils/fetchUtils";
import RecipeCard from "@/app/components/RecipeCard/RecipeCard";
// import { Suspense } from "react";

interface ISearchParams {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
}

const RecipesPage = async ({
  searchParams,
}: {
  searchParams: Promise<ISearchParams>;
  }) => {
  const { query, cuisine, maxReadyTime } = await searchParams;
  const data = await getRecipes(query, cuisine, maxReadyTime);
  if (!data) return <div>Error fetching data</div>;
  return (
    <div className="p-4">
      {/* <Suspense fallback={<div>Loading recipes...</div>}> */}
        <div className="flex flex-wrap gap-4">
          {data.length === 0 ? (
            <div>No data found by your request</div>
          ) : (
            data?.map((d: IResponse) => (
              <RecipeCard
                key={d.id}
                id={d.id}
                title={d.title}
                imgUrl={d.image}
              />
            ))
          )}
        </div>
      {/* </Suspense> */}
    </div>
  );
};

export default RecipesPage;
