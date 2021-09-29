<template>
	<div>
		<div class="flex justify-center">
			<div class="flex flex-col max-w-7xl justify-center mx-8 2xl:mx-0">
				<div class="flex flex-wrap sm:flex-nowrap justify-center items-center mt-16 sm:mt-12">
					<div class="text-theme-blue text-center lg:text-left">
						<h2 class="text-5xl sm:text-6xl font-black sm:mt-0">Hey,</h2>
						<h1 class="text-6xl sm:text-7xl font-black mt-3">
							I'm <span class="text-theme-yellow text-7xl">Sasial</span>
						</h1>
						<h3 class="text-3xl mt-6">
							A Fullstack &amp; Game Developer, with more than 4 years experience
						</h3>
					</div>
					<div>
						<div class="relative md:w-[500px] md:h-[500px] h-full w-full">
							<canvas id="avatar" class="z-0 h-full w-full"></canvas>
							<img class="hidden sm:block absolute -z-1 top-4 left-24" src="~/assets/blob 1.svg" />
							<img class="hidden sm:block absolute -z-1 bottom-12 right-36" src="~/assets/dots 1.svg" />
							<button
								class="absolute bottom-20 left-12 h-9 w-9"
								@click="
									sasialSpinner.controls.autoRotate = !sasialSpinner.controls.autoRotate;
									sasialSpinner.playing = !sasialSpinner.playing;
								"
							>
								<img v-show="sasialSpinner.playing" class="w-full h-full" src="~/assets/pause.svg" />
								<img v-show="!sasialSpinner.playing" class="w-full h-full" src="~/assets/play.svg" />
							</button>
						</div>
					</div>
				</div>
				<div class="text-theme-blue text-center lg:text-left">
					<h2 class="text-5xl font-bold">Who am I?</h2>
					<p class="text-2xl mt-5">
						I am a student from Brisbane, Australia and I have been coding since 2018. I started on Roblox
						Lua (Luau) making Roblox games, and then I expanded into JavaScript and Typescript making
						Websites, Discord Bots &amp; Roblox Games (using roblox-ts).
					</p>
				</div>
				<div class="text-theme-blue text-center lg:text-left mt-6 lg:mt-20">
					<h2 class="text-5xl font-bold">Experience</h2>
					<div class="flex flex-wrap mt-12">
						<div
							class="
								bg-theme-purple-light
								rounded-2xl
								flex flex-col
								justify-center
								items-center
								w-full
								lg:w-112
								text-center
							"
						>
							<img class="mt-12 w-auto h-20" src="~/assets/koal.svg" />
							<h3 class="mt-8 font-light text-2xl">Senior Fullstack Engineer</h3>
							<p class="mt-2 font-light opacity-50 text-lg">31st December 2020 - Present</p>
							<p class="mt-8 text-2xl mx-12 mb-24">
								At Koal, I am responsible for a number of tasks including modernising the tech stack,
								re-writing the website, writing the backend API server and maintaining the bots.
							</p>
							<div class="mb-4 flex justify-center">
								<a href="https://koal.us/server">
									<img class="h-6 w-6 mr-3" src="~/assets/discord.svg" />
								</a>
								<a href="https://twitter.com/KoalBot">
									<img class="h-6 w-6 mr-3" src="~/assets/twitter.svg" />
								</a>
								<a href="https://roblox.com/groups/6701071/Koal">
									<img class="h-6 w-6 mr-3" src="~/assets/roblox.svg" />
								</a>
								<a href="https://github.com/KoalBot">
									<img class="h-6 w-6" src="~/assets/github.svg" />
								</a>
							</div>
						</div>
						<div
							class="
								bg-theme-purple-light
								rounded-2xl
								flex flex-col
								justify-center
								items-center
								w-full
								lg:w-112
								text-center
								mt-4
								lg:mt-0 lg:ml-16
							"
						>
							<img class="mt-12 w-auto h-20" src="~/assets/lundstrong.svg" />
							<h3 class="mt-8 font-light text-2xl">Founder</h3>
							<p class="mt-2 font-light opacity-50 text-lg">3rd October 2019 - Present</p>
							<p class="mt-8 text-2xl mx-12 mb-24">
								At Lundstrong, I've revolutionised the Roblox Open Source Community, create free
								products that are the first of their kind - expanding game development to everyone.
							</p>
							<div class="mb-4 flex justify-center">
								<a href="https://discord.gg/J7j4wJQ">
									<img class="h-6 w-6 mr-3" src="~/assets/discord.svg" />
								</a>
								<a href="https://twitter.com/LundstrongTech">
									<img class="h-6 w-6 mr-3" src="~/assets/twitter.svg" />
								</a>
								<a href="https://roblox.com/groups/8549616/Lundstrong-Technologies">
									<img class="h-6 w-6 mr-3" src="~/assets/roblox.svg" />
								</a>
								<a href="https://github.com/Lundstrong">
									<img class="h-6 w-6" src="~/assets/github.svg" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="text-theme-blue text-center lg:text-left mt-6 sm:mt-20">
					<h2 class="text-5xl font-bold">Tech Stack</h2>
					<div class="mt-12 flex flex-wrap gap-5 justify-center sm:justify-start">
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/html.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/css.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/js.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/node.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/ts.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/vue.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/tailwind.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/roblox.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/roblox-ts.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/rojo.png" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/firebase.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/nuxt.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/git.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/github.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/githubactions.svg" />
						</div>
						<div class="bg-theme-purple-light rounded-xl h-24 w-36 flex justify-center items-center">
							<img class="h-12 w-auto" src="~/assets/xd.svg" />
						</div>
					</div>
				</div>
				<div class="text-theme-blue text-center lg:text-left mt-6 sm:mt-20">
					<h2 class="text-5xl font-bold">Contact Me</h2>
					<p class="text-2xl mt-5">
						I am currently
						<span class="text-green-300 font-bold"> open for comissions</span>
						<!-- <span class="text-red-500 font-bold"> unable to handle any more comissions</span> -->
						. My timezone is GMT+10, so you may get replies from me at strange times. While I endavour to
						reply as soon as possible, it is helpful if you can tell me your timezone so I can reply when
						we're both online.
					</p>
					<div class="mt-8 flex flex-wrap gap-5 justify-center sm:justify-start items-center">
						<div
							class="bg-theme-purple-light rounded-xl h-36 w-52 flex flex-col justify-center items-center"
						>
							<h3 class="font-semibold text-2xl">Discord</h3>
							<h3 class="font-semibold text-lg mt-4">
								{{ presence.discord_user.username }}#{{ presence.discord_user.discriminator }}
							</h3>
							<div class="flex mt-4 justify-center items-center gap-1">
								<svg
									class="text-theme-yellow fill-current h-3 w-3"
									:hidden="presence.discord_status !== 'idle'"
									viewBox="0 0 100 100"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="50" cy="50" r="50" />
								</svg>
								<svg
									class="text-green-300 fill-current h-3 w-3"
									:hidden="presence.discord_status !== 'online'"
									viewBox="0 0 100 100"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="50" cy="50" r="50" />
								</svg>
								<svg
									class="text-gray-400 fill-current h-3 w-3"
									:hidden="presence.discord_status !== 'offline'"
									viewBox="0 0 100 100"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="50" cy="50" r="50" />
								</svg>
								<svg
									class="text-red-700 fill-current h-3 w-3"
									:hidden="presence.discord_status !== 'dnd'"
									viewBox="0 0 100 100"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="50" cy="50" r="50" />
								</svg>
								<h3 class="text-xs">{{ presence.discordStatus }}</h3>
							</div>
						</div>
						<div
							class="
								bg-theme-purple-light
								rounded-xl
								h-36
								w-60
								flex flex-col
								justify-center
								items-center
								text-center
							"
						>
							<h3 class="font-semibold text-2xl">Roblox Devforum</h3>
							<h3 class="font-semibold text-lg mt-4">sasial</h3>
							<h3 class="text-xs mt-4 opacity-50">slower response times than discord</h3>
						</div>
					</div>
				</div>
				<div class="text-theme-blue text-center lg:text-left mt-6 sm:mt-20 flex gap-3 items-center">
					<img class="h-6 w-auto" src="~/assets/github.svg" />
					<p class="text-2xl font-semibold">@sasial-dev</p>
					<img class="h-6 w-auto" src="~/assets/discord.svg" />
					<p class="text-2xl font-semibold">
						{{ presence.discord_user.username }}#{{ presence.discord_user.discriminator }}
					</p>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script lang="ts">
