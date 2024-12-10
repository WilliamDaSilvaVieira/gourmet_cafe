import axios from 'axios'

const url = 'http://localhost:5000/api/products/'
const final_url = 'http://localhost:5000/api/final_price/'

class ShopService {
  // Get Product
  static async getProducts() {
    try {
        const res = await axios.get(url)
        const data = res.data

        return data.map((price) => ({
            ...price,
        }))
    } catch (err) {
        return err
    }
  }

  static async getOrder() {
    try {
        const res = await axios.get(`${url}orders`)
        const data = res.data

        return data.map((products) => ({
            ...products,
        }))
    } catch (err) {
        return err
    }
  }

  static async getOrderValue() {
    try {
        const res = await axios.get(`${url}orders_value`)
        const data = res.data

        return data.map((products) => ({
            ...products,
        }))
    } catch (err) {
        return err
    }
  }

  static async updateOrder(id,sign){
    return axios.put(`${url}${id}/${sign}`)
  }

  static async resetOrder(){
    return axios.put(`${url}reset`)
  }

  static async getFinalPrice() {
    try {
        const res = await axios.get(final_url)
        const data = res.data

        return data.map((price) => ({
            ...price,
        }))
    } catch (err) {
        return err
    }
  }

  static async updateFinalPrice(price){
    return axios.put(`${final_url}${price}`)
  }

  static async resetFinalPrice(price){
    return axios.put(`${final_url}reset/${price}`)
  }
}

export default ShopService
