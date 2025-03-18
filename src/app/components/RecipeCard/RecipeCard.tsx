import Image from "next/image";
import Link from "next/link";

interface IReciepeCard {
  id: string;
  title: string;
  imgUrl?: string;
}
const RecipeCard: React.FC<IReciepeCard> = ({ id, title, imgUrl }) => {
  const fallBackImgUrl = 'https://img.spoonacular.com/recipes/716406-312x231.jpg';
  const renderImg = imgUrl ? imgUrl : fallBackImgUrl;
  return (
    <div>
      <Image width={200} height={200} src={renderImg} alt={title} />
      <Link href={`/recipe/${id}`}>
        <h4>{title}</h4>
      </Link>
    </div>
  );
};

export default RecipeCard;
