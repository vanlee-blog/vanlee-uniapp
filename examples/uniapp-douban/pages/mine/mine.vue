<template>
	<view>
		<mine-header />
		<mine-list-menu />
	</view>
</template>

<script>
import mineHeader from './mine-header.vue';
import mineListMenu from './mine-list-menu.nvue'
export default {
	data: () => ({}),
	components: {
		mineHeader,
		mineListMenu
	}
};
</script>

<style lang="scss"></style>
