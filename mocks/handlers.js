import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/call", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "call-xxx",
        },
      ])
    );
  }),
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "call-xxx",
        },
      ])
    );
  }),
];
