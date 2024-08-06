﻿
import { css } from "./css"
import { useEffect } from "react";
import {useProfileData} from '../../services/data/Resume/index'
import { IResume } from "../../screens/Profile";
export function renderMinimal(data:IResume){

    console.log('a')
    const minimalGray = `
    ${css}
    
    <body class="letter" data-page-count="1">
        <section id="save">
            <section class="sheet" data-page-number="1">
                <aside>
                    <section class="contact">
                        <h6>Contact</h6>
                        <ul>
                            <li>
                                <p><i class="fa fa-map-marker-alt" title="Location"></i> San Francisco, CA</p>
                            </li>
                            <li>
                                <p><i class="fa fa-phone" title="Cell phone"></i> <a href="tel:4153234000">${data?.telefone}</a></p>
                            </li>
                            <li>
                                <p><i class="fa fa-envelope" title="Email"></i> <a
                                        href="mailto:joe@joesmith.site">${data?.email}</a></p>
                            </li>
                            <li>
                                <p><i class="fa fa-globe-americas" title="Website"></i> <a
                                        href="https://joesmith.site">joesmith.site</a></p>
                            </li>
                            <li>
                                <p><i class="fab fa-github" title="GitHub"></i> <a
                                        href="https://github.com/Tombarr">github.com/Tombarr</a></p>
                            </li>
                        </ul>
                    </section>
                    <section class="skills">
                        <h6>Skills</h6>
                        <ul>
                            <li><span>Responsive Design</span></li>
                            <li><span>Mobile Development</span></li>
                            <li><span>Usability Testing</span></li>
                            <li><span>Data Visualization</span></li>
                            <li><span>A/B Testing</span></li>
                        </ul>
                    </section>
                    <section class="skills">
                        <h6>Technologies</h6>
                        <ul>
                            <li><span>JavaScript</span></li>
                            <li><span>PHP</span></li>
                            <li><span>HTML5</span></li>
                            <li><span>CSS3</span></li>
                            <li><span>Bootstrap</span></li>
                            <li><span>React</span></li>
                        </ul>
                    </section>
                    <section class="references">
                        <h6>References</h6>
                        <address>
                            Jane Doe<br>
                            Alphabet Inc.<br>
                            (413) 025-1900
                            jane@janedoe.site
                        </address>
                        <address>
                            Luke O'Connor<br>
                            Facebook<br>
                            (413) 125-1400
                            luke@facebook.site
                        </address>
                        <p>Typeset in HTML &amp; CSS<br>
                            See <a href="https://git.io/f4dXp">git.io/f4dXp</a></p>
                    </section>
                </aside>
                <section>
                    <header class="name" aria-label="Joe Smith">
                        <a href="https://joesmith.site">
                            <svg width="257px" height="35px" viewBox="0 0 257 35" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                                    font-family="Montserrat-Regular, Montserrat" font-size="48" font-weight="normal">
                                    <g id="Letter" transform="translate(-54.000000, -140.000000)" fill="#484848">
                                        <text id="JOE-SMITH">
                                            <tspan x="54.728" y="174">${data?.name}</tspan>
                                        </text>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <h6>Software Engineer Extraordinaire</h6>
                        <hr>
                    </header>
                    <section>
                        <section class="summary">
                            <h6>Summary</h6>
                            <p>Deadline-oriented software engineer with lots of experience.
                                Solid track record of architecting solutions that exceed client expectations.</p>
                        </section>
                        <section class="experience">
                            <h6>Experience</h6>
                            <ol>
                                <li>
                                    <header>
                                        <p class="sanserif">Senior Software Engineer</p>
                                        <time>2016 – Present</time>
                                    </header>
                                    <span>Google</span>
                                    <ul>
                                        <li>Developed scalable database indexing technology</li>
                                        <li>Created GraphQL APIs for accessing Google Earth</li>
                                        <li>Leveraged Waymo datasets to double traffic statistics accuracy</li>
                                    </ul>
                                </li>
                                <li>
                                    <header>
                                        <p class="sanserif">Software Engineer</p>
                                        <time>2014 – 2016</time>
                                    </header>
                                    <span>Facebook</span>
                                    <ul>
                                        <li>Collected political affiliation data from millions of users</li>
                                        <li>Authored user stories and mapped user journeys</li>
                                        <li>Introduced regression testing to Yoga layout framework</li>
                                    </ul>
                                </li>
                                <li>
                                    <header>
                                        <p class="sanserif">Software Engineer Intern</p>
                                        <time>2013 – 2014</time>
                                    </header>
                                    <span>Twitter</span>
                                    <ul>
                                        <li>Analyzed and optimized code coverage across Scala architecture</li>
                                        <li>Created project environment setup XML files</li>
                                        <li>Maintained TCP/IP connections with 250,000 concurrent users</li>
                                    </ul>
                                </li>
                                <li>
                                    <header>
                                        <p class="sanserif">Independent iOS Engineer</p>
                                        <time>2012 – Present</time>
                                    </header>
                                    <ul>
                                        <li>Developed SuperUltraCoolWeather app using AccuWeather API</li>
                                        <li>Shipped products to more than 1,000,000 daily active users</li>
                                    </ul>
                                </li>
                            </ol>
                        </section>
                        <section class="education">
                            <h6>Education</h6>
                            <ol>
                                <li>
                                    <div>
                                        <p class="sanserif">M.S., Human Computer Interaction</p>
                                        <time></time>
                                    </div>
                                    <div>
                                        <span>Massachusetts Institute of Technology</span>
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p class="sanserif">B.S., Computer Science</p>
                                        <time>Sept '08 – May '12</time>
                                    </div>
                                    <div>
                                        <span>Harvard University</span>
                                        <span>GPA: 3.91</span>
                                    </div>
                                </li>
                            </ol>
                        </section>
                    </section>
                </section>
            </section>
        </section>
        <!-- Script to make elements authorable and save changes to localStorage -->
        <!-- Document control buttons-->
    
    
    
    
    </body><!-- Developed by Tom Barrasso. https://barrasso.me -->
    
    </html>
    `
return minimalGray


}