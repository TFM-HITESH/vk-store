import { db } from "@/lib/db";

export const addData = async () => {
  console.log("testing if database is working");
  const res = await db.device.create({ data: { name: "nothing phone 1" } });
  console.log("data added properly");
  console.log(res);
};
