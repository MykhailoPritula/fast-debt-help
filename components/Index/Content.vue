<template>
  <section class="main">
    <div class="container">
      <div class="stepone" v-if="this.step === 1">
        <div class="stepone-content">
          <h2>
            Choose your<br />
            Debt Amount
          </h2>
          <div class="rangep">
            <label>$ {{ rangep | format }}</label>
            <div class="rangep-wrap">
              <div class="line-full"></div>
              <div class="line" :style="`width: ${rangep / 1000}%;`">
                <div class="circule"></div>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                value="0"
                step="100"
                v-model="rangep"
              />
            </div>
            <div class="numbers">
              <span>$1,000</span>
              <span>$100,000+</span>
            </div>
          </div>
          <button @click.prevent="goToStep2">
            Continue<img src="@/assets/img/arrow-right.svg" />
          </button>
          <ul>
            <li>Be Debt Free In As Little As 12 Months</li>
            <li>No Upfront Fees and No Obligation</li>
            <li>Get Out Of Debt With No Bankruptcy</li>
            <li>Free and Fast Consultation</li>
          </ul>
        </div>
      </div>
      <div v-if="this.step === 2">
        <div class="steptwo">
          <div class="steptwo-content">
            <h2>
              Good News!<br />
              There is Currently A FREE Consultation Available!
            </h2>
            <ul>
              <li>There is No Wait Or Hold Time</li>
              <li>Get A FREE Savings Estimate</li>
              <li>There Is No Credit Check</li>
            </ul>
            <img class="timer" src="@/assets/img/timer-icon.svg" />
            <p class="text-timer">
              This Spot will Be Available For <b>{{ countDown }} Seconds</b>
            </p>
            <a @click="setCall" :href="`tel:${phone}`">{{ phone |number }}</a>
            <p>
              Millions Of People Have Called And Gotten Out Of Debt and Recieved
              Peace of Mind After Calling
            </p>
            <h5>You are providing your consent for a FastDebtHelp representative or one of our marketing partners or network providers to contact you by email, text and phone, which may include pre-recorded messages and use automated technology. Your consent to such contact is not required as a condition to use a network service provider. You can unsubscribe at any time.</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      countDown: 90,
      rangep: 1000
    }
  },
  methods: {
    goToStep2() {
      this.step = this.step + 1;
      this.countDownTimer();
    },
    countDownTimer() {
      setTimeout(() => {
        this.countDown -= 1;
        this.countDownTimer();
      }, 1000);
      if (this.countDown === 0) {
        location.reload();
      }
    },
    setCall() {
      if (this.$route.query.click_id) {
        this.$axios.$get(`https://www.bls29trk.com/?nid=528&event_id=236&transaction_id=${this.$route.query.click_id}`)
          .then(result => {
            console.dir(result)
          })
      }

      EF.click({
        offer_id: EF.urlParameter("oid"),
        affiliate_id: EF.urlParameter("affid"),
        sub1: EF.urlParameter("sub1"),
        sub2: EF.urlParameter("sub2"),
        sub3: EF.urlParameter("sub3"),
        sub4: EF.urlParameter("sub4"),
        sub5: EF.urlParameter("sub5"),
        uid: EF.urlParameter("uid"),
        source_id: EF.urlParameter("source_id"),
        transaction_id: EF.urlParameter("_ef_transaction_id"),
      })
    }
  },
  filters: {
    format: rangep => `${rangep}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,'),
    number(tel){
      const newTel = tel.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)
      return `(${newTel[2]}) ${newTel[3]}-${newTel[4]}`
    }
  },
  computed: {
    phone(){
      return this.$store.getters['affiliates/phone']
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex: 1 1 auto;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    padding-bottom: 96px;
  }
}
.stepone {
  padding-top: 60px;
  @media(min-width:768px){
    padding-top: 261px;
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    h2 {
      font-weight: 700;
      font-size: 40px;
      line-height: 1.2;
      color: #184895;
      margin-bottom: 30px;
      @media (min-width: 768px) {
        margin-bottom: 50px;
        font-size: 45px;
      }
    }
    button {
      background: #cf2c31;
      border-radius: 10px;
      padding: 15px;
      color: #fff;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Inter";
      font-weight: 700;
      font-size: 16px;
      max-width: 380px;
      width: 100%;
      height: 50px;
      transition: 1s;
      margin-top: 34px;
      margin-bottom: 30px;
      cursor: pointer;
      @media (min-width: 768px) {
        max-width: 175px;
        margin-bottom: 86px;
      }
      &:hover {
        transform: scale(0.9);
        transition: 1s;
      }
      img {
        padding-left: 15px;
      }
    }
    label{
      margin-bottom: 20px;
    }
    ul {
      font-weight: 500;
      font-size: 16px;
      list-style-type: disc;
      @media (min-width: 576px) {
        font-size: 18px;
      }
      @media (min-width: 768px) {
        position: absolute;
        bottom: -40px;
        left: 15px;
      }
    }
  }
  .numbers {
    max-width: 585px;
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.steptwo {
  padding-top: 30px;
  padding-bottom: 19px;
  @media(min-width:768px){
    padding-top: 118px;
  }
  max-width: 644px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  &-content {
    h2 {
      font-weight: 700;
      font-size: 22px;
      color: #000;
      line-height: 1.2;
      margin-bottom: 30px;
      @media(min-width:576px){
        font-size: 30px;
      }
      @media (min-width: 768px) {
        font-size: 45px;
      }
    }
    h5{
      font-weight: 400;
      font-size: 8px;
      line-height: 10px;
      color: #000;
      margin-top: 30px;
      @media(min-width:768px){
        margin-top: 50px;
      }
    }
    ul {
      font-weight: 400;
      font-size: 20px;
      line-height: 1.2;
      color: #184895;
      margin-bottom: 30px;
      text-align: left;
      padding-left: 30px;
      list-style-type: disc;
      @media (min-width: 576px) {
        font-size: 25px;
        padding-left: 110px;
      }
      @media (min-width: 768px) {
        font-size: 30px;
      }
    }
    .timer {
      margin-bottom: 10px;
      @media(min-width:576px){
        margin-bottom: 30px;
      }
    }
    b {
      font-weight: 700;
    }
    p {
      font-size: 23px;
      color: #000;
      line-height: 1.2;
      &:last-child {
        font-weight: 500;
        font-size: 18px;
        @media (min-width: 768px) {
          font-size: 23px;
        }
      }
    }
    .text-timer{
      font-weight: 400;
      max-width: 300px;
      width: 100%;
      margin: 0 auto 30px;
      @media(min-width:768px){
        max-width: 100%;
      }
    }
    a {
      font-family: "Inter";
      max-width: 580px;
      width: 100%;
      font-weight: 700;
      margin: 0 auto;
      font-size: 23px;
      background: #cf2c31;
      border-radius: 10px;
      padding: 26px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #fff;
      margin-bottom: 30px;
      transition: 1s;
      img {
        padding-left: 20px;
      }
      &:hover {
        transition: 1s;
        transform: scale(0.9);
      }
    }
  }
}
.rangep {
  padding: 15px;
  max-width: 585px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 0;
  }
  &-wrap {
    margin: 0 auto;
    position: relative;
  }
  .line {
    display: block;
    height: 16px;
    background: #184895;
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: 10px;
    &-full {
      background: #c1cfe5;
      border-radius: 10px;
      height: 16px;
      position: absolute;
      z-index: -1;
      left: 0;
      right: 0;
      top: 10px;
    }
  }
  .circule {
    display: block;
    height: 46px;
    width: 46px;
    background: #fff;
    border: 10px solid #184895;
    border-radius: 50%;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  label {
    display: block;
    text-align: center;
    font-weight: 800;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #000000;
  }
  input[type="range"] {
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    position: relative;
    z-index: 3;
    opacity: 0;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #c1cfe5;
    border-radius: 10px;
    border: 0px solid #000000;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 1px #000000;
    border: 10px solid #184895;
    height: 46px;
    width: 46px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -20px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #c1cfe5;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #c1cfe5;
    border-radius: 10px;
    border: 0px solid #000000;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 1px #000000;
    border: 10px solid #184895;
    height: 46px;
    width: 46px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #c1cfe5;
    border: 0px solid #000000;
    border-radius: 20px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type="range"]::-ms-fill-upper {
    background: #c1cfe5;
    border: 0px solid #000000;
    border-radius: 20px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type="range"]::-ms-thumb {
    box-shadow: 0px 0px 1px #000000;
    border: 10px solid #184895;
    height: 46px;
    width: 46px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #c1cfe5;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #c1cfe5;
  }
}
</style>
