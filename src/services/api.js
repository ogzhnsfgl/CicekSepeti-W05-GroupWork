export const getData = async (id) => {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  const url = id ? `${baseUrl}/${id}` : baseUrl;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return { error: null, data };
  } catch (error) {
    console.log(error);
  }
};
