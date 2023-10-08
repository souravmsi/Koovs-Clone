const verifyUser = async (token) => {
  const response = await fetch(
    "https://koovs-backend.onrender.com/api/auth/get-user",
    {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    }
  );

  if (!response.ok) {
    return { auth: failed };
  } else {
    const { name, email } = await response.json();
    return { name, email, auth: true };
  }
};

export default verifyUser;
