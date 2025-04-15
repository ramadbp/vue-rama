export async function getUsers() {
  const response = await fetch("https://vue-rama.rdan60404.workers.dev/api/produks");
  return await response.json();
}
