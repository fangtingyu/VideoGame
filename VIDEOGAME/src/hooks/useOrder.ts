import useData from "./useData";

interface Order {
    id: number;
    name: string;
    slug: string;
}

const useOrder = () => useData<Order>('/ordering');

export default useOrder;