import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  result.map((item, i) => {
    console.log(item.title);
    console.log(item.content);
  });

  return (
    <div className="list-bg">
      {result.map((item, i) => (
        <div className="list-item" key={i}>
          <Link href={`detail/${item._id}`}>{item.title}</Link>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
