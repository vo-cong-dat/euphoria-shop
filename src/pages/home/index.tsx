import { getPartnerCommit } from "@/api/partner-commit";
import { useEffect } from "react";
import { toast } from "sonner";

export default function HomePage() {
  const handleGetPartnerCommit = async () => {
    try {
      const res = getPartnerCommit();

      console.log(res);
    } catch (error) {
      toast("Get data has error" + JSON.stringify(error));
    }
  };

  useEffect(() => {
    handleGetPartnerCommit();
  }, []);

  return <div>HomePage</div>;
}
