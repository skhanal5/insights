import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Goals() {
  return (
    <Tabs defaultValue="new goals" className="w-full bg-white rounded-lg shadow p-5">
      <TabsList>
        <TabsTrigger value="new goals">New Goals</TabsTrigger>
        <TabsTrigger value="in progress">In Progress</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>
      <TabsContent value="new goals">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="in progress">in progress</TabsContent>
      <TabsContent value="completed">completed</TabsContent>
    </Tabs>
  );
}