import { AmbientLight, Box3, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { LanyardResponse, LanyardData } from "@eggsydev/vue-lanyard/@types/lanyard";
import Vue from "vue";

enum statuses {
	"offline" = "Offline",
	"dnd" = "Do Not Disturb",
	"online" = "Online",
	"idle" = "Idle",
}

interface LanyardUserData extends LanyardData {
	discordStatus: statuses;
}

interface LanyardUserResponse extends LanyardResponse {
	data: LanyardUserData;
}

export default Vue.extend({
	async asyncData({ $axios }) {
		const presence = (await $axios.$get(
			"https://api.lanyard.rest/v1/users/479591041356398593",
		)) as LanyardUserResponse; // $lanyard is only a client-side plugin 😔, but I'll still use it to handle the websockets, as it does a lot for that
		if (presence.success) {
			presence.data.discordStatus = statuses[presence.data.discord_status];
			return {
				presence: presence.data,
			};
		}
	},
	data() {
		return {
			sasialSpinner: {
				playing: true,
				controls: undefined as OrbitControls | undefined,
			},
			presence: {} as LanyardUserData,
		};
	},
	async mounted() {
		const scene = new Scene();
		const camera = new PerspectiveCamera(75, 1, 0.1, 1000);

		const renderer = new WebGLRenderer({
			canvas: document.querySelector("#avatar") as HTMLCanvasElement,
			alpha: true,
		});

		const canvasWidth = (document.querySelector("#avatar") as HTMLCanvasElement).clientWidth;

		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(canvasWidth, canvasWidth, false);

		const gltf = await new GLTFLoader().loadAsync("/sasial.glb");

		// magical code from https://stackoverflow.com/a/52271526/12901988
		const bbox = new Box3().setFromObject(gltf.scene);
		const cent = bbox.getCenter(new Vector3());
		const size = bbox.getSize(new Vector3());

		// Rescale the object to normalized space
		bbox.setFromObject(gltf.scene);
		bbox.getCenter(cent);
		bbox.getSize(size);
		// Reposition to 0,halfY,0
		gltf.scene.position.copy(cent).multiplyScalar(-1);
		// gltf.scene.position.y += (size.y * 0.5);
		camera.position.setY(size.y);
		camera.position.setZ(-1);

		scene.add(gltf.scene);

		const ambientLight = new AmbientLight(0xffffff);
		scene.add(ambientLight);

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.autoRotate = true;
		controls.autoRotateSpeed = -2;
		controls.enableZoom = false;
		controls.enablePan = false;
		controls.enableDamping = true;
		controls.minPolarAngle = 1.1071487177940904; // stop vertical rotation
		controls.maxPolarAngle = 1.1071487177940904; // stop vertical rotation

		this.sasialSpinner.controls = controls;

		function animate() {
			requestAnimationFrame(animate);

			// update camera
			controls.update();

			if (window.innerWidth > 768) {
				// same as tailwind's md breakpoint
				camera.aspect = 1;
				camera.updateProjectionMatrix();

				renderer.setSize(500, 500, false);
			} else {
				camera.aspect = renderer.domElement.clientWidth / renderer.domElement.clientHeight;
				camera.updateProjectionMatrix();
				renderer.setSize(renderer.domElement.clientWidth, renderer.domElement.clientHeight, false);
			}

			// render
			renderer.render(scene, camera);
		}
		animate();

		const socket = (await this.$lanyard({
			userId: "479591041356398593",
			socket: true,
		})) as WebSocket; // { socket: true } -> will always be a websocket

		socket.addEventListener("message", ({ data }) => {
			const { d } = JSON.parse(data);
			if (!d.heartbeat_interval) {
				this.presence = d;
				this.presence.discordStatus = statuses[this.presence.discord_status];
			}
		});
	},
});
</script>
