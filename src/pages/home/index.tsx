import { getPartnerCommit } from "@/api/partner-commit";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import List from "./_components/list";
import { UserContext } from "./_hooks/use-context-user";
import { Button } from "@/components/button";
import { useShareUserState } from "./_hooks/use-share-user-state";
import Banner from "./_components/banner";

export default function HomePage() {
  const setUser = useShareUserState((state) => state.setUser);

  const [listProduct, setListProduct] = useState([]);

  const handleGetPartnerCommit = async () => {
    try {
      const res = await getPartnerCommit();
      setListProduct(res as unknown as []);
      setUser(res as unknown as []);
    } catch (error) {
      toast("Get data has error" + JSON.stringify(error));
    }
  };

  useEffect(() => {
    handleGetPartnerCommit();
  }, []);

  const addUser = useShareUserState((state) => state.addUser);

  return (
    <UserContext.Provider
      value={{
        list: listProduct,
      }}
    >
      <Banner />
      <List />
      <Button onClick={() => addUser(listProduct[1])}>Add User</Button>
    </UserContext.Provider>
  );
}
