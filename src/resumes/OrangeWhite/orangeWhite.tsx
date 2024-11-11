

import { css } from "./css"
import { Asset } from "expo-asset";
import { manipulateAsync } from "expo-image-manipulator";
import { IResume } from "../../services/data/Resume/index";
export async function renderOrangeWhite(data:IResume | undefined){
	console.log(data)
	const asset = Asset.fromModule(data.photoAdress);
	console.log('photo:',data.photoAdress)
	const image = await manipulateAsync(asset.localUri ?? asset.uri, [], { base64: true });
	console.log('Gerando Orange White')
	const  orangeWhite = `
${css}
<!--[if lt IE 9]>
<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>
<body id="top">
<div id="cv" class="instaFade">
	<div class="mainDetails">
		<div id="headshot" class="quickFade">
		<img src="data:image/jpeg;base64,${image.base64}" alt="Alan Smith" />
		</div>
		
		<div id="name">
			<h1 class="quickFade delayTwo">${data?.name}</h1>
			<h2 class="quickFade delayThree">Job Title</h2>
		</div>
		
		<div id="contactDetails" class="quickFade delayFour">
			<ul>
				<li>e: <a href="mailto:${data?.email}" target="_blank">${data?.email}</a></li>
				<li>w: <a href="http://www.bloggs.com">www.bloggs.com</a></li>
				<li>m: ${data?.telefone}</li>
			</ul>
		</div>
		<div class="clear"></div>
	</div>
	
	<div id="mainArea" class="quickFade delayFive">
		<section>
			<article>
				<div class="sectionTitle">
					<h1>Personal Profile</h1>
				</div>
				
				<div class="sectionContent">
					<p>${data?.desc}</p>
				</div>
			</article>
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h1>Work Experience</h1>
			</div>
			
			<div class="sectionContent">
				<article>
					<h2>Job Title at Company</h2>
					<p class="subDetails">April 2011 - Present</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
				</article>
				
				<article>
					<h2>Job Title at Company</h2>
					<p class="subDetails">Janruary 2007 - March 2011</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
				</article>
				
				<article>
					<h2>Job Title at Company</h2>
					<p class="subDetails">October 2004 - December 2006</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
				</article>
			</div>
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h1>Key Skills</h1>src/resumes/brown-yellow.tsx
			</div>
			
			<div class="sectionContent">
				<ul class="keySkills">
					<li>A Key Skill</li>
					<li>A Key Skill</li>
					<li>A Key Skill</li>
					<li>A Key Skill</li>
					<li>A Key Skill</li>
					<li>A Key Skill</li>
					<li>A Key Skill</li>
					<li>A Key Skill</li>
				</ul>
			</div>
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h1>Education</h1>
			</div>
			
			<div class="sectionContent">
				<article>
					<h2>College/University</h2>
					<p class="subDetails">Qualification</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
				</article>
				
				<article>
					<h2>College/University</h2>
					<p class="subDetails">Qualification</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
				</article>
			</div>
			<div class="clear"></div>
		</section>
		
	</div>
</div>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-3753241-1");
pageTracker._initData();
pageTracker._trackPageview();
</script>
</body>
</html>
`
return orangeWhite
}