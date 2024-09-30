"use-client";
import {
  ChatsCircle,
  NotionLogo,
  SignOut,
  UserCirclePlus,
} from "@/app/shared/Icons/Icons";
import * as React from "react";

export const Process = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 py-4">
      <div className="flex flex-1 gap-3 rounded border border-[#031330] bg-[#ffffff] p-4 flex-col">
        <div className="flex gap-4 items-center">
          <ChatsCircle
            desc="Bar Cats Commercial Cleaning Service | Consultation"
            color={"f77737"}
            size={24}
          />
          <h2 className="text-siteColor text-base font-bold leading-tight">
            Consultation
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-textColor text-sm font-normal leading-normal">
            We discuss your cleaning needs to offer the best solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-1 gap-3 rounded border border-[#031330] bg-[#ffffff] p-4 flex-col">
        <div className="flex gap-4 items-center">
          <NotionLogo
            desc="Bar Cats Commercial Cleaning Service | Customized Plan"
            color={"f77737"}
            size={24}
          />
          <h2 className="text-siteColor text-base font-bold leading-tight">
            Customized Plan
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-textColor text-sm font-normal leading-normal">
            A tailored cleaning plan to suit your schedule and preferences.
          </p>
        </div>
      </div>
      <div className="flex flex-1 gap-3 rounded border border-[#031330] bg-[#ffffff] p-4 flex-col">
        <div className="flex gap-4 items-center">
          <SignOut
            desc="Bar Cats Commercial Cleaning Service | Service Execution"
            color={"f77737"}
            size={24}
          />
          <h2 className="text-siteColor text-base font-bold leading-tight">
            Service Execution
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-textColor text-sm font-normal leading-normal">
            Our skilled professionals carry out the cleaning as per plan.
          </p>
        </div>
      </div>
      <div className="flex flex-1 gap-3 rounded border border-[#031330] bg-[#ffffff] p-4 flex-col">
        <div className="flex gap-4 items-center">
          <UserCirclePlus
            desc="Bar Cats Commercial Cleaning Service | Follow-up"
            color={"f77737"}
            size={24}
          />
          <h2 className="text-siteColor text-base font-bold leading-tight">
            Follow-up
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-textColor text-sm font-normal leading-normal">
            We ensure you&apos;re satisfied with our service and make any
            necessary adjustments.
          </p>
        </div>
      </div>
    </div>
  );
};
