import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const storeEmail = async (
  name: string,
  email: string,
  source: string
) => {
  const supabase = createServerComponentClient({ cookies });

  try {
    const { data, error } = await supabase
      .from("emails")
      .insert([{ name, email, source }])
      .select();

    if (data) {
      return {
        message: "success",
        data,
      };
    }

    if (error) {
      return {
        message: "error",
        error,
      };
    }
  } catch (error) {
    return error;
  }
};
