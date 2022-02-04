<template>
	<div class="container">
		<div class="main_container">
			<AuthTopbar />
			<main class="main__content">
				<slot />
			</main>
	</div>
	</div>
    
</template>

<script>
import { watchEffect } from '@vue/runtime-core'
import AuthTopbar from '../components/Auth Components/AuthTopbar.vue'
import { useStore } from 'vuex'

export default {
  components: { AuthTopbar },
	name: 'AuthLayout',
	setup(props) {
		

	}

}
</script>
    
<style scoped lang="scss">
@import '@/styles/config.scss';
.container {
	    
	@include maxMedia(500px) {
		// margin-top: 5rem;;
		display: flex;
    flex-direction: column;
    justify-content: center;
		height: 100vh;
	}
}
main {
	margin: 0 1rem;
}
</style>