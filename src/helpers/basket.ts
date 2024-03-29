import { computed } from "vue";
import { useStore } from "vuex";

import type { IRootStore } from "@/store/types";

const helperBasket = () => {
  const $store = useStore<IRootStore>();

  const numberProductToBasket = computed(() =>
    $store.state.basket.items.reduce(
      (numberProduct: number, item: any) => numberProduct + item.quantity,
      0
    )
  );

  const numberProductToOrder = computed(() => {
    return $store.state.basket.order
      ? $store.state.basket.order.basket.items.reduce(
          (numberProduct: number, item: any) => numberProduct + item.quantity,
          0
        )
      : 0;
  });

  const totalPrice = computed(() => {
    return $store.state.basket.items.reduce((totalPrice: number, item: any) => {
      return totalPrice + item.price * item.quantity;
    }, 0);
  });

  return {
    numberProductToBasket,
    numberProductToOrder,
    totalPrice,
  };
};

export default helperBasket;
