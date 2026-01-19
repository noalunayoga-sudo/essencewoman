import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Retreat } from "@/data/retreats";
import { Calendar, MapPin, Users } from "lucide-react";

interface RetreatCardProps {
  retreat: Retreat;
}

const RetreatCard = ({ retreat }: RetreatCardProps) => {
  const isSoldOut = retreat.status === "sold-out" || retreat.spotsLeft === 0;

  return (
    <div className="gradient-card rounded-3xl overflow-hidden shadow-elevated hover:shadow-2xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={retreat.image}
          alt={retreat.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Status Badge */}
        {isSoldOut ? (
          <span className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full font-body text-sm">
            אזל
          </span>
        ) : (
          <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-body text-sm">
            {retreat.spotsLeft} מקומות פנויים
          </span>
        )}
        
        {/* Title on Image */}
        <div className="absolute bottom-4 right-4 left-4">
          <h3 className="font-display text-3xl text-white drop-shadow-lg">
            {retreat.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-body text-foreground/80 mb-4">
          {retreat.subtitle}
        </p>

        {/* Details */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span className="font-body">{retreat.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span className="font-body">{retreat.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span className="font-body">{retreat.spots} משתתפות</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-display text-2xl text-primary">₪{retreat.price}</span>
          {retreat.originalPrice && (
            <span className="font-body text-muted-foreground line-through">₪{retreat.originalPrice}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="default" className="flex-1" asChild>
            <Link to={`/retreat/${retreat.id}`}>
              פרטים נוספים
            </Link>
          </Button>
          {!isSoldOut && (
            <Button variant="whatsapp" asChild>
              <a
                href={retreat.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                להרשמה
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RetreatCard;
