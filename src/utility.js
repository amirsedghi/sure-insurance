export function formatForm(form) {
  const { first_name, last_name, line_1, line_2, city, region, postal } = form;

  return JSON.stringify({
    first_name,
    last_name,
    address: { line_1, line_2, city, region, postal }
  });
}

export async function getPostRequest(url, body) {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: body
  });
}
