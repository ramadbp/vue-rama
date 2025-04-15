export async function onRequest(context) {
  const { request, env } = context;
  const { pathname } = new URL(request.url);

  if (pathname === "/api/produks") {
    const result = await env.DB.prepare("SELECT * FROM produk").all();
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Not found", { status: 404 });
}
