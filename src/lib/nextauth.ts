import { auth } from "@clerk/nextjs";

const getAuthSession = async function () {
  const { userId } = auth();
  if (!userId) return null;
  return {
    userId: userId,
  };
};

export { getAuthSession };
