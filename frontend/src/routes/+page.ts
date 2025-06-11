export async function load() {
	const res = await fetch('https://japanesewebapp.onrender.com');
	const users = await res.json();
	return { users };
}