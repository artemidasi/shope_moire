<template>
  <li class="catalog__item">
    <router-link
      :to="{
        name: 'SeparateProductPage',
        params: {
          id: product.id,
        },
      }"
    >
      <img
        class="catalog__image"
        :src="actualPhotoLink ? actualPhotoLink : NoProduct"
        alt="Название товара"
      />
    </router-link>
    <div class="catalog__info">
      <h3 class="catalog__title">
        <a href="#"> {{ product.title }} </a>
      </h3>

      <span class="catalog__price"> {{ product.price }} ₽ </span>

      <ul class="colors colors--black">
        <li
          :key="color.id"
          v-for="(color, index) in product.colors"
          class="colors__item"
        >
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              type="radio"
              name="color-1"
              @input="togglePhoto(color)"
              :checked="index === 0"
            />
            <span
              class="colors__value"
              :style="{
                background: color.color.code,
                border: '1px solid black',
              }"
            >
            </span>
          </label>
        </li>
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import NoProduct from "@/assets/image/no-photo-product.jpeg";

export default defineComponent({
  props: {
    product: {
      type: Object,
    },
  },
  setup(props) {
    const actualPhotoLink = ref<string>(
      props.product && props.product.colors[0].gallery
        ? props.product.colors[0].gallery[0].file.url
        : ""
    );

    const togglePhoto = (colorInfo: any) => {
      actualPhotoLink.value = colorInfo.gallery
        ? colorInfo.gallery[0].file.url
        : NoProduct;
    };

    return {
      actualPhotoLink,
      togglePhoto,

      NoProduct,
    };
  },
});
</script>

<style lang="scss" scoped>
.catalog {
  &__info {
    padding: 10px;
  }

  &__item {
    &:hover {
      box-shadow: 0 0 10px black;
    }
  }

  &__image {
    width: 100%;
  }
}
</style>
