<template>
  <div class="container">
    <h2>Edit Profile</h2>

    <form class="main_form" @submit.prevent="handleEditProfile">
      <div class="img__div">
        <div class="img__container">
          <img :src="previewImage || profile.Profile_image ? imageUrl(profile.Profile_image) : '/images/placeholderImg2.svg'" alt="">

          <span>
            <i class="fas fa-edit "></i>
            <ImgInputModel v-model="profile.Profile_image" @imagInput="handleIInput"/>
          
          </span>
        </div>
      </div>
    
      <div class="form__area">
        <input name="name" v-model="profile.name" placeholder="Your name" type="text" class="input__field">

      <input name="email" v-model="profile.email" placeholder="Your Email" type="email" class="input__field">

      

      <select name="level" id="level" v-model="profile.level">
        <option value="HSC">HSC</option>
        <option value="SSC">SSC</option>
        <option value="O-level">O-Level</option>
      </select>

      <select  name="batch" id="batch" v-model="profile.batch">
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>


      <select name="board" id="board" v-model="profile.board">
        <option value="Dhaka">Dhaka</option>
        <option value="Chittagong">Chittagong</option>
        <option value="Comilla">Comilla</option>
        <option value="Sylhet">Sylhet</option>
        <option value=" Mymensingh"> Mymensingh</option>
      </select>

      <input name="institution" v-model="profile.institution" placeholder="institution" type="text" class="input__field">

      <input class="edit__btn" type="submit" value="Edit">

      </div>

    </form>


  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import { useStore } from 'vuex'
import { watch, watchEffect } from '@vue/runtime-core';
import ImgInputModel from '../../components/ui/ImgInputModel.vue';
export default {
  name: "EditProfile",
  setup() {
    const store = useStore();
    const profileFields = computed(() => store.state.userState.profile);
    console.log(profileFields.value);
    const profile = ref({
      Profile_image: profileFields.value.Profile_image,
      batch: profileFields.value.batch,
      board: profileFields.value.board,
      email: profileFields.value.email,
      institution: profileFields.value.institution,
      level: profileFields.value.level,
      name: profileFields.value.name,
  });
    const imageUrl = computed(() => (img) => img.includes("https://www.exam.poc.ac") ? img : `https://www.exam.poc.ac${img}`);

    watch(profileFields, () => {
      profile.value = {
        Profile_image: profileFields.value.Profile_image,
        batch: profileFields.value.batch,
        board: profileFields.value.board,
        email: profileFields.value.email,
        institution: profileFields.value.institution,
        level: profileFields.value.level,
        name: profileFields.value.name,
    }
    })
    const handleEditProfile = async () => {
      const isError = ref(false);
      for (let key in profile.value) {
        if (profile.value[key] == "") {
          if (key == "email") {
              continue;
          }
          isError.value = true;
          store.dispatch("notifications/add", getNotification("warning", `${key} is empty`));
          break;
        }
        else if (key == "name" && profile.value.name.length < 3) {
          store.dispatch("notifications/add", getNotification("warning", "Student name must be at least 3 character"));
          isError.value = true;
          break;
        }
        else if (key == "email" && !/\S+@\S+\.\S+/.test(profile.value["email"])) {
          store.dispatch("notifications/add", getNotification("warning", "Please enter valid email"));
          isError.value = true;
          break;
        }
        else if (key == "institution" && profile.value.institution.length < 4) {
          store.dispatch("notifications/add", getNotification("warning", "Institution must be at least 4 character"));
          isError.value = true;
          break;
        }
        else {
          isError.value = false;
        }
      }
      if (isError.value) {
        return;
      }
      try {
        await store.dispatch("userState/updateStudentProfile", {
            ...profile.value,
            id: profileFields.value.id
        });
        
      }
      catch (err) {
        console.log(err);
      }
    };


    const previewImage = ref(null)

    const handleIInput = (e) => {
      console.log(e)
      previewImage.value = e;
    }

    return {
      profile,
      imageUrl,
      handleEditProfile,
      handleIInput,
      previewImage
    };
  },
  components: { ImgInputModel }
}
</script>

<style lang="scss" scoped>
@import '@/styles/config.scss';
.main_form {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h2{
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 110px;
  text-align: center;
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
	-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.img__div {
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img__container{
  height: 180px;
  width: 180px;
  border-radius: 50%;
  position: relative;
  padding-top: 0.3rem;
  background: #dddddd;
}
.img__container img{
  width:100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-position: center center;
  
}
.img__container .img_input {
  position: absolute;
  display: inline;
  opacity: 0;
  width: 100%;
  inset: 0;
  border-radius: 50%;
}
.img__container span{
  font-size: 1.2rem;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  background: #00A9DC;
  cursor: pointer;

  input {
    position: absolute;
    /* top: 0; */
    opacity: 0;
    inset: 0;
    width: 100%;
    cursor: pointer;
  }
}


.form__area{
  width: 100%;
  height: 100%;
  
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  grid-gap:2rem 1.2em;
  flex: 1;
  justify-content: center;
  margin: 2rem auto;
}
.form__area::after{
  content: "";
  display: block;
  grid-column-start: 1;
  height: 1em;
}
.form__area .input__field,  .form__area select, .edit__btn{
  border-radius: 1.1rem;
  outline: none;
  font-size: 1.1rem;
  padding: 1rem 1.1rem;
  border: 1.5px solid #00294E;
}

.edit__btn{
  border: none;
  outline: none;
  width: 100%;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(45.01deg, #146AB4 9.93%, #00D4FE 88.64%);
}
@media  (max-width:768px) {
  .form__area .input__field,  .form__area select, .edit__btn{
    border-radius: 1rem;
    outline: none;
    font-size: 1.1rem;
    padding: 0.9rem 1rem;
    border: 1.5px solid #00294E;
  }
}

@media  (min-width:1115px) {
  .form__area{
    max-width: 80%;
  }
}


</style>