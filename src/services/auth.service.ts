const apiUrl = `${import.meta.env.VITE_APP_API_URL}auth/`;

export async function authByPassword(email: string, password: string) {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      const authToken = response.headers.get("x-auth-token");
      data.token = authToken;
      return data;
    }
    throw new Error(data.message || data.statusText);
  } catch (error: any) {
    throw new Error(error);
  }
}
