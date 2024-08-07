export const  orangeWhite = `
<!DOCTYPE html>
<html>
<head>
<title>Joe Bloggs - Curriculum Vitae</title>

<meta name="viewport" content="width=device-width"/>
<meta name="description" content="The Curriculum Vitae of Joe Bloggs."/>
<meta charset="UTF-8"> 

<link type="text/css" rel="stylesheet" href="style.css">
<link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300' rel='stylesheet' type='text/css'>
<style>
html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video {
	border:0;
	font:inherit;
	font-size:100%;
	margin:0;
	padding:0;
	vertical-align:baseline;
	}
	
	article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
	display:block;
	}
	
	html, body {background: #181818; font-family: 'Lato', helvetica, arial, sans-serif; font-size: 16px; color: #222;}
	
	.clear {clear: both;}
	
	p {
		font-size: 1em;
		line-height: 1.4em;
		margin-bottom: 20px;
		color: #444;
	}
	
	#cv {
		width: 90%;
		max-width: 800px;
		background: #f3f3f3;
		margin: 30px auto;
	}
	
	.mainDetails {
		padding: 25px 35px;
		border-bottom: 2px solid #cf8a05;
		background: #ededed;
	}
	
	#name h1 {
		font-size: 2.5em;
		font-weight: 700;
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		margin-bottom: -6px;
	}
	
	#name h2 {
		font-size: 2em;
		margin-left: 2px;
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
	}
	
	#mainArea {
		padding: 0 40px;
	}
	
	#headshot {
		width: 12.5%;
		float: left;
		margin-right: 30px;
	}
	
	#headshot img {
		width: 100%;
		height: auto;
		border-radius: 50px;
	}
	
	#name {
		float: left;
	}
	
	#contactDetails {
		float: right;
	}
	
	#contactDetails ul {
		list-style-type: none;
		font-size: 0.9em;
		margin-top: 2px;
	}
	
	#contactDetails ul li {
		margin-bottom: 3px;
		color: #444;
	}
	
	#contactDetails ul li a, a[href^=tel] {
		color: #444; 
		text-decoration: none;
		transition: all .3s ease-in;
	}
	
	#contactDetails ul li a:hover { 
		color: #cf8a05;
	}
	
	
	section {
		border-top: 1px solid #dedede;
		padding: 20px 0 0;
	}
	
	section:first-child {
		border-top: 0;
	}
	
	section:last-child {
		padding: 20px 0 10px;
	}
	
	.sectionTitle {
		float: left;
		width: 25%;
	}
	
	.sectionContent {
		float: right;
		width: 72.5%;
	}
	
	.sectionTitle h1 {
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		font-style: italic;
		font-size: 1.5em;
		color: #cf8a05;
	}
	
	.sectionContent h2 {
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		font-size: 1.5em;
		margin-bottom: -2px;
	}
	
	.subDetails {
		font-size: 0.8em;
		font-style: italic;
		margin-bottom: 3px;
	}
	
	.keySkills {
		list-style-type: none;
		column-count:3;
		margin-bottom: 20px;
		font-size: 1em;
		color: #444;
	}
	
	.keySkills ul li {
		margin-bottom: 3px;
	}
	
	@media all and (min-width: 602px) and (max-width: 800px) {
		#headshot {
			display: none;
		}
		
		.keySkills {
		column-count:2;
		}
	}
	
	@media all and (max-width: 601px) {
		#cv {
			width: 95%;
			margin: 10px auto;
			min-width: 280px;
		}
		
		#headshot {
			display: none;
		}
		
		#name, #contactDetails {
			float: none;
			width: 100%;
			text-align: center;
		}
		
		.sectionTitle, .sectionContent {
			float: none;
			width: 100%;
		}
		
		.sectionTitle {
			margin-left: -2px;
			font-size: 1.25em;
		}
		
		.keySkills {
			column-count:2;
		}
	}
	
	@media all and (max-width: 480px) {
		.mainDetails {
			padding: 15px 15px;
		}
		
		section {
			padding: 15px 0 0;
		}
		
		#mainArea {
			padding: 0 25px;
		}
	
		
		.keySkills {
		column-count:1;
		}
		
		#name h1 {
			line-height: .8em;
			margin-bottom: 4px;
		}
	}
	
	@media print {
		#cv {
			width: 100%;
		}
	}
	
	@-webkit-keyframes reset {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	
	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	
	@-moz-keyframes reset {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	
	@-moz-keyframes fade-in {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	
	@keyframes reset {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	
	
	
</style>
<!--[if lt IE 9]>
<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>
<body id="top">
<div id="cv" class="instaFade">
	<div class="mainDetails">
		<div id="headshot" class="quickFade">
			<img src="headshot.jpg" alt="Alan Smith" />
		</div>
		
		<div id="name">
			<h1 class="quickFade delayTwo">Joe Bloggs</h1>
			<h2 class="quickFade delayThree">Job Title</h2>
		</div>
		
		<div id="contactDetails" class="quickFade delayFour">
			<ul>
				<li>e: <a href="mailto:joe@bloggs.com" target="_blank">joe@bloggs.com</a></li>
				<li>w: <a href="http://www.bloggs.com">www.bloggs.com</a></li>
				<li>m: 01234567890</li>
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
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
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