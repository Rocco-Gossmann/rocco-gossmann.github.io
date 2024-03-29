import{X as w}from"./index.bae3f74a.js";function v(n){const r=n-1;return r*r*r+1}function S(n,{delay:r=0,duration:s=400,easing:o=w}={}){const l=+getComputedStyle(n).opacity;return{delay:r,duration:s,easing:o,css:i=>`opacity: ${i*l}`}}function _(n,{delay:r=0,duration:s=400,easing:o=v,axis:l="y"}={}){const i=getComputedStyle(n),h=+i.opacity,c=l==="y"?"height":"width",u=parseFloat(i[c]),t=l==="y"?["top","bottom"]:["left","right"],a=t.map(e=>`${e[0].toUpperCase()}${e.slice(1)}`),b=parseFloat(i[`padding${a[0]}`]),m=parseFloat(i[`padding${a[1]}`]),p=parseFloat(i[`margin${a[0]}`]),g=parseFloat(i[`margin${a[1]}`]),f=parseFloat(i[`border${a[0]}Width`]),k=parseFloat(i[`border${a[1]}Width`]);return{delay:r,duration:s,easing:o,css:e=>`overflow: hidden;opacity: ${Math.min(e*20,1)*h};${c}: ${e*u}px;padding-${t[0]}: ${e*b}px;padding-${t[1]}: ${e*m}px;margin-${t[0]}: ${e*p}px;margin-${t[1]}: ${e*g}px;border-${t[0]}-width: ${e*f}px;border-${t[1]}-width: ${e*k}px;`}}const A={meta_keywords:"",menutexts:{intro:"Einleitung:",aboutme:"Über mich",hobbies:"Hobbys",strengthweaknesses:"Stärken & Schwächen",education:"Werdegang:",job:"Beruf & Erfahrung",cv:"Lebenslauf",projects:"Projekte:",misc:"Sonstiges:",tools:"Meine Werkzeuge",links:"Links",legal:"Rechtliche Hinweise"},aboutme:{whoami_headline:"Wer bin ich?",whoami_text:`
            <p>Hallo, mein Name ist Rocco, aber das habt Ihr sicher schon geahnt. Ich bin 1987 geboren und somit ${d(1987)} Jahre jung.</p>

            <h5> Ausserdem bin ich: </h5>
            <ul>
                <li><span class="li-inline">1,83m groß</span></li>
                <li><span class="li-inline">vom männlichen Geschlecht</span></li>
                <li><span class="li-inline">single</span></li>
                <li><span class="li-inline">introvertiert</span></li>
                <li><span class="li-inline">stolzer Besitzer eines kleinen Hauses auf dem Land</span></li>
                <li><span class="li-inline">im Besitz eines Führerscheins der Klasse B</span></li>
                <li><span class="li-inline">und des dazu passenden Fahrzeugs</span></li>
            </ul>
        `,experience_headline:"Was habe ich bisher beruflich gemacht?",experience_text:`
            <p>
                Mein gelernter Beruf ist "Staatlich geprüfter Betriebswirt, mit Fachrichtung Wirtschaftsinformatik".<br />
                Abschluss in 2010 <small>(Gefolgt von einem Anerkennungsjahr bis 2011)</small><br />
                Allerdings lagen meine Stärke, mehr in der Informatik als in der Wirtschaft.
            </p>
            <p>
                Daher bin ich seit 2011 fest als <b>Software-Entwickler und -Programmierer für Web-basierte Anwendungen</b> angestellt (oder kurz gesagt <b>Web - Entwickler</b>). <br />
                Das Grundwissen aus der Betriebswirtschaft kommt mir hier und da trotzdem zum Einsatz.
                Etwa bei der Entwicklung von Buchhaltungs- und Abrechnungssystem.
            </p>

            <h5>Meine bisherigen, beruflichen Aufgaben:</h5>
            <ul>
                 <li class="li-border"> Entwicklung und Bau von <b>Apache+PHP+MySQL</b> (LAMP-Stack) basierten Front- und Backends.</li>
                 <li class="li-border"> Bau von <b>Progressiven WebApps</b> (kurz <b>PWA</b>s) mit Fokus auf Offline-Verwendbarkeit.</li>
                 <li class="li-border"> Entwicklung von Frontends mittels <b>nativen Javascript, HTML und CSS</b> sowie Frameworks/Bibliotheken wie <b>Bootstrap, jQuery und Svelte/SvelteKit</b>.</li>
                 <li class="li-border"> Technische Beratung und Unterstützung bei der Planung neuer Apps und Features.</li>
                 <li class="li-border"> Wartung und Dokumentation bestehender Anwendung.</li>
                 <li class="li-border"> Bau von <b>REST-Schnittstellen</b> mit Fokus auf Sicherheit durch z.B. <b>AES-Verschlüsselung</b> und Tokens.</li>
                 <br />
                 <li class="li-border"> Bau von automatisierten Systemen für die Buchhaltung. <br />
                      (Erstellen von Abrechnungen/Rechnungen, Angeboten, Belegen, etc. ...) </li>
                 <br />
                 <li class="li-border"> Bau und Wartung von interaktiven Anwendungen für den Livestream-Bereich via <b>Flash/ActionScript</b>
                 <li class="li-border"> Bau von interaktiven Stream-Playern für die Austrahlung im TV. </li>
                 <li class="li-border"> Sowie das dafür nötige Backend im das ausgestrahlte Programm via Telefon zu beinflussen. <br />
                    <small>(Da diese Anwendungen zum Teil für Seiten/TV-Programme des nicht jugendfreien Bereichs waren, 
                    werde ich hier, auf dieser öffentlich erreichbaren Seite, nicht weiter daruf eingehen. 😅)</small>
                 </li>
            </ul>

            <h5>Erfahrungen im Bau von Anwendungen</h5>
            <ul>
                <li class="li-border">Anwendungen für Zeitlichen Planung:
                    <ul>
                        <li class="li-border">Sendepläne </li>
                        <li class="li-border">Schichtpläne </li>
                        <li class="li-border">Termienplanung</li>
                        <li class="li-border">etc. ...</li>
                    </ul>
                </li>
                <li class="li-border">Anwendungen zum Aufgaben-Management. <br />Mit Fokus auf Echtzeit / Zeitnaher-Kommunikation und Offline-verwendbarkeit. </li>
                <li class="li-border">Schnittstellen zur Übertragung von Daten und Dokumenten. z.B.:
                <ul>
                    <li class="li-border"> Zustände der <a href="https://immobilienwirtschaft.vodafone.de/produkte/gebaeudekonnektivitaet/" target="_blank">"Gebäudekonnektivität 4.0"</a> - Sensoren von Vodafone
                    </li>
                    <li class="li-border"> oder die Übertragung von Vertrags-Dokumenten an <b>SAPERION</b>-Systeme
                    </li>
                </ul>
            </ul>
        `,cv_headline:"Lebenslauf",cv_text:`
            <p>
                Von Aug. 2011 bis Nov. 2020 war ich fest bei der <a href="https://www.rapidcomp.de/" target="_blank">RapidComp GmbH</a> in Berlin angestellt.
                Leider musste die Firma in 2020 durch die, von der Regierung ergriffenen, mit COVID-19 zusammenhängenden Maßnahmen dem Großteil ihrer Belegschaft kündigen.
            </p>
            <p>
                Seit Dez. 2020 bin ich nun bei der GBA-Professional GmbH angestellt. Dort entwickeln und programmieren meine Kollegen und ich 
                das Produkt <a href="https://ivm-pro.de/" target="_blank">IVM-Professional / IVMPRO</a>, 
                welches Deutschlandweit als "Customer Relationship Management"(kurz CRM) - System  in der Wohnungswirtschaft zum Einsatz kommt.
            </p>
            Insgesammt gestalltet sich mein Lebenslauf wie folgt:
            <ul>
                <li class="li-border"> <b> 1993 - 2003: </b> Grund- + Gesamtschule </li>
                <li class="li-border"> <b> 2005 - 2007: </b> Ausbildung zum "Staatl. gepr. Kaufmännsichen Assistent" </li>
                <li class="li-border"> <b> 2007 - 2010: </b> Ausbildung zum "Staatl. gepr. Betriebswirt mit Fachrichtung Wirtschaftsinformatik" </li>
                <li class="li-border"> <b> 2011 - 2020: </b> Software-Entwicker und -Programmierer bei der <a href="https://www.rapidcomp.de/" target="_blank">RapidComp GmbH</a> in Berlin</li>
                <li class="li-border"> <b> 2020 - jetzt: </b> Programmierer bei der <a href="https://ivm-pro.de/" target="_blank">IVM-Professional / IVMPRO</a> in Bernau</li>
            </ul>
        `,hobbys_headline:"Was beschäftigt mich in der Freizeit?",hobbys_text:`
            <p>In meiner Freizeit, neben den üblichen häuslichen Pflichten, verbringe ich meine Zeit gern damit,
               mein Wissen über Programmierung und Software-Entwicklung zu vertiefen.</p>

            <p>Über die Jahre haben sich so ein paar Projekte aus den verschiedensten Bereichen der Programmierung angesammlt.<br />
               Das offensichtlichste ist dabei natürlich die Web-Entwicklung. Ohne diese würde es diese Seite hier nicht geben.</p>

            <p>Aber auch andere Programmiersprachen interessieren mich.<br />
               Im Grunde ist von Assembler (6052 und z80), über C/C++, Java, Go, Lua und natürlich JavaScript/Typescript, HTML, CSS, PHP und MySQL alles möglich.</p>
        `,personalinfo_headline:"Stärken & Schwächen",personalinfo_text:`
            <h5>Stärken</h5>
            In der Lage zu sein jemandes Stärken zu sehen und zu nutzen ist wichtig.<br />
            Meine Stärken sind:  
            <ul>
                <li class="li-border">Experimentierfreudigkeit</li>
                <li class="li-border">Analytisches Denken</li>
                <li class="li-border">Spaß am Lernen</li>
                <li class="li-border">Die Fähigkeit mir schnell neues Grundwissen und Fähigkeiten anzueigenen</li>
                <li class="li-border">Leidenschaft für Programmierung und Software-Entwicklung</li>
            </ul>

            <h5>Schwächen</h5>
            Wie gern würde ich behaupten perfekt zu sein. Allerdings bin ich es nicht.<br />
            Zu meinen Schwächen gehören leider:
            <ul>
                <li class="li-border">Unwohlsein in großen Menschenmengen</li>
                <li class="li-border">Unkonventionelles Denken</li>
                <li class="li-border">manchmal auch zu kompliziertes Denken</li>
                <li class="li-border">Konzentrationsschwächen und leichte Ablenkbarkeit</li>
                <li class="li-border">Eine Lese-/Rechtschreibschwäche</li>
                <li class="li-border">und leider eine, mit all diesen Punkten verbundene, vergleichbar langsame Arbeitsweise</li>
            </ul>
        `,misc_headline:"Sonstiges:",tools_headline:"Werkzeuge  mit dehnen ich erfahrung habe",tools_text:`
            Was werkzeuge angeht hat man als Programmierer natürlich eine riesen Auswahl. Die Liste hier bedeutet nicht, dass
            ich anderen, neuen Tools gegenüber abgeneigt bin. Im Grunde ist kein Tool wirklich gut oder schlecht. 

            <h5>Betriebssyteme</h5>
            <ul>
                <li class="li-border">Windows</li>
                <li class="li-border">MacOS</li>
                <li class="li-border">bevorzugt aber eher Linux (Debian / Ubuntu / Linux Mint oder Fedora) </li>
            </ul>

            <h5>IDEs / Editoren</h5>
            <ul>
                <li class="li-border">NuSphere PhpED</li>
                <li class="li-border"><a href="https://www.jetbrains.com/de-de/phpstorm/" target="_blank">JetBrains PHPStorm / WebStorm</a></li>
                <li class="li-border"><a href="https://visualstudio.microsoft.com/de/" target="_blank">Visual Studio (Für C/C++ Entwicklung)</a></li>
                <li class="li-border"><a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a></li>
                <li class="li-border">bevortzugt aber, sofern möglich <a href="https://github.com/neovim/neovim" target="_blank">NeoVim</a> + <a href="https://github.com/tmux/tmux/wiki" target="_blank">Tmux</a> mit entsprechender Konfiguration für AutoCompletion und Debugger (siehe <a href="https://github.com/Rocco-Gossmann/nvChadConfig" target="_blank">Meine Vim Konfiguration</a>)
            </ul>

            <h5>Sonstiges</h5>
            <ul>
                <li class="li-border">GIT</li>
                <li class="li-border">Microsoft Outlook / Office Word / Office Excel</li>
                <li class="li-border">Thunderbird</li>
                <li class="li-border">LibreOffice Writer / Calc </li>
            </ul>

            <h5>Hardware</h5>
            <ul>
                <li class="li-border">Asus ROG x13 Laptop (Linux + Window Dualboot)</li>
                <li class="li-border">M1 Macbook Air</li>
                <li class="li-border">iPad Pro 2020</li>
                <li class="li-border">Galaxy Tab S7+</li>
                <li class="li-border">Raspberry PI 400 als NAS und VPN Server</li>
            </ul>

        `,links_headline:"Sonstige Links",links_text:`
            <ul>
                <li class="li-border"><a href="https://github.com/rocco-gossmann" target="_blank">
                    Mein GitHub
                 </a></li>
            </ul>
        `,legal_headline:"Rechtliche Hinweise",legal_text:`
            <h5>Haftung für Links</h5>
            Diese Seite enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            Links zu 

            <h5>Urheberrecht</h5>
            Die, durch die Seitenbetreiber erstellten, Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
            Insbesondere werden Inhalte Dritter als solche gekennzeichnet. 
            Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.

            <h5>Datenschutz ${"für "+window.location.href.split("#")[0]} </h5>
            Diese Seite erhebt und übermittlet keinerlei Daten des Besuchers mit ausnahme der vom Server-Host benötigten Daten (Siehe nächster Abschnitt).

            <h5>Datenschutz für github.io</h5>
            Diese Website wird auf Servern von <a href="https://www.github.com/" target="_blank">Github Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA</a> gehostet. <br />
            Beachten Sie daher auch die <a href="https://help.github.com/articles/github-privacy-policy/" target="_blank">GitHub Privacy Policy</a> und <a href="https://help.github.com/articles/global-privacy-practices/" target="_blank">GitHub Global Privacy Practices</a>.
        `}},P={meta_keywords:"",menutexts:{intro:"Introduction:",aboutme:"About me",hobbies:"Hobbies",strengthweaknesses:"Strength & Weaknesses",education:"Career:",job:"Jobs & Experience",cv:"Curriculum vitae",projects:"Projects:",misc:"Miscellaneous:",tools:"My Tools",links:"Links",legal:"Legal notice"},aboutme:{whoami_headline:"Who am I?",whoami_text:`
            <p>Hello, my name is Rocco, but you probably guessed as much. I was born in 1987 and thus I am ${d(1987)} years young.</p>

            <h5> In addition to that I am: </h5>
            <ul>
                <li><span class="li-inline">1.83m tall</span></li> 
                <li><span class="li-inline">of male gender</span></li>
                <li><span class="li-inline">single</span></li>
                <li><span class="li-inline">introverted</li>
                <li><span class="li-inline">proud owner of a small house on the country sight</span></li>
                <li><span class="li-inline">owner of a driver's license class B and fitting vehicle</span></li>
            </ul>
        `,experience_headline:"What was/is my job until now?",experience_text:`
            <p>
                My learned occupation is "State-certified business economist specializing in business informatics".
                I made my diploma in 2011.<br />
                However, my strength lay more in the "informatics/computer science" part than the "business economics".
            </p>
            <p>
                That is why I, since 2011, am employed as <b>Software developer and -programmer for WEB-based applications</b> (or <b>WEB developer</b> for short).<br />
                The basics of "business economics" are still coming in handy sometimes.
                For example, when developing applications for accounting and management.
            </p>

            <h5>Jobs I've done so far:</h5>
            <ul>
                 <li class="li-border"> Developing of <b>Apache+PHP+MySQL</b> (LAMP-Stack) based Front- und Backends.</li>
                 <li class="li-border"> Building of <b>Progressiv WebApps</b> (<b>PWA</b>s for short) with focus on offline-availability.</li>
                 <li class="li-border"> Development of Frontends using <b>native Javascript, HTML and CSS</b> as well as using Frameworks/Libraries like <b>Bootstrap, jQuery and Svelte/SvelteKit</b>.</li>
                 <li class="li-border"> Advisory roles in planning of new Apps and Features.</li>
                 <li class="li-border"> Maintenance and documentation of existing applications.</li>
                 <li class="li-border"> Building of <b>REST-APIs</b> with focus on security. For example through <b>AES-encryption</b> and Tokens.</li>
                 <br />
                 <li class="li-border"> 
                    Building of automated systems for Accounting and Finance<br />
                        (creation of invoices, offers, receipts, etc. ...) 
                 <br />
                 <li class="li-border"> Building and maintainance of interactive applications for livestreaming via <b>Flash/ActionScript</b>
                 <li class="li-border"> Building of interactive stream players for use in TV broadcasts. </li>
                 <li class="li-border"> as well, as the required backend to influence the broadcast TV programm via Phone. <br />
                    <small>(Since these applications fall partially into a none youth protected area, I'll not go into any further details, on this publicly available site here. 😅)</small>
                 </li>
            </ul>

            <h5>I have experience in building/working with:</h5>
            <ul>
                <li class="li-border">Applications for time management:
                    <ul>
                        <li class="li-border">broadcasting schedules </li>
                        <li class="li-border">shift schedules </li>
                        <li class="li-border">scheduling in general</li>
                        <li class="li-border">etc. ...</li>
                    </ul>
                </li>
                <li class="li-border">
                    Applications for task management. <br />
                    with focus on realtime/timely communication and offline availability.
                </li>
                <li class="li-border">APIs for transferring documents and data. for Example.:
                <ul>
                    <li class="li-border"> processing the State of <a href="https://immobilienwirtschaft.vodafone.de/produkte/gebaeudekonnektivitaet/" target="_blank">"Gebäudekonnektivität 4.0"</a> - Sensors by Vodafone </li>
                    <li class="li-border"> or transfering contract documents to <b>SAPERION</b>-Systems </li>
                </ul>
            </ul>
        `,cv_headline:"Curriculum vitae",cv_text:`
            <p>
                From Aug. 2011 till Nov. 2020 I was hired by the <a href="https://www.rapidcomp.de/" target="_blank">RapidComp GmbH</a> in Berlin.<br />
                Unfortunately, in 2020, the company had to lay off most of its workforce due to the measures taken by the government related to COVID-19.
            </p>
            <p>
                Since Dec. 2020 I'm now part of the der GBA-Professional GmbH in Bernau. 
                There, my colleagues and I develop and maintain the product
                <a href="https://ivm-pro.de/" target="_blank">IVM-Professional / IVMPRO</a>, 
                which is used throughout Germany as a "Customer Relationship Management"(short CRM) system for the housing market.
            </p>
            In general, my curriculum vitae looks like this:
            <ul>
                <li class="li-border"> <b> 1993 - 2003: </b> School </li>
                <li class="li-border"> <b> 2005 - 2007: </b> Education/Training for "State certified commercial assistant" </li>
                <li class="li-border"> <b> 2007 - 2010: </b> Education/Training for "State-certified business economist specializing in business informatics" </li>
                <li class="li-border"> <b> 2011 - 2020: </b> Software-Developer and -programmer at the <a href="https://www.rapidcomp.de/" target="_blank">RapidComp GmbH</a> in Berlin</li>
                <li class="li-border"> <b> 2020 - now: </b> Programmer at the <a href="https://ivm-pro.de/" target="_blank">IVM-Professional / IVMPRO</a> in Bernau</li>
            </ul>
        `,hobbys_headline:"What do I do in my spare time?",hobbys_text:`
            <p>In my spare time, next to any domestic duties, I like to 
               expand my knowledge about programming and software development.</p>

            <p>Over the years I've tackled various projects in all kinds of areas in the programming space.<br />
               The most obvious one being Web Development. Without that, this site would not exist.</p>

            <p>But I'm also interessted in other programming languanges too.<br />
               Basically from  Assembler (6052 and z80), over C/C++, Java, Go, Lua and of course JavaScript/Typescript, HTML, CSS, PHP und MySQL  everything is possible.</p>
        `,personalinfo_headline:"Strength & Weaknesses",personalinfo_text:`
            <h5>Strength</h5>
            <p>
                Being able to see and utilized someone's strengths is important.<br />
                My strengths are:
            </p>
            <ul>
                <li class="li-border">Willingness to experiment.</li>
                <li class="li-border">Analytical thinking.</li>
                <li class="li-border">I have fun learning new things.</li>
                <li class="li-border">The ability to quickly aquire new basic knowledge.</li>
                <li class="li-border">A passion for programming and software development.</li>
            </ul>

            <h5>Weaknesses</h5>
            <p>
                As much, as I'd like to pretend I'm perfect. I'm not.<br />
                Some of my biggest weaknesses are.
            </p>
            <ul>
                <li class="li-border">Unease in crowds of people.</li>
                <li class="li-border">Unconventional thinking</li>
                <li class="li-border">Sometimes overthinking things</li>
                <li class="li-border">The quick loss of concentration and easy distractibility</li>
                <li class="li-border">slight dyslexia</li>
                <li class="li-border">and because of all of that a relatively slow way of working.</li>
            </ul>
        `,misc_headline:"Miscellaneous:",tools_headline:"Tools I use for my Work",tools_text:`
            When it comes to tools, we programmers have a lot of choices. This list does not mean, I'm avert to using other or new tools.
            In general, no tool is really good or bad. Each just has advantages and disadvantages.

            <h5>Opperating Systems</h5>
            <ul>
                <li class="li-border">Windows</li>
                <li class="li-border">Mac OS</li>
                <li class="li-border">but more preferably Linux (Debian / Ubuntu / Linux Mint oder Fedora) </li>
            </ul>

            <h5>IDEs / Editors</h5>
            <ul>
                <li class="li-border">NuSphere PhpED</li>
                <li class="li-border"><a href="https://www.jetbrains.com/de-de/phpstorm/" target="_blank">JetBrains PHPStorm / WebStorm</a></li>
                <li class="li-border"><a href="https://visualstudio.microsoft.com/de/" target="_blank">Visual Studio (for C/C++ Development)</a></li>
                <li class="li-border"><a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a></li>
                <li class="li-border">but more preferably, if possible <a href="https://github.com/neovim/neovim" target="_blank">NeoVim</a> + <a href="https://github.com/tmux/tmux/wiki" target="_blank">Tmux</a> with their respective configuration for autocompletion and debugging (see <a href="https://github.com/Rocco-Gossmann/nvChadConfig" target="_blank">My Vim Configuration</a>)
            </ul>

            <h5>Others</h5>
            <ul>
                <li class="li-border">GIT</li>
                <li class="li-border">Microsoft Outlook / Office Word / Office Excel</li>
                <li class="li-border">Thunderbird</li>
                <li class="li-border">LibreOffice Writer / Calc </li>
            </ul>

            <h5>Hardware</h5>
            <ul>
                <li class="li-border">Asus ROG x13 Laptop (Linux + Window Dualboot)</li>
                <li class="li-border">M1 Macbook Air</li>
                <li class="li-border">iPad Pro 2020</li>
                <li class="li-border">Galaxy Tab S7+</li>
                <li class="li-border">Raspberry PI 400 as a NAS and VPN Server</li>
            </ul>
        `,links_headline:"Misc. Links",links_text:`
            <ul>
                <li class="li-border"><a href="https://github.com/rocco-gossmann" target="_blank">
                    my GitHub
                 </a></li>
            </ul>
        `,legal_headline:"Legal notices",legal_text:`
            <h5>Responsibility for links</h5>
            This Page contains links to webpages, provided by independed 3rd parties. That is why we can't take responsibility for the content provided by these 3rd parties.
            A links responsibility always falls to its respective page owner. At the time of creating the links, the linked pages have been checked for their legality
            and did not contain any illegal content.  However, a permanent control of 3rd party pages without a hint of a law violation, 
            is unreasonable. Should the links contain illegal content in the future, they will be removed as soon as this becomes known to us.

            <h5>Copyright</h5>
            The content created by the owner of this page abide by the German copyright law.
            Multiplication, editing, process, and any kind of use outside the boundary of the German copyright law require the written approval of their respective author.

            Downloads and copies for private, noncommercial use are allowed.
            Content provided by 3rd parties abides by and respects their respective copyright.
            Links to webpages of 3rd parties are marked via "<a href="#legal" target="_blank"></a> ". Content provided by 3rd parties is also marked.
            Should you notice a copyright violation, please contact us. Should a copyright violation become known, then the respective links/content will be removed.

            <h5>Datasecurity ${"for "+window.location.href.split("/index.html")[0]} </h5>
            This Page does neither ask for nor transfer any visitor data, beyond the data required by the page's Server-Provider (see next article).

            <h5>Datasecurity for github.io</h5>
            This page is hosted on a Server provided by <a href="https://www.github.com/" target="_blank">Github Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA</a>. <br />
            The data protection regulations defined by the server provider therefore apply.
            <a href="https://help.github.com/articles/github-privacy-policy/">GitHub Privacy Policy</a> und <a href="https://help.github.com/articles/global-privacy-practices/" target="_blank">GitHub Global Privacy Practices</a>.
        `}};function d(n){return new Date().getFullYear()-n}export{A as d,P as e,S as f,_ as s};
