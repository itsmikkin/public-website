
import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group glass rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]",
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-primary w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
