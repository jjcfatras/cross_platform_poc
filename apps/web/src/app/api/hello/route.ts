export async function GET(request: Request) {
  console.log(await request.json());
  return new Response("Hello, from API!");
}
