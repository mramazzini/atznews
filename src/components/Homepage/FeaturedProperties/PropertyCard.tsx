import { Property } from "@/lib/types";
import Image from "next/image";
import "@/lib/string.extensions";
interface Props {
  property: Property;
}
const PropertyCard = ({ property }: Props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl cursor-pointer">
      <figure>
        <Image
          src={property.image}
          alt={property.location}
          width="500"
          height="500"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {property.location}
          {property.new && <div className="badge badge-secondary">NEW !</div>}
          {property.inDemand && (
            <div className="badge badge-accent">HOT 🔥</div>
          )}
        </h2>
        <p>{property.description}</p>
        <div className="card-actions justify-end">
          {property.tags?.map((tag) => (
            <div key={tag} className="badge badge-outline">
              {tag.toCapitalCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
