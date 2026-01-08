<template>
	<div class="min-h-screen text-theme-blue p-12 xl:p-20">
		<div class="text-center lg:text-left">
			<h2 class="text-5xl sm:text-6xl font-black sm:mt-0"> Hey,</h2>
			<h1 class="text-6xl sm:text-7xl font-black mt-3">I'm <span class="text-theme-yellow text-7xl">Sasial</span>
			</h1>
			<h3 class="text-3xl mt-6">A gameplay programmer and fullstack engineer, with {{ year - 2016 }} years of
				programming experience</h3>
		</div>

		<h2 class="text-4xl font-black mt-12">Games</h2>
		<div class="flex flex-wrap gap-4 mt-6">
			<a href="https://aircraftmadness.com/" target="__blank"
				class="bg-theme-purple-light hover:bg-theme-purple-light-hover transition-transform hover:scale-105 p-4 flex flex-col gap-4 rounded-2xl justify-center items-center w-full lg:w-1/3 text-center">
				<img class="max-h-48 w-auto" src="./assets/aircraft_madness.png" />
				<h3 class="text-2xl">Unreleased</h3>
			</a>
		</div>

		<h2 class="text-4xl font-black mt-16">Things I've Done</h2>
		<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
			<div
				class="bg-theme-purple-light hover:bg-theme-purple-light-hover transition-transform hover:scale-105 px-2 py-8 flex flex-col gap-4 rounded-2xl justify-center items-center w-full text-center">
				<img class="mt-12 w-auto h-20" src="~/assets/koal.svg">
				<h3 class="mt-12 mb-4 font-light text-2xl">
					Fullstack Engineer
				</h3>
				<p class="mt-2 font-light opacity-50 text-lg">
					31 December 2020 - 10 June 2024*
				</p>
				<p class="font-light opacity-50 text-xs">* Was <span class="underline underline-offset-2 cursor-help"
						title="Under good terms!
