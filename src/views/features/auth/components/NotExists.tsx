import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router";
import Button from "@components/Button/Button";

const NotExists = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10">
      <h2 className="font-prata text-3xl font-medium text-white">
        This page not exists, please go back.
      </h2>
      <Button
        type="border"
        onClick={() => navigate(-1)}
        text="Go Back"
        CustomIco={<SlArrowRight className="rotate-180" />}
        className="flex-row-reverse"
      />
    </div>
  );
};

export default NotExists;
