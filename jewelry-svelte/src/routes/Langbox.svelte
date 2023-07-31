<script>
	import foto from '$lib/images/en.svg';
	/**
	 * @type {boolean}
	 */
	let isVisible;
	let click = () => {
		isVisible = !isVisible;
	};
</script>

<div class="langSelector">
	<img alt="" src={foto} />
	<span>ppp</span>
	<a href="/" class="langSelector_item" on:click={click}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" />
			<path d="M9 14l3 3l3 -3" />
		</svg>
	</a>
	{#if isVisible}
		<div class="sub-menu">
			<a href="/" class="menu-item lang" on:click={click}>
				<img alt="" src={foto} />
				<span>mm</span>
			</a>
		</div>
	{/if}
</div>

<style scoped>
	.langSelector {
		position: relative;
		display: grid;
		grid-template-columns: 1rem 2rem auto;
		grid-template-rows: 2rem;
		align-items: baseline;
		justify-items: center;
	}

	.langSelector img {
		margin: auto;
		width: 100%;
	}
	.langSelector .langSelector_item {
		margin: auto;
	}

	.langSelector svg {
		width: 18px;
		height: 18px;
	}

	.langSelector span {
		margin: auto;
	}

	.langSelector .sub-menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f5f5f5;
		position: absolute;
		width: 100%;
		top: calc(60% + 18px);
		right: 10px;
	}

	.langSelector .sub-menu .lang {
		display: grid;
		grid-template-columns: 1rem 2rem;
		grid-template-rows: 2rem;
		align-items: baseline;
		justify-items: center;
		cursor: pointer;
	}

	.langSelector .sub-menu .lang:hover {
		font-weight: bold;
	}

	.langSelector .sub-menu .lang img {
		width: 100%;
	}

	.langSelector .sub-menu .lang img:hover {
		width: 105%;
	}

	@media screen and (max-width: 370px) {
		.langSelector {
			grid-template-columns: 1rem 25px auto;
		}

		.langSelector svg {
			width: 14px;
			height: 14px;
		}
	}
</style>
