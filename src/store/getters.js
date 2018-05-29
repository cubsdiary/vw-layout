
// export const getCarLogo = state => id => {
//   return state.carBrand.find(car => car.id === id)
// }

const getters = {
  carBrand (state) {
    return state.carBrand
  },
  addCar (state) {
    return state.addCar
  },
  area (state) {
    return state.area
  },
  myCar (state) {
    return state.myCar
  },
  cityInfo (state) {
    return state.cityInfo
  },
  cityList (state) {
    return state.cityList
  },
  storeList (state) {
    return state.storeList
  },
  serachHis (state) {
    return state.serachHis
  },
  serachInfo (state) {
    return state.serachInfo
  }
}

export default getters