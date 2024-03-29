import axios from "axios";

import {
  IProductsListProps,
  IInitialFilterProps,
  IProductInBasket,
} from "@/ITE/interface/product";

import { IOrderInformation } from "@/store/modules/Basket/types";

const BASE_PATH = "https://vue-moire.skillbox.cc/api";

const instance = axios.create({
  baseURL: BASE_PATH,
  method: "GET",
});

const initialPropsProductList: IInitialFilterProps = {
  limit: 12,
  page: 1,
};

// Отправить заказ
export const postOrder = async (
  token: string,
  information: IOrderInformation
) => {
  const orders = await instance({
    method: "POST",
    url: `/orders`,
    params: {
      userAccessKey: token,
    },
    data: information,
  });
  return orders.data;
};
// Получить ииформацию о заказе
export const getOrder = async (token: string, orderId: string) => {
  const orders = await instance({
    url: `/orders/${orderId}`,
    params: {
      userAccessKey: token,
      orderId,
    },
  });
  return orders.data;
};

// Получить корзину пользователя
export const getBasketUser = async (token?: string) => {
  const basket = await instance({
    url: `/baskets`,
    params: token
      ? {
          userAccessKey: token,
        }
      : {},
  });
  return basket.data;
};
// Добавить товар в корзину
export const addProductToBasket = async (
  token: string,
  productInformation: IProductInBasket
) => {
  const basket = await instance({
    method: "POST",
    url: `/baskets/products`,
    params: {
      userAccessKey: token,
    },
    data: productInformation,
  });

  return basket.data;
};
// Изменить количество товара в корзине по идентификатору его позиции в корзине
export const toggleProductToBasket = async (
  token: string,
  productInformation: {
    basketItemId: string;
    quantity: string;
  }
) => {
  const basket = await instance({
    method: "PUT",
    url: `/baskets/products`,
    params: {
      userAccessKey: token,
    },
    data: productInformation,
  });

  return basket.data;
};
// Удалить товар из корзины
export const removeProductFromBasket = async (token: string, id: string) => {
  const basket = await instance({
    method: "DELETE",
    url: `/baskets/products`,
    params: {
      userAccessKey: token,
    },
    data: {
      basketItemId: id,
    },
  });
  return basket.data;
};

// ------------------------------------------------------------------------------------

// Получить лист продуктов
export const getProductsList = async (
  numberPage: number,
  filter?: IProductsListProps
) => {
  const productList = await instance({
    url: "/products",
    params: filter
      ? {
          ...initialPropsProductList,
          categoryId: filter.categoryId,
          materialIds: filter.materialIds,
          seasonIds: filter.seasonIds,
          colorIds: filter.colorIds,
          minPrice: filter.maxPrice,
          maxPrice: filter.minPrice,
          page: numberPage ? numberPage : initialPropsProductList.page,
        }
      : initialPropsProductList,
  });
  return productList.data;
};
// Получить информацию о конкртеном продукте
export const getProductInfo = async (id: number) => {
  const product = await instance({
    url: `/products/${id}`,
  });

  return product.data;
};

// ------------------------------------------------------------------------------------

// Получить категории продуктов
export const getProductCategories = async () => {
  const responce = await instance({
    url: "/productCategories",
  });

  return responce.data.items;
};
// Получить информацию о сезонах
export const getProductSeasons = async () => {
  const seasons = await instance({
    url: `/seasons`,
  });
  return seasons.data.items;
};
// Получить информацию о материалах
export const getProductMaterial = async () => {
  const seasons = await instance({
    url: `/materials`,
  });
  return seasons.data.items;
};
// Получить информацию о цветах
export const getProductColor = async () => {
  const seasons = await instance({
    url: `/colors`,
  });
  return seasons.data.items;
};

// ------------------------------------------------------------------------------------
// Получить способ доставки
export const getDeliveries = async () => {
  const deliveries = await instance({
    url: `/deliveries`,
  });
  return deliveries.data;
};
// Получить способ доставки
export const getPayments = async (id: number) => {
  const payments = await instance({
    url: `/payments`,
    params: {
      deliveryTypeId: id,
    },
  });
  return payments.data;
};

// ------------------------------------------------------------------------------------

// Получить токен пользователя
export const getUserToken = async () => {
  const token = await instance({
    url: `/users/accessKey`,
  });
  return token.data;
};
