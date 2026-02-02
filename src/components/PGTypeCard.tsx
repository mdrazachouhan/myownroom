import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface PGTypeCardProps {
  title: string;
  description: string;
  image: string;
  icon: any;
  path: string;
  index: number;
}

const PGTypeCard = ({
  title,
  description,
  image,
  icon: Icon,
  path,
  index,
}: PGTypeCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        onClick={() => navigate(path)}
        className="cursor-pointer overflow-hidden group"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            className="w-full h-full object-cover group-hover:scale-110 transition"
          />
        </div>

        <CardContent className="p-5 text-center">
          <Icon className="mx-auto mb-3 text-orange-500" size={36} />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PGTypeCard;
