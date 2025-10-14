import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import ElectricBorder from "./ElectricBorder";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
}

export default function EventCard({ title, date, description }: EventCardProps) {
  return (
    <ElectricBorder color="#fa0e22ff" speed={1} thickness={2} style={{ borderRadius: 16 }}>
      <Card className="max-w-sm cursor-pointer transition-transform hover:scale-105 hover:shadow-lg">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </ElectricBorder>
  );
}
