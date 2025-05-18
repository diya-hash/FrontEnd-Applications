export const fetchCatFacts = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    if(!response.ok) throw new Error(console.error);
    const data = await response.json();
    return data;
}