<template>
  <header class="header container">
    <div class="header__wrapper">
      <span class="header__info">
        <router-link
          :to="{
            name: 'ProductsPage',
          }"
          >Каталог
        </router-link>
      </span>

      <router-link
        class="header__logo"
        :to="{
          name: 'ProductsPage',
        }"
      >
        <svg
          width="116"
          height="34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M34.935 14.57c-1.533-1.63-3.667-2.444-6.399-2.444a8.096 8.096 0 00-4.215 1.127 8.555 8.555 0 00-3.016 2.996 7.419 7.419 0 00-2.9-3.054 8.463 8.463 0 00-4.292-1.069 7.814 7.814 0 00-3.905.936 6.756 6.756 0 00-2.578 2.545v-3.29H0V33.72h7.617V22.357a3.697 3.697 0 01.986-2.767c.358-.334.78-.593 1.243-.76.462-.167.953-.24 1.445-.214a3.55 3.55 0 011.388.216c.443.164.848.415 1.19.738a3.574 3.574 0 01.953 2.698V33.72h7.605V22.357a3.696 3.696 0 01.986-2.767 3.62 3.62 0 011.242-.76c.462-.167.954-.24 1.445-.214.473-.021.945.052 1.388.216.443.164.848.415 1.19.738a3.571 3.571 0 01.967 2.698V33.72h7.591V21.288c0-2.85-.767-5.09-2.3-6.718zm22.421-1.21a9.755 9.755 0 014.04 3.818A11.28 11.28 0 0162.866 23a11.25 11.25 0 01-1.47 5.84 9.921 9.921 0 01-4.04 3.818 13.371 13.371 0 01-5.83 1.336 13.37 13.37 0 01-5.828-1.336 9.89 9.89 0 01-4.06-3.818 11.247 11.247 0 01-1.47-5.84 11.247 11.247 0 011.437-5.822 9.762 9.762 0 014.06-3.817 13.548 13.548 0 0111.69 0zm-8.481 6.325a4.768 4.768 0 00-1.044 3.321 4.824 4.824 0 001.044 3.36c.326.369.731.663 1.185.86.455.198.947.295 1.444.285a3.332 3.332 0 002.578-1.165 4.838 4.838 0 001.044-3.34 4.769 4.769 0 00-1.044-3.321 3.342 3.342 0 00-1.16-.855 3.382 3.382 0 00-1.418-.29 3.427 3.427 0 00-1.444.284 3.373 3.373 0 00-1.185.86zm24.63-7.368V33.72h-7.617V12.317h7.617zm15.042.955a7.912 7.912 0 014.098-1.146v8.017h-2.204c-1.718 0-2.994.324-3.828.973-.833.65-1.263 1.775-1.289 3.379v9.225H77.72V12.317h7.617v4.009a9.876 9.876 0 013.21-3.054zM116 22.624a11.043 11.043 0 00-1.373-5.573 9.32 9.32 0 00-3.866-3.703 13.164 13.164 0 00-11.446 0 9.384 9.384 0 00-3.905 3.817 11.743 11.743 0 00-1.392 5.84 11.85 11.85 0 001.392 5.86 9.303 9.303 0 001.901 2.367 9.258 9.258 0 002.037 1.45A12.11 12.11 0 00105.044 34c.452 0 .904-.024 1.354-.07a11.313 11.313 0 003.557-.96 10.15 10.15 0 003.712-2.845 9.03 9.03 0 001.908-4.04h-8.043a2.676 2.676 0 01-1.005 1.413 3.078 3.078 0 01-1.856.534c-2.011 0-3.085-1.209-3.223-3.626h14.359a8.892 8.892 0 00.193-1.782zm-14.5-1.374a3.623 3.623 0 011.102-2.481 3.567 3.567 0 012.442-.84 3.33 3.33 0 012.32.84 3.08 3.08 0 01.903 2.48H101.5z"
              fill="#150C26"
            />
            <path
              d="M65.862 1.088A4.736 4.736 0 0169.084 0a4.593 4.593 0 013.223 1.088 3.584 3.584 0 011.198 2.768 3.392 3.392 0 01-.305 1.47c-.21.463-.522.873-.913 1.202a4.659 4.659 0 01-3.222 1.069 4.796 4.796 0 01-3.222-1.07 3.409 3.409 0 01-.926-1.197 3.367 3.367 0 01-.311-1.474 3.506 3.506 0 01.313-1.524 3.56 3.56 0 01.943-1.244zm-24.489 0A4.736 4.736 0 0144.596 0a4.593 4.593 0 013.222 1.088c.39.348.7.776.907 1.254.207.478.306.994.291 1.514a3.391 3.391 0 01-.305 1.47c-.21.463-.522.873-.913 1.202a4.659 4.659 0 01-3.222 1.069 4.795 4.795 0 01-3.222-1.07 3.409 3.409 0 01-.926-1.197 3.367 3.367 0 01-.311-1.474 3.506 3.506 0 01.313-1.524 3.56 3.56 0 01.943-1.244z"
              fill="#E02D71"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" d="M0 0h116v34H0z" />
            </clipPath>
          </defs>
        </svg>
      </router-link>

      <a class="header__tel" href="tel:8 800 600 90 09"> 8 800 600 90 09 </a>

      <router-link
        aria-label="Корзина с товарами"
        class="header__cart"
        :to="{
          name: 'BasketPage',
        }"
      >
        <svg
          width="25"
          height="27"
          viewBox="0 0 25 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.89472 0.751831C7.29407 0.751831 5.11623 2.70695 5.11623 5.2012V5.88602H4.09351C2.76256 5.88602 1.66495 6.92878 1.59679 8.25798L0.94622 20.9441C0.872931 22.3732 2.01193 23.5721 3.44294 23.5721H16.3465C17.7775 23.5721 18.9165 22.3732 18.8432 20.9441L18.1927 8.25798C18.1245 6.92878 17.0269 5.88602 15.6959 5.88602H14.6732V5.2012C14.6732 2.70695 12.4954 0.751831 9.89472 0.751831ZM14.6732 9.11431C14.8887 9.2697 15.0289 9.52287 15.0289 9.80881C15.0289 10.2814 14.6458 10.6645 14.1732 10.6645C13.7006 10.6645 13.3175 10.2814 13.3175 9.80881C13.3175 9.52287 13.4578 9.2697 13.6732 9.11431V6.88602H6.11623V9.11431C6.33169 9.2697 6.47193 9.52287 6.47193 9.80881C6.47193 10.2814 6.08882 10.6645 5.61623 10.6645C5.14365 10.6645 4.76054 10.2814 4.76054 9.80881C4.76054 9.52287 4.90078 9.2697 5.11623 9.11431V6.88602H4.09351C3.29494 6.88602 2.63638 7.51167 2.59548 8.30919L1.94491 20.9953C1.90093 21.8528 2.58434 22.5721 3.44294 22.5721H16.3465C17.2051 22.5721 17.8885 21.8528 17.8445 20.9953L17.194 8.3092C17.1531 7.51167 16.4945 6.88602 15.6959 6.88602H14.6732V9.11431ZM13.6732 5.88602V5.2012C13.6732 3.3331 12.02 1.75183 9.89472 1.75183C7.76949 1.75183 6.11623 3.3331 6.11623 5.2012V5.88602H13.6732Z"
            fill="black"
          />
        </svg>
        <span class="header__count" aria-label="Количество товаров">{{
          totalProductBasket
        }}</span>
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
// Vue
import { defineComponent, ref, watch } from "vue";
// Vuex
import { useStore } from "vuex";
// Types
import { IRootStore } from "@/store/types";

import helperBasket from "@/helpers/basket";

export default defineComponent({
  name: "Header",
  setup: () => {
    const $store = useStore<IRootStore>();

    const { numberProductToBasket } = helperBasket();

    const totalProductBasket = ref<number>(numberProductToBasket.value);

    watch(
      () => $store.state.basket,
      () => {
        totalProductBasket.value = $store.state.basket.items.reduce(
          (numberProduct: number, item: any) => {
            return numberProduct + (item.quantity as number);
          },
          0
        );
      }
    );

    return {
      totalProductBasket,
    };
  },
});
</script>
