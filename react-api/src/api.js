export const fetchRandomUser = async () => {
  const res = await fetch('https://randomuser.me/api/');
  if (!res.ok) throw new Error('Failed to fetch user');
  const data = await res.json();
  return data.results[0];
};