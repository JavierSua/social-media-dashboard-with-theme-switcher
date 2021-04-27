<template>
  <div id="app" :class="{darkTheme: checked}">
    <header>
      <div>
        <h1>Social Media Dashboard</h1>
        <h2>Total Followers: 23,004</h2>
      </div>
      <div class="drk-toggle">
        <h3>Dark Mode</h3>
        <label class="switch">
          <input type="checkbox" v-model="checked">
          <span class="slider"></span>
        </label>
      </div>
    </header>
    <div class="main-cards">
      <SocialCard class="facebook" color="up-green">
        <template v-slot:social_icon>
          <img class="social-icon" :src="iconFacebook" alt="">
        </template>
        <template v-slot:user_name>
          @nathanf
        </template>
        <template v-slot:meta_value>
          1987
        </template>
        <template v-slot:meta_type>
          followers
        </template>
        <template v-slot:value_change>
          <img :src="upIcon" alt="" srcset="">
          12 today
        </template>
      </SocialCard>
      <SocialCard class="twitter" color="up-green">
        <template v-slot:social_icon>
          <img class="social-icon" :src="iconTwitter" alt="">
        </template>
        <template v-slot:user_name>
          @nathanf
        </template>
        <template v-slot:meta_value>
          1044
        </template>
        <template v-slot:meta_type>
          followers
        </template>
        <template v-slot:value_change>
          <img :src="upIcon" alt="" srcset="">
          99 today
        </template>
      </SocialCard>
      <SocialCard class="instagram" color="up-green">
        <template v-slot:social_icon>
          <img class="social-icon" :src="iconInstagram" alt="">
        </template>
        <template v-slot:user_name>
          @realnathanf
        </template>
        <template v-slot:meta_value>
          11K
        </template>
        <template v-slot:meta_type>
          followers
        </template>
        <template v-slot:value_change>
          <img :src="upIcon" alt="" srcset="">
          1099 today
        </template>
      </SocialCard>
      <SocialCard class="youtube" color="down-red">
        <template v-slot:social_icon>
          <img class="social-icon" :src="iconYoutube" alt="">
        </template>
        <template v-slot:user_name>
          Nathan F.
        </template>
        <template v-slot:meta_value>
          8239
        </template>
        <template v-slot:meta_type>
          subscribers
        </template>
        <template v-slot:value_change>
          <img :src="downIcon" alt="" srcset="">
          144 today
        </template>
      </SocialCard>
    </div>
    <div class="overview">
      <div>
        <h1>Overview - Today</h1>
      </div>
      <div class="ovrviw-cards">
        <div class="card-row">
          <SocialOverview color="up-green">
            <template v-slot:social_icon>
              <img class="social-icon" :src="iconFacebook" alt="">
            </template>
            <template v-slot:meta_type>
              Page views
            </template>
            <template v-slot:meta_value>
              87
            </template>
            <template class="up-green" v-slot:value_change>
              <img :src="upIcon" alt="" srcset="">
              3%
            </template>
          </SocialOverview>
          <SocialOverview color="down-red">
            <template v-slot:social_icon>
              <img class="social-icon" :src="iconFacebook" alt="">
            </template>
            <template v-slot:meta_type>
              Likes
            </template>
            <template v-slot:meta_value>
              52
            </template>
            <template class="down-red" v-slot:value_change>
              <img :src="downIcon" alt="" srcset="">
              2%
            </template>
          </SocialOverview>
          <SocialOverview color="up-green">
            <template v-slot:social_icon>
              <img class="social-icon" :src="iconInstagram" alt="">
            </template>
            <template v-slot:meta_type>
              Likes
            </template>
            <template v-slot:meta_value>
              5462
            </template>
            <template class="up-green" v-slot:value_change>
              <img :src="upIcon" alt="" srcset="">
              2257%
            </template>
          </SocialOverview>
          <SocialOverview color="up-green">
            <template v-slot:social_icon>
              <img class="social-icon" :src="iconInstagram" alt="">
            </template>
            <template v-slot:meta_type>
              Profile Views
            </template>
            <template v-slot:meta_value>
              52k
            </template>
            <template class="up-green" v-slot:value_change>
              <img :src="upIcon" alt="" srcset="">
              1375%
            </template>
          </SocialOverview>
        </div>
        <div class="card-row">
          <SocialOverview color="up-green">
            <template v-slot:social_icon>
              <img class="social-icon" :src="iconTwitter" alt="">
            </template>
            <template v-slot:meta_type>
              Retwieets
            </template>
            <template v-slot:meta_value>
              177
            </template>
            <template class="up-green" v-slot:value_change>
              <img :src="upIcon" alt="" srcset="">
              303%
            </template>
          </SocialOverview>
          <SocialOverview color="up-green">
            <template v-slot:social_icon>
              <img class="social-icon" :src="iconTwitter" alt="">
            </template>
            <template v-slot:meta_type>
              Likes
            </template>
            <template v-slot:meta_value>
              507
            </template>
            <template class="up-green" v-slot:value_change>
              <img :src="upIcon" alt="" srcset="">
              553%
            </template>
          </SocialOverview>
          <SocialOverview color="down-red">>
            <template v-slot:social_icon>
              <img class="social-icon" :src="iconYoutube" alt="">
            </template>
            <template v-slot:meta_type>
              Likes
            </template>
            <template v-slot:meta_value>
              107
            </template>
            <template class="down-red" v-slot:value_change>
              <img :src="downIcon" alt="" srcset="">
              19%
            </template>
          </SocialOverview>
          <SocialOverview color="down-red">>
            <template v-slot:social_icon>
              <img class="social-icon" :src="iconYoutube" alt="">
            </template>
            <template v-slot:meta_type>
              Total Views
            </template>
            <template v-slot:meta_value>
              1407
            </template>
            <template class="down-red" v-slot:value_change>
              <img :src="downIcon" alt="" srcset="">
              12%
            </template>
          </SocialOverview>
        </div>
      </div>
    </div>
    <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/JavierSua" target="_blank">Javier Suarez</a>.
    </div>
  </div>
  
