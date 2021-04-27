<template>
	<div class="social-overview">
		<div class="container">
			<div class="ovrvw-meta">
				<slot name="meta_type"></slot>
			</div>
			<div class="ovrvw-value">
				<slot name="meta_value"></slot>
			</div>
		</div>

		<div class="container">
			<div class="ovrvw-social-icon">
				<slot name="social_icon"></slot>
			</div>
			<div class="ovrvw-change" :class="color">
				<slot name="value_change"></slot>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		color:String
	}
}
</script>
<style>
	.social-overview{
		background-color:  hsl(227, 47%, 96%);
		width: 325px;
		border-radius: 4px;
		margin-bottom: 15px;
		display :flex;
		justify-content: space-between;
	}
	.social-overview .container{
		flex-direction: column;
		padding: 28px 25px 0;
		height: auto;
		text-align: left;
	}
	.social-overview .container .ovrvw-social-icon{
		text-align: right;
	}
	.social-overview .container img.social-icon{
		padding: 0 5px;
	}
	.social-overview .container .ovrvw-change{
		width: fit-content;
	}
	.ovrvw-change, .ovrvw-social-icon,.ovrvw-value,.ovrvw-meta{
		padding-bottom: 28px;
	}
	.ovrvw-value{
		font-size: 2.2rem;
	}
</style>