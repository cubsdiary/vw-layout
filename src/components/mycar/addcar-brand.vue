// 新增 车辆 -品牌

<template>
  <div class="addcar-brand" flexContainer>
    <div class="search-car" @click="goSearch">
      <div class="btn">
        <span>搜索</span>
      </div>
    </div>
    <div class="logo">
      <brandMask v-if="showMask" @closemask="_closeMask"></brandMask>
      <div class="retrieval" @touchmove.prevent.stop>
        <ul>
          <li v-for="(item, index) in getFirstLetter" :key="item.type" @click="selectMenu(index, $event)">{{item}}</li>
        </ul>
      </div>
      <Scroll class="wrapper" ref="logolist" :data="getLogo">
        <div class="list-con">
          <ul class="logo-class type-index" v-for="item in getLogo" :key="item.id" ref="logo">
            <li class="title">{{item.firstLetter}}</li>
            <li class="info" v-for="logo in item.logos" :key="logo.id" @click="showBrandMask(logo)">
              <img v-lazy="carLogoUrl + logo.imageSrc" alt="">
              <h2>{{logo.brandName}}</h2>
            </li>
          </ul>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import brandMask from './addcar-brand-mask'
import {mapGetters, mapMutations} from 'vuex'
import {queryCarModal} from '@/common/js/mixin'
export default {
  name: 'addcarBrand',
  mixins: [queryCarModal],
  components: {
    brandMask,
    Scroll
  },
  props: {
    addType: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showMask: false,
      content: 'brand_name',
      conditon: ''
    }
  },
  methods: {
    goSearch () {
      this.$router.push('/search-list?format=' + 'brand')
    },
    selectMenu (index, event) {
      this.$refs.logolist.scrollToElement(this.$refs.logo[index], 300)
    },
    showBrandMask (logo) {
      this.showMask = true
      this.setAddCar({
        brandName: logo.brandName,
        firstLetter: logo.firstLetter,
        imageSrc: logo.imageSrc
      })
    },
    _closeMask () {
      this.showMask = false
    },
    ...mapMutations({
      setAddCar: 'SET_ADDCAR',
      setCarBrand: 'SET_CARBRAND'
    })
  },
  mounted () {
    this.queryModal()
  },
  computed: {
    getFirstLetter () {
      let arr = []
      this.carBrand.forEach((item, index) => {
        arr.push(item.firstLetter)
      })
      arr = new Set(arr)
      return Array.from(arr)
    },
    getLogo () {
      let arr = []
      this.getFirstLetter.forEach((letter) => {
        let logoType = []
        this.carBrand.forEach((item, index) => {
          if (letter === item.firstLetter) {
            logoType.push(item)
          }
        })
        arr.push({
          firstLetter: letter,
          logos: logoType
        })
      })
      return arr
    },
    ...mapGetters([
      'carBrand',
      'serachInfo'
    ])
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
@import "../../common/stylus/mixin.styl"
.addcar-brand
  flex: 1
  background-color: #f2f2f2
  flex-direction: column
  .search-car
    height: 80px
    padding: 0 30px
    display: flex
    padding-top: 9px
    background-color: #fff
    .btn
      flex: 1
      height: 60px
      border-radius: 5px
      background-color: #f2f2f2
      border: 1px solid #dfdfdf
      display: flex
      justify-content: center
      align-items: center
      span
        padding-left: 40px
        font-size: 26px
        color: #bfbfbf
        bg-image('../../common/imgs/car/search')
        background-size: 27px 27px
        background-repeat: no-repeat
        background-position: left center
  .logo
    position: relative
    flex: 1
    display: flex
    overflow: hidden
    .wrapper
      flex: 1
      overflow: hidden
    .retrieval
      position: absolute
      right: 10px
      top: 0px
      height: 100%
      width: 40px
      display: flex
      z-index: 99
      & > ul
        flex: 1
        display: flex
        flex-direction: column
        padding: 60px 0px
        & > li
          flex: 1
          display: flex
          justify-content: center
          align-items: center
          font-size: 20px
          color: #707070
    .list-con
      position: relative
      .hot-logo
        overflow: hidden
        padding: 0 30px
        padding-bottom: 25px
        margin-bottom: 10px
        background-color: #fff
        & > h2
          height: 50px
          line-height: 50px
          font-size: 24px
          color: #707070
        .hot-list
          display: flex
          flex-wrap: wrap
          overflow: hidden
          li
            width: 20%
            height: 122px
            padding-right: 30px
            img
              display: block
              width: 60px
              height: 60px
              margin: 0 auto
            & > h3
              font-size: 20px
              color: #707070
              text-align: center
              margin-top: 9px
              width: 100%
              word-break: break-all
              display: -webkit-box
              -webkit-line-clamp: 2
              -webkit-box-orient: vertical
              overflow: hidden
      .logo-class
        background-color: #fff
        padding: 0 50px 0 30px
        margin-bottom: 10px
        .title
          width: 100%
          height: 40px
          line-height: 40px
          font-size: 22px
          color: #707070
        .info
          height: 98px
          display: flex
          align-items: center
          border-bottom: 1px solid #d5d5d5
          &:last-child
            border: none
          & > img
            width: 60px
            height: 60px
            margin-right: 30px
          & > h2
            font-size: 20px
            color: #707070

</style>