</template>

<script>
import SocialCard from './components/SocialCard'
import SocialOverview from './components/SocialOverview'

export default {
  name: 'App',
  metaInfo: {
    title: 'Frontend Mentor | Javier Suarez',
    link: 
      { rel: 'favicon-32x32', href: 'favicon-32x32.png' }
  },
  components: {
    SocialCard,
    SocialOverview
  },
  data() {
    return {
      iconFacebook: require("@/assets/images/icon-facebook.svg"),
      iconTwitter: require("@/assets/images/icon-twitter.svg"),
      iconInstagram: require("@/assets/images/icon-instagram.svg"),
      iconYoutube: require("@/assets/images/icon-youtube.svg"),
      upIcon: require("@/assets/images/icon-up.svg"),
      downIcon: require("@/assets/images/icon-down.svg"),
      checked: false,
    }
  },
}
</script>

<style>
#app {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  background-color: hsl(0, 0%, 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: scroll;
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
.attribution { font-size: 11px; text-align: center; position: fixed; bottom:18px}
.attribution a { color: hsl(228, 45%, 44%); }
:root{
	font-size: 14px;
  font-weight: 700;
  --background: hsl(0, 0%, 100%);
  --card-background: hsl(227, 47%, 96%);
  --grey-text: hsl(228, 12%, 44%);
  --text: hsl(230, 17%, 14%);
  --dark-background:hsl(230, 17%, 14%);
  --dark-card-background: hsl(228, 28%, 20%);
  --dark-grey-text: hsl(228, 34%, 66%);
  --dark-text: hsl(0, 0%, 100%);
  --toggle: hsl(230, 22%, 74%);
}
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.social-icon{
  height: 20px;
  padding-right: 8px;
}
.user-name, .meta-type, .ovrvw-meta{
  color: var(--grey-text);
}
.down-red{
	color: hsl(356, 69%, 56%);
}
.up-green{
	color:hsl(163, 72%, 41%);
}
.up-green img, .down-red img{
  position: relative;
  bottom: 2px;
}
header{
  width: 325px;
  padding: 35px 0 30px;
  font-weight: 700;
  text-align: left;
}
header h1{
  font-size: 1.7rem;
  padding-bottom: 5px;
}
header h2{
  padding-bottom: 25px;
}
header h2, h3{
  font-size: 1rem;
  color: var(--grey-text);
}
.overview h1{
  color: var(--grey-text);
  text-align: left;
  padding: 20px 0;
}
.drk-toggle{
  border-top: 1px solid black;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

 /* TOGGLE SWITCH*/

  .switch{
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }
  .switch input{display: none;}
  .slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--toggle);
    transition: .4s;
    border-radius: 34px;
  }
  .slider:before{
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 28px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    transition-duration: .4s;
    border-radius: 50px;
  }

  input:checked + .slider, .slider:hover{
    background-image: linear-gradient(to right, hsl(210, 78%, 56%) ,hsl(146, 68%, 55%));
  }
  input:checked + .slider:before{
    transform: translate(-25px);
  }

/*DARK THEME*/
#app.darkTheme, .darkTheme .overview h1{
  background-color: var(--dark-background);
  color: var(--dark-text);
}
.darkTheme .card-content , .darkTheme .social-overview, .darkTheme .slider:before{
  background-color: var(--dark-card-background);
}
.darkTheme .user-name, .darkTheme .meta-type,.darkTheme header h2, .darkTheme h3,.darkTheme .ovrvw-meta{
  color: var(--dark-grey-text);
}
.darkTheme .social-card{
  border-bottom: 4px solid var(--dark-card-background);
}
.darkTheme .drk-toggle{
  border-top: 1px solid var(--dark-grey-text);
}

@media screen and (min-width:1024px) {
  #app{
    justify-content: center;
  }
  header, .main-cards,.ovrviw-cards, .attribution{
    width: 1110px;
    display: flex;
  }
  header, .main-cards{
    justify-content: space-between;
  }
  header .drk-toggle, .darkTheme header .drk-toggle{
    border-top: 0;
  }
  header h2{
    padding-bottom: 0px;
  }
  header h1{
    font-size: 2rem;
  }
  .overview h1{
    font-size: 1.8rem;
  }
  .drk-toggle{
    padding-top: 0px;
    width: 130px;
  }
  .ovrviw-cards{
    flex-direction: column;
  }
  .card-row{
    display: flex;
    justify-content: space-between;
  }
  .main-cards{
    margin-top: 0;
  }
  .social-card, .social-overview{
    width: 255px;
  }
  .social-overview .container{
    padding-top: 30px;
  }
  .social-overview{
    margin-bottom: 25px;
  }
  .ovrvw-change, .ovrvw-social-icon,.ovrvw-value,.ovrvw-meta{
		padding-bottom: 25px;
	}
}
</style>
