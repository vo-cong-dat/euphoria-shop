import { useShareUserState } from "../_hooks/use-share-user-state";
import Item from "./item";

export default function List() {
  const users = useShareUserState((state) => state.list);

  return (
    <div className="flex flex-wrap gap-4">
      {(users as unknown as []).map((user, index) => (
        <Item key={index} data={user} />
      ))}
    </div>
  );
}
