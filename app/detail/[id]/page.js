import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  // Search for _id using detail:id's params

  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <>
      {!result ? (
        <h1>Not found</h1>
      ) : (
        <div>
          <h4>Detail page</h4>
          <h4>{result.title}</h4>
          <p>{result.content}</p>
        </div>
      )}
    </>
  );
}
