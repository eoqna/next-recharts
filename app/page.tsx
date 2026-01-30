import Button from "@/feature/components/Button";

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center font-sans">
      <Button text="Area Chart" path="/area" />
      <Button text="Line Chart" path="/line" />
      <Button text="Bar Chart" path="/bar" />
    </div>
  );
}
