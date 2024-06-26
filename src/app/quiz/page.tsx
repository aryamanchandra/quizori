import React from "react";

import { auth} from "@clerk/nextjs";

import { redirect } from "next/navigation";
import QuizCreation from "@/components/forms/QuizCreation";
import Providers from '@/components/Providers';

export const metadata = {
  title: "Quiz | Quizorithm",
  description: "Quiz yourself on anything!",
};

interface Props {
  searchParams: {
    topic?: string;
  };
}

const Quiz = async ({ searchParams }: Props) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  return <Providers><QuizCreation topic={searchParams.topic ?? ""} /></Providers>;
};

export default Quiz;
