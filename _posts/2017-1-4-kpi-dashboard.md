---
layout: post
title: "KPI Dashboard"
subtitle: Real-time data and reporting in one place.
permalink: /kpi-dashboard
category: work
---
<body id="work">
	<div class="pictures">
		<img src="/img/12.jpg">
	</div>
	<div class="content">
		<h4>Identify Key Metrics</h4>
		<p>
			Worked with HR Operations to create a course that focuses user's actions on the data that matter.
		</p>
		<p>
			To best serve the learner, we focused on their ability to:
		</p>
		<ul class="objectives">
			<li>Navigate the dashboard</li>
			<li>View Scorecard and Executive Summary</li>
			<li>Interpret available data to make operational decisions</li>
		</ul>
		<!-- 
		<h4>Navigation and Exploration</h4>
		<p>
			We wanted to provide an easy way to explore relevant content learners haven't connected with yet.
		</p>
		<p class="second-p">
			Using xAPI statements, we gathered the number of views on each topic. Views tell us that the topic addresses learners' key questions and problems, and a way to measure content relevance.
		</p>
		-->
		<h4>Likes and feedback</h4>
		<p>
			It's nice to know how many users are viewing our content, but it's nicer to know if it triggers interest. 
			<!-- To measure the sign of interest, we examed the number of likes, shares & feedback. -->
		</p>
		<h5>Likes</h5>
		<p>
			I wanted to provide learners with a simple and quick way to interact with the content, and find out if they like the content we're sharing.
		</p>
		<div class="heart-shape"></div>
		<p>
			To learn which content users find it interesting, I tracked the number of likes by customizing a 'like' button embedded with a trigger to execute xAPI statements.
		</p>
		<pre>
			<code>
 {
   "verb":{
      "id":"http://activitystrea.ms/schema/1.0/like",
      "display":{
         "en-US":"liked"
      }
   },
   "object":{
      "id":"http://example.com/button_example",
      "definition":{
         "name":{
            "en-US":"this"
         },
         "description":{
            "en-US":"Example xAPI Button"
         }
      },
      "objectType":"Activity"
   }
 }
			</code>
		</pre>
		<!-- <h5>Shares</h5>
		<p>
			Monitored shares as they often reflect how learners perceive the course, and highly shared courses can indicate the content to be helpful and relevant.
		</p>
		<div class="snap">
			<div class="pictures">
				<img src="/img/shares.png" alt="work sample">
			</div>
		</div> -->
		<h5>Feedback</h5>
		<p>
			Feedback is one of the ways I ask our learners what I can do to improve their experience. Learners can also report a problem or send suggestions and ideas to help us constantly improve content and features.
		</p>