import { cardData } from "@/feature/mitra/produk/data/data";
import CardProduct from "@/feature/mitra/produk/components/CardProduct";

const MitraProductGrid = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 md:gap-20">
      {cardData.map((item) => (
        <CardProduct
          key={item.id}
          data={item}
          onEdit={() => undefined}
          onDelete={() => undefined}
        />
      ))}
    </div>
  );
};

export default MitraProductGrid;

