import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("forum");
  // get every data in post collection and array it.
  const result = await db.collection("post").find().toArray();

  return (
    <div>
      <h1>Hello</h1>

      <h1>{result[0].title}</h1>
    </div>
  );
}
