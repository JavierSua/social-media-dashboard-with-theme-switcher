<template>
	<div class="social-card">
		<div class="card-content">
			<div class="container">
				<div class="img-container">
					<slot name="social_icon"></slot>
				</div>
				<div class="user-name">
					<slot name="user_name"></slot>
				</div>
			</div>
			<div class="meta-value">
				<slot name="meta_value"></slot>			
			</div>
			<div class="meta-type">
				<slot name="meta_type"></slot>			
			</div>
			<div :class="color" class="meta-change">
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
	:root{
	--Facebook: hsl(208, 92%, 53%);
	--Twitter: hsl(203, 89%, 53%);
	--Instagram: linear-gradient(to right, hsl(37, 97%, 70%),hsl(329, 70%, 58%));
	--YouTube: hsl(348, 97%, 39%);
	}
	.facebook{
		border-top: 4px solid var(--Facebook);
	}
	.twitter{
		border-top: 4px solid var(--Twitter);
	}
	.instagram{
		background-image: var(--Instagram);
		padding-top: 4px;
	}
	.youtube{
		border-top: 4px solid var(--YouTube);
	}
	.card-content{
		background-color: hsl(227, 47%, 96%);
	}
	.main-cards{
		margin-top: 10px;
	}
	.social-card{
		width: 325px;
		border-radius: 4px;
		margin-bottom: 25px;
		border-bottom: 4px solid hsl(227, 47%, 96%);
	}
	.container{
		display: inline-flex;
		padding-top: 28px;
		font-size: .9rem;
		height: 20px;
		line-height: 20px;
	}
	.meta-value{
		font-size: 4rem;
		padding-top: 15px;
	}
	.meta-type{
		text-transform: uppercase;
		font-weight: 400;
		letter-spacing: 4px;
		font-size: .9rem;
		padding-bottom: 25px;
	}
	.meta-change{
		text-transform: capitalize;
		font-size: .9rem;
		padding-bottom: 20px;
	}
</style>