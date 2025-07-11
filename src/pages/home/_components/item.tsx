interface IProps {
  data: unknown;
}
// unknown !== any
export default function Item({ data }: IProps) {
  return <div className="w-1/4 overflow-hidden">{JSON.stringify(data)}</div>;
}
