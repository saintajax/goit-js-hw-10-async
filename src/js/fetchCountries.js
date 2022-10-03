export async function getCountryByName(country) {
  console.log('fetch');
  let serverRes = await fetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,capital,population,flags,languages`
  );
  return await serverRes.json();
}