Just due to financial feasibility and lack of other people's free time.">shut down</span> on that date.</p>
				<ul class="list-disc list-inside mt-8 mx-12 mb-24">
					<li>Designed and wrote Version 2 of the KoalKore (Discord Bots)</li>
					<li>Designed and wrote the foundation of Version 2 of the MyFollowers Counter</li>
					<li>Wrote Koal's ticketing system</li>
					<li>Wrote a <span class="underline underline-offset-2 cursor-help"
							title="Software that you can use to run multiple virtual machines on a single physical machine">hypervisor</span>
						for the Discord Bots connecting our database and <a class="underline underline-offset-2"
							href="https://github.com/Unitech/pm2" target="__blank">pm2</a> together</li>
					<li>Contributed miscellaneous features to the web/backend development</li>
				</ul>
				<div class="mt-auto mb-4 flex justify-center">
					<a href="https://koal.us/server">
						<img class="h-6 w-6 mr-3" src="~/assets/discord.svg">
					</a>
					<a href="https://roblox.com/communities/6701071/Koal">
						<img class="h-6 w-6 mr-3" src="~/assets/roblox.svg">
					</a>
					<a href="https://github.com/KoalBot">
						<img class="h-6 w-6" src="~/assets/github.svg">
					</a>
				</div>
			</div>
			<div
				class="bg-theme-purple-light hover:bg-theme-purple-light-hover transition-transform hover:scale-105 px-2 py-8 flex flex-col gap-4 rounded-2xl justify-center items-center w-full text-center">
				<img class="mt-12 w-auto h-20" src="./assets/tvt_full_transparent.png">
				<h3 class="mt-8 font-light text-2xl text-balance">
					Gameplay Programmer and Fullstack Engineer
				</h3>
				<p class="mt-2 font-light opacity-50 text-lg">
					27 October 2021* - Present
				</p>
				<p class="font-light opacity-50 text-xs text-balance">* I started developing for FTA itself, and then was transfered
					to TVT on 10 November 2022.</p>
				<ul class="list-disc list-inside mt-8 mx-12 mb-24">
					<li>Wrote two Discord bots (one internal and one public-facing) to interface with our issue tracker
					</li>
					<li>Created an internal website with a drag and drop track editor</li>
					<li>Wrote a <a class="underline underline-offset-2"
							href="https://medium.com/mighty-bear-games/what-are-server-authoritative-realtime-games-e2463db534d1"
							target="__blank">server-authoritative</a> train movement system</li>
					<li>Wrote a <a class="underline underline-offset-2"
							href="https://github.com/resources/articles/devops/ci-cd" target="__blank">CI/CD</a> system
						for the Roblox game that utilises <a class="underline underline-offset-2"
							href="https://en.wikipedia.org/wiki/Separation_of_concerns" target="__blank">separation of
							concerns</a> to seperate map designers and the programming</li>
					<li>Wrote a scalable method of humanoid-less AI Passengers</li>
					<li>Implimented the in-game UI using React and <a class="underline underline-offset-2"
							href="https://roblox-ts.com/" target="__blank">roblox-ts</a></li>
				</ul>
				<div class="mt-auto mb-4 flex justify-center">
					<a href="https://www.roblox.com/communities/10755960/Tourville-Technologies">
						<img class="h-6 w-6 mr-3" src="~/assets/roblox.svg">
					</a>
					<a href="https://github.com/Tourville-Technologies/">
						<img class="h-6 w-6" src="~/assets/github.svg">
					</a>
				</div>
			</div>
			<div
				class="bg-theme-purple-light hover:bg-theme-purple-light-hover transition-transform hover:scale-105 px-2 py-8 flex flex-col gap-4 rounded-2xl justify-center items-center w-full text-center">
				<img class="mt-12 w-auto h-20" src="./assets/github.svg">
				<h3 class="mt-8 font-light text-2xl xl:mt-12 xl:mb-4">
					Open Source Projects
				</h3>
				<p>I maintain <a class="underline underline-offset-2" href="https://github.com/red-blox/zap/"
						target="__blank">Zap</a>, a lightning fast networking solution for Roblox.<br><br>I also
					maintain the following
					libraries support for <a class="underline underline-offset-2" href="https://roblox-ts.com"
						target="__blank">roblox-ts</a> (through writing <a class="underline underline-offset-2"
						href="https://roblox-ts.com/docs/guides/using-existing-luau" target="__blank">definition
						files</a>):</p>
				<ul class="list-disc list-inside mx-12 my-8">
					<li><a class="underline underline-offset-2" href="https://www.npmjs.com/package/@rbxts/lapis"
							target="__blank">@rbxts/lapis</a></li>
					<li><a class="underline underline-offset-2" href="https://www.npmjs.com/package/@rbxts/jabby"
							target="__blank">@rbxts/jabby</a></li>
					<li><a class="underline underline-offset-2" href="https://www.npmjs.com/package/@rbxts/pebble"
							target="__blank">@rbxts/pebble</a></li>
					<li><a class="underline underline-offset-2" href="https://www.npmjs.com/package/@rbxts/ebba"
							target="__blank">@rbxts/ebba</a></li>
					<li><a class="underline underline-offset-2" href="https://www.npmjs.com/package/@rbxts/astar"
							target="__blank">@rbxts/astar</a></li>
					<li><a class="underline underline-offset-2" href="https://www.npmjs.com/package/@rbxts/cmdr"
							target="__blank">@rbxts/cmdr</a></li>
					<li><a class="underline underline-offset-2 opacity-50"
							href="https://www.npmjs.com/package/@rbxts/glassmorphicui"
							target="__blank">@rbxts/glassmorphicui</a>*</li>
					<li><a class="underline underline-offset-2"
							href="https://www.npmjs.com/package/@rbxts/character-realism"
							target="__blank">@rbxts/character-realism</a></li>
					<li><a class="underline underline-offset-2 opacity-50"
							href="https://www.npmjs.com/package/@rbxts/catmull-rom-spline"
							target="__blank">@rbxts/catmull-rom-spline</a>*</li>
					<li><a class="underline underline-offset-2 opacity-50"
							href="https://www.npmjs.com/package/@rbxts/greedycanvas"
							target="__blank">@rbxts/greedycanvas</a>*</li>
					<li><a class="underline underline-offset-2 opacity-50"
							href="https://www.npmjs.com/package/@rbxts/viewportcanvas"
							target="__blank">@rbxts/viewportcanvas</a>*</li>
					<li><a class="underline underline-offset-2"
							href="https://github.com/sasial-dev/rbxts-transformer-keys"
							target="__blank">rbxts-transformer-keys</a></li>
				</ul>
				<p class="font-light opacity-50 text-xs">* Deprecated by initial author</p>
				<p>And I have some open source code snippets on my <a class="underline underline-offset-2"
						href="https://github.com/sasial-dev" target="__blank">GitHub Profile</a>:</p>
				<ul class="list-disc list-inside mx-12 my-8">
					<li><a class="underline underline-offset-2"
							href="https://gist.github.com/sasial-dev/751733e0e97d91d3cca064a75c792d68"
							target="__blank">React + Matter</a></li>
					<li><a class="underline underline-offset-2"
							href="https://gist.github.com/sasial-dev/561bbbefd40b75425f325850edfb2b1d"
							target="__blank">Reflex Mutiplayer</a></li>
					<li><a class="underline underline-offset-2"
							href="https://gist.github.com/sasial-dev/fbdbb06c2a32aa2f08e827bb84bb8efa"
							target="__blank">Route.tsx</a></li>
				</ul>
			</div>
		</div>

		<h2 class="text-4xl font-black mt-16">Comission Me</h2>

		<h3 class="text-2xl font-semibold mt-6">I do comissions a bit differently...</h3>
		<ul class="list-disc list-inside mt-6">
			<li><span class="text-theme-yellow font-bold">You</span> get the code, allowing for you to read it, have
				<span class="text-theme-yellow font-bold">complete control</span> over it, or
				even pay someone else in the future to edit it if necessary!
			</li>
			<li>If you are commissioning a Discord Bot (or equivalent), I will <span
					class="text-theme-yellow font-bold">help you setup a server to host it on</span></li>
			<li>Commissions are a <span class="text-theme-yellow font-bold">transparent process</span> - you will <span
					class="text-theme-yellow font-bold">see my progress</span> as I go, and I will <span
					class="text-theme-yellow font-bold">ask for your input</span> wherever it is possible</li>
			<li>Where possible (e.g. Discord Bots), I will write the commission in a way where parameters can be <span
					class="text-theme-yellow font-bold">easily edited by you down the line</span></li>
			<li>Downpayments <span class="text-theme-yellow font-bold">may not be required</span> on smaller commissions
			</li>
		</ul>

		<p class="mt-6">This really boils down to the <span class="text-theme-yellow font-bold">integrity</span> I hold over every
			comission.</p>

		<h3 class="text-2xl font-semibold mt-12">But it's not just me who has said this...</h3>
		<div class="grid md:grid-cols-2 gap-4 mt-6">
			<div
				class="bg-theme-purple-light p-4 rounded-xl flex flex-col gap-4 transition-transform hover:scale-105 hover:shadow-2xl group text-balance">
				<p>Sasial is not only a great coder, but also a great person. His dedication to his craft is inspiring,
					and
					always has one of the quickest response times even in spite of the timezone difference. He whipped
					up
					two amazing products for my Discord server, and I would highly recommend ordering from him!</p>
				<div class="flex items-center mt-auto group-hover:bg-theme-purple-light-hover rounded-xl p-2">
					<img class="size-16 transition-all rounded-3xl group-hover:rounded-xl"
						src="assets/nvrthface.webp" />
					<p class="group-hover:font-medium mx-4 transition-all truncate">@nvrthface</p>
					<p class="group-hover:text-theme-yellow transition-all delay-0">★</p>
					<p class="group-hover:text-theme-yellow transition-all delay-0 group-hover:delay-50">★</p>
					<p class="group-hover:text-theme-yellow transition-all delay-0 group-hover:delay-100">★</p>
					<p class="group-hover:text-theme-yellow transition-all delay-0 group-hover:delay-150">★</p>
					<p class="group-hover:text-theme-yellow transition-all delay-0 group-hover:delay-200">★</p>
				</div>
			</div>
			<div
				class="bg-theme-purple-light p-4 rounded-xl flex flex-col gap-4 transition-transform hover:scale-105 hover:shadow-2xl group text-balance">
				<p>Sasial is a skilled and efficient software engineer. Whether he's refining user-facing UI or adhering
					to
					best practices during code review, he commits to prioritising quality, all while simultaneously
					churning
					out features and fixes quickly. Not only has Sasial been an amazing asset to Koal, but he has helped
					strengthen my own skills as well.</p>
				<div class="flex items-center mt-auto group-hover:bg-theme-purple-light-hover rounded-xl p-2">
					<img class="size-16 transition-all rounded-3xl group-hover:rounded-xl" src="assets/andrew.webp" />
					<p class="group-hover:font-medium mx-4 transition-all truncate">@axiliquint</p>
				</div>
			</div>
		</div>

		<div class="text-theme-blue text-center lg:text-left mt-12">
			<h2 class="text-5xl font-bold">
				Contact Me
			</h2>
			<p class="text-2xl mt-5">
				I am currently
				<span v-if="lanyard?.kv.commissions === 'true'" class="text-green-300 font-bold">open for
					comissions and job offers</span>
				<span v-if="lanyard?.kv.commissions === 'false'" class="text-red-500 font-bold">
					unable to handle any more comissions and job offers at this time</span>.<br>I am located in Australia where it is
				currently <span class="text-theme-yellow font-bold">{{ currentTime }}</span> for
				me (UTC+10). When contacting me please tell me your timezone so I can try and reply when we are both
				online.
			</p>
			<div class="mt-8 flex flex-wrap gap-5 justify-center sm:justify-start items-center">
				<a class="bg-theme-purple-light hover:bg-theme-purple-light-hover rounded-xl h-36 w-52 flex flex-col justify-center items-center transition-transform hover:scale-105"
					href="https://discord.com/users/479591041356398593" target="__blank">
					<h3 class="font-semibold text-2xl">
						Discord
					</h3>
					<h3 class="font-semibold text-lg mt-4">
						@{{ lanyard?.discord_user.username }}
					</h3>
					<div class="flex mt-4 justify-center items-center gap-1">
						<svg v-if="lanyard?.discord_status === 'idle'" class="text-theme-yellow fill-current h-3 w-3"
							viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<circle cx="50" cy="50" r="50" />
						</svg>
						<svg v-if="lanyard?.discord_status === 'online'" class="text-green-300 fill-current h-3 w-3"
							viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<circle cx="50" cy="50" r="50" />
						</svg>
						<svg v-if="lanyard?.discord_status === 'offline'" class="text-gray-400 fill-current h-3 w-3"
							viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<circle cx="50" cy="50" r="50" />
						</svg>
						<svg v-if="lanyard?.discord_status === 'dnd'" class="text-red-700 fill-current h-3 w-3"
							viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<circle cx="50" cy="50" r="50" />
						</svg>
						<h3 class="text-xs capitalize">
							{{ lanyard?.discord_status }}
						</h3>
					</div>
				</a>
			</div>
		</div>
	</div>
	<div class="bg-theme-purple-light w-full h-12 text-white flex items-center">
		<p class="text-xs font-semibold ml-3">
			© Sasial 2021-{{ year }} -
			<a class="text-theme-yellow" href="https://github.com/sasial-dev/Portfolio">Open Sourced</a> under the
			<a class="text-theme-yellow" href="https://choosealicense.com/licenses/agpl-3.0/">GNU AGPLv3 License</a>
		</p>
	</div>
</template>

<script setup lang="ts">
const lanyard = useLanyard({
	method: "ws",
	id: "479591041356398593"
})

const timeFormatter = Intl.DateTimeFormat([], {
	timeZone: "Australia/Brisbane",
	hour: "numeric",
	minute: "numeric",
	hour12: true,
})

const currentTime = ref(timeFormatter.format(new Date()))

let updateTimeInterval = setTimeout(updateTime, 0)

function updateTime() {
	const currentDate = new Date()
	const nextUpdateAt = new Date().setMinutes(currentDate.getMinutes() + 1, 0, 0)

	currentTime.value = timeFormatter.format(currentDate)

	updateTimeInterval = setTimeout(updateTime, nextUpdateAt.valueOf() - currentDate.valueOf())
}

onBeforeUnmount(() => {
	clearInterval(updateTimeInterval)
})

const year = new Date().getFullYear()
</script>
