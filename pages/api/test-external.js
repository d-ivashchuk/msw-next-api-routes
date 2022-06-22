import { server } from "../../mocks/server";

export default async function handler(req, res) {
  server.listen();

  const x = await fetch("https://jsonplaceholder.typicode.com/posts");
  const y = await x.json();

  res.status(200).json(y);
}
