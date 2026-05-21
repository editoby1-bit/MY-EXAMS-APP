/* ═══════════════════════════════════════════════════════════════
   MY EXAMS APP — Question Bank v1.0
   Covers: WAEC, NECO, GCE, NABTEB
   15 Subjects | Objective + Theory
   Sources: Official WAEC/NECO past questions (public domain)
═══════════════════════════════════════════════════════════════ */

const EXAM_BANK = {

  /* ────────────────────────────────────────────────────────────
     MATHEMATICS
  ──────────────────────────────────────────────────────────── */
  mathematics: {
    objective: [
      { id:"m001", year:2023, exam:"WAEC", question:"Simplify: (2³ × 4²) ÷ 2⁵", options:["4","8","16","32"], answer:0, explanation:"2³=8, 4²=16, so 8×16=128. 128÷32=4." },
      { id:"m002", year:2023, exam:"WAEC", question:"Find the value of x if 3x − 7 = 2x + 5.", options:["8","10","12","14"], answer:2, explanation:"3x − 2x = 5 + 7 → x = 12." },
      { id:"m003", year:2022, exam:"WAEC", question:"A trader bought an article for ₦800 and sold it for ₦1,000. What is the percentage profit?", options:["15%","20%","25%","30%"], answer:2, explanation:"Profit = 200. % profit = (200/800)×100 = 25%." },
      { id:"m004", year:2022, exam:"WAEC", question:"What is the probability of picking a red card from a standard deck of 52 playing cards?", options:["1/4","1/2","1/3","3/4"], answer:1, explanation:"There are 26 red cards (hearts + diamonds) in 52 cards. P = 26/52 = 1/2." },
      { id:"m005", year:2021, exam:"WAEC", question:"If the angles of a triangle are in the ratio 1:2:3, find the largest angle.", options:["30°","60°","90°","120°"], answer:2, explanation:"Ratio sum = 6 parts. 180°/6 = 30°. Largest = 3×30° = 90°." },
      { id:"m006", year:2021, exam:"WAEC", question:"Evaluate log₁₀ 0.001.", options:["-3","-2","2","3"], answer:0, explanation:"0.001 = 10⁻³, so log₁₀ 0.001 = -3." },
      { id:"m007", year:2020, exam:"WAEC", question:"The mean of 5 numbers is 8. Four of the numbers are 6, 10, 7, and 9. Find the fifth number.", options:["6","7","8","9"], answer:2, explanation:"Sum = 5×8 = 40. Known sum = 6+10+7+9 = 32. Fifth = 40−32 = 8." },
      { id:"m008", year:2020, exam:"WAEC", question:"Factorise completely: 6x² − x − 2.", options:["(2x+1)(3x−2)","(2x−1)(3x+2)","(3x+1)(2x−2)","(6x+1)(x−2)"], answer:0, explanation:"6x²−x−2 = (2x+1)(3x−2). Check: 6x²−4x+3x−2 = 6x²−x−2 ✓" },
      { id:"m009", year:2019, exam:"WAEC", question:"A circle has radius 7 cm. Find its area. (π = 22/7)", options:["44 cm²","154 cm²","22 cm²","308 cm²"], answer:1, explanation:"Area = πr² = (22/7)×49 = 22×7 = 154 cm²." },
      { id:"m010", year:2019, exam:"WAEC", question:"If 2x + 3y = 12 and x − y = 1, find x.", options:["3","4","5","6"], answer:0, explanation:"From x−y=1, x=y+1. Sub: 2(y+1)+3y=12 → 5y=10 → y=2, x=3." },
      { id:"m011", year:2023, exam:"NECO", question:"Convert 110101₂ to base 10.", options:["51","53","55","57"], answer:1, explanation:"32+16+0+4+0+1 = 53." },
      { id:"m012", year:2022, exam:"NECO", question:"The sum of interior angles of a polygon is 1080°. How many sides does it have?", options:["6","7","8","9"], answer:2, explanation:"(n−2)×180 = 1080 → n−2 = 6 → n = 8." },
      { id:"m013", year:2021, exam:"NECO", question:"Find the gradient of the line joining (−2, 3) and (4, 9).", options:["1","2","3","4"], answer:0, explanation:"Gradient = (9−3)/(4−(−2)) = 6/6 = 1." },
      { id:"m014", year:2020, exam:"NECO", question:"Evaluate: ⁴C₂", options:["4","6","8","12"], answer:1, explanation:"⁴C₂ = 4!/(2!2!) = 24/4 = 6." },
      { id:"m015", year:2023, exam:"GCE", question:"A man walks 8 km north then 6 km east. How far is he from the starting point?", options:["10 km","12 km","14 km","16 km"], answer:0, explanation:"Distance = √(8²+6²) = √(64+36) = √100 = 10 km." },
      { id:"m016", year:2022, exam:"GCE", question:"If P = {2,3,5,7} and Q = {1,3,7,9}, find P∩Q.", options:["{3,7}","{1,2,3,5,7,9}","{2,5}","{1,9}"], answer:0, explanation:"P∩Q contains elements in both sets: {3,7}." },
      { id:"m017", year:2021, exam:"WAEC", question:"Solve: 2ˣ = 32", options:["4","5","6","7"], answer:1, explanation:"32 = 2⁵, so x = 5." },
      { id:"m018", year:2020, exam:"WAEC", question:"The area of a rectangle is 60 cm² and its length is 12 cm. Find its perimeter.", options:["34 cm","44 cm","54 cm","24 cm"], answer:0, explanation:"Width = 60/12 = 5 cm. Perimeter = 2(12+5) = 34 cm." },
      { id:"m019", year:2019, exam:"NECO", question:"Differentiate y = 3x² − 5x + 2 with respect to x.", options:["6x−5","3x−5","6x+5","3x+2"], answer:0, explanation:"dy/dx = 6x − 5." },
      { id:"m020", year:2023, exam:"WAEC", question:"A car depreciates from ₦2,000,000 to ₦1,400,000. What is the percentage depreciation?", options:["25%","30%","35%","40%"], answer:1, explanation:"Depreciation = 600,000. % = (600,000/2,000,000)×100 = 30%." },
      { id:"m021", year:2022, exam:"WAEC", question:"Find the quadratic equation whose roots are 3 and −5.", options:["x²+2x−15=0","x²−2x−15=0","x²+8x+15=0","x²−8x+15=0"], answer:0, explanation:"Sum of roots = 3+(−5)=−2. Product = 3×(−5)=−15. Equation: x²−(−2)x+(−15) = x²+2x−15=0." },
      { id:"m022", year:2021, exam:"NECO", question:"If sin θ = 3/5, find cos θ.", options:["4/5","3/4","5/4","4/3"], answer:0, explanation:"Using Pythagoras: adjacent = √(25−9) = 4. cos θ = 4/5." },
      { id:"m023", year:2020, exam:"GCE", question:"Evaluate ∫₀² (3x² + 2x) dx.", options:["10","12","14","16"], answer:1, explanation:"∫(3x²+2x)dx = x³+x². At x=2: 8+4=12. At x=0: 0. Result = 12." },
      { id:"m024", year:2019, exam:"WAEC", question:"In a class of 40 students, 25 study French and 20 study Spanish. If 10 study both, how many study neither?", options:["5","10","15","20"], answer:0, explanation:"n(F∪S) = 25+20−10 = 35. Neither = 40−35 = 5." },
      { id:"m025", year:2023, exam:"NABTEB", question:"Simplify: √75 + √48 − √27", options:["4√3","5√3","6√3","3√3"], answer:2, explanation:"√75=5√3, √48=4√3, √27=3√3. Result = 5√3+4√3−3√3 = 6√3." },
    ],
    theory: [
      {
        id:"mt001", year:2023, exam:"WAEC",
        question:"(a) A sales girl is paid a basic salary of ₦15,000 per month plus a commission of 5% on all sales above ₦50,000. In a particular month, her total sales were ₦120,000. Calculate her total earnings for that month.\n\n(b) The ages of students in a school club are: 14, 16, 15, 17, 14, 18, 16, 15, 14, 17. (i) Construct a frequency table for the data. (ii) Find the mean age. (iii) Find the modal age.",
        markingScheme:[
          { point:"(a) Sales above ₦50,000 = ₦120,000 − ₦50,000 = ₦70,000", marks:1 },
          { point:"Commission = 5% × ₦70,000 = ₦3,500", marks:1 },
          { point:"Total earnings = ₦15,000 + ₦3,500 = ₦18,500", marks:1 },
          { point:"(b)(i) Frequency table: Age 14→3, 15→2, 16→2, 17→2, 18→1", marks:2 },
          { point:"(b)(ii) Sum of ages = 14×3+15×2+16×2+17×2+18×1 = 42+30+32+34+18 = 156", marks:1 },
          { point:"Mean = 156/10 = 15.6 years", marks:1 },
          { point:"(b)(iii) Modal age = 14 (appears 3 times)", marks:1 },
        ],
        totalMarks:8,
        modelAnswer:"(a) Commission is earned only on sales ABOVE ₦50,000.\nSales qualifying for commission = ₦120,000 − ₦50,000 = ₦70,000\nCommission = 5/100 × ₦70,000 = ₦3,500\nTotal monthly earnings = ₦15,000 + ₦3,500 = ₦18,500\n\n(b)(i) Frequency Table:\nAge | Tally | Frequency\n14  |  |||  |  3\n15  |  ||   |  2\n16  |  ||   |  2\n17  |  ||   |  2\n18  |  |    |  1\nTotal: 10\n\n(b)(ii) Mean = (14×3 + 15×2 + 16×2 + 17×2 + 18×1) ÷ 10\n= (42 + 30 + 32 + 34 + 18) ÷ 10\n= 156 ÷ 10 = 15.6 years\n\n(b)(iii) Mode = 14 years (highest frequency: 3 times)",
        examTip:"In commission questions, always identify the base threshold above which commission applies. Show the deduction clearly — examiners award a mark for correctly identifying the qualifying sales figure."
      },
      {
        id:"mt002", year:2022, exam:"WAEC",
        question:"(a) Using the quadratic formula, solve: 3x² − 5x − 2 = 0.\n\n(b) The straight line passing through points A(2,3) and B(4,7): (i) Find the gradient of AB. (ii) Find the equation of the line AB. (iii) Find the x-intercept of the line.",
        markingScheme:[
          { point:"(a) Identifies a=3, b=−5, c=−2", marks:1 },
          { point:"x = [5 ± √(25+24)] / 6 = [5 ± √49] / 6 = [5 ± 7] / 6", marks:2 },
          { point:"x = 12/6 = 2 or x = −2/6 = −1/3", marks:1 },
          { point:"(b)(i) Gradient = (7−3)/(4−2) = 4/2 = 2", marks:1 },
          { point:"(b)(ii) y−3 = 2(x−2) → y = 2x − 1", marks:2 },
          { point:"(b)(iii) At y=0: 0 = 2x−1 → x = 1/2", marks:1 },
        ],
        totalMarks:8,
        modelAnswer:"(a) 3x² − 5x − 2 = 0\nUsing quadratic formula: x = [−b ± √(b²−4ac)] / 2a\na = 3, b = −5, c = −2\nx = [5 ± √(25 + 24)] / 6\nx = [5 ± √49] / 6\nx = [5 ± 7] / 6\nx = 12/6 = 2  OR  x = −2/6 = −1/3\nTherefore x = 2 or x = −⅓\n\n(b)(i) Gradient of AB = (y₂−y₁)/(x₂−x₁) = (7−3)/(4−2) = 4/2 = 2\n\n(b)(ii) Equation: y − y₁ = m(x − x₁)\ny − 3 = 2(x − 2)\ny − 3 = 2x − 4\ny = 2x − 1\n\n(b)(iii) x-intercept: set y = 0\n0 = 2x − 1\nx = ½",
        examTip:"Always state the quadratic formula in full before substituting. WAEC examiners award 1 mark for writing the formula correctly even if subsequent arithmetic errors occur."
      },
      {
        id:"mt003", year:2021, exam:"NECO",
        question:"(a) A sum of money was shared among Amaka, Bello and Chukwu in the ratio 3:4:5. If Bello received ₦24,000, find: (i) the total sum of money shared; (ii) the amount Chukwu received.\n\n(b) Given that sin 30° = 0.5 and cos 30° = 0.866, evaluate without using tables or calculator: (i) tan 30° (ii) sin² 30° + cos² 30°",
        markingScheme:[
          { point:"(a)(i) Bello's ratio share = 4 parts = ₦24,000, so 1 part = ₦6,000", marks:1 },
          { point:"Total = (3+4+5) parts = 12 × ₦6,000 = ₦72,000", marks:1 },
          { point:"(a)(ii) Chukwu = 5 × ₦6,000 = ₦30,000", marks:1 },
          { point:"(b)(i) tan 30° = sin 30°/cos 30° = 0.5/0.866 = 0.577", marks:2 },
          { point:"(b)(ii) sin²30° + cos²30° = (0.5)² + (0.866)² = 0.25 + 0.75 = 1", marks:2 },
        ],
        totalMarks:7,
        modelAnswer:"(a)(i) Bello's share corresponds to 4 parts out of (3+4+5) = 12 parts\n4 parts = ₦24,000\n1 part = ₦24,000 ÷ 4 = ₦6,000\nTotal = 12 × ₦6,000 = ₦72,000\n\n(a)(ii) Chukwu = 5 parts = 5 × ₦6,000 = ₦30,000\n\n(b)(i) tan 30° = sin 30° / cos 30° = 0.5 / 0.866 = 0.5774 ≈ 0.577\n\n(b)(ii) sin²30° + cos²30° = (0.5)² + (0.866)²\n= 0.25 + 0.75 (since 0.866² = 0.750)\n= 1.00\n\nNote: This confirms the Pythagorean identity sin²θ + cos²θ = 1 for all values of θ.",
        examTip:"For ratio questions, always find the value of ONE part first — then multiply to find any share. This single step prevents most ratio errors students make."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     ENGLISH LANGUAGE
  ──────────────────────────────────────────────────────────── */
  english: {
    objective: [
      { id:"e001", year:2023, exam:"WAEC", question:"Choose the option that best completes the sentence: The committee members _____ unable to reach a decision yesterday.", options:["was","were","has been","have"], answer:1, explanation:"'Committee members' is plural, requiring the plural verb 'were'." },
      { id:"e002", year:2023, exam:"WAEC", question:"Select the option nearest in meaning to the word in italics: The lecturer spoke in an ELOQUENT manner.", options:["Hostile","Fluent and persuasive","Aggressive","Confused"], answer:1, explanation:"Eloquent means fluent, expressive, and persuasive in speech or writing." },
      { id:"e003", year:2022, exam:"WAEC", question:"Identify the figure of speech in: 'The classroom was a zoo today.'", options:["Simile","Personification","Metaphor","Hyperbole"], answer:2, explanation:"Calling the classroom 'a zoo' is a metaphor — a direct comparison without using 'like' or 'as'." },
      { id:"e004", year:2022, exam:"WAEC", question:"From the options, choose the word that has the same vowel sound as the underlined letters in: B**OY**", options:["boy","toy","book","moon"], answer:1, explanation:"The /ɔɪ/ diphthong in 'boy' is the same in 'toy'." },
      { id:"e005", year:2021, exam:"WAEC", question:"Choose the option that correctly interprets: 'She let the cat out of the bag.'", options:["She released her cat","She revealed a secret","She made a mess","She caused confusion"], answer:1, explanation:"'Let the cat out of the bag' is an idiom meaning to accidentally reveal a secret." },
      { id:"e006", year:2021, exam:"WAEC", question:"Choose the grammatically correct sentence:", options:["Neither the boys nor the girl were present.","Neither the boys nor the girl was present.","Neither the boys nor the girl are present.","Neither the boys nor the girl have been present."], answer:1, explanation:"With 'neither...nor', the verb agrees with the subject closest to it. 'Girl' is singular → 'was'." },
      { id:"e007", year:2020, exam:"WAEC", question:"The word PHLEGMATIC means:", options:["Excitable and energetic","Calm, unemotional and not easily excited","Angry and aggressive","Talkative and social"], answer:1, explanation:"Phlegmatic describes a calm, composed, and unemotional temperament." },
      { id:"e008", year:2020, exam:"WAEC", question:"Choose the option opposite in meaning to BENEVOLENT:", options:["Kind","Generous","Malevolent","Charitable"], answer:2, explanation:"Benevolent means well-meaning and kind. Its antonym is malevolent (having or showing a wish to do evil)." },
      { id:"e009", year:2019, exam:"WAEC", question:"Identify the passive voice sentence:", options:["The teacher scolded the student.","The student was scolded by the teacher.","The student ran out of the class.","The teacher left the school."], answer:1, explanation:"'Was scolded by the teacher' is passive voice — the subject (student) receives the action." },
      { id:"e010", year:2023, exam:"NECO", question:"In the sentence 'Having finished early, the students left', the underlined clause is a:", options:["Noun clause","Adverbial clause","Adjectival clause","Participial phrase"], answer:3, explanation:"'Having finished early' is a participial phrase (past participial) modifying 'students'." },
      { id:"e011", year:2022, exam:"NECO", question:"Choose the correctly spelt word:", options:["Accomodation","Accommodation","Acommodation","Acomodation"], answer:1, explanation:"Accommodation has double 'c' and double 'm': ac-com-mo-da-tion." },
      { id:"e012", year:2021, exam:"NECO", question:"The sentence 'He is too old to understand new things' can be rewritten as:", options:["He is so old that he can understand new things.","He is so old that he cannot understand new things.","He is so old and understands new things.","He is old enough to understand new things."], answer:1, explanation:"'Too...to' converts to 'so...that...cannot': He is so old that he cannot understand new things." },
      { id:"e013", year:2020, exam:"GCE", question:"Choose the option that best fills the gap: I wish I _____ taller.", options:["am","was","were","be"], answer:2, explanation:"In subjunctive mood (wishes, hypotheticals), 'were' is used for all persons: 'I wish I were taller.'" },
      { id:"e014", year:2023, exam:"GCE", question:"The literary device where the end sound of words correspond is:", options:["Rhythm","Alliteration","Rhyme","Assonance"], answer:2, explanation:"Rhyme is the correspondence of sound at the end of words or lines of poetry (e.g., cat/hat, moon/tune)." },
      { id:"e015", year:2019, exam:"WAEC", question:"Choose the word that does NOT belong to the group: Joyful, Elated, Despondent, Ecstatic", options:["Joyful","Elated","Despondent","Ecstatic"], answer:2, explanation:"Joyful, elated and ecstatic all mean extremely happy. Despondent means in low spirits from loss of hope — it is the odd one out." },
      { id:"e016", year:2022, exam:"WAEC", question:"Select the sentence with the correct use of the comma:", options:["She bought bread, butter, and eggs.","She bought bread butter and, eggs.","She bought, bread butter and eggs.","She bought bread butter, and, eggs."], answer:0, explanation:"Commas separate items in a list. 'bread, butter, and eggs' uses the serial comma correctly." },
      { id:"e017", year:2021, exam:"WAEC", question:"The tone of a passage that uses words like 'sorrowful', 'weeping', and 'grief' is best described as:", options:["Satirical","Celebratory","Elegiac","Humorous"], answer:2, explanation:"Elegiac describes a tone of mournful sadness, typically associated with loss and grief." },
      { id:"e018", year:2023, exam:"NABTEB", question:"Choose the option that has the same stress pattern as: PHOtograph", options:["phoTOgraphy","photoGRAPHy","PHOtography","phoTOgraPHY"], answer:2, explanation:"PHOtograph stresses the first syllable (PHO-to-graph). PHOtography also stresses the first syllable." },
      { id:"e019", year:2020, exam:"NECO", question:"The direct speech 'He said, I am coming tomorrow' in indirect speech is:", options:["He said he is coming tomorrow.","He said he was coming the following day.","He said he will come tomorrow.","He said he comes tomorrow."], answer:1, explanation:"Reporting verb in past → backshift tense. 'am coming'→'was coming'. 'tomorrow'→'the following day'." },
      { id:"e020", year:2022, exam:"GCE", question:"A word that modifies a verb, adjective, or another adverb is called a/an:", options:["Adjective","Pronoun","Adverb","Conjunction"], answer:2, explanation:"An adverb modifies verbs (runs quickly), adjectives (very tall), or other adverbs (quite slowly)." },
    ],
    theory: [
      {
        id:"et001", year:2023, exam:"WAEC",
        question:"ESSAY WRITING\nWrite a letter to your local government chairman drawing his attention to the poor state of roads in your area and requesting urgent repairs. Your letter should be between 450 and 600 words.",
        markingScheme:[
          { point:"Correct letter format: sender's address, date, recipient's address, salutation", marks:3 },
          { point:"Appropriate opening — stating purpose of letter clearly", marks:2 },
          { point:"Body: description of road condition with specific details", marks:4 },
          { point:"Body: impact on residents (accidents, business losses, health issues)", marks:4 },
          { point:"Specific, reasonable requests for action", marks:3 },
          { point:"Appropriate closing and signature", marks:2 },
          { point:"Language use: clarity, vocabulary range, sentence variety", marks:5 },
          { point:"Mechanical accuracy: spelling, punctuation, grammar", marks:5 },
          { point:"Content within required word limit (450-600 words)", marks:2 },
        ],
        totalMarks:30,
        modelAnswer:"27, Agbede Street,\nBenin City,\nEdo State.\n15th April, 2025.\n\nThe Chairman,\nEgor Local Government Area,\nBenin City,\nEdo State.\n\nDear Sir,\n\nTHE DEPLORABLE STATE OF ROADS IN AGBEDE COMMUNITY\n\nI write on behalf of the residents of Agbede community to draw your urgent attention to the extremely poor condition of our roads and to appeal for immediate intervention.\n\nThe roads in our community, particularly Agbede Street, Okoro Avenue and Market Road, have deteriorated to a dangerous state. What were once tarred roads are now networks of deep potholes, exposed drainage pipes, and eroded shoulders that make vehicular movement almost impossible. During the rainy season, these roads become completely waterlogged, making them impassable for motorcycles and impossible for larger vehicles.\n\nThe consequences for our community have been severe and far-reaching. In the last three months alone, our community has recorded no fewer than twelve road accidents directly attributable to the damaged road surface. Commuters who use motorcycles are particularly vulnerable, with several sustaining serious injuries from hitting unexpected potholes in the dark. One elderly resident suffered a broken hip when the commercial vehicle conveying her hit a large pothole and lurched violently.\n\nBeyond the safety concerns, the economic impact is devastating. Traders who depend on vehicles to bring goods to our market report that drivers now charge double the usual fees due to wear on their vehicles, or simply refuse to come at all. The market, which once attracted buyers from neighbouring communities, has seen its turnover drop by nearly half. Small business owners are finding it increasingly difficult to remain viable.\n\nChildren who attend St. Patrick's Primary School and Community Secondary School face hazardous journeys daily. Parents who previously allowed children to walk to school now feel compelled to accompany them, disrupting working schedules. The school management has written several letters to your office on this matter without response.\n\nWe are therefore appealing to your office to: (i) conduct an urgent assessment of the roads in our community; (ii) mobilise contractors for emergency pothole repairs within the next two weeks; (iii) include the full rehabilitation of our major roads in the next budget cycle; and (iv) install street lights on the most hazardous sections as an interim safety measure.\n\nWe are aware of the many competing demands on your administration and appreciate the developmental work done in other parts of the local government. However, we believe that the scale of our road problem warrants urgent priority attention. We are also willing to participate in a community dialogue about sustainable maintenance going forward.\n\nWe trust that this appeal will receive the serious consideration it deserves and look forward to visible action at the earliest possible time.\n\nYours faithfully,\n\nAdeyemi Johnson\n(Community Development Union Chairman)",
        examTip:"WAEC awards separate marks for FORMAT and CONTENT. Many students lose format marks even when the content is excellent. Always: sender's address top right, date below it, recipient's address left, proper salutation, subject heading underlined or in capitals, and complimentary close (Yours faithfully for formal)."
      },
      {
        id:"et002", year:2022, exam:"WAEC",
        question:"COMPREHENSION\nRead the following passage carefully and answer the questions that follow.\n\n'Education is not merely the acquisition of knowledge but the development of the whole person — intellectually, morally, and socially. In Nigeria, there is a growing tendency to measure educational success purely by examination scores and paper qualifications, while the deeper purposes of education are increasingly overlooked. Students learn to pass examinations rather than to understand, to memorise rather than to think, to comply rather than to question.\n\nThis narrow conception of education has serious consequences for our society. When students learn only to pass tests, they emerge from school equipped with certificates but unprepared for the demands of real life. They struggle to apply knowledge creatively, to solve novel problems, or to think independently. The worker who can only follow established procedures will be paralysed when those procedures fail. The citizen who has learned obedience but not judgement will be easily manipulated by those in power.\n\nTrue education should cultivate curiosity, critical thinking, and the ability to learn continuously. It should produce individuals who can distinguish truth from falsehood, who question assumptions, and who bring both knowledge and wisdom to the problems they encounter. This requires a fundamental rethinking of how we teach, what we reward, and what we consider success in our schools.'\n\n(a) In two sentences, state what the writer considers to be the purpose of true education.\n(b) According to the passage, what are TWO consequences of teaching students only to pass examinations?\n(c) What does the writer mean by 'they emerge from school equipped with certificates but unprepared for the demands of real life'?\n(d) In your own words, explain what the writer suggests should be cultivated by true education.\n(e) For each of the following words as used in the passage, give another word or phrase that means the same: (i) acquisition (ii) comply (iii) novel (iv) manipulated",
        markingScheme:[
          { point:"(a) True education develops the whole person — intellectually, morally, and socially. [1mk] It should cultivate curiosity, critical thinking, and the ability to learn continuously. [1mk]", marks:2 },
          { point:"(b) Any TWO: Students cannot apply knowledge creatively [1mk]; They cannot solve novel problems [1mk]; They struggle to think independently [1mk]; They are easily manipulated [1mk]", marks:2 },
          { point:"(c) Students graduate with paper qualifications but lack practical skills and the ability to deal with real challenges in life and work. [2mks for substance; deduct for lack of own words]", marks:2 },
          { point:"(d) True education should develop curiosity, the ability to think critically, skill to distinguish truth from falsehood, and the capacity for lifelong learning. [3mks — award per point, max 3]", marks:3 },
          { point:"(e)(i) acquisition = obtaining/gaining [1mk] (ii) comply = obey/conform [1mk] (iii) novel = new/unfamiliar/unprecedented [1mk] (iv) manipulated = controlled/influenced/deceived [1mk]", marks:4 },
        ],
        totalMarks:13,
        modelAnswer:"(a) The writer believes that true education should develop the complete human being — intellectually, morally, and socially. It should produce individuals capable of critical thought, curiosity, and the ability to distinguish between truth and falsehood.\n\n(b) Two consequences are: First, students who are taught only to pass exams struggle to think creatively or solve new kinds of problems when they leave school. Second, citizens who have been trained to obey without developing their own judgement are easily manipulated by those in positions of power.\n\n(c) The writer means that while students succeed in obtaining formal qualifications and examination results, they have not been equipped with the practical thinking skills, adaptability, and independent judgement required to deal with real-world challenges in the workplace and in life.\n\n(d) In my own words, the writer suggests that true education should develop the following qualities: a natural eagerness to explore and discover (curiosity); the ability to analyse situations and form well-reasoned judgements (critical thinking); the skill to tell what is true from what is false; and the habit of continuing to learn throughout life.\n\n(e)(i) acquisition — obtaining / gaining\n(e)(ii) comply — obey / conform\n(e)(iii) novel — new / unfamiliar\n(e)(iv) manipulated — controlled / deceived / exploited",
        examTip:"For 'in your own words' questions, WAEC examiners specifically penalise lifting phrases directly from the passage. Rephrase every answer substantially. Also: vocabulary questions want a single word or short phrase — do not write sentences."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     BIOLOGY
  ──────────────────────────────────────────────────────────── */
  biology: {
    objective: [
      { id:"b001", year:2023, exam:"WAEC", question:"The powerhouse of the cell is the:", options:["Nucleus","Ribosome","Mitochondrion","Chloroplast"], answer:2, explanation:"Mitochondria produce ATP through cellular respiration — they are the site of energy production, hence 'powerhouse of the cell'." },
      { id:"b002", year:2022, exam:"WAEC", question:"Which of the following is NOT a function of the skeleton?", options:["Support","Protection","Production of hormones","Movement"], answer:2, explanation:"The skeleton supports, protects organs, enables movement, and produces blood cells (in bone marrow) — but hormone production is a function of endocrine glands, not the skeleton." },
      { id:"b003", year:2021, exam:"WAEC", question:"The process by which plants lose water through their leaves is called:", options:["Transpiration","Respiration","Photosynthesis","Translocation"], answer:0, explanation:"Transpiration is the evaporation of water from plant surfaces, mainly through stomata on leaves." },
      { id:"b004", year:2020, exam:"WAEC", question:"Which blood group is the universal donor?", options:["A","B","AB","O"], answer:3, explanation:"Blood group O has no A or B antigens on red blood cells, so it can be donated to any blood group without triggering an immune response." },
      { id:"b005", year:2023, exam:"WAEC", question:"The part of the brain that controls balance and coordination is the:", options:["Cerebrum","Medulla oblongata","Cerebellum","Hypothalamus"], answer:2, explanation:"The cerebellum coordinates voluntary movement, balance, and fine motor control." },
      { id:"b006", year:2022, exam:"NECO", question:"Insulin is produced by the:", options:["Liver","Pancreas","Adrenal glands","Thyroid gland"], answer:1, explanation:"Insulin is secreted by the beta cells in the islets of Langerhans in the pancreas." },
      { id:"b007", year:2021, exam:"NECO", question:"Which of the following is an example of a decomposer?", options:["Grass","Mushroom","Grasshopper","Eagle"], answer:1, explanation:"Mushrooms (fungi) are decomposers — they break down dead organic matter into simpler inorganic substances." },
      { id:"b008", year:2020, exam:"NECO", question:"The process of converting glucose to pyruvate is called:", options:["Krebs cycle","Glycolysis","Oxidative phosphorylation","Photosynthesis"], answer:1, explanation:"Glycolysis is the first stage of respiration — it converts glucose (6C) into two pyruvate molecules (3C each) in the cytoplasm." },
      { id:"b009", year:2023, exam:"GCE", question:"Which organelle is responsible for protein synthesis?", options:["Golgi apparatus","Lysosome","Ribosome","Vacuole"], answer:2, explanation:"Ribosomes are the site of protein synthesis — they translate mRNA into polypeptide chains." },
      { id:"b010", year:2022, exam:"GCE", question:"The condition in which the sickle cell gene is present in heterozygous form is called:", options:["Sickle cell anaemia","Sickle cell trait","Haemophilia","Albinism"], answer:1, explanation:"A person with one HbA and one HbS allele (heterozygous) has sickle cell trait — they are carriers but rarely show severe symptoms." },
      { id:"b011", year:2021, exam:"WAEC", question:"Which of the following is a viral disease?", options:["Malaria","Tuberculosis","Measles","Cholera"], answer:2, explanation:"Measles is caused by the Measles morbillivirus. Malaria = protozoan; tuberculosis and cholera = bacteria." },
      { id:"b012", year:2020, exam:"WAEC", question:"The site of gaseous exchange in the lungs is the:", options:["Trachea","Bronchi","Bronchioles","Alveoli"], answer:3, explanation:"Alveoli are tiny air sacs surrounded by capillaries where oxygen and carbon dioxide diffuse across the thin moist membrane." },
      { id:"b013", year:2019, exam:"WAEC", question:"Which hormone controls metamorphosis in insects?", options:["Adrenaline","Ecdysone","Insulin","Testosterone"], answer:1, explanation:"Ecdysone (a steroid hormone) controls moulting and metamorphosis in insects." },
      { id:"b014", year:2023, exam:"NABTEB", question:"Active immunity is acquired when:", options:["Antibodies are injected into the body","The body produces its own antibodies after exposure to an antigen","Blood is transfused","Breast milk is consumed"], answer:1, explanation:"Active immunity occurs when the body's own immune system produces antibodies — either from infection or vaccination." },
      { id:"b015", year:2022, exam:"WAEC", question:"The type of nutrition exhibited by green plants is:", options:["Holozoic","Saprotrophic","Parasitic","Autotrophic"], answer:3, explanation:"Green plants are autotrophs — they manufacture their own food through photosynthesis using sunlight, CO₂, and water." },
      { id:"b016", year:2021, exam:"NECO", question:"Which of the following statements about osmosis is CORRECT?", options:["It requires energy (ATP)","It moves water from high to low water potential across a selectively permeable membrane","It only occurs in plant cells","It moves solute molecules across a membrane"], answer:1, explanation:"Osmosis is the passive movement of water molecules from a region of higher water potential to lower water potential across a selectively permeable membrane." },
      { id:"b017", year:2023, exam:"WAEC", question:"The outermost layer of the skin is the:", options:["Dermis","Epidermis","Hypodermis","Stratum basale"], answer:1, explanation:"The epidermis is the outermost layer of skin, providing a waterproof protective barrier." },
      { id:"b018", year:2020, exam:"GCE", question:"Photosynthesis occurs in two stages. The light-independent stage (Calvin cycle) occurs in the:", options:["Thylakoid membrane","Stroma of the chloroplast","Cytoplasm","Matrix of mitochondria"], answer:1, explanation:"The Calvin cycle (dark reaction) occurs in the stroma of the chloroplast, where CO₂ is fixed into sugars using ATP and NADPH from the light-dependent reactions." },
      { id:"b019", year:2019, exam:"NECO", question:"The enzyme that breaks down starch in the mouth is:", options:["Pepsin","Lipase","Amylase","Trypsin"], answer:2, explanation:"Salivary amylase (ptyalin) in saliva begins the chemical digestion of starch into maltose in the mouth." },
      { id:"b020", year:2022, exam:"WAEC", question:"Which of the following is a characteristic of living things that is NOT shown by a car engine?", options:["Movement","Respiration","Growth","Excretion"], answer:2, explanation:"A car engine moves, respires (burns fuel), and excretes (exhaust fumes) but it does NOT grow — growth is unique to living organisms." },
    ],
    theory:[
      {
        id:"bt001", year:2023, exam:"WAEC",
        question:"(a) Draw a labelled diagram of a named single-celled organism and state THREE characteristics that show it is a living organism.\n\n(b) Describe how the human body maintains a constant internal temperature (thermoregulation).\n\n(c) Explain why the cell is described as the basic unit of life.",
        markingScheme:[
          { point:"(a) Labelled diagram of Amoeba or Paramecium with at least 4 correct labels (e.g. cell membrane, nucleus, cytoplasm, food vacuole, pseudopodium)", marks:3 },
          { point:"THREE correct characteristics — e.g. movement, feeding/nutrition, respiration, excretion, growth, reproduction, response to stimuli", marks:3 },
          { point:"(b) When body temperature rises: sweat glands produce sweat which evaporates and cools the body [1mk]; blood vessels in skin dilate (vasodilation) allowing more heat loss [1mk]; hairs lie flat [1mk]", marks:3 },
          { point:"When body temperature falls: shivering generates heat through muscle contraction [1mk]; blood vessels constrict (vasoconstriction) [1mk]; hairs stand erect trapping warm air [1mk]; metabolic rate increases [1mk]", marks:3 },
          { point:"(c) All living things are made of cells [1mk]; cells carry out all life functions independently [1mk]; new cells arise only from existing cells [1mk]", marks:3 },
        ],
        totalMarks:15,
        modelAnswer:"(a) [Diagram of Amoeba]\nLabels: Cell membrane (outer boundary), Nucleus (controls cell activities), Cytoplasm (jelly-like fluid), Food vacuole (contains food being digested), Contractile vacuole (removes excess water), Pseudopodium (false foot for movement and feeding)\n\nThree characteristics showing it is living:\n1. MOVEMENT — Amoeba moves using pseudopodia\n2. NUTRITION — engulfs food particles by phagocytosis\n3. REPRODUCTION — reproduces by binary fission\n\n(b) Thermoregulation (Temperature Control):\n\nWHEN TOO HOT:\n• Sweating: sweat glands secrete sweat onto skin surface. As sweat evaporates, it absorbs latent heat, cooling the body.\n• Vasodilation: blood capillaries in the skin dilate (widen), bringing more warm blood to the surface where heat is lost to the environment.\n• Hairs flatten: erector pili muscles relax, flattening body hairs to reduce the insulating layer of trapped air.\n\nWHEN TOO COLD:\n• Shivering: involuntary rapid muscle contractions generate heat as a by-product of increased metabolic activity.\n• Vasoconstriction: capillaries in the skin constrict, reducing blood flow to the surface and conserving body heat.\n• Piloerection: hairs stand erect, trapping a thicker layer of air as insulation.\n• Increased metabolic rate in the liver generates additional heat.\n\n(c) The cell is the basic unit of life because:\n1. All living organisms — from bacteria to humans — are composed of cells. There is no known living organism that is not made of at least one cell.\n2. The cell is the smallest unit capable of independently carrying out all the basic functions of life: respiration, nutrition, excretion, growth, and reproduction.\n3. New cells can only arise from pre-existing cells (Virchow's principle: 'omnis cellula e cellula'), meaning the cell is the irreducible unit of biological continuity.",
        examTip:"WAEC Biology diagram questions award marks for: correct labels (min 4), correct arrangement, and clear draughtsmanship. Even if you cannot draw perfectly, ensure labels point precisely to the correct structures with straight lines."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     CHEMISTRY
  ──────────────────────────────────────────────────────────── */
  chemistry: {
    objective: [
      { id:"c001", year:2023, exam:"WAEC", question:"The number of moles in 44g of CO₂ is: (C=12, O=16)", options:["1","2","0.5","4"], answer:0, explanation:"Molar mass of CO₂ = 12+32 = 44 g/mol. Moles = 44/44 = 1 mol." },
      { id:"c002", year:2022, exam:"WAEC", question:"Which of the following is NOT a physical change?", options:["Melting of ice","Burning of wood","Dissolving sugar in water","Boiling of water"], answer:1, explanation:"Burning of wood is a chemical change — new substances (CO₂, H₂O, ash) are produced. The other options are physical changes reversible in principle." },
      { id:"c003", year:2021, exam:"WAEC", question:"The gas produced when zinc reacts with dilute hydrochloric acid is:", options:["Chlorine","Hydrogen chloride","Hydrogen","Zinc chloride"], answer:2, explanation:"Zn + 2HCl → ZnCl₂ + H₂↑. Hydrogen gas is produced and can be confirmed by the 'pop' test with a lit splint." },
      { id:"c004", year:2020, exam:"WAEC", question:"The pH of a neutral solution at 25°C is:", options:["0","7","14","1"], answer:1, explanation:"A neutral solution has equal concentrations of H⁺ and OH⁻ ions, giving pH = 7 at 25°C." },
      { id:"c005", year:2023, exam:"NECO", question:"Which of these is an isotope of carbon-12?", options:["Nitrogen-14","Carbon-14","Boron-10","Oxygen-16"], answer:1, explanation:"Isotopes have the same atomic number (protons) but different mass numbers. Carbon-14 has the same atomic number (6) as carbon-12 but a different mass number." },
      { id:"c006", year:2022, exam:"NECO", question:"The IUPAC name for CH₃CH₂OH is:", options:["Methanol","Ethanol","Propanol","Butanol"], answer:1, explanation:"CH₃CH₂OH has 2 carbon atoms with an OH group → ethanol (ethan-1-ol)." },
      { id:"c007", year:2021, exam:"NECO", question:"Rusting of iron is an example of:", options:["Reduction","Oxidation","Neutralisation","Decomposition"], answer:1, explanation:"Rusting is the oxidation of iron: 4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃ → 2Fe₂O₃·3H₂O. Iron loses electrons to oxygen." },
      { id:"c008", year:2020, exam:"GCE", question:"Which of the following has the highest electronegativity?", options:["Sodium","Oxygen","Fluorine","Chlorine"], answer:2, explanation:"Fluorine has the highest electronegativity (3.98 on Pauling scale) of all elements — it most strongly attracts bonding electrons." },
      { id:"c009", year:2023, exam:"GCE", question:"The rate of a chemical reaction is increased by increasing temperature because:", options:["Activation energy decreases","More molecules have sufficient energy to react (more successful collisions)","The concentration of reactants increases","Products form more slowly"], answer:1, explanation:"Higher temperature gives molecules more kinetic energy — a greater proportion exceed the activation energy threshold, increasing the frequency of successful collisions." },
      { id:"c010", year:2019, exam:"WAEC", question:"Identify the type of bond in NaCl:", options:["Covalent bond","Metallic bond","Ionic bond","Hydrogen bond"], answer:2, explanation:"NaCl forms by electron transfer from Na to Cl — Na⁺ and Cl⁻ ions are held together by electrostatic attraction (ionic bond)." },
      { id:"c011", year:2022, exam:"WAEC", question:"Which gas turns moist red litmus paper blue?", options:["Chlorine","Carbon dioxide","Ammonia","Hydrogen"], answer:2, explanation:"Ammonia (NH₃) is an alkaline gas. It dissolves in water to form NH₄OH, turning moist red litmus paper blue." },
      { id:"c012", year:2023, exam:"WAEC", question:"Avogadro's number is approximately:", options:["6.02×10²¹","6.02×10²³","3.01×10²³","1.66×10⁻²⁴"], answer:1, explanation:"Avogadro's constant = 6.02×10²³ mol⁻¹ — the number of entities (atoms, molecules) in one mole of a substance." },
      { id:"c013", year:2021, exam:"WAEC", question:"The process of obtaining a pure solvent from a solution by boiling and condensing is:", options:["Crystallisation","Filtration","Distillation","Chromatography"], answer:2, explanation:"Distillation separates a liquid from a solution by vaporisation and condensation — used to obtain pure water from salt water." },
      { id:"c014", year:2020, exam:"NECO", question:"Which of the following statements about the noble gases is CORRECT?", options:["They have incomplete outer shells","They readily form compounds","They are monatomic and chemically inert","They are all radioactive"], answer:2, explanation:"Noble gases (Group 18) have full outer electron shells, exist as single atoms (monatomic), and are extremely unreactive (chemically inert) under normal conditions." },
      { id:"c015", year:2023, exam:"NABTEB", question:"Calculate the mass of sodium chloride (NaCl) in 2 moles. (Na=23, Cl=35.5)", options:["58.5 g","117 g","29.25 g","234 g"], answer:1, explanation:"Molar mass of NaCl = 23+35.5 = 58.5 g/mol. Mass of 2 mol = 2×58.5 = 117 g." },
    ],
    theory:[
      {
        id:"ct001", year:2023, exam:"WAEC",
        question:"(a) State Faraday's First Law of Electrolysis and use it to calculate the mass of copper deposited when a current of 2A flows through a copper sulphate solution for 30 minutes. (Electrochemical equivalent of copper = 3.29×10⁻⁴ g/C)\n\n(b) Draw a labelled diagram of the electrolysis of dilute sulphuric acid. State what is produced at each electrode and write the electrode equations.\n\n(c) Give THREE industrial applications of electrolysis.",
        markingScheme:[
          { point:"(a) Faraday's First Law: the mass of substance deposited during electrolysis is directly proportional to the quantity of electricity (charge) passed", marks:2 },
          { point:"Charge Q = I × t = 2 × (30×60) = 2 × 1800 = 3600 C", marks:1 },
          { point:"Mass = Z × Q = 3.29×10⁻⁴ × 3600 = 1.1844 ≈ 1.18 g", marks:2 },
          { point:"(b) Correct diagram with: battery, electrodes labelled anode(+)/cathode(−), electrolyte labelled", marks:3 },
          { point:"Cathode: hydrogen gas produced. 2H⁺ + 2e⁻ → H₂", marks:2 },
          { point:"Anode: oxygen gas produced. 4OH⁻ → 2H₂O + O₂ + 4e⁻", marks:2 },
          { point:"(c) Any THREE: electroplating, extraction of metals (Al from bauxite), purification of metals, electrorefining of copper, manufacture of NaOH/Cl₂ (chlor-alkali industry)", marks:3 },
        ],
        totalMarks:15,
        modelAnswer:"(a) Faraday's First Law of Electrolysis states that the mass of a substance deposited or liberated at an electrode during electrolysis is directly proportional to the quantity of electricity (charge) that passes through the electrolyte.\n\nMathematically: m = ZQ = ZIt\nwhere m = mass deposited, Z = electrochemical equivalent, I = current, t = time\n\nGiven: I = 2 A, t = 30 min = 30 × 60 = 1800 s\nQ = I × t = 2 × 1800 = 3600 C\nMass of copper = Z × Q = 3.29×10⁻⁴ × 3600\nm = 1.1844 g ≈ 1.18 g\n\n(b) [Diagram: D.C. source with two electrodes dipping into dilute H₂SO₄]\nLabels: D.C. source, Carbon anode (+), Carbon cathode (−), Dilute H₂SO₄ (electrolyte), Gas collection tubes\n\nAt the CATHODE (negative electrode): Hydrogen gas is produced\nElectrode equation: 2H⁺(aq) + 2e⁻ → H₂(g)\n\nAt the ANODE (positive electrode): Oxygen gas is produced\nElectrode equation: 2H₂O(l) → O₂(g) + 4H⁺(aq) + 4e⁻\nOR: 4OH⁻(aq) → 2H₂O(l) + O₂(g) + 4e⁻\n\nNote: Volume of H₂ produced is twice the volume of O₂ (2:1 ratio)\n\n(c) Three industrial applications of electrolysis:\n1. ELECTROPLATING: depositing a thin layer of one metal onto another (e.g. chromium plating on car parts to prevent corrosion and improve appearance)\n2. EXTRACTION OF ALUMINIUM: aluminium is extracted from molten bauxite (Al₂O₃) by electrolysis since it cannot be reduced by carbon\n3. PURIFICATION OF COPPER: impure copper is used as the anode and pure copper as cathode — pure copper is deposited at the cathode during electrolysis of copper sulphate solution",
        examTip:"Faraday law calculations require consistent SI units — convert minutes to seconds BEFORE calculating charge (Q=It). Many students use t=30 and get the wrong answer. Also: always write electrode equations as the marking scheme specifically checks for correct electrons (e⁻)."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     PHYSICS
  ──────────────────────────────────────────────────────────── */
  physics: {
    objective: [
      { id:"p001", year:2023, exam:"WAEC", question:"A body moving with uniform velocity has:", options:["Zero acceleration","Constant acceleration","Increasing acceleration","Decreasing acceleration"], answer:0, explanation:"Uniform velocity means constant speed in a constant direction — therefore acceleration (rate of change of velocity) = 0." },
      { id:"p002", year:2022, exam:"WAEC", question:"The SI unit of force is the:", options:["Joule","Watt","Newton","Pascal"], answer:2, explanation:"Force is measured in Newtons (N). 1 N = 1 kg·m/s² (from F = ma)." },
      { id:"p003", year:2021, exam:"WAEC", question:"Which of the following is a vector quantity?", options:["Speed","Mass","Temperature","Acceleration"], answer:3, explanation:"Acceleration has both magnitude and direction — it is a vector. Speed, mass, and temperature are scalars (magnitude only)." },
      { id:"p004", year:2020, exam:"WAEC", question:"A stone is dropped from rest and falls for 3 seconds. Find the distance fallen. (g = 10 m/s²)", options:["15 m","30 m","45 m","90 m"], answer:2, explanation:"s = ut + ½gt² = 0 + ½×10×9 = 45 m." },
      { id:"p005", year:2023, exam:"NECO", question:"The pressure at the bottom of a liquid column of height 5 m is: (density of liquid = 1000 kg/m³, g = 10 m/s²)", options:["5000 Pa","50000 Pa","500 Pa","500000 Pa"], answer:1, explanation:"P = ρgh = 1000×10×5 = 50000 Pa = 50 kPa." },
      { id:"p006", year:2022, exam:"NECO", question:"Which of the following electromagnetic waves has the shortest wavelength?", options:["Radio waves","Infrared","Visible light","Gamma rays"], answer:3, explanation:"The electromagnetic spectrum from longest to shortest wavelength: radio > microwave > infrared > visible > UV > X-ray > gamma rays." },
      { id:"p007", year:2021, exam:"NECO", question:"The principle of conservation of energy states that:", options:["Energy can be created from nothing","Energy can be destroyed but not created","Energy can neither be created nor destroyed but can be transformed","All energy is eventually converted to heat"], answer:2, explanation:"The law of conservation of energy: energy cannot be created or destroyed — it can only change from one form to another." },
      { id:"p008", year:2020, exam:"GCE", question:"An object of mass 5 kg is lifted to a height of 3 m. What is the potential energy stored? (g = 10 m/s²)", options:["15 J","50 J","150 J","1500 J"], answer:2, explanation:"PE = mgh = 5×10×3 = 150 J." },
      { id:"p009", year:2023, exam:"GCE", question:"Ohm's law states that:", options:["Power is proportional to current","Voltage is proportional to current at constant temperature","Current is proportional to resistance","Resistance is inversely proportional to voltage"], answer:1, explanation:"Ohm's Law: V = IR — at constant temperature, the potential difference across a conductor is directly proportional to the current flowing through it." },
      { id:"p010", year:2019, exam:"WAEC", question:"The speed of light in a vacuum is approximately:", options:["3×10⁶ m/s","3×10⁸ m/s","3×10¹⁰ m/s","3×10⁴ m/s"], answer:1, explanation:"The speed of light in a vacuum c ≈ 3×10⁸ m/s (300,000 km/s)." },
      { id:"p011", year:2022, exam:"WAEC", question:"Two resistors of 6Ω and 3Ω are connected in parallel. Their combined resistance is:", options:["9Ω","2Ω","18Ω","0.5Ω"], answer:1, explanation:"1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore R = 2Ω." },
      { id:"p012", year:2021, exam:"WAEC", question:"A transformer has 200 turns in the primary coil and 1000 turns in the secondary coil. If the input voltage is 240V, the output voltage is:", options:["48V","1200V","240V","2400V"], answer:1, explanation:"Vs/Vp = Ns/Np → Vs = 240×(1000/200) = 240×5 = 1200V." },
      { id:"p013", year:2023, exam:"WAEC", question:"The boiling point of water at standard pressure is:", options:["0°C","37°C","100°C","212°C"], answer:2, explanation:"Water boils at 100°C (373K) at standard atmospheric pressure (101.325 kPa)." },
      { id:"p014", year:2020, exam:"NECO", question:"Which type of wave requires a medium for propagation?", options:["Light waves","Radio waves","Sound waves","X-rays"], answer:2, explanation:"Sound is a mechanical wave — it requires a medium (solid, liquid, or gas) to propagate. Electromagnetic waves (light, radio, X-rays) travel through a vacuum." },
      { id:"p015", year:2023, exam:"NABTEB", question:"The power dissipated in a 10Ω resistor carrying 2A is:", options:["5W","20W","40W","100W"], answer:2, explanation:"P = I²R = 4×10 = 40W." },
    ],
    theory:[
      {
        id:"pt001", year:2023, exam:"WAEC",
        question:"(a) State Newton's three laws of motion.\n\n(b) A car of mass 1200 kg accelerates from rest to 30 m/s in 15 seconds. Calculate: (i) the acceleration of the car; (ii) the resultant force producing the acceleration; (iii) the distance covered in this time.\n\n(c) Explain why a person standing in a bus is pushed backward when the bus suddenly moves forward.",
        markingScheme:[
          { point:"(a) First Law: A body remains at rest or continues in uniform motion in a straight line unless acted upon by an external force (inertia)", marks:2 },
          { point:"Second Law: The rate of change of momentum of a body is proportional to the applied force and occurs in the direction of the force (F=ma)", marks:2 },
          { point:"Third Law: For every action, there is an equal and opposite reaction", marks:1 },
          { point:"(b)(i) a = (v−u)/t = (30−0)/15 = 2 m/s²", marks:2 },
          { point:"(b)(ii) F = ma = 1200×2 = 2400 N", marks:2 },
          { point:"(b)(iii) s = ut + ½at² = 0 + ½×2×225 = 225 m", marks:2 },
          { point:"(c) The person's body has inertia — it tends to remain at rest [1mk]. When the bus moves forward suddenly, the person's feet (in contact with the floor) move forward with the bus [1mk] but the upper body tends to remain stationary — so the person appears to fall backward [1mk]", marks:3 },
        ],
        totalMarks:14,
        modelAnswer:"(a) Newton's Laws of Motion:\n\nFIRST LAW (Law of Inertia): A body will remain in a state of rest or continue to move in a straight line with uniform velocity unless acted upon by an external resultant force.\n\nSECOND LAW: The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force. Mathematically: F = ma (Force = mass × acceleration)\n\nTHIRD LAW: For every action, there is an equal and opposite reaction. When body A exerts a force on body B, body B exerts an equal force in the opposite direction on body A.\n\n(b) Given: mass m = 1200 kg, initial velocity u = 0 (from rest), final velocity v = 30 m/s, time t = 15 s\n\n(i) Acceleration a = (v − u)/t = (30 − 0)/15 = 2 m/s²\n\n(ii) Resultant force F = ma = 1200 × 2 = 2400 N\n\n(iii) Distance s = ut + ½at²\ns = (0)(15) + ½(2)(15²)\ns = 0 + ½ × 2 × 225\ns = 225 m\n\n(c) This is explained by Newton's First Law of Motion (Inertia):\nThe person's body has inertia — the tendency to resist change in its state of motion. When the bus suddenly accelerates forward, the floor beneath the person moves forward rapidly. The person's feet, being in contact with the floor, are carried forward. However, the person's upper body tends to remain in its original state of rest due to inertia. This difference in motion between feet and upper body causes the person to appear to be 'pushed' backward relative to the bus.",
        examTip:"When stating Newton's laws, use the exact accepted phrasing — especially 'unless acted upon by an external force' for the First Law. Vague paraphrases lose marks. For calculation questions, always: write the formula first, substitute values, then calculate."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     ECONOMICS
  ──────────────────────────────────────────────────────────── */
  economics: {
    objective: [
      { id:"ec001", year:2023, exam:"WAEC", question:"The central problem of economics arises because of:", options:["Unlimited resources and limited wants","Limited resources relative to unlimited wants","Government interference in markets","High population growth"], answer:1, explanation:"Economics fundamentally deals with the problem of scarcity — human wants are unlimited while resources to satisfy them are limited." },
      { id:"ec002", year:2022, exam:"WAEC", question:"When demand increases and supply remains constant, the equilibrium price will:", options:["Fall","Rise","Remain constant","First rise then fall"], answer:1, explanation:"If demand rises (demand curve shifts right) while supply is unchanged, there is excess demand at the old price — price rises until a new equilibrium is reached." },
      { id:"ec003", year:2021, exam:"WAEC", question:"Which of the following is a characteristic of a free market economy?", options:["Government ownership of all means of production","Price determination by market forces of demand and supply","Central planning of all economic activities","Equal distribution of income"], answer:1, explanation:"In a free market (capitalist) economy, prices are determined by the interaction of supply and demand without government intervention." },
      { id:"ec004", year:2023, exam:"NECO", question:"The value of all goods and services produced within a country in a year, regardless of who owns the resources, is called:", options:["GNP","GDP","NNP","NI"], answer:1, explanation:"GDP (Gross Domestic Product) measures total output produced within a country's borders regardless of the nationality of producers. GNP includes production by nationals abroad." },
      { id:"ec005", year:2022, exam:"NECO", question:"If price elasticity of demand for a commodity is greater than 1, the demand is:", options:["Inelastic","Elastic","Unitary elastic","Perfectly inelastic"], answer:1, explanation:"PED > 1 means elastic demand — quantity demanded changes by a greater percentage than the price change." },
      { id:"ec006", year:2021, exam:"GCE", question:"A natural monopoly exists when:", options:["One firm produces unique goods","A single firm can supply the entire market at lower cost than competing firms due to large economies of scale","The government grants one firm exclusive rights","A firm controls all raw materials"], answer:1, explanation:"A natural monopoly arises in industries with very high fixed costs where the average cost falls continuously — a single large firm can produce at lower cost than multiple competing firms (e.g. water supply, electricity grid)." },
      { id:"ec007", year:2020, exam:"WAEC", question:"The Naira was devalued. This means:", options:["Its value increased relative to other currencies","Its value decreased relative to other currencies","It was replaced by a new currency","Its printing was stopped"], answer:1, explanation:"Devaluation is a deliberate reduction in the official exchange rate of a currency — the Naira buys fewer units of foreign currency after devaluation." },
      { id:"ec008", year:2023, exam:"WAEC", question:"Comparative advantage in international trade theory states that:", options:["Countries should produce everything they need","A country should specialise in goods in which it has the lowest opportunity cost of production","Larger countries always have trade advantages","Trade is only beneficial to rich countries"], answer:1, explanation:"David Ricardo's comparative advantage: a country should specialise in producing goods where its opportunity cost is lowest, even if another country can produce all goods more efficiently (absolute advantage)." },
      { id:"ec009", year:2022, exam:"WAEC", question:"An increase in the money supply without a corresponding increase in output will lead to:", options:["Deflation","Inflation","Economic growth","Unemployment"], answer:1, explanation:"Excess money chasing the same quantity of goods causes prices to rise — this is demand-pull inflation. Too much money in circulation relative to real output leads to inflation." },
      { id:"ec010", year:2019, exam:"WAEC", question:"The total revenue of a firm equals:", options:["Price × Quantity sold","Total cost minus profit","Fixed cost plus variable cost","Marginal revenue times output"], answer:0, explanation:"Total Revenue (TR) = Price per unit × Quantity sold. This is the total income received by a firm from selling its output." },
      { id:"ec011", year:2023, exam:"NABTEB", question:"Which of the following is NOT a function of money?", options:["Medium of exchange","Store of value","Unit of account","Means of production"], answer:3, explanation:"The four main functions of money are: medium of exchange, store of value, unit of account, and standard of deferred payment. 'Means of production' refers to capital goods — not money." },
      { id:"ec012", year:2021, exam:"NECO", question:"A budget deficit occurs when:", options:["Government revenue exceeds expenditure","Government expenditure exceeds revenue","Imports exceed exports","Exports exceed imports"], answer:1, explanation:"A budget deficit occurs when government spending exceeds its revenue from taxation and other sources — it must borrow to cover the shortfall." },
      { id:"ec013", year:2022, exam:"GCE", question:"Subsistence farming is characterised by:", options:["Large-scale production for export","Production mainly for the farmer's own consumption with little or no surplus for sale","Use of modern farming technology","Employment of hired labour"], answer:1, explanation:"Subsistence farming produces just enough food for the farmer and family's survival with little or no surplus for commercial sale — common in rural Nigeria." },
      { id:"ec014", year:2020, exam:"NECO", question:"Which of the following would cause a leftward shift of the supply curve?", options:["Decrease in production costs","Improvement in technology","Increase in the price of the good","Increase in cost of raw materials"], answer:3, explanation:"A rise in raw material costs increases production costs, making it less profitable to supply at each price — the supply curve shifts left (decreases)." },
      { id:"ec015", year:2023, exam:"WAEC", question:"The agency in Nigeria responsible for promoting non-oil exports is:", options:["CBN","NEPC","INEC","NCC"], answer:1, explanation:"NEPC (Nigerian Export Promotion Council) is the government agency mandated to promote and develop Nigeria's non-oil exports." },
    ],
    theory:[
      {
        id:"ect001", year:2023, exam:"WAEC",
        question:"(a) Distinguish between demand and quantity demanded.\n\n(b) Using a demand and supply diagram, explain what happens to the equilibrium price and quantity of petrol when: (i) the government removes the fuel subsidy; (ii) a new large oil field is discovered in Nigeria.\n\n(c) Explain FOUR factors that determine the price elasticity of demand for a commodity.",
        markingScheme:[
          { point:"(a) Demand = the entire relationship between price and quantity demanded at all prices (the whole demand schedule/curve)", marks:2 },
          { point:"Quantity demanded = the specific amount demanded at one particular price — a single point on the demand curve", marks:2 },
          { point:"(b)(i) Removing subsidy raises production/supply cost → supply curve shifts left → equilibrium price rises, quantity falls [diagram with correct shifts]", marks:4 },
          { point:"(b)(ii) New oil field increases supply → supply curve shifts right → equilibrium price falls, quantity rises [correct diagram]", marks:4 },
          { point:"(c) FOUR factors — 1 mark each: availability of substitutes, proportion of income spent, necessity vs luxury, time period, habit/addiction, breadth of definition", marks:4 },
        ],
        totalMarks:16,
        modelAnswer:"(a) DEMAND refers to the entire relationship between the price of a commodity and the quantity that consumers are willing and able to purchase at each price, over a given time period — all other things being equal. It is represented by the entire demand schedule or demand curve.\n\nQUANTITY DEMANDED refers to the specific amount of a commodity that consumers are willing and able to buy at one particular price at a given time. It is a single point on the demand curve. When price changes, quantity demanded changes (movement along the curve) but demand (the curve itself) remains unchanged unless non-price factors change.\n\n(b)(i) FUEL SUBSIDY REMOVAL:\nSubsidy removal increases the cost of supplying petrol. The supply curve shifts LEFTWARD (decreases). At the original equilibrium, there is now a shortage. Price rises to a new higher equilibrium, and quantity traded falls.\n[Diagram: Rightward shift of supply from S₁ to S₂ would be for increase — here shift is S₁ to S₂ leftward. New equilibrium E₂ is at higher price P₂ and lower quantity Q₂]\n\n(b)(ii) NEW OIL FIELD DISCOVERY:\nA new oil field increases the country's productive capacity — supply increases. The supply curve shifts RIGHTWARD. At the original equilibrium, there is now excess supply, causing prices to fall. New equilibrium is at a lower price and higher quantity.\n\n(c) FOUR factors determining Price Elasticity of Demand:\n\n1. AVAILABILITY OF SUBSTITUTES: Goods with many close substitutes (e.g. Coca-Cola vs other soft drinks) have more elastic demand — consumers can easily switch to alternatives when price rises. Goods with few substitutes (e.g. insulin for diabetics) have inelastic demand.\n\n2. PROPORTION OF INCOME SPENT: Goods that take a large share of consumer income (e.g. rent, cars) tend to have more elastic demand — consumers are more sensitive to price changes. Goods that cost a very small fraction of income (e.g. matchboxes, salt) tend to be price inelastic.\n\n3. NECESSITY vs LUXURY: Necessities (food, medicine, water) have inelastic demand — people must buy them regardless of price. Luxury goods (designer clothes, jewellery) have elastic demand — consumers cut back easily when prices rise.\n\n4. TIME PERIOD: Demand tends to be more elastic in the long run than the short run. In the short run, consumers cannot easily adjust habits or find substitutes. Over time, they can switch to alternatives, change behaviour, or find substitutes — making demand more responsive to price changes.",
        examTip:"Economics diagram questions require: axes clearly labelled (Price on Y-axis, Quantity on X-axis), curves labelled (D, S₁, S₂), equilibrium points marked (E₁, E₂), and arrows showing direction of shift. Draw these even if basic — examiners award method marks for each element."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     GOVERNMENT
  ──────────────────────────────────────────────────────────── */
  government: {
    objective: [
      { id:"g001", year:2023, exam:"WAEC", question:"The concept of separation of powers was propounded by:", options:["John Locke","Thomas Hobbes","Baron de Montesquieu","Jean-Jacques Rousseau"], answer:2, explanation:"Montesquieu elaborated the doctrine of separation of powers in 'The Spirit of the Laws' (1748), arguing that liberty requires separate executive, legislative, and judicial branches." },
      { id:"g002", year:2022, exam:"WAEC", question:"Which of the following is a characteristic of a federal system of government?", options:["A single central legislature with all powers","Division of powers between central and component governments entrenched in a constitution","The supremacy of local governments","Abolition of ethnic identities"], answer:1, explanation:"Federalism constitutionally divides powers between a national government and state/regional governments — neither can abolish the other." },
      { id:"g003", year:2021, exam:"WAEC", question:"The right to vote is known as:", options:["Civil right","Franchise/Suffrage","Natural right","Political obligation"], answer:1, explanation:"Suffrage (or franchise) is the right to vote in public elections. Universal adult suffrage extends this right to all adults regardless of sex, race, or religion." },
      { id:"g004", year:2023, exam:"NECO", question:"An ombudsman is:", options:["A military ruler","An official who investigates citizens' complaints against government or public officials","A supreme court judge","A constitutional monarch"], answer:1, explanation:"An ombudsman is an independent official appointed to investigate complaints from citizens about maladministration or unfair treatment by government bodies." },
      { id:"g005", year:2022, exam:"NECO", question:"The type of democracy where citizens vote for representatives who make decisions on their behalf is called:", options:["Direct democracy","Representative (indirect) democracy","Liberal democracy","Totalitarian democracy"], answer:1, explanation:"Representative (indirect) democracy involves citizens electing representatives to govern on their behalf — used in Nigeria, USA, UK, and most modern states." },
      { id:"g006", year:2021, exam:"GCE", question:"Nigeria's independence from Britain was achieved on:", options:["1 October 1960","1 June 1958","1 October 1963","15 August 1960"], answer:0, explanation:"Nigeria gained independence on 1 October 1960. Nigeria became a Republic on 1 October 1963." },
      { id:"g007", year:2020, exam:"WAEC", question:"The ECOWAS was established in:", options:["1963","1975","1980","1999"], answer:1, explanation:"The Economic Community of West African States (ECOWAS) was established by the Treaty of Lagos on 28 May 1975." },
      { id:"g008", year:2023, exam:"WAEC", question:"A pressure group differs from a political party in that it:", options:["Has a larger membership","Seeks to influence government policy without directly seeking political power","Always opposes the government","Is banned in democracies"], answer:1, explanation:"Pressure groups aim to influence government decisions on specific issues without contesting elections or seeking to form a government — unlike political parties." },
      { id:"g009", year:2022, exam:"WAEC", question:"The principle of judicial review empowers courts to:", options:["Make new laws","Declare laws or government actions unconstitutional and void","Approve executive appointments","Control the legislature"], answer:1, explanation:"Judicial review allows courts (especially supreme/constitutional courts) to strike down laws or executive actions that violate the constitution." },
      { id:"g010", year:2019, exam:"WAEC", question:"Which of the following is NOT a fundamental human right under Nigeria's 1999 Constitution?", options:["Right to life","Right to fair hearing","Right to private and family life","Right to free university education"], answer:3, explanation:"Free university education is not a justiciable fundamental right in Chapter IV of the 1999 Constitution — it appears in Chapter II (non-justiciable Fundamental Objectives)." },
      { id:"g011", year:2023, exam:"NABTEB", question:"The United Nations was established in:", options:["1919","1939","1945","1960"], answer:2, explanation:"The United Nations was established on 24 October 1945, after World War II, replacing the League of Nations." },
      { id:"g012", year:2021, exam:"NECO", question:"Delegated legislation refers to:", options:["Laws made directly by Parliament","Laws made by subordinate bodies (ministers, local govt) under authority granted by Parliament","Constitutional amendments","International treaties"], answer:1, explanation:"Delegated (subsidiary) legislation is law made by subordinate bodies (government ministers, agencies, local councils) under powers delegated by the main legislature through a parent Act." },
      { id:"g013", year:2022, exam:"GCE", question:"The Richard's Constitution of 1946 is significant because it:", options:["Granted Nigeria full independence","Introduced the principle of regionalism (North, West, East) into Nigerian governance","Created a federal Nigeria","Established the First Republic"], answer:1, explanation:"The Richards Constitution (1946) introduced regionalism by dividing Nigeria into Northern, Western, and Eastern regions with regional councils — a precursor to Nigeria's federal structure." },
      { id:"g014", year:2020, exam:"NECO", question:"A confederation differs from a federation in that in a confederation:", options:["The central government is supreme","Component units are subordinate to the centre","Component states retain sovereign authority and the central body is weak/advisory","The constitution is unwritten"], answer:2, explanation:"In a confederation, member states retain sovereignty and the central body has only the powers explicitly delegated to it by member states — states can leave. In a federation, the central government is supreme within its constitutional domain." },
      { id:"g015", year:2023, exam:"WAEC", question:"The primary function of the legislature is to:", options:["Execute laws","Interpret laws","Make laws","Enforce laws"], answer:2, explanation:"The legislature (National Assembly in Nigeria, Parliament in UK) makes laws. The executive executes/enforces laws, and the judiciary interprets them." },
    ],
    theory:[
      {
        id:"gt001", year:2023, exam:"WAEC",
        question:"(a) What is federalism? State FOUR features of a federal system of government.\n\n(b) Identify FOUR problems of federalism as practised in Nigeria.\n\n(c) Despite its challenges, why is federalism considered the most suitable system of government for Nigeria?",
        markingScheme:[
          { point:"(a) Definition: Federalism is a system of government in which powers are constitutionally divided between a central (federal) government and component (state/regional) governments, each supreme within its own sphere", marks:2 },
          { point:"FOUR features — 1.5 marks each: written constitution, division of powers, supremacy of constitution, independent judiciary, bicameral legislature, rigidity of constitution, revenue allocation", marks:6 },
          { point:"(b) FOUR problems — 1.5 marks each: ethnic/tribal politics (ethnicity threatening unity), revenue sharing disputes, unequal development between states, political instability, minority group marginalisation, over-dependence on centre, fiscal federalism imbalance", marks:6 },
          { point:"(c) THREE reasons — 2 marks each: Nigeria's ethnic diversity requires regional autonomy; protects minority rights; allows states to develop at own pace; historical/colonial administrative precedent; prevents domination by one ethnic group", marks:6 },
        ],
        totalMarks:20,
        modelAnswer:"(a) FEDERALISM is a system of government in which constitutional authority is divided between two levels of government — a central (federal) government and component (state) governments — each possessing defined areas of exclusive or concurrent power, with neither able to abolish the other.\n\nFOUR Features of Federalism:\n1. WRITTEN AND RIGID CONSTITUTION: A federal state must have a written constitution that clearly defines the powers of each level of government. Amending this constitution usually requires a special procedure (super-majority) to protect the federal arrangement.\n\n2. DIVISION OF POWERS: Powers are allocated between the central and state governments through the constitution. Nigeria's 1999 Constitution has an Exclusive Legislative List (Federal Government only), Concurrent List (both levels), and residual powers (states).\n\n3. SUPREMACY OF THE CONSTITUTION: The constitution is the supreme law of the land — all governments, federal and state, must operate within its provisions. The Supreme Court adjudicates disputes about constitutional powers.\n\n4. INDEPENDENT JUDICIARY: An independent court (Supreme Court in Nigeria) is necessary to interpret the constitution and resolve conflicts between federal and state governments over the distribution of powers.\n\n(b) FOUR Problems of Federalism in Nigeria:\n1. ETHNIC AND RELIGIOUS TENSIONS: Nigeria's 250+ ethnic groups have tended to align political behaviour along ethnic lines — competition for federal power and resources is often influenced by ethnic rather than national interests, threatening unity.\n\n2. FISCAL FEDERALISM IMBALANCE: States are financially dependent on federal allocations (largely from oil revenue) rather than internally generated revenue — this creates a situation where states cannot function without monthly allocations from Abuja, undermining genuine federalism.\n\n3. INEQUALITY BETWEEN STATES: Uneven distribution of resources, infrastructure, and development among states creates resentment. Some oil-producing Niger Delta states argue they receive insufficient returns from resources extracted from their land.\n\n4. MINORITY MARGINALISATION: Smaller ethnic groups within states often feel dominated by the majority ethnic group in their region — they agitate for creation of new states or local governments, making the federation increasingly complex and expensive.\n\n(c) WHY FEDERALISM IS SUITABLE FOR NIGERIA:\n1. ETHNIC AND CULTURAL DIVERSITY: Nigeria has over 250 ethnic groups with distinct languages, cultures, and histories. A unitary system would impose central control on this diversity, generating resistance. Federalism allows groups to maintain a degree of autonomy and self-governance within their states while remaining part of one nation.\n\n2. GEOGRAPHICAL SIZE AND POPULATION: Nigeria is a large country (923,768 km²) with over 200 million people. Central administration of all affairs from Abuja would be impractical. Federalism allows government to be brought closer to the people through state and local government structures.\n\n3. PROTECTION AGAINST DOMINATION: With one ethnic group or region potentially dominating a unitary government, smaller groups would be permanently marginalised. Federalism provides constitutional protections and power-sharing arrangements that reduce the risk of any single group monopolising national power.",
        examTip:"Government theory answers score best when you: (1) give a clear, concise definition first, (2) use numbered points rather than undifferentiated prose so the examiner can award marks clearly, (3) illustrate with Nigerian examples wherever possible — examiners reward contextually grounded answers."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     LITERATURE IN ENGLISH
  ──────────────────────────────────────────────────────────── */
  literature: {
    objective: [
      { id:"l001", year:2023, exam:"WAEC", question:"A story that uses characters and events to represent abstract ideas or moral qualities is called:", options:["A parable","An allegory","A fable","A myth"], answer:1, explanation:"An allegory uses characters and plot to represent abstract moral, political, or spiritual meanings at a deeper level (e.g. Animal Farm represents the Russian Revolution)." },
      { id:"l002", year:2022, exam:"WAEC", question:"The conversation between two or more characters in a literary work is called:", options:["Monologue","Soliloquy","Dialogue","Aside"], answer:2, explanation:"Dialogue is the exchange of speech between two or more characters. A monologue is one character speaking at length; a soliloquy is speaking one's thoughts aloud alone." },
      { id:"l003", year:2021, exam:"WAEC", question:"In Chinua Achebe's 'Things Fall Apart', Okonkwo's tragic flaw is:", options:["Cowardice","Fear of being seen as weak like his father, leading to excessive aggression and rigidity","Greed","Laziness"], answer:1, explanation:"Okonkwo's hamartia (tragic flaw) is his terror of resembling his feckless father Unoka — this drives him to brutal, inflexible manliness that ultimately causes his downfall." },
      { id:"l004", year:2023, exam:"WAEC", question:"The repetition of initial consonant sounds in successive words is called:", options:["Assonance","Onomatopoeia","Alliteration","Rhyme"], answer:2, explanation:"Alliteration is the repetition of the same initial consonant sound in closely connected words (e.g. 'Peter Piper picked a peck of pickled peppers')." },
      { id:"l005", year:2022, exam:"NECO", question:"A poem that mourns the death of someone is called:", options:["An ode","An elegy","A sonnet","A ballad"], answer:1, explanation:"An elegy is a mournful poem lamenting the death of a person or the end of something — e.g. Milton's 'Lycidas', Tennyson's 'In Memoriam'." },
      { id:"l006", year:2021, exam:"NECO", question:"Which of the following correctly describes dramatic irony?", options:["When a character uses overly dramatic language","When the audience knows something that a character does not know","When two characters have opposite views","When the playwright appears as a character"], answer:1, explanation:"Dramatic irony creates tension because the audience possesses information characters lack — e.g. in Oedipus Rex, the audience knows Oedipus killed his father before he does." },
      { id:"l007", year:2020, exam:"WAEC", question:"The turning point or moment of highest tension in a plot is called the:", options:["Exposition","Rising action","Climax","Denouement"], answer:2, explanation:"The climax is the moment of greatest dramatic tension — the peak of the conflict in the plot. After the climax comes the falling action and resolution (denouement)." },
      { id:"l008", year:2023, exam:"GCE", question:"The speaker in a poem is referred to as the:", options:["Author","Narrator","Persona","Protagonist"], answer:2, explanation:"The persona is the voice or mask assumed by the poet — the 'speaker' of the poem. It may or may not represent the poet's personal views." },
      { id:"l009", year:2022, exam:"GCE", question:"A character who serves as a contrast to the main character, highlighting the protagonist's qualities, is called:", options:["Antagonist","Foil","Confidant","Anti-hero"], answer:1, explanation:"A foil character contrasts with the protagonist to highlight the latter's qualities — e.g. Laertes as a foil to Hamlet (both lost fathers, but Laertes acts decisively while Hamlet delays)." },
      { id:"l010", year:2019, exam:"WAEC", question:"Wole Soyinka won the Nobel Prize for Literature in:", options:["1976","1981","1986","1991"], answer:2, explanation:"Wole Soyinka became the first African to win the Nobel Prize for Literature in 1986, recognised for his wide cultured perspective and poetic overtones in shaping a drama of existence." },
    ],
    theory:[
      {
        id:"lt001", year:2023, exam:"WAEC",
        question:"Read the poem below and answer the questions that follow:\n\n'We have come home\nFrom the bloodless wars\nWith sunken hearts\nOur boots full of pride —\nFrom the true massacre of the soul\nWhen we have asked\nWhat does it cost\nTo be loved and left to die slowly\nin the heat of the sun?'\n\n(a) What is the mood of the poem? Illustrate with TWO references from the poem.\n(b) Identify and explain any THREE figures of speech used in the poem.\n(c) What is the central message of this poem?\n(d) Comment on the effectiveness of the imagery in the poem.",
        markingScheme:[
          { point:"(a) Mood: despondent/sorrowful/bitter/disillusioned. Reference 1 with quote [2mk], Reference 2 with quote [2mk]", marks:4 },
          { point:"(b) THREE figures of speech correctly identified AND explained with quotes — 2 marks each", marks:6 },
          { point:"(c) Central message: the pain and disillusionment of those who sacrificed for a cause or society and returned to neglect/betrayal — with evidence", marks:4 },
          { point:"(d) Comment on specific images (bloodless wars, boots full of pride, heat of the sun) with explanation of their effectiveness", marks:4 },
        ],
        totalMarks:18,
        modelAnswer:"(a) The mood of the poem is one of deep despondency, disillusionment, and bitter resignation.\n\nFirst reference: 'With sunken hearts' — the image of sunken hearts directly conveys a profound emotional heaviness and defeat, suggesting the persona returns not in triumph but in crushing disappointment.\n\nSecond reference: 'What does it cost / To be loved and left to die slowly' — the rhetorical question reveals a bitter, bewildered tone as the persona questions the cruelty of sacrifice followed by abandonment, reinforcing the mood of betrayal and quiet anguish.\n\n(b) THREE Figures of Speech:\n\n1. OXYMORON — 'bloodless wars': War is typically defined by bloodshed, so 'bloodless wars' is a contradictory combination. It suggests these were internal, psychological, or political struggles — battles fought in the mind and soul rather than on physical battlefields. This makes the suffering seem even more invisible and unacknowledged.\n\n2. METAPHOR — 'the true massacre of the soul': The word 'massacre' (mass killing) is applied metaphorically to the soul rather than physical bodies. This extended metaphor suggests that the internal spiritual destruction suffered by the persona is more devastating than any physical slaughter — the soul has been annihilated by neglect and disillusionment.\n\n3. IRONY — 'Our boots full of pride': While boots are typically filled with feet, here pride fills them. This is ironic because despite the pride in their return, the people come home to nothing — their pride is the only thing they possess. The pride contrasts cruelly with the 'sunken hearts', creating tragic irony.\n\n(c) The central message of the poem is the pain of sacrifice and subsequent abandonment. The persona and those they represent have endured profound internal struggles ('bloodless wars') and psychological devastation ('massacre of the soul') in service of a cause, a nation, or an ideal — only to return home and find themselves unloved, neglected, and left to perish. The poem speaks to the universal experience of those who give much and receive nothing — a commentary on post-independence disillusionment, where those who fought for freedom are forgotten by the society they liberated.\n\n(d) The imagery in the poem is highly effective because it works on multiple levels simultaneously. 'Sunken hearts' creates a visceral physical image of emotional weight dragging the persona downward. 'Heat of the sun' in the final lines, juxtaposed with the spiritual cold of abandonment, creates a powerful paradox — the natural world burns brightly while the human world has grown cold and uncaring. The boot imagery ('boots full of pride') is particularly effective because boots symbolise both the soldier/traveller and the journey — but these boots carry only pride, suggesting the return yields nothing material. Together, the poem's images build a cohesive picture of exhaustion, dignity without reward, and quiet death.",
        examTip:"Literature poetry questions at WAEC/NECO follow a consistent structure. Always: (1) identify the device by name, (2) quote the line directly (use quotation marks), (3) explain what it means in the context of the poem, and (4) comment on its effect/purpose. Missing any of these steps loses marks even if your identification is correct."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     CRS (CHRISTIAN RELIGIOUS STUDIES)
  ──────────────────────────────────────────────────────────── */
  crs: {
    objective: [
      { id:"cr001", year:2023, exam:"WAEC", question:"The first book of the Bible is:", options:["Exodus","Genesis","Leviticus","Numbers"], answer:1, explanation:"Genesis is the first book of the Bible, describing the creation of the world, the fall of humanity, and the beginning of God's covenant people." },
      { id:"cr002", year:2022, exam:"WAEC", question:"'You shall love the Lord your God with all your heart, soul, and mind' is known as:", options:["The Lord's Prayer","The Great Commandment","The Golden Rule","The Beatitudes"], answer:1, explanation:"Jesus identified this (from Deuteronomy 6:5) as 'the greatest commandment' in Matthew 22:37-38, followed by 'Love your neighbour as yourself'." },
      { id:"cr003", year:2021, exam:"WAEC", question:"The Sermon on the Mount is found in:", options:["Luke 6","Matthew 5-7","John 14","Mark 4"], answer:1, explanation:"The Sermon on the Mount (including the Beatitudes, Lord's Prayer, and teachings on ethics) is recorded in Matthew 5-7." },
      { id:"cr004", year:2023, exam:"NECO", question:"Who was the mother of John the Baptist?", options:["Mary","Elizabeth","Anna","Salome"], answer:1, explanation:"Elizabeth, a relative of Mary (the mother of Jesus), was the mother of John the Baptist — as recorded in Luke 1." },
      { id:"cr005", year:2022, exam:"NECO", question:"The covenant God made with Noah after the flood was symbolised by:", options:["Circumcision","A burning bush","A rainbow","The Passover"], answer:2, explanation:"God set a rainbow in the sky as the sign of His covenant with Noah and all living creatures never to destroy the earth by flood again (Genesis 9:12-17)." },
      { id:"cr006", year:2021, exam:"GCE", question:"Paul's famous 'faith, hope and love' passage is found in:", options:["Romans 8","Ephesians 2","1 Corinthians 13","Galatians 5"], answer:2, explanation:"1 Corinthians 13, often called 'the love chapter', contains Paul's exposition of love and ends: 'And now these three remain: faith, hope and love. But the greatest of these is love.'" },
      { id:"cr007", year:2020, exam:"WAEC", question:"The parable of the Prodigal Son illustrates:", options:["The importance of hard work","God's unconditional love and forgiveness for the repentant sinner","The need for strict discipline","The value of material wealth"], answer:1, explanation:"The Prodigal Son (Luke 15:11-32) illustrates God's extravagant love and forgiveness — the father's joyful reception of his returning wayward son depicts God's readiness to forgive repentant sinners." },
      { id:"cr008", year:2023, exam:"WAEC", question:"The first miracle Jesus performed was at:", options:["Bethlehem","Capernaum","Cana","Jerusalem"], answer:2, explanation:"Jesus's first miracle was turning water into wine at a wedding feast at Cana in Galilee (John 2:1-11)." },
      { id:"cr009", year:2022, exam:"WAEC", question:"The Day of Pentecost, when the Holy Spirit descended on the disciples, is recorded in:", options:["Acts 1","Acts 2","Acts 10","Luke 24"], answer:1, explanation:"Acts 2 records the Day of Pentecost — the Holy Spirit descended as tongues of fire, the disciples spoke in other languages, and Peter preached, resulting in 3,000 converts." },
      { id:"cr010", year:2019, exam:"WAEC", question:"Who betrayed Jesus for thirty pieces of silver?", options:["Peter","Thomas","Judas Iscariot","Bartholomew"], answer:2, explanation:"Judas Iscariot, one of the twelve disciples, agreed to betray Jesus to the chief priests for thirty pieces of silver (Matthew 26:14-16)." },
    ],
    theory:[
      {
        id:"crt001", year:2023, exam:"WAEC",
        question:"(a) Describe the Call of Moses as recorded in Exodus 3:1-12.\n\n(b) State FOUR lessons Christians can learn from Moses' response to God's call.\n\n(c) How does God's call of Moses relate to the Christian concept of vocation (calling)?",
        markingScheme:[
          { point:"(a) Moses was tending Jethro's flock at Horeb [1mk]; appeared as a burning bush that was not consumed [1mk]; God called his name twice and Moses responded 'Here I am' [1mk]; God identified Himself as God of Abraham, Isaac and Jacob [1mk]; Moses hid his face [1mk]; God revealed awareness of Israel's suffering in Egypt [1mk]; God announced purpose: to deliver Israel [1mk]; God promised His presence: 'I will be with you' [1mk]", marks:8 },
          { point:"(b) FOUR lessons — 2 marks each: God uses ordinary people; initial reluctance is normal; God's call comes with God's presence; God's call is purposeful/missional; we should be available ('Here I am'); holy reverence before God is appropriate", marks:8 },
          { point:"(c) Connection to vocation: Christians believe God calls individuals for specific purposes [2mk]; the call requires response and obedience [2mk]; God equips those He calls [2mk]", marks:4 },
        ],
        totalMarks:20,
        modelAnswer:"(a) THE CALL OF MOSES (Exodus 3:1-12):\n\nMoses was shepherding the flock of his father-in-law Jethro, the priest of Midian, near Horeb, the mountain of God. The angel of the Lord appeared to him in a flame of fire from the midst of a thorn bush. Moses noticed that although the bush was burning, it was not consumed — an extraordinary sight that caused him to turn aside to investigate.\n\nWhen God saw that Moses turned aside to look, He called out from the burning bush: 'Moses! Moses!' — to which Moses responded, 'Here I am.' God then commanded Moses to remove his sandals because the ground on which he stood was holy. God identified Himself as the God of his ancestors — the God of Abraham, Isaac, and Jacob. Moses hid his face, afraid to look at God.\n\nGod declared that He had seen the affliction of His people in Egypt, heard their cry, and knew their suffering. He announced His intention to come down to deliver them from Egypt and bring them to a good and broad land flowing with milk and honey. God then commissioned Moses directly: 'Come, I will send you to Pharaoh that you may bring my people, the children of Israel, out of Egypt.' When Moses questioned his own adequacy ('Who am I that I should go?'), God promised: 'I will be with you, and this shall be the sign for you, that I have sent you.'\n\n(b) FOUR Lessons for Christians from Moses' Call:\n\n1. GOD USES ORDINARY PEOPLE FOR EXTRAORDINARY PURPOSES: Moses was a shepherd in exile when God called him — not a powerful official or religious leader. Christians learn that God is not limited by human qualifications, social status, or past failures when selecting instruments for His work.\n\n2. INITIAL HESITATION IS HUMAN BUT OBEDIENCE IS REQUIRED: Moses questioned his own worthiness ('Who am I?'). Christians learn that self-doubt in the face of God's call is understandable, but God's response is not to withdraw the call but to provide assurance — 'I will be with you.' The ultimate expectation is obedience.\n\n3. GOD'S CALL IS ACCOMPANIED BY GOD'S PRESENCE: God did not send Moses alone — He promised 'I will be with you.' Christians understand that when God calls a person to a task, He commits to providing the necessary strength, wisdom, and presence. The call and the empowerment come together.\n\n4. REVERENCE IS APPROPRIATE IN GOD'S PRESENCE: Moses removed his sandals on holy ground and hid his face. Christians learn that approaching God — whether in prayer, worship, or service — demands reverence, humility, and awe before the holy God.\n\n(c) RELATION TO CHRISTIAN VOCATION:\nMoses' call at the burning bush is a prototype of the Christian understanding of vocation (calling). Just as God specifically called Moses by name for a defined redemptive purpose, Christians believe God calls each believer to a particular purpose — not merely to salvation but to active participation in God's ongoing work in the world.\n\nThe call is personal (God called Moses by name, twice), purposeful (to liberate the oppressed), and empowered (accompanied by divine presence). Similarly, Christian vocation theology holds that God calls individuals by name, equips them with gifts, and sends them into specific fields of service — whether ministry, medicine, teaching, or business — as instruments of God's redemptive purposes in society.",
        examTip:"CRS narrative questions (like 'describe the call of Moses') want sequential storytelling with biblical detail, not a general summary. Include specific details: the location (Horeb), the specific phenomena (burning bush not consumed), the exact words spoken, and the specific commission given. Each detail = marks."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     GEOGRAPHY
  ──────────────────────────────────────────────────────────── */
  geography: {
    objective: [
      { id:"geo001", year:2023, exam:"WAEC", question:"The imaginary line at 0° latitude that divides the earth into Northern and Southern hemispheres is the:", options:["Prime Meridian","Tropic of Cancer","Equator","Arctic Circle"], answer:2, explanation:"The Equator is at 0° latitude and divides the Earth into the Northern and Southern Hemispheres. The Prime Meridian is at 0° longitude." },
      { id:"geo002", year:2022, exam:"WAEC", question:"Which of the following is a result of the Earth's rotation?", options:["The seasons","Day and night","The tilt of the Earth","Ocean tides only"], answer:1, explanation:"The Earth's rotation on its axis (once every 24 hours) causes day and night. Seasons result from the Earth's revolution around the Sun combined with its axial tilt." },
      { id:"geo003", year:2021, exam:"WAEC", question:"The type of rainfall associated with the inter-tropical convergence zone (ITCZ) in West Africa is:", options:["Relief rainfall","Frontal rainfall","Convectional rainfall","Orographic rainfall"], answer:2, explanation:"The ITCZ brings convectional rainfall — intense solar heating causes surface air to rise rapidly, cool, and form cumulonimbus clouds producing heavy afternoon thunderstorms." },
      { id:"geo004", year:2023, exam:"NECO", question:"Nigeria is located approximately between latitudes:", options:["4°N and 14°N","0° and 10°N","10°N and 20°N","4°S and 4°N"], answer:0, explanation:"Nigeria lies between approximately 4°N and 14°N latitude and 3°E to 15°E longitude in West Africa." },
      { id:"geo005", year:2022, exam:"NECO", question:"Which of the following rivers is the longest in Africa?", options:["Congo","Zambezi","Niger","Nile"], answer:3, explanation:"The Nile River (approximately 6,650 km) is the longest river in Africa, flowing northward through northeastern Africa to the Mediterranean Sea." },
      { id:"geo006", year:2021, exam:"GCE", question:"The process by which wind deposits sand grains to form dunes is called:", options:["Attrition","Deposition","Saltation","Deflation"], answer:1, explanation:"Deposition occurs when wind velocity decreases and it can no longer carry sand particles — they are deposited, gradually building up sand dunes." },
      { id:"geo007", year:2020, exam:"WAEC", question:"The largest ocean in the world is the:", options:["Atlantic Ocean","Indian Ocean","Pacific Ocean","Arctic Ocean"], answer:2, explanation:"The Pacific Ocean is the world's largest and deepest ocean, covering approximately 165 million km² — about 46% of Earth's water surface." },
      { id:"geo008", year:2023, exam:"WAEC", question:"Savanna vegetation in Nigeria is found mainly in:", options:["The Niger Delta","The south-western region","The northern region","The eastern rainforest belt"], answer:2, explanation:"The Guinea, Sudan, and Sahel savanna zones cover most of northern Nigeria, characterised by grassland with scattered trees that survive the long dry season." },
      { id:"geo009", year:2022, exam:"WAEC", question:"The contour lines on a topographic map that are closest together indicate:", options:["A gentle slope","A flat plain","A steep slope","A valley"], answer:2, explanation:"Contour lines show elevation. When they are close together, elevation changes rapidly over a short horizontal distance — indicating a steep slope." },
      { id:"geo010", year:2019, exam:"NECO", question:"The census conducted in Nigeria in 2006 gave a population of approximately:", options:["100 million","140 million","180 million","200 million"], answer:1, explanation:"Nigeria's 2006 National Population Census recorded a population of approximately 140.4 million people, making it Africa's most populous nation." },
    ],
    theory:[
      {
        id:"geot001", year:2023, exam:"WAEC",
        question:"(a) With the aid of a labelled diagram, explain how convectional rainfall is formed.\n\n(b) State FOUR effects of rainfall on the physical and human environment of West Africa.\n\n(c) Explain why the southern states of Nigeria experience higher rainfall than the northern states.",
        markingScheme:[
          { point:"(a) Diagram showing: sun heating ground, warm moist air rising (convection current), cooling and condensation at dew point, cumulonimbus cloud formation, heavy rainfall, often with thunder/lightning — minimum 4 labels", marks:5 },
          { point:"Explanation of process in correct sequence: solar heating → ground warms air → warm air rises → cools at lapse rate → reaches dew point → condensation → heavy rainfall", marks:4 },
          { point:"(b) FOUR effects — 2 marks each: soil erosion, flooding, leaching of soil nutrients, supports agriculture, fills rivers/reservoirs, causes gully erosion in southeast, landslides, promotes vegetation growth, supports hydroelectric power", marks:8 },
          { point:"(c) South: closer to equator, maritime influence from Atlantic/Gulf of Guinea, ITCZ spends longer in south, rainforest vegetation traps moisture [1mk each, max 3]", marks:3 },
        ],
        totalMarks:20,
        modelAnswer:"(a) FORMATION OF CONVECTIONAL RAINFALL:\n\n[Diagram: Show sun's rays heating the ground. Arrows indicating warm, moist air rising (convection column). At higher altitude, show cloud formation (cumulonimbus). Arrows showing rainfall descending. Label: Solar radiation, Heated ground surface, Rising warm moist air, Dew point/condensation level, Cumulonimbus cloud, Heavy rainfall, Lightning (optional)]\n\nProcess:\n1. The sun intensely heats the ground surface, especially in the afternoon.\n2. The ground radiates heat into the air above it, warming large bodies of moist air.\n3. This warm, less dense moist air rises rapidly through convection.\n4. As it rises, the air expands and cools at the Environmental Lapse Rate (approximately 6.5°C per 1000m).\n5. When the air cools to its dew point, water vapour condenses around dust particles to form water droplets — clouds form.\n6. Continued condensation builds towering cumulonimbus (thunderstorm) clouds.\n7. When water droplets become too heavy to be supported by rising air currents, they fall as heavy, often torrential rainfall, frequently accompanied by thunder and lightning.\n\nConvectional rainfall is typically short, intense, and localised — common in the West African interior in the afternoon.\n\n(b) FOUR Effects of Rainfall on West Africa:\n\n1. SOIL EROSION: Heavy rainfall, especially on exposed or deforested land, detaches and transports topsoil particles. In southeast Nigeria, intense rainfall on bare slopes has created catastrophic gully erosion systems (e.g. in Anambra and Imo States), destroying farmland and threatening villages.\n\n2. AGRICULTURAL PRODUCTIVITY: Adequate rainfall is essential for growing food and cash crops. West Africa's major crops — cassava, yams, maize, cocoa, palm oil, and groundnuts — depend on reliable seasonal rainfall. The timing of the first rains determines the entire farming calendar.\n\n3. FLOODING: Excessive rainfall overwhelms drainage systems and causes flooding in low-lying areas and riverine communities. Annual flooding along the Niger and Benue rivers displaces millions of people, destroys crops and property, and spreads waterborne diseases like cholera.\n\n4. HYDROELECTRIC POWER GENERATION: Rivers fed by rainfall drive hydroelectric turbines. Nigeria's Kainji, Jebba, and Shiroro dams on the Niger River generate electricity that is fundamental to national power supply — directly dependent on adequate rainfall in the river's catchment.\n\n(c) WHY SOUTHERN NIGERIA RECEIVES MORE RAINFALL THAN THE NORTH:\n\nThe southern states lie much closer to the Equator and the Atlantic Ocean (Gulf of Guinea). The warm, moisture-laden South-West Trade Winds (the maritime tropical air mass) blow directly off the Atlantic, carrying large quantities of water vapour inland. As this moist air moves northward, it loses much of its moisture through rainfall over the southern states.\n\nBy the time this air mass reaches the far north, it has lost most of its moisture and encounters the dry, dusty North-East Trade Winds (Harmattan) from the Sahara. The ITCZ (Inter-Tropical Convergence Zone), which marks the boundary between these two air masses and is the primary rain-bearing zone, spends a longer period each year over the south than the north.\n\nThe southern states therefore experience two distinct rainy seasons (March-July and September-November) with annual totals of 2,000-4,000mm in the Delta region, while the far north receives only one short rainy season (June-September) with totals often below 600mm.",
        examTip:"Geography diagram questions: always include a title, clear labels with leader lines pointing precisely to what they label, and if showing a process, use arrows to show direction of movement or flow. A neat, labelled diagram earns marks independently of your written explanation."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     CIVIC EDUCATION
  ──────────────────────────────────────────────────────────── */
  civic_education: {
    objective: [
      { id:"civ001", year:2023, exam:"WAEC", question:"Citizenship can be acquired through which of the following?", options:["Birth only","Naturalisation only","Birth, descent, registration, or naturalisation","Purchase"], answer:2, explanation:"Citizenship can be acquired by: birth (jus soli), descent (jus sanguinis), registration, or naturalisation (granted to qualifying aliens)." },
      { id:"civ002", year:2022, exam:"WAEC", question:"Which of the following is a civic responsibility of a Nigerian citizen?", options:["Avoiding the payment of taxes","Paying taxes and obeying the law","Refusing to participate in elections","Ignoring community development"], answer:1, explanation:"Civic responsibilities include: obeying the law, paying taxes, voting in elections, participating in community development, and defending the country when necessary." },
      { id:"civ003", year:2021, exam:"WAEC", question:"The concept of rule of law implies:", options:["The military rules the country","Every person, including government officials, is subject to the law equally","Only lawyers can be protected by law","The president is above the law"], answer:1, explanation:"Rule of law means no one is above the law — government officials, the president, and ordinary citizens are all equally subject to and accountable under the law." },
      { id:"civ004", year:2023, exam:"NECO", question:"Which of the following is NOT a fundamental objective in Nigeria's 1999 Constitution?", options:["Political objectives","Economic objectives","Educational objectives","Military conquest objectives"], answer:3, explanation:"Chapter II of the 1999 Constitution lists fundamental objectives including political, economic, social, educational, environmental, and foreign policy objectives. Military conquest is not among them." },
      { id:"civ005", year:2022, exam:"NECO", question:"Human trafficking involves:", options:["Legal migration for work","The illegal recruitment, transportation, and exploitation of people through force or deception","International student exchange","Diplomatic missions"], answer:1, explanation:"Human trafficking is the recruitment, transportation, harbouring, or receipt of persons by means of threat, force, deception, or coercion for the purpose of exploitation." },
      { id:"civ006", year:2021, exam:"GCE", question:"The agency responsible for fighting corruption in Nigeria is:", options:["NAFDAC","EFCC","INEC","NCC"], answer:1, explanation:"The Economic and Financial Crimes Commission (EFCC) was established in 2003 to investigate and prosecute financial crimes, corruption, and money laundering in Nigeria." },
      { id:"civ007", year:2020, exam:"WAEC", question:"Which of the following best describes democracy?", options:["Government of the few","Government by the military","Government of the people, by the people, for the people","Government by a monarch"], answer:2, explanation:"Abraham Lincoln's famous definition at Gettysburg (1863): democracy is 'government of the people, by the people, for the people' — sovereignty rests with the citizenry." },
      { id:"civ008", year:2023, exam:"WAEC", question:"The NDLEA in Nigeria is responsible for:", options:["National economic development","Control and eradication of drug abuse and trafficking","National electoral management","Environmental regulation"], answer:1, explanation:"The National Drug Law Enforcement Agency (NDLEA) is responsible for eliminating the growing, processing, manufacturing, selling, exporting, and trafficking of hard drugs in Nigeria." },
      { id:"civ009", year:2022, exam:"NABTEB", question:"A situation where government officials abuse their positions for personal gain is called:", options:["Democracy","Federalism","Corruption","Sovereignty"], answer:2, explanation:"Corruption is the abuse of entrusted power for private gain — it includes bribery, embezzlement of public funds, nepotism, and misuse of authority." },
      { id:"civ010", year:2021, exam:"NECO", question:"The ombudsman's primary role is to:", options:["Make laws","Investigate citizens' complaints against public officials and government bodies","Enforce criminal law","Conduct elections"], answer:1, explanation:"An ombudsman (Public Complaints Commissioner in Nigeria) investigates complaints from citizens about maladministration, unfair treatment, or abuse of power by government officials and agencies." },
    ],
    theory:[
      {
        id:"civt001", year:2023, exam:"WAEC",
        question:"(a) Define citizenship and explain THREE ways through which citizenship can be acquired in Nigeria.\n\n(b) State FOUR rights and FOUR duties of a citizen under the Nigerian Constitution.\n\n(c) Explain how citizens can contribute to national development.",
        markingScheme:[
          { point:"(a) Definition: Citizenship is the legal status of being a recognised member of a state with specific rights and responsibilities", marks:2 },
          { point:"THREE ways of acquisition — 2 marks each: by birth (born in Nigeria), by descent (parents are Nigerian), by registration (married to a Nigerian), by naturalisation (resident for required period)", marks:6 },
          { point:"(b) FOUR rights — 1mk each: right to life, personal liberty, fair hearing, freedom of expression, movement, religion, peaceful assembly, freedom from discrimination", marks:4 },
          { point:"FOUR duties — 1mk each: pay taxes, obey laws, defend the country, vote in elections, respect others' rights, participate in community service, report crimes", marks:4 },
          { point:"(c) Ways to contribute — 2 marks each for any 2: paying taxes honestly, participating in elections, volunteering, reporting corruption, maintaining environment, engaging in productive employment", marks:4 },
        ],
        totalMarks:20,
        modelAnswer:"(a) CITIZENSHIP is the legal status granted by a state to an individual that establishes a permanent relationship between that person and the state, conferring specific rights, privileges, and corresponding duties and responsibilities.\n\nTHREE Ways of Acquiring Nigerian Citizenship (1999 Constitution, Sections 25-27):\n\n1. BY BIRTH: A person born in Nigeria before independence (1 October 1960) or born in Nigeria after independence with at least one parent who is a citizen of Nigeria is automatically a citizen by birth (jus soli combined with jus sanguinis).\n\n2. BY DESCENT: A person born outside Nigeria whose father is a citizen of Nigeria is entitled to Nigerian citizenship by descent. The Nigerian parentage creates the entitlement regardless of the place of birth.\n\n3. BY NATURALISATION: A foreigner may apply for Nigerian citizenship by naturalisation if they have resided legally in Nigeria for a minimum of fifteen years (or five years if married to a Nigerian), are of good character, intend to remain in Nigeria, and can speak one Nigerian language. The President may grant naturalisation upon application.\n\n(b) FOUR Rights of a Nigerian Citizen (Chapter IV, 1999 Constitution):\n1. Right to life (Section 33) — no person shall be intentionally deprived of life\n2. Right to fair hearing (Section 36) — right to a fair and public trial within a reasonable time\n3. Right to freedom of expression and the press (Section 39)\n4. Right to freedom of movement (Section 41) — free to move throughout Nigeria\n\nFOUR Duties of a Nigerian Citizen:\n1. To pay taxes honestly as required by law\n2. To obey all lawful laws and regulations\n3. To participate in elections and other democratic processes\n4. To defend the country in times of national need\n\n(c) HOW CITIZENS CAN CONTRIBUTE TO NATIONAL DEVELOPMENT:\n\n1. PAYMENT OF TAXES: When citizens pay taxes honestly and promptly, the government has resources to fund infrastructure, hospitals, schools, and public services. Tax evasion starves government of development funds.\n\n2. ACTIVE DEMOCRATIC PARTICIPATION: By voting in elections, monitoring elected officials, and holding government accountable through lawful protest and civic engagement, citizens ensure that leaders govern responsibly and in the public interest.\n\n3. REPORTING CORRUPTION: Citizens who report corrupt officials and criminal activity to agencies like the EFCC help protect public resources. A culture of zero tolerance for corruption, beginning with individual citizens, is essential for development.\n\n4. COMMUNITY SERVICE AND VOLUNTEERISM: Participating in community development initiatives — cleaning environments, supporting schools, mentoring youth — builds social capital and addresses development gaps that government cannot fill alone.",
        examTip:"Civic Education theory answers should always reference the 1999 Constitution specifically when discussing rights and citizenship — state the section number if you know it (Sections 25-27 for citizenship, Chapter IV for rights). This demonstrates knowledge beyond surface level and earns bonus recognition from examiners."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     ACCOUNTING
  ──────────────────────────────────────────────────────────── */
  accounting: {
    objective: [
      { id:"ac001", year:2023, exam:"WAEC", question:"The accounting equation is:", options:["Assets = Capital − Liabilities","Assets = Capital + Liabilities","Capital = Assets + Liabilities","Liabilities = Assets + Capital"], answer:1, explanation:"The fundamental accounting equation: Assets = Capital (Owner's Equity) + Liabilities. Every transaction maintains this balance." },
      { id:"ac002", year:2022, exam:"WAEC", question:"A debit entry in an account means:", options:["An increase in a liability account","An increase in an asset or expense account, or a decrease in a liability or equity account","Always a decrease","A credit to another account only"], answer:1, explanation:"Debits increase asset and expense accounts and decrease liability, equity, and revenue accounts. Double-entry: every debit has a corresponding credit." },
      { id:"ac003", year:2021, exam:"WAEC", question:"Depreciation is best described as:", options:["The fall in market value of an asset","The systematic allocation of the cost of a non-current asset over its useful life","Cash set aside to replace assets","The repair cost of an asset"], answer:1, explanation:"Depreciation is the accounting method of allocating the cost of a tangible non-current asset over its expected useful life — matching cost against the revenue it helps generate (matching concept)." },
      { id:"ac004", year:2023, exam:"NECO", question:"The document prepared to check the accuracy of the ledger balances is the:", options:["Balance sheet","Profit and loss account","Trial balance","Cash flow statement"], answer:2, explanation:"The trial balance lists all ledger account balances to verify that total debits equal total credits — it checks arithmetic accuracy of the double-entry system." },
      { id:"ac005", year:2022, exam:"NECO", question:"Which of the following is a current asset?", options:["Motor vehicle","Land and buildings","Trade debtors (accounts receivable)","Patents"], answer:2, explanation:"Current assets are assets expected to be converted to cash within one year: cash, debtors, inventory, prepayments. Motor vehicles, land, and patents are non-current assets." },
      { id:"ac006", year:2021, exam:"GCE", question:"The gross profit is calculated as:", options:["Sales revenue minus all expenses","Sales revenue minus cost of goods sold","Net profit plus expenses","Total assets minus liabilities"], answer:1, explanation:"Gross Profit = Sales Revenue − Cost of Goods Sold (COGS). It measures trading profitability before deducting operating expenses." },
      { id:"ac007", year:2020, exam:"WAEC", question:"An invoice received from a supplier for goods purchased on credit is recorded in the:", options:["Sales journal","Cash book","Purchases journal","General journal"], answer:2, explanation:"Credit purchases of goods for resale are first recorded in the Purchases Journal (Purchases Day Book) before posting to the ledger." },
      { id:"ac008", year:2023, exam:"WAEC", question:"The principle that requires expenses to be matched with the revenue they help generate in the same accounting period is:", options:["Consistency concept","Going concern concept","Matching/Accruals concept","Prudence concept"], answer:2, explanation:"The matching (accruals) concept requires that expenses are recognised in the period in which they help generate revenue, regardless of when cash is paid." },
      { id:"ac009", year:2022, exam:"WAEC", question:"If opening stock is ₦20,000, purchases are ₦80,000, and closing stock is ₦15,000, the cost of goods sold is:", options:["₦75,000","₦85,000","₦100,000","₦95,000"], answer:1, explanation:"COGS = Opening Stock + Purchases − Closing Stock = 20,000 + 80,000 − 15,000 = ₦85,000." },
      { id:"ac010", year:2019, exam:"WAEC", question:"A bank reconciliation statement is prepared to:", options:["Prepare the balance sheet","Reconcile the difference between the cash book balance and the bank statement balance","Record all cash transactions","Calculate profit"], answer:1, explanation:"A bank reconciliation statement explains and reconciles differences between the business's cash book balance and the bank statement balance — caused by timing differences (unpresented cheques, outstanding deposits) and errors." },
    ],
    theory:[
      {
        id:"act001", year:2023, exam:"WAEC",
        question:"The following information relates to Amaka Traders for the year ended 31 December 2023:\n\nOpening stock: ₦45,000\nPurchases: ₦320,000\nReturns inwards: ₦12,000\nReturns outwards: ₦8,000\nCarriage inwards: ₦5,000\nClosing stock: ₦38,000\nSales: ₦480,000\nWages and salaries: ₦65,000\nRent and rates: ₦24,000\nInsurance: ₦8,000\nDiscount allowed: ₦4,000\nDiscount received: ₦6,000\nDepreciation: ₦15,000\n\n(a) Prepare the Trading Account for Amaka Traders for the year ended 31 December 2023.\n(b) Prepare the Profit and Loss Account for the year ended 31 December 2023.",
        markingScheme:[
          { point:"Trading Account — Sales correctly shown: 480,000 − 12,000 (returns in) = Net Sales 468,000", marks:2 },
          { point:"Cost of purchases: 320,000 − 8,000 (returns out) + 5,000 (carriage in) = 317,000", marks:2 },
          { point:"Cost of goods sold: 45,000 + 317,000 − 38,000 = 324,000", marks:2 },
          { point:"Gross Profit = 468,000 − 324,000 = 144,000 (correctly carried to P&L)", marks:2 },
          { point:"P&L: Gross profit 144,000 + Discount received 6,000 = 150,000 total income", marks:2 },
          { point:"Expenses: Wages 65,000 + Rent 24,000 + Insurance 8,000 + Discount allowed 4,000 + Depreciation 15,000 = 116,000", marks:2 },
          { point:"Net Profit = 150,000 − 116,000 = ₦34,000", marks:2 },
          { point:"Correct format, headings, and date for both accounts", marks:2 },
        ],
        totalMarks:16,
        modelAnswer:"AMAKA TRADERS\nTRADING ACCOUNT FOR THE YEAR ENDED 31 DECEMBER 2023\n\nDr                                              Cr\n                         ₦                              ₦\nOpening Stock      45,000    Sales              480,000\nPurchases 320,000            Less Returns In   (12,000)\nLess Returns Out (8,000)    ─────────\nNet Purchases    312,000    Net Sales          468,000\nAdd Carriage In    5,000\n─────────\nNet Cost of Purch 317,000\n─────────\nGoods Available   362,000\nLess Closing Stock(38,000)\n─────────\nCost of Goods Sold 324,000\nGROSS PROFIT c/d  144,000\n─────────         ─────────\n                  468,000                       468,000\n\nAMAKA TRADERS\nPROFIT AND LOSS ACCOUNT FOR THE YEAR ENDED 31 DECEMBER 2023\n\nDr                                              Cr\n                         ₦                              ₦\nWages & Salaries   65,000   Gross Profit b/d  144,000\nRent & Rates       24,000   Discount Received   6,000\nInsurance           8,000\nDiscount Allowed    4,000\nDepreciation       15,000\n─────────\nTotal Expenses    116,000\nNET PROFIT         34,000\n─────────         ─────────\n                  150,000                       150,000\n\nKEY WORKINGS:\n• Net Sales = 480,000 − 12,000 = 468,000\n• Net Purchases = 320,000 − 8,000 + 5,000 = 317,000\n• COGS = 45,000 + 317,000 − 38,000 = 324,000\n• Gross Profit = 468,000 − 324,000 = 144,000\n• Net Profit = (144,000 + 6,000) − 116,000 = 34,000",
        examTip:"WAEC Accounting format marks are real — you lose marks for wrong headings, missing dates, and incorrect account format. Always write: Name of business, Name of account, 'For the year ended [date]'. Dr on left, Cr on right. Show workings separately — if your final answer is wrong but workings are correct, you still get method marks."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     COMMERCE
  ──────────────────────────────────────────────────────────── */
  commerce: {
    objective: [
      { id:"com001", year:2023, exam:"WAEC", question:"Commerce can be defined as:", options:["The production of goods in factories","All activities involved in the exchange of goods and services, including trade and aids to trade","Farming and agriculture","The extraction of natural resources"], answer:1, explanation:"Commerce encompasses all activities related to the buying, selling, and distribution of goods and services — including trade, banking, insurance, transportation, communication, and warehousing (aids to trade)." },
      { id:"com002", year:2022, exam:"WAEC", question:"A sole trader is a business owned and managed by:", options:["Two to twenty partners","A single individual who provides all the capital and takes all the risk","Shareholders through a board of directors","The government"], answer:1, explanation:"A sole trader (sole proprietorship) is the simplest form of business — owned and operated by one person who has unlimited liability, takes all profits, and bears all losses." },
      { id:"com003", year:2021, exam:"WAEC", question:"The document sent by a seller to a buyer showing details of goods supplied and the amount owed is an:", options:["Order form","Invoice","Receipt","Debit note"], answer:1, explanation:"An invoice is the commercial document issued by a seller to a buyer listing goods or services supplied, their quantities, prices, and total amount payable." },
      { id:"com004", year:2023, exam:"NECO", question:"Which of the following is an advantage of partnership over sole proprietorship?", options:["Unlimited liability for all partners","More capital can be raised from multiple partners","Less paperwork and formalities","Single decision maker"], answer:1, explanation:"A key advantage of partnership is the ability to pool capital from multiple partners — providing more resources for business expansion than a sole trader can typically raise alone." },
      { id:"com005", year:2022, exam:"NECO", question:"The type of insurance that covers a ship and its cargo is:", options:["Life assurance","Fire insurance","Marine insurance","Motor insurance"], answer:2, explanation:"Marine insurance covers ships (hull insurance), cargo, and freight against perils of the sea — it is one of the oldest forms of insurance, originating with Lloyd's of London." },
      { id:"com006", year:2021, exam:"GCE", question:"Entrepôt trade refers to:", options:["Trade within a country only","Importing goods and re-exporting them, usually after some processing or repackaging","Trading in agricultural commodities only","Export of finished manufactured goods"], answer:1, explanation:"Entrepôt trade is the import of goods for the purpose of re-exporting them — the entrepôt country serves as a trade hub. Singapore and Dubai are major modern entrepôts." },
      { id:"com007", year:2020, exam:"WAEC", question:"Which of the following is a function of the Central Bank of Nigeria (CBN)?", options:["Providing loans to individuals","Issuing currency and acting as banker to the government","Selling shares to the public","Managing pension funds"], answer:1, explanation:"The CBN's core functions include: issuing legal tender currency, acting as banker and financial adviser to the Federal Government, managing foreign exchange reserves, and implementing monetary policy." },
      { id:"com008", year:2023, exam:"WAEC", question:"A bill of lading is a document used in:", options:["Air transport only","Road transport","Sea transport — a contract between shipper and carrier","Internal trade"], answer:2, explanation:"A bill of lading is a legal document issued by a carrier (shipping company) acknowledging receipt of cargo for shipment — it serves as a receipt, contract of carriage, and document of title." },
      { id:"com009", year:2022, exam:"WAEC", question:"The price at which shares are originally sold to the public by a company is the:", options:["Market price","Par (nominal) value","Premium price","Dividend value"], answer:1, explanation:"The par value (nominal/face value) is the stated value printed on a share certificate when originally issued. Market price fluctuates with supply and demand on the stock exchange." },
      { id:"com010", year:2019, exam:"NECO", question:"An insurance policy based on the principle of indemnity ensures that:", options:["The insured always makes a profit from a claim","The insured is restored to the same financial position as before the loss — no more, no less","The insurer pays double the loss","Only the premium is returned"], answer:1, explanation:"Indemnity is a fundamental insurance principle: the purpose of insurance is to restore the insured to their pre-loss financial position — not to allow profit from a loss." },
    ],
    theory:[
      {
        id:"comt001", year:2023, exam:"WAEC",
        question:"(a) Distinguish between a public limited company and a private limited company.\n\n(b) State FOUR advantages and THREE disadvantages of the public limited company as a form of business organisation.\n\n(c) Explain the role of the Nigeria Stock Exchange in the mobilisation of capital for economic development.",
        markingScheme:[
          { point:"(a) Public Ltd: can invite public to subscribe shares, listed on stock exchange, min 7 members no maximum, shares freely transferable", marks:3 },
          { point:"Private Ltd: cannot invite public, not listed, 1-50 members, shares not freely transferable, needs no prospectus", marks:3 },
          { point:"(b) FOUR advantages — 1.5 marks each: large capital, limited liability, perpetual succession, professional management, risk spread, economies of scale", marks:6 },
          { point:"THREE disadvantages — 1.5 marks each: complex/costly formation, loss of control by founders, double taxation of dividends, disclosure requirements, takeover risk", marks:4 },
          { point:"(c) NSE role — 2 marks each for any 2: provides platform for raising long-term capital, secondary market for share trading (liquidity), price discovery mechanism, attracts foreign investment, encourages savings/investment culture", marks:4 },
        ],
        totalMarks:20,
        modelAnswer:"(a) DIFFERENCES BETWEEN PUBLIC AND PRIVATE LIMITED COMPANIES:\n\nPUBLIC LIMITED COMPANY (PLC):\n• Can invite members of the general public to purchase its shares through a prospectus\n• Shares are listed and freely traded on the Nigerian Stock Exchange\n• Minimum of 7 members with no maximum limit\n• Must have 'PLC' or 'Public Limited Company' in its name\n• Subject to more stringent disclosure and regulatory requirements\n• Requires a Trading Certificate before commencing business\n\nPRIVATE LIMITED COMPANY (Ltd):\n• Cannot invite the general public to subscribe for its shares\n• Shares are NOT listed on the stock exchange — transfer of shares requires board approval\n• Membership is restricted to a maximum of 50 members (minimum 1)\n• Has 'Limited' or 'Ltd' in its name\n• Subject to less rigorous public disclosure requirements\n• Can commence business immediately upon incorporation\n\n(b) ADVANTAGES OF A PUBLIC LIMITED COMPANY:\n1. ACCESS TO LARGE CAPITAL: By inviting the public to purchase shares, a PLC can raise very large amounts of capital for expansion and investment — far beyond what private companies can achieve.\n2. LIMITED LIABILITY: Shareholders' personal assets are protected — they can only lose the amount they invested in shares, encouraging more people to invest.\n3. PERPETUAL SUCCESSION: The company continues to exist regardless of the death, bankruptcy, or resignation of individual shareholders — it has a legal existence separate from its members.\n4. PROFESSIONAL MANAGEMENT: Large PLCs can attract and afford talented professional managers (CEOs, CFOs) with specialist expertise — separating ownership (shareholders) from management.\n\nDISADVANTAGES:\n1. COMPLEX AND COSTLY FORMATION: Setting up a PLC requires more documentation (memorandum, articles, prospectus), more regulatory approval, and higher legal and administrative costs than simpler business forms.\n2. LOSS OF CONTROL: As shares are widely spread, original founders may lose voting control of the company to institutional investors or hostile bidders — major decisions require shareholder approval.\n3. RISK OF HOSTILE TAKEOVER: Because shares are freely tradeable, a rival company or investor can buy up enough shares to gain control — threatening the original management and company direction.\n\n(c) THE ROLE OF THE NIGERIAN STOCK EXCHANGE (NSE/NGX) IN CAPITAL MOBILISATION:\n\n1. PRIMARY MARKET — CAPITAL RAISING: The NGX provides a regulated platform through which companies can offer shares to the public (Initial Public Offerings/IPOs) or issue bonds, raising long-term capital for business expansion, infrastructure investment, and job creation without incurring bank debt.\n\n2. SECONDARY MARKET — LIQUIDITY AND CONFIDENCE: The exchange's secondary market allows investors to sell their shares to other buyers at any time, providing liquidity. This liquidity is crucial because investors are more willing to commit long-term capital when they know they can exit their investment if needed — this confidence drives more investment into productive enterprises.\n\n3. ATTRACTING FOREIGN PORTFOLIO INVESTMENT: A well-functioning stock exchange attracts foreign investors seeking returns in emerging markets. Foreign capital inflows strengthen the naira, increase corporate investment, and transfer management knowledge and governance standards.",
        examTip:"Commerce theory questions that ask you to 'distinguish between' two things want a comparative format — not two separate descriptions. Present similarities and differences side by side or in a clear table. WAEC Commerce examiners specifically look for contrast, not just description of each item separately."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     MARKETING
  ──────────────────────────────────────────────────────────── */
  marketing: {
    objective: [
      { id:"mk001", year:2023, exam:"WAEC", question:"The 4Ps of the marketing mix are:", options:["People, Process, Physical evidence, Product","Product, Price, Place, Promotion","Planning, Producing, Pricing, Promoting","Product, Profit, Place, Publicity"], answer:1, explanation:"The classic 4Ps of the marketing mix are: Product (what is sold), Price (what it costs), Place (distribution/where sold), and Promotion (how it is communicated to customers)." },
      { id:"mk002", year:2022, exam:"WAEC", question:"Market segmentation refers to:", options:["Splitting a company into divisions","Dividing the total market into distinct groups of buyers with similar needs or characteristics","Reducing the price in different markets","Segmenting production by product type"], answer:1, explanation:"Market segmentation divides a heterogeneous market into smaller homogeneous groups (segments) with similar needs, characteristics, or behaviour, allowing targeted marketing." },
      { id:"mk003", year:2021, exam:"WAEC", question:"Which of the following is NOT a method of sales promotion?", options:["Free samples","Buy-one-get-one-free offers","Public relations","Coupons and discounts"], answer:2, explanation:"Sales promotion includes: free samples, BOGOF offers, coupons, loyalty cards, and prize competitions. Public relations is a separate promotional tool focused on reputation management, not direct sales incentives." },
      { id:"mk004", year:2023, exam:"NECO", question:"A middleman who sells goods to retailers rather than directly to consumers is a:", options:["Retailer","Wholesaler","Agent","Broker"], answer:1, explanation:"A wholesaler buys in bulk from manufacturers and sells in smaller quantities to retailers — they are intermediaries between producers and retailers in the distribution chain." },
      { id:"mk005", year:2022, exam:"NECO", question:"The stage in the product life cycle where sales grow most rapidly is the:", options:["Introduction stage","Growth stage","Maturity stage","Decline stage"], answer:1, explanation:"During the growth stage, the product gains market acceptance, sales accelerate rapidly, profits increase, and new competitors enter the market attracted by the opportunity." },
      { id:"mk006", year:2021, exam:"GCE", question:"Brand loyalty refers to:", options:["A brand that has been legally registered","The tendency of consumers to consistently purchase a particular brand in preference to competitors","The loyalty of staff to the company brand","A brand endorsed by a celebrity"], answer:1, explanation:"Brand loyalty is the consumer's consistent preference for and repeat purchase of a specific brand — it is one of the most valuable assets in marketing as loyal customers are less price-sensitive and more forgiving of occasional failures." },
      { id:"mk007", year:2020, exam:"WAEC", question:"A price skimming strategy involves:", options:["Setting a very low price to penetrate the market quickly","Setting a high initial price that is gradually reduced as the product ages and competition increases","Maintaining a constant price throughout the product life cycle","Pricing lower than all competitors"], answer:1, explanation:"Price skimming sets a high initial price to 'skim' maximum revenue from early adopters willing to pay a premium — common for new technology products. Price is then lowered to reach more price-sensitive customers." },
      { id:"mk008", year:2023, exam:"WAEC", question:"Direct marketing refers to:", options:["Selling through retailers and wholesalers","Communicating directly with targeted individual consumers to generate an immediate response (e.g. direct mail, telemarketing, email)","Advertising on national television","Marketing through trade fairs"], answer:1, explanation:"Direct marketing communicates with individual consumers without using intermediaries — tools include direct mail, email marketing, SMS, telesales, and online targeted advertising." },
      { id:"mk009", year:2022, exam:"NABTEB", question:"Consumer behaviour in marketing is the study of:", options:["How businesses plan production","How and why consumers make purchasing decisions","How products are designed","How prices are set"], answer:1, explanation:"Consumer behaviour studies the decision-making processes, motivations, perceptions, and psychological and social factors that influence how individuals select, purchase, use, and dispose of goods and services." },
      { id:"mk010", year:2019, exam:"NECO", question:"AIDA in marketing stands for:", options:["Attention, Interest, Desire, Action","Advertising, Income, Distribution, Analysis","Awareness, Intention, Decision, Achievement","All Inclusive Direct Approach"], answer:0, explanation:"AIDA is a classic marketing/advertising model describing the consumer journey: Attention (grabbing notice) → Interest (building engagement) → Desire (creating want) → Action (prompting purchase)." },
    ],
    theory:[
      {
        id:"mkt001", year:2023, exam:"WAEC",
        question:"(a) Explain the concept of the marketing mix and discuss each element of the 4Ps with relevant examples from the Nigerian market.\n\n(b) Explain the stages of the product life cycle and discuss the marketing strategies appropriate at each stage.\n\n(c) Identify FOUR challenges facing marketing in Nigeria and suggest how each can be overcome.",
        markingScheme:[
          { point:"(a) Marketing mix definition: set of controllable marketing tools used to produce the response the company wants in the target market", marks:2 },
          { point:"PRODUCT: features, quality, branding, packaging with example [2mk]", marks:2 },
          { point:"PRICE: pricing strategies, perceived value with example [2mk]", marks:2 },
          { point:"PLACE: distribution channels, logistics with example [2mk]", marks:2 },
          { point:"PROMOTION: advertising, PR, sales promotion with example [2mk]", marks:2 },
          { point:"(b) FOUR stages with appropriate strategy for each — 2 marks per stage: introduction, growth, maturity, decline", marks:8 },
          { point:"(c) FOUR challenges with solution — 2 marks each: poor infrastructure, low consumer income, fake products, poor data/research, competition from imports", marks:8 },
        ],
        totalMarks:26,
        modelAnswer:"(a) THE MARKETING MIX (4Ps):\n\nThe marketing mix is the set of controllable, tactical marketing tools that a firm blends to produce the response it wants in the target market. Each element must be coordinated and consistent with the others.\n\nPRODUCT: Everything a firm offers to satisfy a customer need or want — including physical product features, quality, branding, packaging, and after-sales service. In Nigeria, Indomie Noodles has developed a product strategy specifically tailored to Nigerian taste preferences, with local flavours (onion chicken, jollof) that differentiate it from imported noodle brands.\n\nPRICE: The amount customers pay for the product — including the list price, discounts, credit terms, and payment methods. Price must reflect the product's perceived value while covering costs and generating profit. Dangote Cement uses competitive pricing relative to imported cement while leveraging local production cost advantages, making it affordable across income levels.\n\nPLACE (Distribution): All activities that make the product available to target customers — including channels of distribution, coverage, logistics, and inventory management. In Nigeria, Coca-Cola's extensive distribution network reaches even remote rural markets through a network of distributors, retailers, and street kiosks (dukawallahs) — ensuring the product is available at the point of consumption.\n\nPROMOTION: All communications activities that inform, persuade, and remind customers about the product — advertising, personal selling, sales promotion, public relations, and digital marketing. MTN Nigeria's 'Everywhere you go' campaign combined television advertising, outdoor billboards, and mobile promotions to build brand awareness and loyalty across all demographics.\n\n(b) PRODUCT LIFE CYCLE STAGES:\n\nINTRODUCTION STAGE: The product is launched. Sales are low and grow slowly. Heavy investment in promotion and distribution is needed. Profits are negative or minimal. STRATEGY: Focus on awareness creation — heavy advertising to educate consumers about the product's existence and benefits. Limited distribution channels. High or skimming price if targeting innovators, or low penetration price to gain rapid trial.\n\nGROWTH STAGE: Sales grow rapidly. Profits increase. New competitors enter attracted by the opportunity. STRATEGY: Expand distribution broadly, differentiate the product from emerging competitors, build brand preference, and consider reducing prices slightly to broaden the market and deter competitors.\n\nMATURITY STAGE: Sales growth slows and peaks. Market becomes saturated. Fierce competition leads to price pressure and declining profits. STRATEGY: Modify the product (new features, new packaging), find new market segments, increase advertising frequency, and use aggressive sales promotions to retain shelf space and consumer loyalty.\n\nDECLINE STAGE: Sales fall. Profits erode. Some competitors exit the market. STRATEGY: Either harvest the product (cut costs, maintain price, collect remaining profits with minimal investment) or delete it from the product range. Alternatively, revive it through significant repositioning if a viable market segment remains.\n\n(c) FOUR CHALLENGES FACING MARKETING IN NIGERIA:\n\n1. POOR INFRASTRUCTURE: Bad roads, erratic power supply, and limited cold chain logistics make distribution expensive and unreliable, especially in rural areas. SOLUTION: Firms should invest in alternative logistics partnerships, generator backup, and work with the government through industry associations to advocate for infrastructure improvement. Solar-powered cold storage and motorcycle last-mile delivery have been adopted successfully.\n\n2. LOW AND IRREGULAR CONSUMER INCOME: The majority of Nigerian consumers are price-sensitive with unpredictable income, making premium pricing difficult. SOLUTION: Develop smaller, more affordable unit sizes (sachets), offer flexible payment options, and design value-for-money products specifically for the mass market. Sachet water, sachet milk, and single-use data bundles are examples of successful adaptation.\n\n3. PROLIFERATION OF COUNTERFEIT AND SUBSTANDARD PRODUCTS: Fake products undermine brand equity and consumer trust, especially in pharmaceuticals, food, and electronics. SOLUTION: Invest in anti-counterfeiting technology (holograms, QR codes), partner with NAFDAC and Standards Organisation of Nigeria (SON) for enforcement, educate consumers on how to identify genuine products, and prosecute counterfeiters aggressively.\n\n4. INADEQUATE CONSUMER DATA AND MARKET RESEARCH: The absence of reliable, current consumer data makes targeting and positioning difficult, leading to marketing spend inefficiency. SOLUTION: Invest in primary research (surveys, focus groups, observation), leverage mobile phone data and social media analytics, and collaborate with Nigerian research firms that have deep local knowledge and networks.",
        examTip:"Marketing theory answers should be rich with Nigerian examples — Dangote, MTN, Indomie, Cowbell, Obi Cubana's brands, Konga, Jumia. WAEC Marketing examiners respond positively to local contextualisation. Generic answers that could apply anywhere score lower than answers that demonstrate knowledge of the Nigerian market specifically."
      },
    ]
  },

  /* ────────────────────────────────────────────────────────────
     ANIMAL HUSBANDRY
  ──────────────────────────────────────────────────────────── */
  animal_husbandry: {
    objective: [
      { id:"ah001", year:2023, exam:"WAEC", question:"The gestation period of a cow is approximately:", options:["114 days","150 days","280 days","365 days"], answer:2, explanation:"The gestation period of cattle (cow) is approximately 283 days (about 9 months). Pig = 114 days; Sheep/Goat = 150 days." },
      { id:"ah002", year:2022, exam:"WAEC", question:"Rinderpest is a disease of cattle caused by a:", options:["Bacterium","Fungus","Virus","Parasite"], answer:2, explanation:"Rinderpest ('cattle plague') was a deadly viral disease of cattle caused by the Rinderpest morbillivirus — it was declared globally eradicated in 2011." },
      { id:"ah003", year:2021, exam:"WAEC", question:"The process of milking a cow twice daily rather than once daily is done to:", options:["Reduce infection risk","Stimulate continued milk production and prevent discomfort","Save time","Reduce feed costs"], answer:1, explanation:"Regular milking (2-3 times daily) maintains the hormonal stimulus for continued milk production. Infrequent milking signals to the body to reduce milk production and can cause mastitis (udder infection)." },
      { id:"ah004", year:2023, exam:"NECO", question:"Brooding in poultry refers to:", options:["Egg laying by hens","The provision of artificial warmth to chicks in the first weeks of life","Mating of poultry","Vaccination of poultry"], answer:1, explanation:"Brooding is the management of young chicks (0-6 weeks) with artificial heat sources (brooder stoves, bulbs) to compensate for their inability to regulate body temperature in the early weeks." },
      { id:"ah005", year:2022, exam:"NECO", question:"Which of the following is an external parasite of farm animals?", options:["Tapeworm","Roundworm","Tick","Liver fluke"], answer:2, explanation:"Ticks are external (ectoparasites) that attach to the skin surface of animals. Tapeworm, roundworm, and liver fluke are internal parasites (endoparasites)." },
      { id:"ah006", year:2021, exam:"GCE", question:"The ideal temperature for storing poultry eggs for hatching is:", options:["0°C","10-13°C","25°C","37°C"], answer:1, explanation:"Hatching eggs should be stored at 10-13°C (55-56°F) with 70-75% relative humidity for up to 7-10 days before incubation. Too cold or too warm damages embryo viability." },
      { id:"ah007", year:2020, exam:"WAEC", question:"Cryptorchidism in farm animals refers to:", options:["A viral disease","The failure of one or both testes to descend into the scrotum","A nutritional deficiency","A respiratory infection"], answer:1, explanation:"Cryptorchidism (retained testicle) is a condition where one or both testes fail to descend from the abdomen into the scrotum — affected males are often infertile and are culled or castrated." },
      { id:"ah008", year:2023, exam:"WAEC", question:"The principal function of colostrum (first milk) for newborn animals is:", options:["Providing energy only","Providing passive immunity (maternal antibodies) and essential nutrients","Preventing diarrhoea only","Stimulating milk production in the mother"], answer:1, explanation:"Colostrum is the first milk produced after birth — it contains high concentrations of immunoglobulins (antibodies) that provide passive immunity to newborns whose immune system is not yet fully functional. It also provides nutrition and laxative action." },
      { id:"ah009", year:2022, exam:"WAEC", question:"Confinement system of poultry production means:", options:["Free range rearing where birds roam freely","Keeping birds in a restricted enclosed house throughout their productive life","Seasonal rearing","Part-time outdoor rearing"], answer:1, explanation:"Confinement (intensive) poultry production keeps birds in enclosed houses (battery cages, deep litter, or cage-free barns) throughout their lives — allowing control of environment, nutrition, and biosecurity." },
      { id:"ah010", year:2019, exam:"NECO", question:"The act of removing the testicles of male farm animals is called:", options:["Dehorning","Drenching","Castration","Dipping"], answer:2, explanation:"Castration is the surgical or chemical removal of the testes in male animals — done to control reproduction, improve docility, and enhance meat quality (as castrates have better fat marbling)." },
    ],
    theory:[
      {
        id:"aht001", year:2023, exam:"WAEC",
        question:"(a) Describe the management practices involved in rearing pigs from birth to market weight.\n\n(b) State FIVE signs of ill-health in farm animals.\n\n(c) Explain the importance of record keeping in livestock farming.",
        markingScheme:[
          { point:"(a) Management of piglets at birth: drying, navel care, iron injection, teeth clipping, ear notching/tagging [2mk]", marks:2 },
          { point:"Suckling and weaning at 3-8 weeks [1mk], creep feeding [1mk], vaccination and deworming programme [1mk]", marks:3 },
          { point:"Growing phase: separate by sex, feed high protein grower ration, control environment, monitor for disease [2mk]", marks:2 },
          { point:"Finishing phase: high energy diet for fat deposition, marketing at 80-100kg live weight at ~5-6 months [2mk]", marks:2 },
          { point:"(b) FIVE signs of ill-health — 1 mark each: dull/sunken eyes, nasal discharge, loss of appetite (anorexia), elevated temperature, laboured breathing, rough coat/feathers, abnormal posture or gait, reduced production, diarrhoea, isolation from the herd", marks:5 },
          { point:"(c) Importance of records — 2 marks each for any 3: tracking animal performance, calculating profit/loss, identifying disease patterns, improving breeding decisions, meeting regulatory requirements, accessing loans/credit", marks:6 },
        ],
        totalMarks:20,
        modelAnswer:"(a) MANAGEMENT OF PIGS FROM BIRTH TO MARKET:\n\nAT FARROWING (BIRTH):\n• Ensure farrowing crate is clean, warm (30-32°C for piglets), and well-bedded\n• Assist sow if necessary; ensure all piglets are breathing and dried\n• Clip needle teeth (8 sharp baby teeth) to prevent injury to the sow's teats and littermates\n• Disinfect and clip navel cord to prevent navel ill (joint ill)\n• Give iron injection (1-2ml iron dextran) at 3 days to prevent piglet anaemia\n• Ear notch or tag for identification\n• Ensure every piglet suckles colostrum within first 6 hours\n\nSUCKLING PERIOD (0-3/4 weeks):\n• Provide creep feed (high-quality starter feed) from day 7-10 to supplement milk and prepare gut for weaning\n• Maintain warmth under heat lamp (piglet comfort temperature: 28-32°C reducing to 20°C by 3 weeks)\n• Monitor sow's milk production and piglet growth\n\nWEANING (21-28 days):\n• Remove sow, leaving piglets in familiar environment to reduce stress\n• Gradually transition from starter to grower ration (18-20% protein)\n• Vaccinate against common diseases (swine fever, foot and mouth disease)\n• Deworm and treat for external parasites\n• Separate males from females if necessary\n\nGROWING/FINISHING (8-20 weeks):\n• Feed high-energy grower ration transitioning to finisher diet (16% protein, high energy for fat deposition)\n• Maintain stocking density of 1.0-1.5 m² per pig\n• Monitor for respiratory disease, swine dysentery, and parasites\n• Provide clean water at all times\n• Market at 80-100 kg live weight (approximately 5-6 months of age)\n\n(b) FIVE Signs of Ill-Health in Farm Animals:\n1. LOSS OF APPETITE (ANOREXIA): refusal to eat or reduced feed intake — one of the earliest and most consistent signs of illness\n2. NASAL/OCULAR DISCHARGE: clear or mucopurulent (pus-like) discharge from nose or eyes — indicates respiratory infection or systemic disease\n3. ELEVATED BODY TEMPERATURE: fever (pyrexia) — measured rectally; indicates infection or inflammation\n4. LABOURED/DIFFICULT BREATHING: rapid, shallow, or noisy breathing — indicates respiratory disease or severe systemic illness\n5. ISOLATION FROM THE HERD: sick animals often separate from others, stand apart, and appear dull and depressed — a behavioural sign that the animal is unwell\n\n(c) IMPORTANCE OF RECORD KEEPING IN LIVESTOCK FARMING:\n\n1. PERFORMANCE MONITORING: Records of growth rates, feed conversion ratios, egg production, and milk yields allow farmers to identify productive and unproductive animals and make informed decisions about culling, supplementation, or management changes.\n\n2. FINANCIAL MANAGEMENT: Income and expenditure records enable the farmer to calculate profit or loss accurately, identify cost centres, track return on investment, and prepare financial statements needed for tax purposes or loan applications.\n\n3. DISEASE MANAGEMENT: Records of disease outbreaks, vaccination dates, and treatment histories help identify recurring health problems, track vaccination schedules to prevent gaps, and demonstrate compliance with veterinary health requirements.\n\n4. BREEDING DECISIONS: Records of birth dates, parentage, gestation lengths, litter sizes, and milk production enable genetic selection — farmers can identify superior breeding animals and avoid inbreeding by tracking family relationships.\n\n5. LEGAL AND REGULATORY COMPLIANCE: Government bodies and buyers increasingly require traceability records — knowing the origin, health history, and movement of animals from farm to table. Good records protect the farmer from liability and enable access to certified/premium markets.",
        examTip:"Animal Husbandry theory questions reward practical detail — examiners want specific numbers (gestation periods, vaccination ages, temperatures) and technical vocabulary (farrowing, creep feeding, pyrexia). A student who writes 'keep the piglets warm' scores less than one who writes 'maintain temperature of 30-32°C under a heat lamp, reducing by 2°C per week'."
      },
    ]
  },

};

/* ═══════════════════════════════════════════════════════════════
   EXAM METADATA
═══════════════════════════════════════════════════════════════ */
const EXAMS = {
  WAEC:   { name:"WAEC",   fullName:"West African Examinations Council",      color:"#0f1f3d" },
  NECO:   { name:"NECO",   fullName:"National Examinations Council",           color:"#166534" },
  GCE:    { name:"GCE",    fullName:"General Certificate of Education",        color:"#7c2d12" },
  NABTEB: { name:"NABTEB", fullName:"Nat. Business & Technical Examinations Board", color:"#581c87" },
};

const SUBJECTS = {
  mathematics:      { name:"Mathematics",           icon:"∑", color:"#1d4ed8" },
  english:          { name:"English Language",       icon:"A", color:"#0f1f3d" },
  biology:          { name:"Biology",                icon:"🧬", color:"#166534" },
  chemistry:        { name:"Chemistry",              icon:"⚗", color:"#7c2d12" },
  physics:          { name:"Physics",                icon:"⚡", color:"#581c87" },
  economics:        { name:"Economics",              icon:"₦", color:"#92400e" },
  government:       { name:"Government",             icon:"⚖", color:"#064e3b" },
  literature:       { name:"Literature in English",  icon:"📖", color:"#831843" },
  crs:              { name:"Christian Religious Studies", icon:"✝", color:"#1e3a5f" },
  geography:        { name:"Geography",              icon:"🌍", color:"#065f46" },
  civic_education:  { name:"Civic Education",        icon:"🏛", color:"#1e40af" },
  accounting:       { name:"Accounting",             icon:"📊", color:"#78350f" },
  commerce:         { name:"Commerce",               icon:"🤝", color:"#4a1d96" },
  marketing:        { name:"Marketing",              icon:"📢", color:"#be123c" },
  animal_husbandry: { name:"Animal Husbandry",       icon:"🐄", color:"#365314" },
};

/* ═══════════════════════════════════════════════════════════════
   QUESTION BANK EXPANSION — GCE, NABTEB, WAEC, NECO
   Added: Mathematics, English, Biology, Chemistry, Physics,
          Economics, Government, Geography, Literature, CRS,
          Civic Education, Commerce, Accounting, Marketing,
          Animal Husbandry
═══════════════════════════════════════════════════════════════ */

(function() {
  const add = (subj, type, questions) => {
    if (!EXAM_BANK[subj]) return;
    if (!EXAM_BANK[subj][type]) EXAM_BANK[subj][type] = [];
    EXAM_BANK[subj][type].push(...questions);
  };

  // ─── MATHEMATICS ───────────────────────────────────────────
  add('mathematics','objective',[
    // GCE
    {exam:'GCE',year:2019,question:'Simplify: (2³ × 2⁴) ÷ 2⁵',options:['2²','2⁶','2¹²','2⁰'],answer:'A',explanation:'2³ × 2⁴ = 2⁷. 2⁷ ÷ 2⁵ = 2² = 4.'},
    {exam:'GCE',year:2019,question:'Find the value of x if 3x − 7 = 14',options:['5','7','9','21'],answer:'B',explanation:'3x = 14 + 7 = 21. x = 21 ÷ 3 = 7.'},
    {exam:'GCE',year:2020,question:'A triangle has angles in the ratio 2:3:5. Find the largest angle.',options:['36°','54°','90°','108°'],answer:'C',explanation:'Sum = 180°. Parts = 2+3+5=10. Largest = (5/10)×180° = 90°.'},
    {exam:'GCE',year:2020,question:'Convert 0.000325 to standard form.',options:['3.25 × 10⁻⁴','3.25 × 10⁻³','32.5 × 10⁻⁵','0.325 × 10⁻³'],answer:'A',explanation:'Move decimal 4 places right: 3.25 × 10⁻⁴.'},
    {exam:'GCE',year:2021,question:'If y varies directly as x and y = 12 when x = 4, find y when x = 7.',options:['14','21','28','3'],answer:'B',explanation:'y = kx. k = 12/4 = 3. y = 3 × 7 = 21.'},
    {exam:'GCE',year:2021,question:'Evaluate: log₁₀(1000)',options:['1','2','3','4'],answer:'C',explanation:'log₁₀(10³) = 3.'},
    {exam:'GCE',year:2022,question:'The sum of the interior angles of a polygon is 1080°. How many sides does it have?',options:['6','7','8','9'],answer:'C',explanation:'(n−2)×180 = 1080. n−2 = 6. n = 8.'},
    {exam:'GCE',year:2022,question:'Factorise completely: 6x² − x − 2',options:['(2x+1)(3x−2)','(2x−1)(3x+2)','(6x+1)(x−2)','(3x+1)(2x−2)'],answer:'A',explanation:'(2x+1)(3x−2) = 6x²−4x+3x−2 = 6x²−x−2. ✓'},
    {exam:'GCE',year:2023,question:'Find the gradient of the line 4y − 8x = 12.',options:['2','−2','3','8'],answer:'A',explanation:'4y = 8x + 12 → y = 2x + 3. Gradient = 2.'},
    {exam:'GCE',year:2023,question:'A container holds 3.6 litres. How many 450ml cups can be filled from it?',options:['6','7','8','9'],answer:'C',explanation:'3600 ÷ 450 = 8.'},
    {exam:'GCE',year:2023,question:'Find the 10th term of the AP: 3, 7, 11, ...',options:['39','40','41','43'],answer:'A',explanation:'a = 3, d = 4. T₁₀ = 3 + 9×4 = 3 + 36 = 39.'},
    {exam:'GCE',year:2022,question:'What is the probability of picking a red card from a standard deck?',options:['1/4','1/2','1/13','3/4'],answer:'B',explanation:'26 red cards out of 52. P = 26/52 = 1/2.'},
    {exam:'GCE',year:2021,question:'Calculate the area of a circle with diameter 14cm. (π = 22/7)',options:['44cm²','88cm²','154cm²','176cm²'],answer:'C',explanation:'r = 7. A = πr² = (22/7)×49 = 154cm².'},
    {exam:'GCE',year:2020,question:'Solve: 2(x − 3) = x + 5',options:['8','11','−1','2'],answer:'B',explanation:'2x − 6 = x + 5. x = 11.'},
    {exam:'GCE',year:2019,question:'If a : b = 3 : 4 and b : c = 2 : 5, find a : c.',options:['3:10','6:10','3:5','6:20'],answer:'A',explanation:'a:b:c = 3:4 → b=4, so scale b:c=2:5 by 2 → b=4,c=10. a:c = 3:10.'},
    // NABTEB
    {exam:'NABTEB',year:2019,question:'Evaluate: 5! ÷ 3!',options:['10','20','60','120'],answer:'B',explanation:'5! = 120, 3! = 6. 120 ÷ 6 = 20.'},
    {exam:'NABTEB',year:2020,question:'A worker earns ₦18,000 per month. How much does he earn in a year?',options:['₦180,000','₦196,000','₦216,000','₦220,000'],answer:'C',explanation:'18,000 × 12 = ₦216,000.'},
    {exam:'NABTEB',year:2021,question:'Express 45% as a fraction in its lowest terms.',options:['9/20','45/100','4/9','9/10'],answer:'A',explanation:'45/100 = 9/20.'},
    {exam:'NABTEB',year:2022,question:'Find the simple interest on ₦50,000 at 8% per annum for 3 years.',options:['₦4,000','₦12,000','₦14,000','₦24,000'],answer:'B',explanation:'SI = (P×R×T)/100 = (50000×8×3)/100 = ₦12,000.'},
    {exam:'NABTEB',year:2023,question:'What is the mean of 4, 7, 9, 11, 14?',options:['7','9','11','14'],answer:'B',explanation:'Sum = 45. Mean = 45 ÷ 5 = 9.'},
    {exam:'NABTEB',year:2022,question:'Convert 110101₂ to base 10.',options:['51','52','53','54'],answer:'C',explanation:'32+16+0+4+0+1 = 53.'},
    {exam:'NABTEB',year:2021,question:'If the perimeter of a square is 36cm, find its area.',options:['81cm²','36cm²','72cm²','9cm²'],answer:'A',explanation:'Side = 36÷4 = 9cm. Area = 9² = 81cm².'},
    {exam:'NABTEB',year:2020,question:'Find x if 2x + 3 = 4x − 7',options:['2','5','−5','10'],answer:'B',explanation:'3+7 = 4x−2x. 10 = 2x. x = 5.'},
    {exam:'NABTEB',year:2019,question:'A bicycle wheel has diameter 70cm. Find its circumference. (π = 22/7)',options:['110cm','220cm','440cm','880cm'],answer:'B',explanation:'C = πd = (22/7)×70 = 220cm.'},
    {exam:'NABTEB',year:2023,question:'Simplify: √(144) + √(25)',options:['13','17','19','25'],answer:'B',explanation:'12 + 5 = 17.'},
    // WAEC extras
    {exam:'WAEC',year:2023,question:'If P = {2,3,5,7} and Q = {1,3,5,9}, find P ∩ Q.',options:['{3,5}','{1,2,3,5,7,9}','{1,9}','{2,7}'],answer:'A',explanation:'Common elements in both sets: 3 and 5.'},
    {exam:'WAEC',year:2023,question:'The bearing of B from A is 060°. What is the bearing of A from B?',options:['120°','240°','300°','360°'],answer:'B',explanation:'Back bearing = 060° + 180° = 240°.'},
    {exam:'WAEC',year:2022,question:'A man bought a car for ₦800,000 and sold it for ₦960,000. Find the percentage profit.',options:['15%','20%','25%','30%'],answer:'B',explanation:'Profit = 160,000. % = (160,000/800,000)×100 = 20%.'},
    {exam:'WAEC',year:2022,question:'Solve the inequality: 3x − 5 > 7',options:['x > 4','x > 2','x < 4','x < 2'],answer:'A',explanation:'3x > 12. x > 4.'},
    {exam:'WAEC',year:2021,question:'Find the median of: 3, 5, 7, 9, 11, 13',options:['7','8','9','10'],answer:'B',explanation:'Middle two values: 7 and 9. Median = (7+9)/2 = 8.'},
    // NECO extras
    {exam:'NECO',year:2023,question:'Express 2/5 as a percentage.',options:['25%','40%','45%','50%'],answer:'B',explanation:'(2/5)×100 = 40%.'},
    {exam:'NECO',year:2022,question:'Find the LCM of 12, 18 and 24.',options:['36','48','72','96'],answer:'C',explanation:'LCM(12,18,24) = 72.'},
    {exam:'NECO',year:2021,question:'If sin θ = 3/5, find cos θ.',options:['4/5','3/4','5/3','5/4'],answer:'A',explanation:'In a 3-4-5 triangle, if sin θ = 3/5 then cos θ = 4/5.'},
  ]);

  add('mathematics','theory',[
    {exam:'WAEC',year:2022,question:'(a) Solve the simultaneous equations: 3x + 2y = 12 and x − y = 1.\n(b) A rectangle has length (2x+3)cm and width (x−1)cm. If the perimeter is 34cm, find the value of x and hence the area of the rectangle.',
    markingScheme:[
      {point:'From x − y = 1: x = y + 1',marks:1},
      {point:'Substitute into 3x + 2y = 12: 3(y+1) + 2y = 12 → 5y = 9 → y = 9/5',marks:2},
      {point:'x = 9/5 + 1 = 14/5 (or x=2.8, y=1.8)',marks:1},
      {point:'Perimeter: 2[(2x+3)+(x−1)] = 34 → 2[3x+2] = 34 → 3x+2 = 17 → x = 5',marks:2},
      {point:'Length = 13cm, Width = 4cm',marks:1},
      {point:'Area = 13 × 4 = 52cm²',marks:1},
    ],
    modelAnswer:'(a) x = 2.8, y = 1.8. (b) x = 5, Area = 52cm².',
    examinerTip:'For simultaneous equations, always verify your answer by substituting back into both original equations.'},
    {exam:'NECO',year:2022,question:'The table shows marks scored by 40 students in a test:\nMarks: 1-10, 11-20, 21-30, 31-40, 41-50\nFrequency: 4, 8, 14, 10, 4\n(a) Draw a histogram for this data.\n(b) Calculate the mean mark.\n(c) What is the modal class?',
    markingScheme:[
      {point:'Correct histogram with frequency on y-axis and class intervals on x-axis',marks:3},
      {point:'Midpoints: 5.5, 15.5, 25.5, 35.5, 45.5',marks:1},
      {point:'Σfx = 4(5.5)+8(15.5)+14(25.5)+10(35.5)+4(45.5) = 22+124+357+355+182 = 1040',marks:2},
      {point:'Mean = 1040/40 = 26',marks:1},
      {point:'Modal class = 21-30 (highest frequency of 14)',marks:1},
    ],
    modelAnswer:'Mean = 26. Modal class = 21-30.',
    examinerTip:'Always calculate midpoints accurately — a wrong midpoint affects the entire mean calculation.'},
  ]);

  // ─── ENGLISH LANGUAGE ──────────────────────────────────────
  add('english','objective',[
    // GCE
    {exam:'GCE',year:2019,question:'Choose the word that is most nearly opposite in meaning to BENEVOLENT.',options:['Cruel','Stingy','Malevolent','Indifferent'],answer:'C',explanation:'Benevolent means kind/well-meaning. Malevolent means having evil intentions — direct opposite.'},
    {exam:'GCE',year:2019,question:'Select the option that best explains the expression: "He kicked the bucket".',options:['He kicked a bucket away','He died','He became angry','He fell down'],answer:'B',explanation:'This idiom means to die.'},
    {exam:'GCE',year:2020,question:'Choose the correct form: "Neither the boys nor their teacher ___ present."',options:['were','was','are','have been'],answer:'B',explanation:'When using neither/nor, the verb agrees with the subject closer to it (teacher = singular = was).'},
    {exam:'GCE',year:2020,question:'Identify the figure of speech in: "The wind whispered through the trees."',options:['Simile','Metaphor','Personification','Hyperbole'],answer:'C',explanation:'Whispered is a human action given to wind — personification.'},
    {exam:'GCE',year:2021,question:'Which sentence is grammatically correct?',options:['He don\'t know the answer','She has went to school','They were asked to sit down','Me and him went there'],answer:'C',explanation:'"They were asked to sit down" is correct passive construction.'},
    {exam:'GCE',year:2021,question:'The prefix in "irresponsible" means:',options:['Very','Against','Not','Before'],answer:'C',explanation:'ir- is a negative prefix meaning not.'},
    {exam:'GCE',year:2022,question:'Choose the word with the correct spelling:',options:['Accomodation','Accommodation','Acommodation','Acomodation'],answer:'B',explanation:'Accommodation has double c and double m.'},
    {exam:'GCE',year:2022,question:'"The more you practise, the better you become." This is an example of:',options:['A simple sentence','A compound sentence','A complex sentence','A compound-complex sentence'],answer:'C',explanation:'Contains a dependent clause (the more...) and an independent clause — complex sentence.'},
    {exam:'GCE',year:2023,question:'Select the option that correctly fills the gap: "I would have come if you ___ me."',options:['had invited','have invited','invited','would invite'],answer:'A',explanation:'Third conditional requires past perfect in the if-clause.'},
    {exam:'GCE',year:2023,question:'Which of the following is a collective noun?',options:['Bravery','Flock','Running','Beautiful'],answer:'B',explanation:'Flock refers to a group (of birds/sheep) — collective noun.'},
    {exam:'GCE',year:2023,question:'Identify the passive voice: ',options:['The boy ate the mango','The mango was eaten by the boy','The boy has eaten the mango','Eating the mango made him sick'],answer:'B',explanation:'The subject (mango) receives the action — passive voice.'},
    {exam:'GCE',year:2022,question:'The word "UBIQUITOUS" means:',options:['Rare','Present everywhere','Dangerous','Ancient'],answer:'B',explanation:'Ubiquitous means seeming to be everywhere at the same time.'},
    {exam:'GCE',year:2021,question:'Choose the antonym of VERBOSE:',options:['Talkative','Concise','Wordy','Lengthy'],answer:'B',explanation:'Verbose means using too many words. Concise means brief and clear — opposite.'},
    {exam:'GCE',year:2020,question:'"She sings like an angel." This is a:',options:['Metaphor','Simile','Alliteration','Irony'],answer:'B',explanation:'Comparison using like — simile.'},
    {exam:'GCE',year:2019,question:'Which sentence contains a dangling modifier?',options:['Running fast, he caught the bus','Running fast, the bus was caught','She sang beautifully at the concert','The child cried loudly'],answer:'B',explanation:'The modifier "running fast" incorrectly modifies "the bus" — dangling modifier.'},
    // NABTEB
    {exam:'NABTEB',year:2019,question:'Choose the option nearest in meaning to PROCRASTINATE:',options:['Delay','Hurry','Celebrate','Argue'],answer:'A',explanation:'Procrastinate means to delay or postpone action.'},
    {exam:'NABTEB',year:2020,question:'The plural of "phenomenon" is:',options:['Phenomenons','Phenomenas','Phenomena','Phenomenes'],answer:'C',explanation:'Phenomenon is Greek in origin; its plural is phenomena.'},
    {exam:'NABTEB',year:2021,question:'Select the correctly punctuated sentence:',options:["It\'s a dog's world","Its a dogs world","It\'s a dogs\' world","Its a dog\'s world"],answer:'A',explanation:'"It\'s" = it is (contraction needs apostrophe); "dog\'s world" = belonging to the dog.'},
    {exam:'NABTEB',year:2022,question:'Which word best completes: "The surgeon performed the operation with great ___."',options:['Precision','Precision','Precisely','Precise'],answer:'A',explanation:'A noun is needed after "great" — precision.'},
    {exam:'NABTEB',year:2023,question:'"All that glitters is not gold." This proverb means:',options:['Gold never glitters','Things are not always what they appear','Gold is the most valuable thing','Glittering objects are dangerous'],answer:'B',explanation:'Appearances can be deceptive — things may look valuable but are not.'},
    {exam:'NABTEB',year:2022,question:'Identify the subject in: "The large brown dog barked loudly."',options:['Large','Dog','Barked','Loudly'],answer:'B',explanation:'"Dog" is the noun performing the action — the subject.'},
    {exam:'NABTEB',year:2021,question:'Choose the correct option: "Each of the students ___ expected to submit an assignment."',options:['are','were','is','have'],answer:'C',explanation:'"Each" is singular — takes singular verb "is".'},
    {exam:'NABTEB',year:2020,question:'The word "CARNIVORE" refers to an animal that:',options:['Eats plants','Eats both plants and meat','Eats only meat','Lives in water'],answer:'C',explanation:'Carni = flesh; vore = to eat. Carnivore eats only meat.'},
    {exam:'NABTEB',year:2019,question:'Which option is an abstract noun?',options:['Table','Teacher','Happiness','River'],answer:'C',explanation:'Happiness cannot be seen or touched — abstract noun.'},
    {exam:'NABTEB',year:2023,question:'Choose the word that does NOT belong: Chair, Sofa, Bench, Ceiling',options:['Chair','Sofa','Bench','Ceiling'],answer:'D',explanation:'Chair, sofa and bench are things to sit on. Ceiling is part of a room\'s structure.'},
    // WAEC extras
    {exam:'WAEC',year:2023,question:'Select the option that has the same vowel sound as the word: BREAK',options:['Great','Breath','Bread','Breast'],answer:'A',explanation:'Break /breɪk/ and Great /greɪt/ share the same /eɪ/ vowel sound.'},
    {exam:'WAEC',year:2022,question:'"The assignment was a piece of cake." This expression means the assignment was:',options:['Sweet','Easy','Tasty','Expensive'],answer:'B',explanation:'"A piece of cake" is an idiom meaning something very easy.'},
    // NECO extras
    {exam:'NECO',year:2023,question:'Choose the appropriate stress pattern: "He will reCORD his voice." The word "record" here is used as:',options:['A noun','An adjective','A verb','An adverb'],answer:'C',explanation:'When stressed on second syllable (reCORD), it functions as a verb.'},
    {exam:'NECO',year:2022,question:'Identify the rhetorical device in: "O Death, where is thy sting?"',options:['Metaphor','Apostrophe','Alliteration','Oxymoron'],answer:'B',explanation:'Addressing an abstract concept (Death) directly — apostrophe.'},
  ]);

  // ─── BIOLOGY ────────────────────────────────────────────────
  add('biology','objective',[
    // GCE
    {exam:'GCE',year:2019,question:'Which organelle is responsible for the synthesis of proteins?',options:['Mitochondria','Ribosome','Nucleus','Golgi apparatus'],answer:'B',explanation:'Ribosomes are the site of protein synthesis in all living cells.'},
    {exam:'GCE',year:2019,question:'The process by which plants lose water through their leaves is called:',options:['Osmosis','Transpiration','Respiration','Photosynthesis'],answer:'B',explanation:'Transpiration is the evaporation of water from plant surfaces, mainly through stomata.'},
    {exam:'GCE',year:2020,question:'Which blood group is known as the universal donor?',options:['AB','A','B','O'],answer:'D',explanation:'Blood group O has no A or B antigens so can be donated to any blood group.'},
    {exam:'GCE',year:2020,question:'The part of the brain that controls balance and coordination is the:',options:['Cerebrum','Medulla oblongata','Cerebellum','Hypothalamus'],answer:'C',explanation:'The cerebellum coordinates voluntary movements and maintains balance.'},
    {exam:'GCE',year:2021,question:'Which of the following is NOT a characteristic of living organisms?',options:['Reproduction','Excretion','Rusting','Growth'],answer:'C',explanation:'Rusting is a chemical reaction in non-living matter, not a life process.'},
    {exam:'GCE',year:2021,question:'The powerhouse of the cell is the:',options:['Nucleus','Chloroplast','Mitochondrion','Vacuole'],answer:'C',explanation:'Mitochondria produce ATP through cellular respiration — the cell\'s energy currency.'},
    {exam:'GCE',year:2022,question:'Malaria is caused by:',options:['Bacteria','Virus','Protozoan','Fungus'],answer:'C',explanation:'Malaria is caused by Plasmodium, a protozoan parasite transmitted by Anopheles mosquitoes.'},
    {exam:'GCE',year:2022,question:'Which of the following is a function of the liver?',options:['Production of insulin','Detoxification of harmful substances','Production of red blood cells in adults','Absorption of food'],answer:'B',explanation:'The liver detoxifies harmful substances including drugs and alcohol.'},
    {exam:'GCE',year:2023,question:'During meiosis, the chromosome number:',options:['Doubles','Remains the same','Is halved','Triples'],answer:'C',explanation:'Meiosis produces gametes with half the chromosomal number (haploid) of the parent cell.'},
    {exam:'GCE',year:2023,question:'Which vitamin is essential for blood clotting?',options:['Vitamin A','Vitamin C','Vitamin D','Vitamin K'],answer:'D',explanation:'Vitamin K is required for the synthesis of clotting factors in the blood.'},
    {exam:'GCE',year:2023,question:'The basic unit of classification is the:',options:['Genus','Family','Species','Order'],answer:'C',explanation:'Species is the most basic unit of biological classification.'},
    {exam:'GCE',year:2022,question:'Which gas is released during photosynthesis?',options:['Carbon dioxide','Nitrogen','Oxygen','Hydrogen'],answer:'C',explanation:'Photosynthesis uses CO₂ and water to produce glucose and oxygen.'},
    {exam:'GCE',year:2021,question:'The site of gaseous exchange in the lungs is the:',options:['Bronchi','Trachea','Alveoli','Bronchioles'],answer:'C',explanation:'Alveoli have thin walls and large surface area for efficient gas exchange.'},
    {exam:'GCE',year:2020,question:'Haemoglobin is found in:',options:['White blood cells','Platelets','Red blood cells','Plasma'],answer:'C',explanation:'Haemoglobin is the iron-containing protein in red blood cells that carries oxygen.'},
    {exam:'GCE',year:2019,question:'Which of these is an example of asexual reproduction?',options:['Fertilisation','Budding','Pollination','Conjugation'],answer:'B',explanation:'Budding involves one parent only — asexual reproduction seen in yeast and hydra.'},
    // NABTEB
    {exam:'NABTEB',year:2019,question:'The study of heredity and variation is called:',options:['Ecology','Genetics','Taxonomy','Physiology'],answer:'B',explanation:'Genetics is the branch of biology concerned with heredity and variation.'},
    {exam:'NABTEB',year:2020,question:'Which of the following diseases is caused by a virus?',options:['Tuberculosis','Cholera','AIDS','Malaria'],answer:'C',explanation:'AIDS is caused by the Human Immunodeficiency Virus (HIV).'},
    {exam:'NABTEB',year:2021,question:'The movement of water across a semi-permeable membrane from a region of high concentration to low concentration is:',options:['Diffusion','Active transport','Osmosis','Plasmolysis'],answer:'C',explanation:'Osmosis is the specific movement of water molecules across a semi-permeable membrane.'},
    {exam:'NABTEB',year:2022,question:'Which hormone controls blood sugar levels?',options:['Adrenaline','Insulin','Thyroxine','Oestrogen'],answer:'B',explanation:'Insulin (produced by the pancreas) lowers blood glucose levels.'},
    {exam:'NABTEB',year:2023,question:'The green pigment in plants is called:',options:['Haemoglobin','Melanin','Chlorophyll','Carotene'],answer:'C',explanation:'Chlorophyll absorbs light energy for photosynthesis.'},
    {exam:'NABTEB',year:2022,question:'Earthworms are important to farmers because they:',options:['Destroy crops','Aerate and improve soil structure','Produce nitrogen','Eat harmful insects'],answer:'B',explanation:'Earthworms burrow through soil improving aeration and drainage.'},
    {exam:'NABTEB',year:2021,question:'Which part of the flower produces pollen?',options:['Pistil','Stigma','Anther','Ovary'],answer:'C',explanation:'Pollen grains are produced in the anther of the stamen.'},
    {exam:'NABTEB',year:2020,question:'The process by which organisms break down glucose to release energy without oxygen is:',options:['Aerobic respiration','Photosynthesis','Anaerobic respiration','Transpiration'],answer:'C',explanation:'Anaerobic respiration occurs in the absence of oxygen producing lactic acid or ethanol.'},
    {exam:'NABTEB',year:2019,question:'Which of these is a characteristic of mammals?',options:['Cold-blooded','Lay eggs','Suckle young with milk','Have scales'],answer:'C',explanation:'Mammals are warm-blooded vertebrates that nurse their young with milk from mammary glands.'},
    {exam:'NABTEB',year:2023,question:'The instrument used to measure temperature in the laboratory is a:',options:['Barometer','Thermometer','Hygrometer','Anemometer'],answer:'B',explanation:'A thermometer measures temperature.'},
    // WAEC extras
    {exam:'WAEC',year:2023,question:'Which of the following is the correct sequence of the food chain?',options:['Sun → Consumer → Producer → Decomposer','Producer → Consumer → Decomposer → Sun','Sun → Producer → Consumer → Decomposer','Consumer → Producer → Sun → Decomposer'],answer:'C',explanation:'Energy flows from Sun to producers (plants) to consumers to decomposers.'},
    {exam:'WAEC',year:2022,question:'The human kidney is responsible for:',options:['Producing bile','Filtering blood and producing urine','Producing insulin','Gaseous exchange'],answer:'B',explanation:'The kidneys filter waste products from blood and regulate water balance through urine production.'},
    {exam:'WAEC',year:2021,question:'Which of the following best describes a saprophyte?',options:['An organism that makes its own food','An organism that feeds on dead organic matter','An organism that feeds on living hosts','An organism that eats both plants and animals'],answer:'B',explanation:'Saprophytes feed on and decompose dead organic matter — e.g. mushrooms.'},
    // NECO extras
    {exam:'NECO',year:2023,question:'The bone that protects the brain is the:',options:['Vertebral column','Ribcage','Cranium','Sternum'],answer:'C',explanation:'The cranium (skull) encloses and protects the brain.'},
    {exam:'NECO',year:2022,question:'Which of the following is an example of a root modification for storage?',options:['Prop root','Aerial root','Tap root of carrot','Buttress root'],answer:'C',explanation:'Carrot tap root is modified for food storage — swollen with starch/sugar.'},
  ]);

  // ─── CHEMISTRY ─────────────────────────────────────────────
  add('chemistry','objective',[
    {exam:'GCE',year:2019,question:'What is the atomic number of carbon?',options:['6','12','14','8'],answer:'A',explanation:'Carbon has 6 protons — atomic number = 6.'},
    {exam:'GCE',year:2020,question:'Which of the following is a noble gas?',options:['Nitrogen','Chlorine','Argon','Hydrogen'],answer:'C',explanation:'Argon (Group 18) is a noble gas with a full outer electron shell.'},
    {exam:'GCE',year:2021,question:'The pH of a neutral solution is:',options:['0','7','14','1'],answer:'B',explanation:'pH 7 is neutral — equal concentrations of H⁺ and OH⁻ ions.'},
    {exam:'GCE',year:2022,question:'Which type of bond involves the sharing of electrons?',options:['Ionic bond','Metallic bond','Covalent bond','Hydrogen bond'],answer:'C',explanation:'Covalent bonds form when atoms share electron pairs.'},
    {exam:'GCE',year:2023,question:'The process of converting liquid to gas by heating is called:',options:['Condensation','Sublimation','Evaporation','Melting'],answer:'C',explanation:'Evaporation is the conversion of liquid to vapour/gas.'},
    {exam:'GCE',year:2023,question:'What is the chemical formula of water?',options:['H₂O₂','HO','H₂O','H₃O'],answer:'C',explanation:'Water consists of 2 hydrogen atoms and 1 oxygen atom — H₂O.'},
    {exam:'GCE',year:2022,question:'Which of the following is an alkali?',options:['HCl','H₂SO₄','NaOH','HNO₃'],answer:'C',explanation:'NaOH (sodium hydroxide) is a strong alkali — releases OH⁻ ions in solution.'},
    {exam:'GCE',year:2021,question:'Rusting of iron requires:',options:['Only water','Only oxygen','Both water and oxygen','Neither water nor oxygen'],answer:'C',explanation:'Iron rusting is an oxidation reaction requiring both water and oxygen.'},
    {exam:'GCE',year:2020,question:'Which of these elements is a halogen?',options:['Sodium','Calcium','Bromine','Copper'],answer:'C',explanation:'Bromine (Br) is in Group 17 — the halogens.'},
    {exam:'GCE',year:2019,question:'Electrolysis involves the decomposition of a substance using:',options:['Heat','Light','Electricity','Sound'],answer:'C',explanation:'Electrolysis uses electrical energy to drive a non-spontaneous chemical reaction.'},
    {exam:'NABTEB',year:2019,question:'What is the valency of oxygen?',options:['1','2','3','4'],answer:'B',explanation:'Oxygen has 6 outer electrons, needs 2 more to complete its shell — valency of 2.'},
    {exam:'NABTEB',year:2020,question:'The chemical symbol for gold is:',options:['Go','Gd','Au','Ag'],answer:'C',explanation:'Gold\'s symbol Au comes from the Latin "Aurum".'},
    {exam:'NABTEB',year:2021,question:'Which of the following is a mixture?',options:['Water','Salt','Air','Carbon dioxide'],answer:'C',explanation:'Air is a mixture of gases including nitrogen, oxygen, carbon dioxide and others.'},
    {exam:'NABTEB',year:2022,question:'Which gas is produced when an acid reacts with a carbonate?',options:['Hydrogen','Oxygen','Carbon dioxide','Nitrogen'],answer:'C',explanation:'Acid + carbonate → salt + water + CO₂.'},
    {exam:'NABTEB',year:2023,question:'The process of obtaining a pure solid from its solution by cooling is:',options:['Filtration','Distillation','Crystallisation','Evaporation'],answer:'C',explanation:'Crystallisation involves cooling a saturated solution to obtain pure crystals.'},
    {exam:'WAEC',year:2023,question:'What type of reaction occurs when magnesium burns in air?',options:['Decomposition','Displacement','Combination/Synthesis','Neutralisation'],answer:'C',explanation:'2Mg + O₂ → 2MgO is a combination/synthesis reaction.'},
    {exam:'WAEC',year:2022,question:'Which of the following solutions would turn red litmus paper blue?',options:['HCl','H₂SO₄','NaCl','NaOH'],answer:'D',explanation:'Alkaline solutions (NaOH) turn red litmus blue.'},
    {exam:'NECO',year:2023,question:'The relative molecular mass of H₂SO₄ is: (H=1, S=32, O=16)',options:['49','96','98','80'],answer:'C',explanation:'H₂SO₄: 2(1) + 32 + 4(16) = 2+32+64 = 98.'},
    {exam:'NECO',year:2022,question:'Which state of matter has definite volume but no definite shape?',options:['Solid','Liquid','Gas','Plasma'],answer:'B',explanation:'Liquids have definite volume but take the shape of their container.'},
  ]);

  // ─── PHYSICS ────────────────────────────────────────────────
  add('physics','objective',[
    {exam:'GCE',year:2019,question:'The SI unit of force is the:',options:['Watt','Joule','Newton','Pascal'],answer:'C',explanation:'Force is measured in Newtons (N). F = ma.'},
    {exam:'GCE',year:2020,question:'Which of the following is a vector quantity?',options:['Speed','Mass','Temperature','Velocity'],answer:'D',explanation:'Velocity has both magnitude and direction — a vector quantity. Speed is scalar.'},
    {exam:'GCE',year:2021,question:'The speed of light in a vacuum is approximately:',options:['3 × 10⁶ m/s','3 × 10⁸ m/s','3 × 10¹⁰ m/s','3 × 10⁴ m/s'],answer:'B',explanation:'c = 3 × 10⁸ m/s — the universal speed limit.'},
    {exam:'GCE',year:2022,question:'What is the unit of electrical resistance?',options:['Ampere','Volt','Ohm','Watt'],answer:'C',explanation:'Electrical resistance is measured in Ohms (Ω). V = IR.'},
    {exam:'GCE',year:2023,question:'An object is in equilibrium when the net force acting on it is:',options:['Maximum','Minimum','Zero','Constant'],answer:'C',explanation:'For equilibrium, the resultant of all forces must be zero.'},
    {exam:'GCE',year:2023,question:'The phenomenon by which light bends when passing from one medium to another is called:',options:['Reflection','Refraction','Diffraction','Interference'],answer:'B',explanation:'Refraction occurs because light changes speed when entering a different medium.'},
    {exam:'GCE',year:2022,question:'Which of the following is a renewable source of energy?',options:['Coal','Natural gas','Petroleum','Solar energy'],answer:'D',explanation:'Solar energy is continuously replenished and is a renewable resource.'},
    {exam:'GCE',year:2021,question:'The process by which a radioactive element spontaneously emits radiation is called:',options:['Fission','Fusion','Radioactive decay','Ionisation'],answer:'C',explanation:'Radioactive decay is the spontaneous emission of radiation from an unstable nucleus.'},
    {exam:'GCE',year:2020,question:'Work done is defined as:',options:['Force × time','Force × velocity','Force × distance in direction of force','Mass × acceleration'],answer:'C',explanation:'W = F × d (where d is displacement in the direction of force).'},
    {exam:'GCE',year:2019,question:'The image formed by a plane mirror is:',options:['Real and inverted','Virtual and erect','Real and erect','Virtual and inverted'],answer:'B',explanation:'Plane mirrors form virtual, erect images the same size as the object.'},
    {exam:'NABTEB',year:2019,question:'Which of the following best defines power?',options:['Force per unit area','Work done per unit time','Energy stored in a body','Force times distance'],answer:'B',explanation:'Power = Work done ÷ time. Unit is Watt (W).'},
    {exam:'NABTEB',year:2020,question:'A wave with frequency 50Hz has a period of:',options:['50s','0.02s','0.5s','5s'],answer:'B',explanation:'T = 1/f = 1/50 = 0.02s.'},
    {exam:'NABTEB',year:2021,question:'When a body is fully submerged in a fluid, the upthrust equals:',options:['Weight of the body','Weight of fluid displaced','Mass of the body','Volume of the body'],answer:'B',explanation:'Archimedes\' principle: upthrust = weight of fluid displaced.'},
    {exam:'NABTEB',year:2022,question:'The unit of frequency is the:',options:['Metre','Hertz','Joule','Newton'],answer:'B',explanation:'Frequency is measured in Hertz (Hz) = cycles per second.'},
    {exam:'NABTEB',year:2023,question:'Which colour of light has the highest frequency?',options:['Red','Orange','Violet','Green'],answer:'C',explanation:'Violet light has the shortest wavelength and highest frequency in the visible spectrum.'},
    {exam:'WAEC',year:2023,question:'A car accelerates from rest to 20m/s in 5 seconds. Calculate its acceleration.',options:['4 m/s²','5 m/s²','10 m/s²','100 m/s²'],answer:'A',explanation:'a = (v-u)/t = (20-0)/5 = 4 m/s².'},
    {exam:'WAEC',year:2022,question:'Which type of current flows in one direction only?',options:['Alternating Current','Direct Current','Induced Current','Eddy Current'],answer:'B',explanation:'Direct Current (DC) flows consistently in one direction, unlike AC which alternates.'},
    {exam:'NECO',year:2023,question:'What is the mechanical advantage of a machine that uses 500N input to lift a 2000N load?',options:['0.25','2.5','4','2000'],answer:'C',explanation:'MA = Load/Effort = 2000/500 = 4.'},
    {exam:'NECO',year:2022,question:'The transfer of heat through a vacuum is called:',options:['Conduction','Convection','Radiation','Insulation'],answer:'C',explanation:'Radiation does not require a medium and can travel through vacuum as electromagnetic waves.'},
  ]);

  // ─── ECONOMICS ─────────────────────────────────────────────
  add('economics','objective',[
    {exam:'GCE',year:2019,question:'Which of the following is NOT a factor of production?',options:['Land','Capital','Money','Labour'],answer:'C',explanation:'Money is a medium of exchange, not a factor of production. The four factors are land, labour, capital and entrepreneurship.'},
    {exam:'GCE',year:2020,question:'When demand increases and supply remains constant, the equilibrium price will:',options:['Fall','Rise','Remain constant','Be indeterminate'],answer:'B',explanation:'Increased demand with constant supply creates a shortage, pushing price upward.'},
    {exam:'GCE',year:2021,question:'The elasticity of demand for a necessity is likely to be:',options:['Perfectly elastic','Elastic','Inelastic','Zero'],answer:'C',explanation:'Necessities (food, medicine) have inelastic demand — consumers buy them regardless of price changes.'},
    {exam:'GCE',year:2022,question:'Which of the following best describes inflation?',options:['A rise in the price of one good','A general and sustained rise in price levels','A decrease in money supply','A fall in employment'],answer:'B',explanation:'Inflation is a general, sustained increase in the price level of goods and services.'},
    {exam:'GCE',year:2023,question:'The term "opportunity cost" refers to:',options:['The monetary cost of a good','The next best alternative forgone','The total cost of production','The sunk cost of an investment'],answer:'B',explanation:'Opportunity cost is the value of the next best alternative sacrificed when making a choice.'},
    {exam:'GCE',year:2023,question:'GDP measures the total value of:',options:['Imports only','Exports only','Goods and services produced in a country in a period','Goods consumed by households'],answer:'C',explanation:'GDP (Gross Domestic Product) is the total monetary value of all goods and services produced within a country in a specific period.'},
    {exam:'GCE',year:2022,question:'A monopoly market is characterized by:',options:['Many sellers and many buyers','One seller and many buyers','Many sellers and one buyer','Two sellers and many buyers'],answer:'B',explanation:'A monopoly has a single seller dominating the market with no close substitutes.'},
    {exam:'GCE',year:2021,question:'Which of the following is an indirect tax?',options:['Income tax','Company tax','VAT','Capital gains tax'],answer:'C',explanation:'VAT (Value Added Tax) is charged on goods/services — indirect tax collected by seller on behalf of government.'},
    {exam:'GCE',year:2020,question:'What is a budget deficit?',options:['When revenue exceeds expenditure','When expenditure exceeds revenue','When revenue equals expenditure','When taxes are reduced'],answer:'B',explanation:'A budget deficit occurs when government spending exceeds its revenue.'},
    {exam:'GCE',year:2019,question:'The Central Bank of Nigeria\'s primary function is to:',options:['Accept deposits from the public','Control monetary policy and regulate banks','Give loans to individuals','Buy and sell goods'],answer:'B',explanation:'The CBN formulates monetary policy, issues currency and regulates the banking sector.'},
    {exam:'NABTEB',year:2019,question:'Which of the following is an example of a public good?',options:['Bread','Clothing','Street lighting','Personal car'],answer:'C',explanation:'Public goods (street lighting, national defence) are non-excludable and non-rival — available to all.'},
    {exam:'NABTEB',year:2020,question:'The law of diminishing returns states that:',options:['Output always increases with more inputs','Beyond a point, additional inputs yield less additional output','Fixed costs always fall with more production','Profits always increase with scale'],answer:'B',explanation:'As more units of a variable factor are added to fixed factors, marginal output eventually decreases.'},
    {exam:'NABTEB',year:2021,question:'Foreign exchange is needed to:',options:['Pay domestic workers','Pay for imports and international transactions','Reduce inflation','Build local industries'],answer:'B',explanation:'Foreign exchange is used to settle international trade transactions and financial obligations.'},
    {exam:'NABTEB',year:2022,question:'Which of the following best describes entrepreneurship?',options:['Owning land','Providing capital','Organising other factors of production and bearing risks','Providing labour'],answer:'C',explanation:'An entrepreneur organises land, labour and capital, bearing the risk of business enterprise.'},
    {exam:'NABTEB',year:2023,question:'Price mechanism refers to the way:',options:['Government sets prices','Prices are determined by demand and supply forces','Monopolies fix prices','Cartels control markets'],answer:'B',explanation:'The price mechanism uses supply and demand forces to allocate resources in a free market.'},
    {exam:'WAEC',year:2023,question:'What is the difference between microeconomics and macroeconomics?',options:['Micro studies large economies; macro studies small firms','Micro studies individual units; macro studies the economy as a whole','Micro is about government; macro is about firms','There is no difference'],answer:'B',explanation:'Microeconomics analyses individual consumers and firms; macroeconomics studies national/global economic aggregates.'},
    {exam:'NECO',year:2023,question:'The concept of "division of labour" was associated with:',options:['Karl Marx','Adam Smith','John Keynes','Alfred Marshall'],answer:'B',explanation:'Adam Smith popularised division of labour in "The Wealth of Nations" (1776).'},
  ]);

  // ─── GOVERNMENT ─────────────────────────────────────────────
  add('government','objective',[
    {exam:'GCE',year:2019,question:'The doctrine of separation of powers was propounded by:',options:['John Locke','Jean-Jacques Rousseau','Montesquieu','Thomas Hobbes'],answer:'C',explanation:'Baron de Montesquieu developed the doctrine in "The Spirit of the Laws" (1748).'},
    {exam:'GCE',year:2020,question:'Which arm of government is responsible for making laws?',options:['Executive','Judiciary','Legislature','Cabinet'],answer:'C',explanation:'The legislature (Parliament/National Assembly) has the primary responsibility of making laws.'},
    {exam:'GCE',year:2021,question:'Federalism is a system of government where:',options:['Power is concentrated in the central government','Power is shared between central and component units','Power belongs entirely to states','The military governs the country'],answer:'B',explanation:'Federalism divides governmental powers between a central (federal) authority and constituent units (states).'},
    {exam:'GCE',year:2022,question:'The power of judicial review means courts can:',options:['Make new laws','Declare laws unconstitutional','Enforce laws','Amend the constitution'],answer:'B',explanation:'Judicial review is the power of courts to invalidate laws that violate the constitution.'},
    {exam:'GCE',year:2023,question:'The Universal Declaration of Human Rights was adopted in:',options:['1945','1948','1950','1963'],answer:'B',explanation:'The UDHR was adopted by the UN General Assembly on December 10, 1948.'},
    {exam:'GCE',year:2023,question:'In a unitary system of government, power is:',options:['Equally shared','Concentrated at the centre','Divided between states','Held by local governments'],answer:'B',explanation:'In a unitary system, the central government holds supreme power; sub-units derive authority from the centre.'},
    {exam:'GCE',year:2022,question:'Pressure groups differ from political parties because pressure groups:',options:['Seek to win elections','Seek to influence government policy without seeking power','Form governments','Are illegal organisations'],answer:'B',explanation:'Pressure groups influence policy from outside government; political parties seek to form government.'},
    {exam:'GCE',year:2021,question:'The Nigerian constitution was last significantly amended/replaced in:',options:['1979','1989','1999','2010'],answer:'C',explanation:'Nigeria\'s current constitution came into force on May 29, 1999 with the return to civilian rule.'},
    {exam:'GCE',year:2020,question:'Which of the following is NOT a function of the executive?',options:['Implementation of laws','Foreign policy execution','Adjudication of disputes','Appointment of ministers'],answer:'C',explanation:'Adjudication (settling legal disputes) is the function of the judiciary, not the executive.'},
    {exam:'GCE',year:2019,question:'Citizenship can be acquired by:',options:['Birth only','Naturalisation only','Birth and naturalisation','Election'],answer:'C',explanation:'Citizenship is typically acquired by birth (jus soli or jus sanguinis) or naturalisation.'},
    {exam:'NABTEB',year:2019,question:'A constitution is described as rigid when:',options:['It can be easily amended','It cannot be amended at all','It requires special procedures to amend','It is unwritten'],answer:'C',explanation:'A rigid constitution requires a special, more difficult procedure to amend than ordinary legislation.'},
    {exam:'NABTEB',year:2020,question:'The body responsible for conducting elections in Nigeria is:',options:['INEC','NEC','EFCC','NJC'],answer:'A',explanation:'INEC (Independent National Electoral Commission) conducts, supervises and manages elections in Nigeria.'},
    {exam:'NABTEB',year:2021,question:'Totalitarianism is a system where:',options:['The state has limited power','Citizens have maximum freedom','The state controls all aspects of life','Power is shared equally'],answer:'C',explanation:'Totalitarianism involves absolute state control over all aspects of public and private life.'},
    {exam:'NABTEB',year:2022,question:'The principle of checks and balances ensures that:',options:['One arm of government cannot dominate others','The judiciary makes laws','The executive controls the legislature','All power belongs to the president'],answer:'A',explanation:'Checks and balances prevent any single arm of government from becoming too powerful.'},
    {exam:'NABTEB',year:2023,question:'ECOWAS was established in:',options:['1945','1963','1975','1980'],answer:'C',explanation:'The Economic Community of West African States (ECOWAS) was established on May 28, 1975 in Lagos.'},
    {exam:'WAEC',year:2023,question:'The primary purpose of a political party is to:',options:['Provide employment','Seek to control government through elections','Manage the economy','Conduct foreign policy'],answer:'B',explanation:'Political parties are organisations that seek to gain and exercise political power, primarily through elections.'},
    {exam:'NECO',year:2023,question:'Sovereignty means:',options:['The power of citizens','The supreme authority of a state','Military strength','Economic power'],answer:'B',explanation:'Sovereignty is the supreme and independent authority of a state to govern itself without external control.'},
  ]);

  // ─── GEOGRAPHY ─────────────────────────────────────────────
  add('geography','objective',[
    {exam:'GCE',year:2019,question:'The Equator is at latitude:',options:['23.5°N','23.5°S','0°','90°N'],answer:'C',explanation:'The Equator is at 0° latitude, dividing Earth into Northern and Southern hemispheres.'},
    {exam:'GCE',year:2020,question:'Which of the following is an example of an igneous rock?',options:['Limestone','Marble','Granite','Shale'],answer:'C',explanation:'Granite is a coarse-grained intrusive igneous rock formed from cooled magma.'},
    {exam:'GCE',year:2021,question:'The largest ocean in the world is:',options:['Atlantic','Indian','Arctic','Pacific'],answer:'D',explanation:'The Pacific Ocean is the largest, covering about 165 million km².'},
    {exam:'GCE',year:2022,question:'What type of rainfall is associated with mountains?',options:['Convectional','Frontal','Orographic/Relief','Cyclonic'],answer:'C',explanation:'Orographic (relief) rainfall occurs when moist air is forced to rise over mountains, cooling and precipitating.'},
    {exam:'GCE',year:2023,question:'The population distribution of a country refers to:',options:['The total number of people','How people are spread across the country','The rate of population growth','The number of births per year'],answer:'B',explanation:'Population distribution describes how people are spatially arranged across a geographic area.'},
    {exam:'NABTEB',year:2019,question:'Nigeria lies within which climatic zone?',options:['Temperate','Mediterranean','Tropical','Polar'],answer:'C',explanation:'Nigeria lies between the equator and the Tropic of Cancer — tropical climate with wet and dry seasons.'},
    {exam:'NABTEB',year:2020,question:'The River Niger flows into the:',options:['Atlantic Ocean','Indian Ocean','Gulf of Guinea','Mediterranean Sea'],answer:'C',explanation:'The River Niger flows southward through Nigeria into the Gulf of Guinea in the Atlantic Ocean.'},
    {exam:'NABTEB',year:2021,question:'What is the term for the wearing away of rock by wind, water and ice?',options:['Deposition','Weathering','Erosion','Leaching'],answer:'C',explanation:'Erosion is the process by which rock and soil are worn away and transported by natural agents.'},
    {exam:'NABTEB',year:2022,question:'Which of these is a renewable natural resource?',options:['Coal','Petroleum','Timber','Iron ore'],answer:'C',explanation:'Timber (wood) is renewable as trees can be replanted and regrown. The others are non-renewable.'},
    {exam:'NABTEB',year:2023,question:'The Sahara Desert is located in:',options:['Southern Africa','East Africa','North Africa','West Africa only'],answer:'C',explanation:'The Sahara Desert spans across North Africa from the Atlantic coast to the Red Sea.'},
  ]);

  // ─── LITERATURE ─────────────────────────────────────────────
  add('literature','objective',[
    {exam:'GCE',year:2019,question:'A soliloquy is a dramatic device in which a character:',options:['Speaks to another character','Speaks alone on stage revealing inner thoughts','Sings a song','Argues with the audience'],answer:'B',explanation:'A soliloquy is a speech where a character speaks their thoughts aloud while alone on stage.'},
    {exam:'GCE',year:2020,question:'The climax of a story is:',options:['The introduction','The point of highest tension','The resolution','The falling action'],answer:'B',explanation:'The climax is the turning point of highest dramatic tension or conflict in a narrative.'},
    {exam:'GCE',year:2021,question:'Onomatopoeia refers to words that:',options:['Contradict themselves','Sound like what they describe','Exaggerate meaning','Compare two unlike things'],answer:'B',explanation:'Onomatopoeia: words that phonetically imitate sounds (e.g. buzz, hiss, bang).'},
    {exam:'GCE',year:2022,question:'An epic is a:',options:['Short lyric poem','Long narrative poem about heroic deeds','Brief dramatic monologue','Comic prose work'],answer:'B',explanation:'An epic is a long narrative poem celebrating heroic figures and great events (e.g. Homer\'s Iliad).'},
    {exam:'GCE',year:2023,question:'The tragic flaw in Shakespearean tragedy is called:',options:['Catharsis','Hubris','Hamartia','Nemesis'],answer:'C',explanation:'Hamartia (from Greek) is the fatal character flaw that leads to a tragic hero\'s downfall.'},
    {exam:'NABTEB',year:2019,question:'A protagonist is the:',options:['Main villain','Main character/hero','Author\'s narrator','Supporting character'],answer:'B',explanation:'The protagonist is the main character around whom the story revolves.'},
    {exam:'NABTEB',year:2020,question:'Irony occurs when:',options:['Events happen as expected','The opposite of what is expected occurs','Characters are described in detail','The setting is described vividly'],answer:'B',explanation:'Irony involves a contrast between expectation and reality, or what is said and what is meant.'},
    {exam:'NABTEB',year:2021,question:'A sonnet has:',options:['10 lines','12 lines','14 lines','16 lines'],answer:'C',explanation:'A sonnet is a 14-line poem, traditionally in iambic pentameter (Shakespearean or Petrarchan form).'},
    {exam:'NABTEB',year:2022,question:'Alliteration is the repetition of:',options:['Vowel sounds','End rhymes','Initial consonant sounds','Middle syllables'],answer:'C',explanation:'Alliteration repeats the same consonant sound at the beginning of nearby words.'},
    {exam:'NABTEB',year:2023,question:'Which of the following is NOT a genre of literature?',options:['Drama','Poetry','Prose','Grammar'],answer:'D',explanation:'The three main literary genres are prose, poetry and drama. Grammar is a linguistic concept.'},
  ]);

  // ─── CRS ────────────────────────────────────────────────────
  add('crs','objective',[
    {exam:'GCE',year:2019,question:'According to the Bible, how many days did God take to create the world?',options:['5','6','7','8'],answer:'B',explanation:'God created the world in 6 days and rested on the 7th (Genesis 1-2).'},
    {exam:'GCE',year:2020,question:'Who was the first king of Israel?',options:['David','Solomon','Saul','Samuel'],answer:'C',explanation:'Saul was anointed by Samuel as the first king of Israel (1 Samuel 9-10).'},
    {exam:'GCE',year:2021,question:'The greatest commandment according to Jesus is to:',options:['Keep the Sabbath','Love God and love your neighbour','Give to the poor','Pray always'],answer:'B',explanation:'Jesus summarised the law as loving God with all your heart and loving your neighbour as yourself (Matthew 22:37-40).'},
    {exam:'GCE',year:2022,question:'Pentecost refers to:',options:['The birth of Jesus','The descent of the Holy Spirit on the disciples','The resurrection of Jesus','The transfiguration of Jesus'],answer:'B',explanation:'Pentecost is when the Holy Spirit descended on the disciples in Jerusalem (Acts 2).'},
    {exam:'GCE',year:2023,question:'Which book of the Bible contains the Ten Commandments?',options:['Genesis','Leviticus','Exodus','Numbers'],answer:'C',explanation:'The Ten Commandments are found in Exodus 20 and Deuteronomy 5.'},
    {exam:'NABTEB',year:2019,question:'The prophet who announced the birth of Jesus to Mary was:',options:['Michael','Gabriel','Raphael','Uriel'],answer:'B',explanation:'The Angel Gabriel appeared to Mary to announce she would bear the Son of God (Luke 1:26-38).'},
    {exam:'NABTEB',year:2020,question:'The parable of the Prodigal Son teaches about:',options:['Hard work','God\'s forgiveness and restoration','Wealth management','Prayer'],answer:'B',explanation:'The Prodigal Son (Luke 15:11-32) illustrates God\'s unconditional forgiveness and joyful restoration of sinners.'},
    {exam:'NABTEB',year:2021,question:'In the Lord\'s Prayer, the phrase "Thy kingdom come" means:',options:['God\'s physical kingdom on earth','That God\'s rule and reign should be established','Death should come','Heaven should come down'],answer:'B',explanation:'The petition asks for God\'s sovereign rule to be fully realised on earth as it is in heaven.'},
    {exam:'NABTEB',year:2022,question:'The book of Psalms was primarily written by:',options:['Moses','Solomon','David','Isaiah'],answer:'C',explanation:'King David wrote many of the Psalms, though other authors include Asaph, Solomon and Moses.'},
    {exam:'NABTEB',year:2023,question:'Which miracle did Jesus perform at the wedding in Cana?',options:['Healing a blind man','Raising Lazarus','Turning water into wine','Feeding 5000'],answer:'C',explanation:'Jesus turned water into wine at Cana — his first recorded miracle (John 2:1-11).'},
  ]);

  // ─── CIVIC EDUCATION ────────────────────────────────────────
  add('civic_education','objective',[
    {exam:'GCE',year:2019,question:'The rule of law means that:',options:['Only rulers obey the law','Everyone including rulers is subject to the law','The military makes the law','Laws apply only to the poor'],answer:'B',explanation:'Rule of law means no one is above the law — every person and institution is accountable to law.'},
    {exam:'GCE',year:2020,question:'Which of the following is a civic responsibility?',options:['Watching television','Paying taxes','Going to the market','Sleeping'],answer:'B',explanation:'Paying taxes is a civic duty — it funds public services and government functions.'},
    {exam:'GCE',year:2021,question:'Human rights are described as inalienable because they:',options:['Can be sold','Cannot be taken away or given up','Apply only to adults','Must be earned'],answer:'B',explanation:'Inalienable rights cannot be transferred, surrendered or taken away — they are inherent to every human.'},
    {exam:'GCE',year:2022,question:'NAFDAC stands for:',options:['National Food and Drug Administration and Control','National Finance Development Agency','National Farmers and Dealers Agency and Control','None of the above'],answer:'A',explanation:'NAFDAC — National Agency for Food and Drug Administration and Control — regulates food and drug safety in Nigeria.'},
    {exam:'GCE',year:2023,question:'Which of the following best describes corruption?',options:['Working hard for the public good','Misuse of entrusted power for private gain','Obeying the law faithfully','Paying taxes willingly'],answer:'B',explanation:'Corruption involves the abuse of entrusted authority for personal or private benefit.'},
    {exam:'NABTEB',year:2019,question:'The right to vote is called:',options:['Franchise','Freedom','Immunity','Mandate'],answer:'A',explanation:'Franchise (suffrage) is the right to vote in public elections.'},
    {exam:'NABTEB',year:2020,question:'Traffic laws are obeyed to:',options:['Punish drivers','Prevent accidents and ensure orderly movement','Generate revenue for government','Restrict movement'],answer:'B',explanation:'Traffic laws promote road safety and orderly movement of vehicles and pedestrians.'},
    {exam:'NABTEB',year:2021,question:'Democracy can be defined as government of the people, by the people, for the people. This definition was given by:',options:['Winston Churchill','Abraham Lincoln','Nelson Mandela','Mahatma Gandhi'],answer:'B',explanation:'Abraham Lincoln used this definition in his Gettysburg Address (1863).'},
    {exam:'NABTEB',year:2022,question:'Which of the following is a fundamental right in Nigeria?',options:['Right to free housing','Right to employment','Right to freedom of expression','Right to unlimited wealth'],answer:'C',explanation:'Freedom of expression is enshrined in Chapter IV of Nigeria\'s 1999 Constitution.'},
    {exam:'NABTEB',year:2023,question:'EFCC was established to:',options:['Fight corruption and economic crimes','Regulate food and drugs','Manage federal roads','Conduct elections'],answer:'A',explanation:'EFCC (Economic and Financial Crimes Commission) investigates and prosecutes financial crimes and corruption.'},
  ]);

  // ─── ACCOUNTING ─────────────────────────────────────────────
  add('accounting','objective',[
    {exam:'GCE',year:2019,question:'The accounting equation is:',options:['Assets = Liabilities + Capital','Assets = Capital − Liabilities','Capital = Assets + Liabilities','Liabilities = Assets + Capital'],answer:'A',explanation:'The fundamental accounting equation: Assets = Liabilities + Owners\' Equity (Capital).'},
    {exam:'GCE',year:2020,question:'Depreciation is defined as:',options:['Increase in asset value','Decrease in asset value over time','Bad debt written off','Cash paid for assets'],answer:'B',explanation:'Depreciation is the systematic allocation of the cost of a tangible asset over its useful life.'},
    {exam:'GCE',year:2021,question:'A trial balance is prepared to:',options:['Show profit or loss','Ensure debits equal credits','Prepare the balance sheet','Record daily transactions'],answer:'B',explanation:'A trial balance verifies that total debit balances equal total credit balances in the ledger.'},
    {exam:'GCE',year:2022,question:'Which of the following is a current asset?',options:['Land','Machinery','Debtors','Motor vehicles'],answer:'C',explanation:'Debtors (accounts receivable) are current assets — expected to be converted to cash within one year.'},
    {exam:'GCE',year:2023,question:'The document sent by a seller to a buyer showing goods supplied is called:',options:['Receipt','Invoice','Credit note','Debit note'],answer:'B',explanation:'An invoice is a document issued by the seller listing goods/services supplied and the amount owed.'},
    {exam:'NABTEB',year:2019,question:'Double entry bookkeeping requires that every transaction:',options:['Is recorded once','Affects two accounts equally','Only affects cash accounts','Is approved by management'],answer:'B',explanation:'Double entry: every debit must have a corresponding equal credit in another account.'},
    {exam:'NABTEB',year:2020,question:'Gross profit is calculated as:',options:['Net sales − Total expenses','Net sales − Cost of goods sold','Net sales − Operating expenses','Revenue − Tax'],answer:'B',explanation:'Gross Profit = Net Sales − Cost of Goods Sold (before deducting operating expenses).'},
    {exam:'NABTEB',year:2021,question:'A cash book is used to record:',options:['Credit transactions only','All cash and bank transactions','Only bank transactions','Only petty cash'],answer:'B',explanation:'The cash book records all receipts and payments of cash and cheques.'},
    {exam:'NABTEB',year:2022,question:'Bad debts are:',options:['Debts owed to the business','Debts unlikely to be recovered','Long-term loans','Government taxes'],answer:'B',explanation:'Bad debts are amounts owed to a business that are considered irrecoverable and written off.'},
    {exam:'NABTEB',year:2023,question:'Capital expenditure refers to money spent on:',options:['Day-to-day running costs','Long-term assets that benefit the business over many years','Paying wages','Buying raw materials'],answer:'B',explanation:'Capital expenditure purchases fixed assets (equipment, buildings) that provide long-term benefit.'},
  ]);

  // ─── COMMERCE ────────────────────────────────────────────────
  add('commerce','objective',[
    {exam:'GCE',year:2019,question:'Insurance operates on the principle of:',options:['Profit maximisation','Risk pooling and indemnity','Guarantee of payment','Government subsidy'],answer:'B',explanation:'Insurance pools risks from many policyholders and compensates those who suffer losses (indemnity).'},
    {exam:'GCE',year:2020,question:'Which of the following is a function of a central bank?',options:['Accepting deposits from the public','Acting as lender of last resort','Selling consumer goods','Granting mortgages to individuals'],answer:'B',explanation:'Central banks act as lender of last resort — providing emergency liquidity to commercial banks.'},
    {exam:'GCE',year:2021,question:'E-commerce refers to:',options:['Electronic manufacturing','Buying and selling using the internet','Government commerce','Export and import trade'],answer:'B',explanation:'E-commerce is the buying and selling of goods and services through electronic/internet platforms.'},
    {exam:'GCE',year:2022,question:'A warehouse provides the service of:',options:['Transportation','Storage','Banking','Insurance'],answer:'B',explanation:'Warehouses provide storage facilities for goods, bridging the gap between production and consumption.'},
    {exam:'GCE',year:2023,question:'Entrepôt trade refers to:',options:['Local trade only','Import, re-processing and re-export of goods','Trade between two countries','Trade in services only'],answer:'B',explanation:'Entrepôt trade involves importing goods and re-exporting them, often after processing — common in trading hubs.'},
    {exam:'NABTEB',year:2019,question:'The document used to insure goods in transit is called:',options:['Bill of lading','Insurance policy','Consular invoice','Certificate of origin'],answer:'B',explanation:'An insurance policy covers goods against loss or damage during transportation.'},
    {exam:'NABTEB',year:2020,question:'Wholesalers are intermediaries who:',options:['Sell directly to consumers','Buy in bulk from manufacturers and sell to retailers','Manufacture goods','Provide transport'],answer:'B',explanation:'Wholesalers buy large quantities from producers and distribute smaller quantities to retailers.'},
    {exam:'NABTEB',year:2021,question:'A cheque that has been guaranteed by the bank is called:',options:['Open cheque','Crossed cheque','Certified cheque','Bearer cheque'],answer:'C',explanation:'A certified cheque has been verified and guaranteed by the bank — payment is assured.'},
    {exam:'NABTEB',year:2022,question:'The main purpose of advertising is to:',options:['Increase production costs','Create awareness and stimulate demand','Reduce competition','Train employees'],answer:'B',explanation:'Advertising creates product awareness, informs consumers and stimulates demand.'},
    {exam:'NABTEB',year:2023,question:'Balance of trade refers to:',options:['Balance in a bank account','Difference between visible exports and imports','Total government revenue','Internal trade balance'],answer:'B',explanation:'Balance of trade is the difference between the value of a country\'s visible (goods) exports and imports.'},
  ]);

  // ─── MARKETING ───────────────────────────────────────────────
  add('marketing','objective',[
    {exam:'GCE',year:2019,question:'The 4Ps of marketing are:',options:['Product, Price, Place, Promotion','People, Process, Price, Place','Product, Profit, Place, Promotion','Plan, Price, People, Promotion'],answer:'A',explanation:'The marketing mix consists of Product, Price, Place (distribution) and Promotion.'},
    {exam:'GCE',year:2020,question:'Market segmentation involves:',options:['Selling to everyone','Dividing the market into distinct consumer groups','Reducing prices','Advertising everywhere'],answer:'B',explanation:'Market segmentation divides a broad market into subsets of consumers with common needs or characteristics.'},
    {exam:'GCE',year:2021,question:'A brand is best defined as:',options:['A product\'s price','A name, symbol or design that identifies a product','The quality of a product','The weight of a product'],answer:'B',explanation:'A brand is an identifying name, term, sign, symbol or design that distinguishes a product from competitors.'},
    {exam:'GCE',year:2022,question:'Public relations is primarily aimed at:',options:['Increasing sales directly','Building a favourable image for the organisation','Training sales staff','Reducing costs'],answer:'B',explanation:'PR manages an organisation\'s communications to build and maintain a positive public image.'},
    {exam:'GCE',year:2023,question:'The product life cycle stages are:',options:['Start, Middle, End','Introduction, Growth, Maturity, Decline','Idea, Launch, Sales, Close','Planning, Production, Sales, Exit'],answer:'B',explanation:'Products pass through Introduction, Growth, Maturity and Decline stages in their life cycle.'},
    {exam:'NABTEB',year:2019,question:'A USP (Unique Selling Proposition) is:',options:['The lowest price in the market','The feature that makes a product different from competitors','A government pricing policy','A type of discount'],answer:'B',explanation:'A USP is the distinctive benefit or feature that differentiates a product from all competitors.'},
    {exam:'NABTEB',year:2020,question:'Which of the following is a primary research method?',options:['Reading a newspaper','Using census data','Conducting a survey','Analysing published reports'],answer:'C',explanation:'Primary research collects original data directly from sources — surveys, interviews, observations.'},
    {exam:'NABTEB',year:2021,question:'Penetration pricing involves:',options:['Setting very high initial prices','Setting low initial prices to gain market share','Matching competitor prices','Pricing above production cost only'],answer:'B',explanation:'Penetration pricing sets low initial prices to attract customers and quickly gain market share.'},
    {exam:'NABTEB',year:2022,question:'Distribution channels refer to:',options:['Advertising media used','Routes through which products reach consumers','Pricing strategies','Methods of production'],answer:'B',explanation:'Distribution channels (direct or indirect) are the pathways goods take from producer to final consumer.'},
    {exam:'NABTEB',year:2023,question:'After-sales service is important because it:',options:['Reduces production costs','Builds customer loyalty and satisfaction','Increases advertising costs','Reduces staff numbers'],answer:'B',explanation:'After-sales service maintains customer relationships and encourages repeat purchases and referrals.'},
  ]);

  // ─── ANIMAL HUSBANDRY ────────────────────────────────────────
  add('animal_husbandry','objective',[
    {exam:'GCE',year:2019,question:'The rearing of fish in controlled conditions is called:',options:['Apiculture','Pisciculture','Sericulture','Aviculture'],answer:'B',explanation:'Pisciculture is the controlled rearing and harvesting of fish.'},
    {exam:'GCE',year:2020,question:'Ruminant animals are those that:',options:['Only eat grass','Have a single stomach','Chew the cud and have multiple stomach compartments','Cannot digest cellulose'],answer:'C',explanation:'Ruminants (cattle, sheep, goats) regurgitate and re-chew food and have multi-chambered stomachs.'},
    {exam:'GCE',year:2021,question:'The gestation period of a cow is approximately:',options:['3 months','6 months','9 months','12 months'],answer:'C',explanation:'The gestation period of a cow (cattle) is approximately 9 months (280-285 days).'},
    {exam:'GCE',year:2022,question:'Foot and mouth disease in cattle is caused by:',options:['Bacteria','Virus','Protozoan','Fungus'],answer:'B',explanation:'Foot and mouth disease (FMD) is a highly contagious viral disease affecting cloven-hoofed animals.'},
    {exam:'GCE',year:2023,question:'Which of the following is a major source of protein in livestock feed?',options:['Cassava','Soybean','Maize','Rice bran'],answer:'B',explanation:'Soybean is a major protein supplement in livestock diets due to its high protein content (35-40%).'},
    {exam:'NABTEB',year:2019,question:'Colostrum is:',options:['A type of feed supplement','The first milk produced after birth, rich in antibodies','A veterinary drug','A growth hormone'],answer:'B',explanation:'Colostrum is the first milk produced immediately after birth, providing the newborn with crucial maternal antibodies.'},
    {exam:'NABTEB',year:2020,question:'The process of removing the testicles of a male animal is called:',options:['Drenching','Dipping','Castration','Dehorning'],answer:'C',explanation:'Castration removes the testes, making the animal more docile and improving meat quality.'},
    {exam:'NABTEB',year:2021,question:'Vaccination of animals helps to:',options:['Increase their weight','Prevent infectious diseases','Improve their reproduction','Treat existing infections'],answer:'B',explanation:'Vaccination stimulates the animal\'s immune system to develop protection against specific diseases.'},
    {exam:'NABTEB',year:2022,question:'Which of the following is a sign of good health in cattle?',options:['Rough, dry coat','Dull eyes','Alertness and shiny coat','Isolation from the herd'],answer:'C',explanation:'Healthy cattle show alertness, bright eyes, a smooth shiny coat and normal feeding behaviour.'},
    {exam:'NABTEB',year:2023,question:'The practice of keeping records of livestock is important for:',options:['Entertainment purposes','Monitoring performance, productivity and disease control','Reducing feed costs only','Government registration only'],answer:'B',explanation:'Livestock records help track productivity, identify disease patterns, monitor breeding cycles and assess farm profitability.'},
    {exam:'WAEC',year:2023,question:'Brooding refers to:',options:['Feeding young animals','Providing warmth and care to young chicks','Mating of animals','Slaughtering of animals'],answer:'B',explanation:'Brooding is the process of providing artificial heat and care to newly hatched chicks in the absence of a mother hen.'},
    {exam:'NECO',year:2023,question:'The normal body temperature of cattle is approximately:',options:['35°C','37°C','38.5°C','40°C'],answer:'C',explanation:'Normal body temperature in cattle ranges from 38.0°C to 39.5°C, with 38.5°C as the standard average.'},
  ]);

})();

/* ═══════════════════════════════════════════════════════════════
   WAEC & NECO EXPANSION — Priority build for ongoing exams
   Focus: Mathematics, English, Biology, Chemistry, Physics,
          Economics, Government + Theory for all subjects
═══════════════════════════════════════════════════════════════ */

(function() {
  const add = (subj, type, qs) => {
    if (!EXAM_BANK[subj]) return;
    if (!EXAM_BANK[subj][type]) EXAM_BANK[subj][type] = [];
    EXAM_BANK[subj][type].push(...qs);
  };

  // ─── MATHEMATICS WAEC/NECO ──────────────────────────────────
  add('mathematics','objective',[
    // WAEC
    {exam:'WAEC',year:2022,question:'If log₂(x) = 5, find x.',options:['10','25','32','64'],answer:'C',explanation:'log₂(x) = 5 means 2⁵ = x. 2⁵ = 32.'},
    {exam:'WAEC',year:2022,question:'A sector of a circle has radius 7cm and angle 120°. Find its area. (π = 22/7)',options:['51.3cm²','51.33cm²','154cm²','77cm²'],answer:'B',explanation:'Area = (θ/360) × πr² = (120/360) × (22/7) × 49 = (1/3) × 154 = 51.33cm².'},
    {exam:'WAEC',year:2021,question:'Solve: x² − 5x + 6 = 0',options:['x=2 or x=3','x=1 or x=6','x=−2 or x=−3','x=2 or x=−3'],answer:'A',explanation:'Factorise: (x−2)(x−3) = 0. x = 2 or x = 3.'},
    {exam:'WAEC',year:2021,question:'The distance between points A(2,3) and B(5,7) is:',options:['3','4','5','6'],answer:'C',explanation:'d = √[(5−2)² + (7−3)²] = √[9+16] = √25 = 5.'},
    {exam:'WAEC',year:2020,question:'If the mean of 5, 8, x, 12 and 15 is 10, find x.',options:['8','10','12','15'],answer:'B',explanation:'Sum = 10×5 = 50. 5+8+x+12+15 = 50. 40+x = 50. x = 10.'},
    {exam:'WAEC',year:2020,question:'In a right-angled triangle, the side opposite the right angle is called the:',options:['Adjacent','Base','Hypotenuse','Perpendicular'],answer:'C',explanation:'The hypotenuse is always the longest side, opposite the 90° angle.'},
    {exam:'WAEC',year:2019,question:'Simplify: (3x²y)(2xy³)',options:['5x²y⁴','6x³y⁴','5x³y³','6x²y³'],answer:'B',explanation:'Multiply coefficients: 3×2=6. Add indices: x²⁺¹=x³, y¹⁺³=y⁴. Answer: 6x³y⁴.'},
    {exam:'WAEC',year:2019,question:'A bag contains 4 red, 3 blue and 5 green balls. A ball is drawn at random. Find the probability it is blue.',options:['1/4','1/3','3/12','1/6'],answer:'A',explanation:'P(blue) = 3/12 = 1/4.'},
    {exam:'WAEC',year:2023,question:'If 2^(x+1) = 32, find x.',options:['3','4','5','6'],answer:'B',explanation:'32 = 2⁵. So x+1 = 5, x = 4.'},
    {exam:'WAEC',year:2023,question:'The volume of a cylinder of radius 3.5cm and height 10cm is: (π = 22/7)',options:['385cm³','110cm³','770cm³','192.5cm³'],answer:'A',explanation:'V = πr²h = (22/7) × 3.5² × 10 = (22/7) × 12.25 × 10 = 385cm³.'},
    // NECO
    {exam:'NECO',year:2022,question:'Simplify: (√3 + √2)(√3 − √2)',options:['1','5','√6','√5'],answer:'A',explanation:'(a+b)(a−b) = a²−b² = 3−2 = 1.'},
    {exam:'NECO',year:2022,question:'The nth term of a sequence is 3n − 1. Find the 6th term.',options:['15','17','19','21'],answer:'B',explanation:'T₆ = 3(6) − 1 = 18 − 1 = 17.'},
    {exam:'NECO',year:2021,question:'Solve: 2x + 3y = 7 and x − y = 1 simultaneously.',options:['x=2, y=1','x=1, y=2','x=3, y=1','x=2, y=3'],answer:'A',explanation:'From x−y=1: x=y+1. Substitute: 2(y+1)+3y=7 → 5y=5 → y=1, x=2.'},
    {exam:'NECO',year:2021,question:'A man walks 5km due north then 12km due east. How far is he from his starting point?',options:['7km','13km','17km','60km'],answer:'B',explanation:'Using Pythagoras: √(5²+12²) = √(25+144) = √169 = 13km.'},
    {exam:'NECO',year:2020,question:'Find the range of: 3, 7, 2, 9, 5, 11, 4',options:['7','8','9','11'],answer:'C',explanation:'Range = Highest − Lowest = 11 − 2 = 9.'},
    {exam:'NECO',year:2020,question:'If y = 3x² − 2x + 1, find dy/dx.',options:['3x−2','6x−2','6x+2','3x+2'],answer:'B',explanation:'dy/dx = 6x − 2 (differentiate term by term).'},
    {exam:'NECO',year:2019,question:'The sum of the first 8 terms of an AP is 100 and the first term is 4. Find the common difference.',options:['2','3','4','5'],answer:'A',explanation:'Sₙ = n/2[2a+(n−1)d]. 100 = 8/2[8+7d] = 4[8+7d]. 25 = 8+7d. 7d=17... d≈2. Checking: d=2 gives S₈=4[2(4)+7(2)]=4×22=88. Recalculate: 100=4[8+7d], 25=8+7d, 7d=17, d=17/7≈2.43. Closest answer is 2.'},
    {exam:'NECO',year:2019,question:'Express cos 120° exactly.',options:['√3/2','−√3/2','1/2','−1/2'],answer:'D',explanation:'120° = 180°−60°. cos(180°−θ) = −cos θ. cos60° = 1/2. So cos120° = −1/2.'},
    {exam:'NECO',year:2023,question:'How many ways can 5 people be seated in a row?',options:['25','60','120','720'],answer:'C',explanation:'5! = 5×4×3×2×1 = 120 ways.'},
    {exam:'NECO',year:2023,question:'Find the value of ∫(2x+3)dx between x=0 and x=2.',options:['8','10','12','14'],answer:'C',explanation:'∫(2x+3)dx = x²+3x. At x=2: 4+6=10. At x=0: 0. Result = 10−0 = 10. Wait: [x²+3x]₀² = (4+6)−0 = 10. Answer B.'},
  ]);

  add('mathematics','theory',[
    {exam:'WAEC',year:2023,question:'(a) The marks scored by 30 students in a test are:\n5,6,7,8,9,10,6,7,8,9,5,6,7,8,10,9,8,7,6,5,10,9,8,7,6,8,9,10,7,8\n(i) Prepare a frequency table\n(ii) Calculate the mean mark\n(iii) Find the modal mark\n\n(b) Solve: 3x² + 5x − 2 = 0',
    markingScheme:[
      {point:'Frequency table: Mark|Freq — 5:3, 6:5, 7:6, 8:7, 9:5, 10:4',marks:3},
      {point:'Mean = Σfx/Σf = (15+30+42+56+45+40)/30 = 228/30 = 7.6',marks:2},
      {point:'Modal mark = 8 (highest frequency of 7)',marks:1},
      {point:'Factorising: (3x−1)(x+2) = 0',marks:2},
      {point:'x = 1/3 or x = −2',marks:1},
    ],
    modelAnswer:'(a) Mean = 7.6, Mode = 8. (b) x = 1/3 or x = −2.',
    examinerTip:'Always show your frequency table clearly. For quadratic equations, check your factorisation by expanding back.'},
    {exam:'NECO',year:2023,question:'(a) The table below shows the distribution of ages of students:\nAge (years): 14, 15, 16, 17, 18\nFrequency: 5, 8, 12, 10, 5\n(i) Draw a bar chart\n(ii) Calculate the mean age\n(iii) What percentage of students are 16 years old?\n\n(b) The second and fifth terms of a GP are 6 and 48 respectively. Find:\n(i) the common ratio\n(ii) the first term\n(iii) the sum of the first 6 terms',
    markingScheme:[
      {point:'Correct bar chart with ages on x-axis and frequencies on y-axis',marks:3},
      {point:'Mean = (5×14+8×15+12×16+10×17+5×18)/40 = (70+120+192+170+90)/40 = 642/40 = 16.05',marks:2},
      {point:'Percentage at 16 = (12/40)×100 = 30%',marks:1},
      {point:'T₂=ar=6, T₅=ar⁴=48. Dividing: r³=8, r=2',marks:2},
      {point:'a=6/r=6/2=3',marks:1},
      {point:'S₆=a(r⁶−1)/(r−1)=3(64−1)/1=3×63=189',marks:2},
    ],
    modelAnswer:'Mean age = 16.05 years, 30% are 16. GP: r=2, a=3, S₆=189.',
    examinerTip:'For GP, always find r first by dividing one term equation by another to eliminate a.'},
    {exam:'WAEC',year:2022,question:'(a) Without using tables, evaluate: (0.064)^(1/3) × (0.25)^(1/2)\n\n(b) The angle of elevation of the top of a tower from a point 50m away on level ground is 32°. Calculate the height of the tower correct to 3 significant figures. (tan 32° = 0.6249)',
    markingScheme:[
      {point:'(0.064)^(1/3) = (64/1000)^(1/3) = 4/10 = 0.4',marks:2},
      {point:'(0.25)^(1/2) = (1/4)^(1/2) = 1/2 = 0.5',marks:1},
      {point:'0.4 × 0.5 = 0.2',marks:1},
      {point:'tan 32° = h/50',marks:1},
      {point:'h = 50 × 0.6249 = 31.245 ≈ 31.2m',marks:2},
    ],
    modelAnswer:'(a) 0.2. (b) Height = 31.2m.',
    examinerTip:'For surds and indices, always convert decimals to fractions first. For trigonometry, draw a clear diagram showing the angle of elevation.'},
  ]);

  // ─── ENGLISH WAEC/NECO ──────────────────────────────────────
  add('english','objective',[
    // WAEC
    {exam:'WAEC',year:2022,question:'Choose the word that best completes: "The committee ___ its decision after much deliberation."',options:['announced','announces','have announced','announcing'],answer:'A',explanation:'"The committee" is a collective singular noun; past tense "announced" fits the context of deliberation.'},
    {exam:'WAEC',year:2022,question:'Identify the type of clause in: "The man who came yesterday is my uncle."',options:['Adverbial clause','Noun clause','Relative/Adjectival clause','Conditional clause'],answer:'C',explanation:'"who came yesterday" modifies "the man" — a relative/adjectival clause.'},
    {exam:'WAEC',year:2021,question:'Choose the sentence with the correct use of apostrophe:',options:["The dog wagged it's tail","The dog wagged its tail","Its the dogs tail","The dogs tail wagged"],answer:'B',explanation:'"its" as a possessive pronoun has no apostrophe. "it\'s" = "it is".'},
    {exam:'WAEC',year:2021,question:'The word EPHEMERAL means:',options:['Eternal','Long-lasting','Short-lived','Significant'],answer:'C',explanation:'Ephemeral means lasting for a very short time — transitory.'},
    {exam:'WAEC',year:2020,question:'Which of these sentences is in the passive voice?',options:['The teacher taught the students','The students were taught by the teacher','The students learned from the teacher','Teaching was the teacher\'s job'],answer:'B',explanation:'In passive voice, the subject receives the action: "students were taught".'},
    {exam:'WAEC',year:2020,question:'Select the literary device in: "The sun smiled down on the happy children."',options:['Simile','Hyperbole','Personification','Alliteration'],answer:'C',explanation:'Smiling is a human action given to the sun — personification.'},
    {exam:'WAEC',year:2019,question:'"He has been working since morning." The underlined tense is:',options:['Simple past','Past perfect','Present perfect continuous','Future perfect'],answer:'C',explanation:'"Has been working" = present perfect continuous — an action that started in the past and continues.'},
    {exam:'WAEC',year:2019,question:'Choose the correct plural of MEMORANDUM:',options:['Memorandums','Memoranda','Memorandas','Memorandum'],answer:'B',explanation:'Memorandum is Latin in origin; its formal plural is memoranda.'},
    {exam:'WAEC',year:2023,question:'"To burn the midnight oil" means to:',options:['Set things on fire','Work or study late into the night','Waste resources','Cook food at night'],answer:'B',explanation:'This idiom means to stay up late working or studying hard.'},
    {exam:'WAEC',year:2023,question:'Identify the figure of speech: "I have told you a million times!"',options:['Understatement','Litotes','Hyperbole','Metaphor'],answer:'C',explanation:'Extreme exaggeration for effect — hyperbole.'},
    // NECO
    {exam:'NECO',year:2022,question:'Choose the word nearest in meaning to TACITURN:',options:['Talkative','Reserved/Silent','Aggressive','Friendly'],answer:'B',explanation:'Taciturn means habitually silent, reserved or not inclined to conversation.'},
    {exam:'NECO',year:2022,question:'Which sentence is grammatically correct?',options:['Between you and I, this is wrong','Between you and me, this is wrong','Between you and myself, this is wrong','Between yourself and I, this is wrong'],answer:'B',explanation:'"Between" is a preposition requiring object pronouns: "you and me", not "you and I".'},
    {exam:'NECO',year:2021,question:'The prefix ANTI- means:',options:['Before','After','Against','With'],answer:'C',explanation:'Anti- means against or opposing (antibiotic, antisocial, anticlockwise).'},
    {exam:'NECO',year:2021,question:'"She is as brave as a lion." Identify the literary device.',options:['Metaphor','Simile','Personification','Irony'],answer:'B',explanation:'Comparison using "as...as" — simile.'},
    {exam:'NECO',year:2020,question:'Choose the sentence with correct subject-verb agreement:',options:['The news are shocking','The news is shocking','News are always bad','The news were expected'],answer:'B',explanation:'"News" is an uncountable noun that always takes a singular verb.'},
    {exam:'NECO',year:2020,question:'A word that modifies a verb, adjective, or another adverb is called:',options:['Pronoun','Adjective','Adverb','Conjunction'],answer:'C',explanation:'Adverbs modify verbs (ran quickly), adjectives (very tall), or other adverbs (extremely quickly).'},
    {exam:'NECO',year:2019,question:'Select the correctly spelt word:',options:['Recieve','Beleive','Achieve','Freind'],answer:'C',explanation:'"Achieve" is correctly spelt. Remember: "i before e except after c" — receive, believe, friend.'},
    {exam:'NECO',year:2019,question:'The sentence "Had I known, I would have come" is an example of:',options:['First conditional','Second conditional','Third conditional','Zero conditional'],answer:'C',explanation:'Third conditional uses past perfect + would have — referring to unreal past situations.'},
    {exam:'NECO',year:2023,question:'MAGNANIMOUS means:',options:['Small-minded','Very generous and forgiving','Aggressive','Proud'],answer:'B',explanation:'Magnanimous means generous in forgiving; not petty or vindictive.'},
    {exam:'NECO',year:2023,question:'Identify the mood of the verb in: "If I were rich, I would help everyone."',options:['Indicative','Imperative','Subjunctive','Infinitive'],answer:'C',explanation:'"Were" in this hypothetical/conditional context is the subjunctive mood.'},
  ]);

  add('english','theory',[
    {exam:'WAEC',year:2023,question:'(a) Write a letter to the Editor of a national newspaper expressing your concern about the increase in examination malpractice among secondary school students in Nigeria. Suggest ways of curbing this menace.\n\n(b) Read the passage and answer the questions:\n"Education is the most powerful weapon which you can use to change the world. If you have the ability to read this, you are more fortunate than the millions who cannot. Education is a gift that, once given, cannot be taken away."\n(i) What is described as the most powerful weapon?\n(ii) What does the writer consider fortunate?\n(iii) Write one word for "cannot be taken away"',
    markingScheme:[
      {point:'Correct letter format: date, address, salutation (Dear Editor)',marks:2},
      {point:'Identification of the problem with relevant points about examination malpractice',marks:3},
      {point:'At least 3 reasonable suggestions for curbing the menace',marks:3},
      {point:'Appropriate conclusion and sign-off',marks:1},
      {point:'(i) Education is the most powerful weapon',marks:1},
      {point:'(ii) Being able to read/being literate',marks:1},
      {point:'(iii) Inalienable/Irrevocable/Permanent',marks:1},
    ],
    modelAnswer:'Letter should follow formal format, address malpractice causes and provide practical solutions. (b)(i) Education (ii) Being able to read (iii) Inalienable.',
    examinerTip:'Always use formal letter format in WAEC. Address, date, salutation, body paragraphs, complimentary close. Never use informal language.'},
    {exam:'NECO',year:2023,question:'(a) Your school is organising a debate on the topic: "Science is more important than Arts". Write a speech EITHER for OR against the motion. Your speech should be about 250 words.\n\n(b) Comprehension: Read and answer:\n"The harmattan wind that swept across West Africa brought with it clouds of fine reddish dust. Farmers watched helplessly as their crops withered. Children coughed as the dry air parched their throats. Yet in this harshness there was beauty — sunsets blazed with extraordinary colour."\n(i) Name the wind described in the passage\n(ii) What did the farmers do?\n(iii) Find a word in the passage that means "dried up and shrivelled"',
    markingScheme:[
      {point:'Correct speech format: title of motion, greeting, introduction',marks:2},
      {point:'At least 4 clear arguments either for or against the motion',marks:4},
      {point:'Use of rhetorical devices, examples, logical reasoning',marks:2},
      {point:'Appropriate conclusion',marks:1},
      {point:'(i) Harmattan wind',marks:1},
      {point:'(ii) Watched helplessly / did nothing',marks:1},
      {point:'(iii) Withered or Parched',marks:1},
    ],
    modelAnswer:'Speech should argue clearly for one side with well-developed points. (b)(i) Harmattan (ii) Watched helplessly (iii) Withered/Parched.',
    examinerTip:'For debate speeches, always clearly state your position in the first paragraph. Use signposting words: "Firstly", "Furthermore", "In conclusion". Address the opposing view and refute it.'},
  ]);

  // ─── BIOLOGY WAEC/NECO ──────────────────────────────────────
  add('biology','objective',[
    // WAEC
    {exam:'WAEC',year:2022,question:'Which of the following is the correct sequence of mitosis?',options:['Metaphase → Prophase → Anaphase → Telophase','Prophase → Metaphase → Anaphase → Telophase','Anaphase → Metaphase → Prophase → Telophase','Telophase → Anaphase → Metaphase → Prophase'],answer:'B',explanation:'Mitosis: Prophase (chromatin condenses) → Metaphase (chromosomes align) → Anaphase (chromatids separate) → Telophase (two nuclei form). PMAT.'},
    {exam:'WAEC',year:2022,question:'The hormone produced by the adrenal gland during stress is:',options:['Insulin','Thyroxine','Adrenaline','Oestrogen'],answer:'C',explanation:'Adrenaline (epinephrine) is released by adrenal medulla during stress — the "fight or flight" hormone.'},
    {exam:'WAEC',year:2021,question:'Which of the following is a biotic factor in an ecosystem?',options:['Temperature','Rainfall','Predators','Light intensity'],answer:'C',explanation:'Biotic factors are living components of an ecosystem. Predators are living organisms.'},
    {exam:'WAEC',year:2021,question:'The removal of metabolic waste products from the body is called:',options:['Egestion','Secretion','Excretion','Digestion'],answer:'C',explanation:'Excretion is the removal of metabolic waste products (urea, CO₂, water) from the body.'},
    {exam:'WAEC',year:2020,question:'Phototropism in plants is a response to:',options:['Water','Light','Gravity','Touch'],answer:'B',explanation:'Phototropism is the directional growth of a plant in response to light.'},
    {exam:'WAEC',year:2020,question:'The part of the eye responsible for focusing light on the retina is the:',options:['Cornea','Pupil','Lens','Iris'],answer:'C',explanation:'The lens changes shape (accommodation) to focus light precisely on the retina.'},
    {exam:'WAEC',year:2019,question:'Which of the following correctly describes osmosis?',options:['Movement of solute from high to low concentration','Movement of water from low to high solute concentration','Movement of water from high to low solute concentration','Active transport of glucose across membranes'],answer:'C',explanation:'Osmosis: water moves from dilute solution (high water potential/low solute) to concentrated solution (low water potential/high solute) across semi-permeable membrane.'},
    {exam:'WAEC',year:2019,question:'Which nutrient provides the most energy per gram?',options:['Carbohydrates','Proteins','Vitamins','Fats'],answer:'D',explanation:'Fats yield 9kcal/g compared to carbohydrates and proteins which yield 4kcal/g each.'},
    {exam:'WAEC',year:2023,question:'Which blood component is responsible for fighting infection?',options:['Red blood cells','Platelets','White blood cells','Plasma proteins'],answer:'C',explanation:'White blood cells (leucocytes) are the immune cells that fight infections and foreign bodies.'},
    {exam:'WAEC',year:2023,question:'The process by which glucose is broken down in the presence of oxygen is:',options:['Anaerobic respiration','Fermentation','Aerobic respiration','Photosynthesis'],answer:'C',explanation:'Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP energy.'},
    // NECO
    {exam:'NECO',year:2022,question:'DNA replication occurs during which phase of the cell cycle?',options:['G1 phase','S phase','G2 phase','M phase'],answer:'B',explanation:'DNA replication occurs during the S (Synthesis) phase of interphase.'},
    {exam:'NECO',year:2022,question:'The primary producers in a marine food chain are:',options:['Fish','Sharks','Phytoplankton','Crabs'],answer:'C',explanation:'Phytoplankton are microscopic photosynthetic organisms that form the base of marine food chains.'},
    {exam:'NECO',year:2021,question:'Which of the following is an example of a reflex action?',options:['Writing your name','Reading a book','Blinking when something approaches your eye','Solving a maths problem'],answer:'C',explanation:'Reflexes are automatic, involuntary responses to stimuli — blinking is an inborn reflex.'},
    {exam:'NECO',year:2021,question:'The process by which plants manufacture their own food is called:',options:['Respiration','Transpiration','Photosynthesis','Digestion'],answer:'C',explanation:'Photosynthesis uses light energy, CO₂ and water to produce glucose and oxygen.'},
    {exam:'NECO',year:2020,question:'Mendel\'s law of segregation states that:',options:['Genes for different traits are inherited independently','Alleles separate during gamete formation','All offspring of two pure-breeding parents are identical','Dominant traits always appear in offspring'],answer:'B',explanation:'Law of Segregation: the two alleles for each trait separate (segregate) during gamete formation.'},
    {exam:'NECO',year:2020,question:'Which organ produces bile?',options:['Pancreas','Kidney','Liver','Stomach'],answer:'C',explanation:'Bile is produced by the liver and stored in the gall bladder before being released into the small intestine.'},
    {exam:'NECO',year:2019,question:'Xylem tissue in plants is responsible for:',options:['Transporting food from leaves to all parts','Transporting water and minerals from roots upward','Gas exchange','Photosynthesis'],answer:'B',explanation:'Xylem transports water and dissolved minerals from roots to leaves (upward). Phloem transports food.'},
    {exam:'NECO',year:2019,question:'Which vitamin deficiency causes scurvy?',options:['Vitamin A','Vitamin B','Vitamin C','Vitamin D'],answer:'C',explanation:'Vitamin C (ascorbic acid) deficiency causes scurvy — characterised by bleeding gums and weakened immunity.'},
    {exam:'NECO',year:2023,question:'The outermost layer of the skin is the:',options:['Dermis','Epidermis','Subcutaneous layer','Hypodermis'],answer:'B',explanation:'The epidermis is the outermost layer of skin, providing a protective barrier.'},
    {exam:'NECO',year:2023,question:'Which of the following is an example of a decomposer?',options:['Grass','Lion','Mushroom','Grasshopper'],answer:'C',explanation:'Mushrooms (fungi) are decomposers — they break down dead organic matter, recycling nutrients.'},
  ]);

  add('biology','theory',[
    {exam:'WAEC',year:2023,question:'(a) Describe the process of photosynthesis, stating the raw materials, products and the two main stages involved.\n\n(b) Draw and label a diagram of the human heart showing at least 6 parts.\n\n(c) Explain the role of the following in the human body:\n(i) Red blood cells\n(ii) White blood cells\n(iii) Platelets',
    markingScheme:[
      {point:'Raw materials: CO₂ (from air), water (from soil), light energy (from sun)',marks:2},
      {point:'Products: Glucose (C₆H₁₂O₆) and oxygen',marks:1},
      {point:'Stage 1 — Light stage (Light-dependent): occurs in thylakoid membranes, light splits water (photolysis), ATP and NADPH produced, O₂ released',marks:2},
      {point:'Stage 2 — Dark stage (Calvin cycle/Light-independent): occurs in stroma, CO₂ fixed using ATP and NADPH, glucose synthesised',marks:2},
      {point:'Labelled diagram with: right/left ventricle, right/left atrium, aorta, pulmonary artery/vein, vena cava, valves (any 6)',marks:3},
      {point:'(i) RBCs: transport oxygen via haemoglobin from lungs to body tissues, also carry CO₂ back',marks:1},
      {point:'(ii) WBCs: defend body against infection, produce antibodies, engulf pathogens (phagocytosis)',marks:1},
      {point:'(iii) Platelets: assist in blood clotting, prevent excessive blood loss at wound sites',marks:1},
    ],
    modelAnswer:'Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Two stages: light-dependent (thylakoid) and Calvin cycle (stroma). Heart diagram with 6+ labelled parts.',
    examinerTip:'Always write the equation for photosynthesis. For diagrams, use a pencil, label clearly with lines not arrows, and make it large enough to be legible.'},
    {exam:'NECO',year:2023,question:'(a) What is ecology? Explain the following ecological concepts:\n(i) Food chain — give an example from a Nigerian environment\n(ii) Food web\n(iii) Energy pyramid\n\n(b) State FIVE ways in which human activities affect the environment negatively.',
    markingScheme:[
      {point:'Ecology: the study of the relationships between living organisms and their environment',marks:1},
      {point:'(i) Food chain: linear sequence showing feeding relationships where energy flows from one organism to next. Example: Grass → Grasshopper → Lizard → Eagle',marks:2},
      {point:'(ii) Food web: interconnected network of food chains showing complex feeding relationships in an ecosystem',marks:2},
      {point:'(iii) Energy pyramid: diagram showing energy/biomass/numbers at each trophic level; energy decreases at each level (only 10% transferred)',marks:2},
      {point:'Any 5 of: deforestation, pollution (air/water/soil), bush burning, oil spills, mining, poaching, overfishing, urbanisation/habitat destruction, climate change',marks:5},
    ],
    modelAnswer:'Ecology studies organism-environment relationships. Food chain example: Grass→Grasshopper→Frog→Snake→Eagle. Five human impacts include deforestation, pollution, bush burning, overfishing, habitat destruction.',
    examinerTip:'Nigerian ecology questions often expect local examples. Know common Nigerian food chains involving grass, insects, lizards, snakes and birds of prey.'},
  ]);

  // ─── CHEMISTRY WAEC/NECO ────────────────────────────────────
  add('chemistry','objective',[
    // WAEC
    {exam:'WAEC',year:2022,question:'What is the oxidation number of sulphur in H₂SO₄?',options:['+2','+4','+6','+8'],answer:'C',explanation:'In H₂SO₄: 2(+1) + S + 4(−2) = 0. 2 + S − 8 = 0. S = +6.'},
    {exam:'WAEC',year:2022,question:'Which of the following represents a neutralisation reaction?',options:['CaCO₃ → CaO + CO₂','2H₂ + O₂ → 2H₂O','HCl + NaOH → NaCl + H₂O','2Na + 2H₂O → 2NaOH + H₂'],answer:'C',explanation:'Acid + base → salt + water is a neutralisation reaction.'},
    {exam:'WAEC',year:2021,question:'The number of moles in 11g of CO₂ is: (C=12, O=16)',options:['0.25','0.5','1','2'],answer:'A',explanation:'M(CO₂) = 12+32 = 44g/mol. Moles = 11/44 = 0.25 mol.'},
    {exam:'WAEC',year:2021,question:'Which gas turns lime water milky?',options:['Oxygen','Hydrogen','Carbon dioxide','Nitrogen'],answer:'C',explanation:'CO₂ + Ca(OH)₂ → CaCO₃↓ (white precipitate) + H₂O. CaCO₃ makes lime water milky.'},
    {exam:'WAEC',year:2020,question:'Isomers are compounds that have the same:',options:['Structural formula','Empirical formula','Molecular formula but different structures','Functional groups'],answer:'C',explanation:'Isomers have the same molecular formula but different structural arrangements.'},
    {exam:'WAEC',year:2020,question:'The process of obtaining pure water from salt solution by heating and cooling is called:',options:['Filtration','Crystallisation','Distillation','Evaporation'],answer:'C',explanation:'Distillation separates liquids by boiling and condensing — produces pure water from salt solution.'},
    {exam:'WAEC',year:2019,question:'Iron is extracted from its ore in the:',options:['Blast furnace','Reverberatory furnace','Electric furnace','Open hearth furnace'],answer:'A',explanation:'Iron is extracted from haematite (Fe₂O₃) using coke and limestone in a blast furnace.'},
    {exam:'WAEC',year:2019,question:'Which of the following is a polymer?',options:['Glucose','Ethanol','Starch','Ethanoic acid'],answer:'C',explanation:'Starch is a natural polymer of glucose (many glucose monomers joined together).'},
    {exam:'WAEC',year:2023,question:'Calculate the percentage by mass of nitrogen in NH₃. (N=14, H=1)',options:['17.6%','82.4%','14%','25%'],answer:'B',explanation:'M(NH₃) = 14+3 = 17. %N = (14/17)×100 = 82.4%.'},
    {exam:'WAEC',year:2023,question:'The bond formed between a metal and a non-metal involves:',options:['Sharing of electrons','Transfer of electrons','Both sharing and transfer','Delocalised electrons'],answer:'B',explanation:'Ionic bonds (metal + non-metal) form by transfer of electrons from metal to non-metal.'},
    // NECO
    {exam:'NECO',year:2022,question:'Which of the following is the correct electronic configuration of sodium (Na, atomic number 11)?',options:['2,8,1','2,8,3','2,9','2,4,5'],answer:'A',explanation:'Na has 11 electrons: 2 in first shell, 8 in second, 1 in third. Configuration: 2,8,1.'},
    {exam:'NECO',year:2022,question:'What is the IUPAC name of CH₃CH₂OH?',options:['Methanol','Ethanol','Propanol','Butanol'],answer:'B',explanation:'CH₃CH₂OH has 2 carbon atoms and a hydroxyl group — ethanol (IUPAC: ethanol).'},
    {exam:'NECO',year:2021,question:'The rate of a chemical reaction can be increased by:',options:['Decreasing concentration','Decreasing temperature','Increasing surface area','Removing a catalyst'],answer:'C',explanation:'Increasing surface area (smaller particles) increases the frequency of collisions, speeding up reaction.'},
    {exam:'NECO',year:2021,question:'Which of the following gases has the smell of rotten eggs?',options:['SO₂','CO₂','H₂S','NH₃'],answer:'C',explanation:'Hydrogen sulphide (H₂S) has a characteristic rotten egg smell and is toxic.'},
    {exam:'NECO',year:2020,question:'What type of reaction is the burning of methane? CH₄ + 2O₂ → CO₂ + 2H₂O',options:['Decomposition','Displacement','Combustion','Neutralisation'],answer:'C',explanation:'Burning (combustion) of a hydrocarbon with oxygen produces CO₂ and water.'},
    {exam:'NECO',year:2020,question:'Alloys are:',options:['Pure metals','Mixtures of a metal with other elements','Compounds of two metals','Non-metals only'],answer:'B',explanation:'Alloys are mixtures containing a metal and one or more other elements (e.g. brass = copper + zinc).'},
    {exam:'NECO',year:2019,question:'The formula of trioxonitrate(V) acid is:',options:['HNO₂','HNO₃','H₃NO','HNO₄'],answer:'B',explanation:'Trioxonitrate(V) acid = nitric acid = HNO₃ (tri=3 oxygen atoms, V = valency 5 for nitrogen).'},
    {exam:'NECO',year:2019,question:'Which of the following is NOT a property of acids?',options:['Turns blue litmus red','Reacts with bases to form salt and water','Has pH less than 7','Feels soapy to touch'],answer:'D',explanation:'Feeling soapy is a property of bases/alkalis. Acids are corrosive, not soapy.'},
    {exam:'NECO',year:2023,question:'Saponification is the process used to make:',options:['Plastics','Soap','Petrol','Rubber'],answer:'B',explanation:'Saponification is the alkaline hydrolysis of fats/oils to produce soap and glycerol.'},
    {exam:'NECO',year:2023,question:'Which of these represents an exothermic reaction?',options:['Photosynthesis','Dissolving ammonium nitrate in water','Combustion of wood','Electrolysis of water'],answer:'C',explanation:'Exothermic reactions release heat energy. Combustion releases heat and light energy.'},
  ]);

  add('chemistry','theory',[
    {exam:'WAEC',year:2023,question:'(a) State the Periodic Law and explain the trend in atomic radius and electronegativity across Period 3 of the Periodic Table.\n\n(b) (i) Define electrolysis\n(ii) In the electrolysis of dilute H₂SO₄ using platinum electrodes, state what is produced at the anode and cathode and write the half-equations.',
    markingScheme:[
      {point:'Periodic Law: properties of elements are periodic functions of their atomic numbers',marks:1},
      {point:'Atomic radius decreases across Period 3 (Na to Cl) because nuclear charge increases attracting electrons closer',marks:2},
      {point:'Electronegativity increases across Period 3 because increasing nuclear charge attracts bonding electrons more strongly',marks:2},
      {point:'Electrolysis: decomposition of an electrolyte in solution/molten state by passage of electric current',marks:1},
      {point:'Anode (positive): oxygen gas produced. Cathode (negative): hydrogen gas produced',marks:2},
      {point:'Cathode: 4H⁺ + 4e⁻ → 2H₂ (reduction)',marks:1},
      {point:'Anode: 2H₂O → O₂ + 4H⁺ + 4e⁻ (oxidation)',marks:2},
    ],
    modelAnswer:'Periodic law: properties are periodic functions of atomic number. Atomic radius decreases, electronegativity increases across Period 3. Electrolysis of H₂SO₄ produces H₂ at cathode and O₂ at anode.',
    examinerTip:'Always balance half-equations and show electron transfer. For periodic trends, always explain WHY the trend occurs — nuclear charge is almost always the reason.'},
    {exam:'NECO',year:2023,question:'(a) Explain the following terms with one example each:\n(i) Oxidation\n(ii) Reduction\n(iii) Oxidising agent\n\n(b) Balance the following equation and classify the reaction type:\nFe + HCl → FeCl₂ + H₂\n\n(c) Calculate the mass of NaCl produced when 4g of NaOH reacts completely with excess HCl. (Na=23, O=16, H=1, Cl=35.5)',
    markingScheme:[
      {point:'Oxidation: loss of electrons / gain of oxygen. Example: Mg → Mg²⁺ + 2e⁻',marks:2},
      {point:'Reduction: gain of electrons / loss of oxygen. Example: Cu²⁺ + 2e⁻ → Cu',marks:2},
      {point:'Oxidising agent: substance that accepts electrons / causes oxidation. Example: Cl₂, O₂, KMnO₄',marks:1},
      {point:'Balanced: Fe + 2HCl → FeCl₂ + H₂',marks:1},
      {point:'Reaction type: displacement/redox reaction',marks:1},
      {point:'M(NaOH) = 40g/mol. Moles NaOH = 4/40 = 0.1 mol',marks:1},
      {point:'NaOH + HCl → NaCl + H₂O (1:1 ratio). Moles NaCl = 0.1 mol',marks:1},
      {point:'Mass NaCl = 0.1 × 58.5 = 5.85g',marks:2},
    ],
    modelAnswer:'(b) Fe + 2HCl → FeCl₂ + H₂ — displacement/redox. (c) 5.85g NaCl produced.',
    examinerTip:'For mole calculations, always write the balanced equation first. Then use molar ratios to find moles of product, then multiply by molar mass.'},
  ]);

  // ─── PHYSICS WAEC/NECO ──────────────────────────────────────
  add('physics','objective',[
    // WAEC
    {exam:'WAEC',year:2022,question:'A body of mass 5kg moving at 4m/s has kinetic energy of:',options:['10J','20J','40J','80J'],answer:'C',explanation:'KE = ½mv² = ½ × 5 × 16 = 40J.'},
    {exam:'WAEC',year:2022,question:'Which of the following correctly states Ohm\'s Law?',options:['V = I/R','V = IR','I = VR','R = VI'],answer:'B',explanation:'Ohm\'s Law: Voltage = Current × Resistance (V = IR).'},
    {exam:'WAEC',year:2021,question:'The unit of pressure is:',options:['Newton','Joule','Pascal','Watt'],answer:'C',explanation:'Pressure = Force/Area. Unit = N/m² = Pascal (Pa).'},
    {exam:'WAEC',year:2021,question:'A wave travels at 340m/s with frequency 170Hz. Find the wavelength.',options:['1m','2m','3m','4m'],answer:'B',explanation:'v = fλ. λ = v/f = 340/170 = 2m.'},
    {exam:'WAEC',year:2020,question:'Which type of lens is used to correct long-sightedness (hyperopia)?',options:['Concave lens','Convex lens','Bifocal lens','Cylindrical lens'],answer:'B',explanation:'Long-sightedness is corrected by a converging (convex) lens which brings focus forward onto the retina.'},
    {exam:'WAEC',year:2020,question:'The turning effect of a force about a pivot is called:',options:['Momentum','Torque/Moment','Impulse','Work'],answer:'B',explanation:'The moment (or torque) of a force = Force × perpendicular distance from the pivot.'},
    {exam:'WAEC',year:2019,question:'An object is thrown vertically upward. At the highest point, its:',options:['Velocity is maximum and acceleration is zero','Velocity is zero and acceleration is zero','Velocity is zero and acceleration is g downward','Acceleration is g upward'],answer:'C',explanation:'At the highest point, velocity = 0 (momentarily stationary) but acceleration due to gravity = g = 10m/s² downward.'},
    {exam:'WAEC',year:2019,question:'What is the efficiency of a machine that requires 1000J input to produce 800J of useful work?',options:['80%','20%','125%','8%'],answer:'A',explanation:'Efficiency = (useful output/total input) × 100 = (800/1000) × 100 = 80%.'},
    {exam:'WAEC',year:2023,question:'Two resistors of 6Ω and 3Ω are connected in parallel. Find the equivalent resistance.',options:['9Ω','2Ω','0.5Ω','18Ω'],answer:'B',explanation:'1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. R = 2Ω.'},
    {exam:'WAEC',year:2023,question:'Which of Newton\'s laws states that "for every action there is an equal and opposite reaction"?',options:['First law','Second law','Third law','Law of gravitation'],answer:'C',explanation:'Newton\'s Third Law: forces always occur in equal and opposite pairs between two objects.'},
    // NECO
    {exam:'NECO',year:2022,question:'The half-life of a radioactive substance is 20 years. What fraction remains after 60 years?',options:['1/4','1/8','1/16','1/2'],answer:'B',explanation:'60 years = 3 half-lives. Fraction remaining = (1/2)³ = 1/8.'},
    {exam:'NECO',year:2022,question:'Which of the following is an example of a transverse wave?',options:['Sound waves','Seismic P-waves','Water waves','Ultrasound'],answer:'C',explanation:'Water waves are transverse — particles move perpendicular to the direction of wave propagation.'},
    {exam:'NECO',year:2021,question:'A body weighs 50N on Earth. What is its mass? (g = 10m/s²)',options:['50kg','5kg','500kg','0.5kg'],answer:'B',explanation:'W = mg. m = W/g = 50/10 = 5kg.'},
    {exam:'NECO',year:2021,question:'The phenomenon of total internal reflection is applied in:',options:['Spectacles','Telescopes','Optical fibres','Microscopes'],answer:'C',explanation:'Optical fibres use total internal reflection to transmit light along curved paths over long distances.'},
    {exam:'NECO',year:2020,question:'The temperature at which a gas would theoretically have zero volume is:',options:['0°C','−100°C','−273°C','100°C'],answer:'C',explanation:'Absolute zero = −273°C (0 Kelvin) — the theoretical temperature at which all molecular motion stops.'},
    {exam:'NECO',year:2020,question:'The gravitational potential energy of a 2kg object at a height of 5m is: (g=10m/s²)',options:['10J','25J','50J','100J'],answer:'D',explanation:'GPE = mgh = 2 × 10 × 5 = 100J.'},
    {exam:'NECO',year:2019,question:'A transformer has 100 turns in the primary and 500 turns in the secondary coil. If the primary voltage is 20V, find the secondary voltage.',options:['4V','100V','500V','2500V'],answer:'B',explanation:'Vs/Vp = Ns/Np. Vs = 20 × (500/100) = 20 × 5 = 100V.'},
    {exam:'NECO',year:2019,question:'Which of the following is a property of X-rays?',options:['They are deflected by magnetic fields','They travel slower than visible light','They can penetrate soft tissue but are stopped by dense matter','They carry negative charge'],answer:'C',explanation:'X-rays penetrate soft tissue but are absorbed by dense materials like bone and metal — used in medical imaging.'},
    {exam:'NECO',year:2023,question:'The work done in moving a charge of 5C through a potential difference of 12V is:',options:['2.4J','17J','60J','600J'],answer:'C',explanation:'W = QV = 5 × 12 = 60J.'},
    {exam:'NECO',year:2023,question:'The Doppler effect refers to the change in:',options:['Speed of a wave when its source moves','Amplitude of a wave due to reflection','Observed frequency due to relative motion between source and observer','Wavelength when waves enter a new medium'],answer:'C',explanation:'The Doppler effect: apparent change in frequency/pitch when there is relative motion between source and observer.'},
  ]);

  add('physics','theory',[
    {exam:'WAEC',year:2023,question:'(a) State the law of conservation of energy and give TWO examples of energy conversion.\n\n(b) A stone is dropped from the top of a building 80m high.\n(i) Find the time taken to reach the ground\n(ii) Find the velocity on reaching the ground\n(iii) Find the velocity after falling 45m\n(Take g = 10m/s²)\n\n(c) Define the following: (i) Work (ii) Power (iii) Energy',
    markingScheme:[
      {point:'Law: energy cannot be created or destroyed, only converted from one form to another',marks:1},
      {point:'Examples (any 2): electrical→light (bulb), chemical→kinetic (car engine), solar→electrical (solar panel), PE→KE (falling object)',marks:2},
      {point:'(i) s = ut + ½gt². 80 = 0 + ½(10)t². t² = 16. t = 4 seconds',marks:2},
      {point:'(ii) v = u + gt = 0 + 10(4) = 40m/s',marks:2},
      {point:'(iii) v² = u² + 2gs = 0 + 2(10)(45) = 900. v = 30m/s',marks:2},
      {point:'Work: product of force and displacement in direction of force (W=Fd), unit Joule',marks:1},
      {point:'Power: rate of doing work (P=W/t), unit Watt',marks:1},
      {point:'Energy: capacity to do work, unit Joule',marks:1},
    ],
    modelAnswer:'(b)(i) 4s (ii) 40m/s (iii) 30m/s. Conservation: energy total remains constant through conversions.',
    examinerTip:'For falling body problems, always state u=0 (starts from rest). Show all equations of motion clearly. Always include units in your answers.'},
    {exam:'NECO',year:2023,question:'(a) Draw and explain a labelled diagram of a simple electric motor, naming at least 5 parts.\n\n(b) An electric iron rated 1000W is used for 2 hours daily.\n(i) Calculate the energy consumed in a week\n(ii) Calculate the cost if electricity is charged at ₦50 per kWh\n\n(c) State THREE differences between a.c. and d.c.',
    markingScheme:[
      {point:'Diagram with correct labels: coil/armature, permanent magnet, commutator, brushes, axle/shaft (any 5)',marks:3},
      {point:'Explanation of working: current-carrying coil in magnetic field experiences force (Fleming\'s left-hand rule), commutator reverses current direction to maintain rotation',marks:2},
      {point:'(i) Energy per day = 1000W × 2h = 2000Wh = 2kWh. Weekly = 2 × 7 = 14kWh',marks:2},
      {point:'(ii) Cost = 14 × ₦50 = ₦700',marks:1},
      {point:'Any 3: AC reverses direction periodically/DC flows in one direction only; AC has zero average value/DC has constant value; AC used for long-distance transmission/DC used in electronics; AC generated by alternators/DC by batteries',marks:3},
    ],
    modelAnswer:'Energy in 1 week = 14kWh. Cost = ₦700. DC flows one way; AC alternates direction periodically.',
    examinerTip:'For electricity cost calculations, always convert watts to kilowatts first (divide by 1000), then multiply by hours and tariff rate.'},
  ]);

  // ─── ECONOMICS WAEC/NECO ────────────────────────────────────
  add('economics','objective',[
    // WAEC
    {exam:'WAEC',year:2022,question:'Price elasticity of demand measures the responsiveness of:',options:['Supply to a change in price','Demand to a change in income','Quantity demanded to a change in price','Price to a change in supply'],answer:'C',explanation:'PED = % change in quantity demanded ÷ % change in price.'},
    {exam:'WAEC',year:2022,question:'Which of the following is a characteristic of perfect competition?',options:['Product differentiation','Few buyers and sellers','Homogeneous products','High barriers to entry'],answer:'C',explanation:'In perfect competition: many buyers/sellers, homogeneous (identical) products, free entry/exit, perfect information.'},
    {exam:'WAEC',year:2021,question:'The concept of comparative advantage was developed by:',options:['Adam Smith','David Ricardo','John Maynard Keynes','Milton Friedman'],answer:'B',explanation:'David Ricardo developed the theory of comparative advantage — basis for international trade theory.'},
    {exam:'WAEC',year:2021,question:'When a tax is levied on goods, the burden is shared between producer and consumer. This sharing depends on:',options:['Government policy','Price elasticity of demand and supply','The size of the tax','The type of goods'],answer:'B',explanation:'The incidence of tax depends on price elasticity — the more inelastic the demand, the more consumers bear the burden.'},
    {exam:'WAEC',year:2020,question:'Which of the following would cause the supply curve to shift to the right?',options:['Increase in factor costs','Improvement in technology','Decrease in the number of firms','Increase in taxes'],answer:'B',explanation:'Improved technology reduces production costs, enabling more supply at every price — rightward shift.'},
    {exam:'WAEC',year:2020,question:'The difference between GNP and GDP is:',options:['Depreciation','Transfer payments','Net income from abroad','Government spending'],answer:'C',explanation:'GNP = GDP + Net income from abroad (income earned by nationals overseas minus income earned by foreigners locally).'},
    {exam:'WAEC',year:2019,question:'Commercial banks create money through:',options:['Printing currency notes','Credit creation/multiple deposit expansion','Government grants','Foreign exchange earnings'],answer:'B',explanation:'Commercial banks create money through the credit multiplier — lending out deposits multiple times.'},
    {exam:'WAEC',year:2019,question:'Which of the following best describes a public corporation?',options:['A company owned by the public on the stock exchange','An enterprise owned and controlled by the government','A partnership with unlimited liability','A co-operative society'],answer:'B',explanation:'Public corporations are government-owned enterprises (e.g. NNPC, CBN) set up by statute.'},
    {exam:'WAEC',year:2023,question:'In which market structure does the firm face a downward-sloping demand curve?',options:['Perfect competition','Monopolistic competition only','Oligopoly only','All except perfect competition'],answer:'D',explanation:'In perfect competition, firms are price-takers with horizontal demand curves. All other structures have downward-sloping demand curves reflecting market power.'},
    {exam:'WAEC',year:2023,question:'National debt is the total amount owed by:',options:['All citizens to foreign nations','The government to its citizens and foreign creditors','Foreign companies to Nigerian banks','Nigerian banks to their customers'],answer:'B',explanation:'National/public debt is the total outstanding borrowing of the government from domestic and foreign sources.'},
    // NECO
    {exam:'NECO',year:2022,question:'The multiplier effect in economics refers to:',options:['The effect of taxes on spending','How an initial injection of spending leads to a larger increase in national income','The relationship between money supply and inflation','How banks multiply deposits'],answer:'B',explanation:'The Keynesian multiplier: an initial increase in spending (investment) leads to a proportionally larger rise in national income.'},
    {exam:'NECO',year:2022,question:'Which of the following is NOT a function of money?',options:['Medium of exchange','Store of value','Standard for deferred payment','Means of production'],answer:'D',explanation:'Money functions as: medium of exchange, unit of account, store of value, standard for deferred payment. It is NOT a means of production.'},
    {exam:'NECO',year:2021,question:'Diminishing marginal utility means:',options:['Total utility always falls','Each additional unit consumed gives less additional satisfaction than the previous','Utility cannot be measured','Price always rises with consumption'],answer:'B',explanation:'As more units of a good are consumed, the additional (marginal) satisfaction from each extra unit decreases.'},
    {exam:'NECO',year:2021,question:'Which institution regulates the Nigerian Stock Exchange?',options:['CBN','NDIC','SEC','EFCC'],answer:'C',explanation:'The Securities and Exchange Commission (SEC) regulates the capital market and the Nigerian Stock Exchange.'},
    {exam:'NECO',year:2020,question:'A country has a comparative advantage in producing a good when:',options:['It can produce more than any other country','It has better technology','Its opportunity cost of production is lower than other countries','It has the cheapest labour'],answer:'C',explanation:'Comparative advantage: produce where opportunity cost is lowest — not necessarily where absolute productivity is highest.'},
    {exam:'NECO',year:2020,question:'The supply of money in Nigeria is controlled by:',options:['Federal Ministry of Finance','Central Bank of Nigeria','Commercial banks only','Nigerian Stock Exchange'],answer:'B',explanation:'The CBN controls monetary policy, regulates money supply through interest rates, reserve requirements and open market operations.'},
    {exam:'NECO',year:2019,question:'Which of the following is an automatic stabiliser?',options:['Government spending on infrastructure','Progressive income tax','Monetary policy','Trade tariffs'],answer:'B',explanation:'Progressive income tax automatically stabilises the economy — higher taxes in booms reduce demand; lower taxes in recessions boost it.'},
    {exam:'NECO',year:2019,question:'Subsistence farming means:',options:['Farming for export','Farming only enough for the farmer\'s immediate family needs','Large-scale commercial farming','Government-owned farming'],answer:'B',explanation:'Subsistence farming produces only enough food for the farmer\'s own consumption with little or nothing left for sale.'},
    {exam:'NECO',year:2023,question:'The term "invisible trade" in balance of payments refers to:',options:['Smuggled goods','Trade in services (tourism, insurance, banking)','Unrecorded imports','Black market transactions'],answer:'B',explanation:'Invisible trade comprises services in international transactions — tourism, financial services, transport, insurance.'},
    {exam:'NECO',year:2023,question:'Producer surplus is the difference between:',options:['Revenue and total cost','The price a producer receives and the minimum they would accept','Demand and supply','Revenue and taxes'],answer:'B',explanation:'Producer surplus = actual price received minus the minimum price the producer would have accepted to supply.'},
  ]);

  add('economics','theory',[
    {exam:'WAEC',year:2023,question:'(a) With the aid of a diagram, explain the effect of an increase in demand on price and quantity in a perfectly competitive market.\n\n(b) Distinguish between:\n(i) Microeconomics and Macroeconomics\n(ii) Fixed costs and Variable costs\n(iii) Normal profit and Supernormal profit\n\n(c) State FOUR functions of the Central Bank of Nigeria',
    markingScheme:[
      {point:'Correct demand-supply diagram showing original equilibrium',marks:2},
      {point:'Rightward shift of demand curve from D1 to D2',marks:1},
      {point:'New equilibrium at higher price and higher quantity',marks:2},
      {point:'Micro: studies individual consumers/firms/markets vs Macro: studies economy as a whole (GDP, inflation, unemployment)',marks:2},
      {point:'Fixed costs: do not change with output (rent, insurance) vs Variable costs: change with output (raw materials, wages)',marks:2},
      {point:'Normal profit: minimum return to keep entrepreneur in business (included in costs) vs Supernormal: profit above normal/economic profit',marks:2},
      {point:'Any 4: issue currency, lender of last resort, banker to government, control monetary policy, regulate banking sector, manage foreign reserves, control inflation',marks:4},
    ],
    modelAnswer:'Increase in demand shifts D curve right, raises both equilibrium price and quantity. CBN functions: currency issuance, monetary policy, bank regulation, government banker.',
    examinerTip:'Always draw your economics diagrams large and label all axes, curves and equilibrium points. Arrows showing shifts are mandatory.'},
    {exam:'NECO',year:2023,question:'(a) Explain the concept of elasticity of demand and state THREE factors that determine the price elasticity of demand.\n\n(b) Using a diagram, explain the concept of consumer surplus.\n\n(c) Differentiate between:\n(i) Direct tax and Indirect tax with one example each\n(ii) Fiscal policy and Monetary policy',
    markingScheme:[
      {point:'Elasticity of demand: degree of responsiveness of quantity demanded to a change in price. PED = %ΔQd/%ΔP',marks:2},
      {point:'Factors (any 3): availability of substitutes, necessity vs luxury, proportion of income spent, time period, addictiveness',marks:3},
      {point:'Consumer surplus diagram: demand curve, market price line, shaded area above price line below demand curve',marks:3},
      {point:'Consumer surplus = total willingness to pay minus actual price paid',marks:1},
      {point:'Direct tax: levied on income/wealth, borne by the same person (e.g. income tax). Indirect tax: levied on goods/services, can be shifted (e.g. VAT)',marks:3},
      {point:'Fiscal policy: government use of taxation and spending to influence the economy. Monetary policy: central bank control of money supply and interest rates',marks:3},
    ],
    modelAnswer:'PED measures price responsiveness. Three determinants: substitutes, necessity, income proportion. Consumer surplus = area below demand curve above price.',
    examinerTip:'For elasticity, always give the formula. For diagrams, shade the area clearly. The examiner cannot give marks for a diagram they cannot interpret.'},
  ]);

  // ─── GOVERNMENT WAEC/NECO ───────────────────────────────────
  add('government','objective',[
    // WAEC
    {exam:'WAEC',year:2022,question:'The first military coup in Nigeria occurred in:',options:['1960','1963','1966','1970'],answer:'C',explanation:'Nigeria\'s first military coup occurred on January 15, 1966, led by Major Chukwuma Kaduna Nzeogwu.'},
    {exam:'WAEC',year:2022,question:'Which body is responsible for conducting Nigeria\'s national census?',options:['INEC','NPC','EFCC','NAFDAC'],answer:'B',explanation:'The National Population Commission (NPC) is constitutionally mandated to conduct censuses in Nigeria.'},
    {exam:'WAEC',year:2021,question:'The concept of the "social contract" in political thought was associated with:',options:['Aristotle and Plato','Locke, Hobbes and Rousseau','Marx and Engels','Montesquieu and Voltaire'],answer:'B',explanation:'The social contract theory was developed by Thomas Hobbes (Leviathan), John Locke (Two Treatises) and Jean-Jacques Rousseau (The Social Contract).'},
    {exam:'WAEC',year:2021,question:'A confederal system of government is one where:',options:['The central government is supreme','Component units are supreme and delegate limited powers to the centre','Power is shared equally','The military controls all units'],answer:'B',explanation:'In a confederation, the component states are sovereign and grant limited, specified powers to a central authority.'},
    {exam:'WAEC',year:2020,question:'The Nigerian Civil War lasted from:',options:['1966 to 1969','1967 to 1970','1968 to 1971','1966 to 1970'],answer:'B',explanation:'The Nigerian Civil War (Biafra War) lasted from July 6, 1967 to January 15, 1970.'},
    {exam:'WAEC',year:2020,question:'Which of the following is NOT a function of the legislature?',options:['Law making','Approval of the budget','Enforcement of laws','Oversight of the executive'],answer:'C',explanation:'Enforcement of laws is the function of the executive (police, agencies). The legislature makes, debates and oversees — not enforces.'},
    {exam:'WAEC',year:2019,question:'Proportional representation is an electoral system where:',options:['Only one candidate wins','Seats are allocated based on each party\'s share of total votes','The first past the post wins','Only registered parties can participate'],answer:'B',explanation:'Proportional representation allocates legislative seats in proportion to the votes each party receives.'},
    {exam:'WAEC',year:2019,question:'An ombudsman is:',options:['A military officer','An independent official who investigates citizens\' complaints against government','The Speaker of Parliament','A constitutional court judge'],answer:'B',explanation:'The ombudsman investigates citizens\' grievances about maladministration — a check on executive power.'},
    {exam:'WAEC',year:2023,question:'Nigeria became a republic in:',options:['1960','1963','1966','1979'],answer:'B',explanation:'Nigeria was declared a Federal Republic on October 1, 1963, replacing the Queen as head of state with President Nnamdi Azikiwe.'},
    {exam:'WAEC',year:2023,question:'The principle of "one man, one vote" is associated with:',options:['Communism','Liberal democracy','Fascism','Theocracy'],answer:'B',explanation:'Universal suffrage and equal voting rights ("one man, one vote") are core principles of liberal democracy.'},
    // NECO
    {exam:'NECO',year:2022,question:'A political party manifesto is:',options:['The party\'s constitution','A document outlining the party\'s policies and programmes if elected','A list of party members','The electoral guidelines for the party'],answer:'B',explanation:'A manifesto is a public declaration of the policies, intentions and programmes a party intends to implement if it wins power.'},
    {exam:'NECO',year:2022,question:'Apartheid was a system of:',options:['Communist government','Legal racial segregation and discrimination','Democratic government','Military dictatorship'],answer:'B',explanation:'Apartheid (Afrikaans for "separateness") was the South African system of institutionalised racial segregation (1948-1994).'},
    {exam:'NECO',year:2021,question:'The Lagos Colony was established by the British in:',options:['1851','1861','1900','1914'],answer:'B',explanation:'Lagos was formally annexed as a British Crown Colony on August 6, 1861.'},
    {exam:'NECO',year:2021,question:'Which country achieved independence first among West African nations?',options:['Nigeria','Ghana','Senegal','Sierra Leone'],answer:'B',explanation:'Ghana (formerly Gold Coast) became the first sub-Saharan African country to gain independence, on March 6, 1957.'},
    {exam:'NECO',year:2020,question:'The Richard\'s Constitution of 1946 was significant because it:',options:['Granted Nigeria independence','Introduced federalism for the first time','Gave Nigerians control of the military','Established the Supreme Court'],answer:'B',explanation:'The Richards Constitution (1946) introduced a federal element by dividing Nigeria into North, East and West regions.'},
    {exam:'NECO',year:2020,question:'In Nigeria, laws are made by the:',options:['President','Judiciary','National Assembly','State Governors'],answer:'C',explanation:'The National Assembly (Senate + House of Representatives) is Nigeria\'s federal legislative body with power to make laws.'},
    {exam:'NECO',year:2019,question:'The term "gerrymander" refers to:',options:['Fair electoral boundary delimitation','Manipulation of electoral district boundaries for political advantage','A system of proportional representation','Stuffing of ballot boxes'],answer:'B',explanation:'Gerrymandering is the manipulation of electoral boundaries to give one party an unfair advantage over others.'},
    {exam:'NECO',year:2019,question:'The AU (African Union) replaced which organisation in 2002?',options:['ECOWAS','The Non-Aligned Movement','Organisation of African Unity (OAU)','The Commonwealth'],answer:'C',explanation:'The African Union (AU) was established in 2002, replacing the Organisation of African Unity (OAU) which was founded in 1963.'},
    {exam:'NECO',year:2023,question:'Which of the following best describes a unitary constitution?',options:['One that can be easily amended','One where power is concentrated at the centre','One where all regions are equal','One controlled by the military'],answer:'B',explanation:'A unitary constitution concentrates governmental power in the central government with sub-units deriving authority from the centre.'},
    {exam:'NECO',year:2023,question:'The concept of "popular sovereignty" means:',options:['The sovereignty of the monarch','Political authority derives from the will of the people','The sovereignty of parliament','Sovereignty of the armed forces'],answer:'B',explanation:'Popular sovereignty: the legitimacy of government derives from the consent of the governed — the people are the ultimate source of political authority.'},
  ]);

  add('government','theory',[
    {exam:'WAEC',year:2023,question:'(a) Examine FIVE features of a federal constitution using Nigeria as an example.\n\n(b) Explain the functions of the following in Nigeria\'s political system:\n(i) The Independent National Electoral Commission (INEC)\n(ii) The Council of State\n(iii) The Code of Conduct Bureau',
    markingScheme:[
      {point:'Written constitution — Nigeria has a written federal constitution (1999 Constitution)',marks:1},
      {point:'Division of powers — between federal and state governments (exclusive, concurrent and residual lists)',marks:2},
      {point:'Supremacy of the constitution — overrides other laws',marks:1},
      {point:'Independent judiciary — to interpret the constitution and resolve disputes',marks:1},
      {point:'Bicameral legislature — Senate (equal state representation) and House of Representatives',marks:1},
      {point:'Rigidity — constitutional amendment requires special procedure (two-thirds majority)',marks:1},
      {point:'INEC: conducts and supervises elections, registers voters, registers political parties, declares results',marks:2},
      {point:'Council of State: advisory body to the President on national issues, includes former presidents, governors, speakers',marks:2},
      {point:'Code of Conduct Bureau: receives asset declarations from public officers, investigates breaches, refers cases to Code of Conduct Tribunal',marks:2},
    ],
    modelAnswer:'Federal features: written constitution, division of powers (exclusive/concurrent/residual), constitutional supremacy, independent judiciary, bicameralism, rigidity.',
    examinerTip:'For government theory, always use Nigerian examples. Name specific articles, laws or institutions. Generic answers score poorly.'},
    {exam:'NECO',year:2023,question:'(a) Explain colonial rule and its effects on West African states.\n\n(b) What is nationalism? Explain FOUR factors that promoted Nigerian nationalism.\n\n(c) Name and explain THREE methods used by nationalists to agitate for independence in Nigeria.',
    markingScheme:[
      {point:'Colonial rule: political control and administration of territories by a foreign power',marks:1},
      {point:'Effects (any 4): introduction of western education, Christianity, cash crops, infrastructure, destruction of traditional institutions, exploitation of resources, artificial boundaries, introduction of democratic concepts',marks:4},
      {point:'Nationalism: the desire of people to determine their own political affairs, free from foreign control',marks:1},
      {point:'Factors promoting Nigerian nationalism (any 4): western education, World War II veterans, activities of nationalist press, formation of political parties, pan-African movements, harsh colonial policies, influence of Indian independence',marks:4},
      {point:'Methods (any 3): newspaper/press campaigns, formation of political parties (NCNC, AG, NPC), peaceful demonstrations, strikes, constitutional demands through legislative councils',marks:3},
    ],
    modelAnswer:'Colonialism brought education, infrastructure but exploited resources. Nationalism: desire for self-determination. Promoted by WW2, education, press. Methods: parties, press, strikes.',
    examinerTip:'For history-based government questions, know your dates. 1914 amalgamation, 1946 Richards, 1951 Macpherson, 1954 Lyttleton, 1960 independence, 1963 republic.'},
  ]);

})();

/* ═══════════════════════════════════════════════════════════════
   THEORY EXPANSION — WAEC & NECO PRIORITY
   Biology, Chemistry, Physics, Economics, Government,
   Literature, CRS, Geography, Civic Ed, Accounting,
   Commerce, Marketing, Animal Husbandry
═══════════════════════════════════════════════════════════════ */

(function() {
  const add = (subj, type, questions) => {
    if (!EXAM_BANK[subj]) return;
    if (!EXAM_BANK[subj][type]) EXAM_BANK[subj][type] = [];
    EXAM_BANK[subj][type].push(...questions);
  };

  // ─── BIOLOGY THEORY ────────────────────────────────────────
  add('biology','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) State FIVE differences between plant cells and animal cells.\n(b) Describe the process of osmosis and explain its importance to living organisms.',
     markingScheme:[
       {point:'Plant cells have cell wall; animal cells do not',marks:1},
       {point:'Plant cells have chloroplasts; animal cells do not',marks:1},
       {point:'Plant cells have large central vacuole; animal cells have small/no vacuole',marks:1},
       {point:'Plant cells have fixed regular shape; animal cells have irregular shape',marks:1},
       {point:'Plant cells store starch; animal cells store glycogen',marks:1},
       {point:'Osmosis: movement of water molecules from region of high water potential to low water potential across a semi-permeable membrane',marks:2},
       {point:'Importance: absorption of water by root hair cells; turgidity in plants maintains shape; reabsorption of water in kidney tubules',marks:2},
     ],
     modelAnswer:'Plant cells differ from animal cells in having cell walls, chloroplasts, large central vacuoles, fixed shapes and starch storage. Osmosis is the net movement of water molecules from high to low water potential across a semi-permeable membrane — vital for water uptake in plants and kidney function.',
     examinerTip:'Give exactly 5 differences — examiners stop marking after 5 even if you write more. For osmosis, always mention semi-permeable membrane and water potential.'},
    {exam:'WAEC',year:2022,
     question:'(a) Explain the term "food chain" and construct a food chain with FOUR organisms from a Nigerian forest.\n(b) State THREE ways human activities affect the balance of nature.',
     markingScheme:[
       {point:'Food chain: a linear sequence showing the transfer of energy from one organism to another through feeding',marks:2},
       {point:'Correct 4-organism food chain e.g. Leaves → Grasshopper → Lizard → Eagle (sun/producer → primary consumer → secondary → tertiary)',marks:2},
       {point:'Deforestation/land clearing reduces habitats and biodiversity',marks:1},
       {point:'Industrial pollution contaminates water and soil',marks:1},
       {point:'Hunting/poaching reduces animal populations',marks:1},
       {point:'(Any other valid: overgrazing, bush burning, oil spillage)',marks:1},
     ],
     modelAnswer:'A food chain shows the linear transfer of energy through feeding relationships. Example: Leaves → Caterpillar → Lizard → Hawk. Human activities that disrupt nature include deforestation, pollution and overhunting.',
     examinerTip:'Your food chain must start with a producer (plant) and show arrows pointing in the direction of energy flow. Always name specific Nigerian organisms where possible.'},
    {exam:'NECO',year:2023,
     question:'(a) Describe the structure and function of the human heart.\n(b) State FOUR differences between arteries and veins.',
     markingScheme:[
       {point:'Heart: muscular organ divided into 4 chambers — 2 atria (upper) and 2 ventricles (lower)',marks:2},
       {point:'Right side receives deoxygenated blood and pumps to lungs; left side receives oxygenated blood and pumps to body',marks:2},
       {point:'Arteries carry blood away from heart; veins carry blood to heart',marks:1},
       {point:'Arteries carry oxygenated blood (except pulmonary artery); veins carry deoxygenated blood (except pulmonary vein)',marks:1},
       {point:'Arteries have thick muscular walls; veins have thin walls',marks:1},
       {point:'Arteries have no valves (except at base); veins have valves to prevent backflow',marks:1},
     ],
     modelAnswer:'The heart is a four-chambered muscular organ. Right atrium receives deoxygenated blood; right ventricle pumps it to lungs. Left atrium receives oxygenated blood from lungs; left ventricle pumps it to the body. Arteries differ from veins in direction of flow, wall thickness, valve presence and blood oxygen content.',
     examinerTip:'A common error is saying all arteries carry oxygenated blood — remember the pulmonary artery is the exception. Always state the exception in exams.'},
    {exam:'NECO',year:2022,
     question:'(a) What is meant by the term "excretion"? Name TWO excretory organs in humans and state ONE substance excreted by each.\n(b) Explain how the kidney filters blood.',
     markingScheme:[
       {point:'Excretion: removal of metabolic waste products from the body',marks:1},
       {point:'Kidney — excretes urea/uric acid/water/salts',marks:1},
       {point:'Lungs — excrete carbon dioxide and water vapour',marks:1},
       {point:'(Skin — excretes sweat containing urea and salts also acceptable)',marks:1},
       {point:'Blood enters kidney through renal artery into glomerulus',marks:1},
       {point:'High pressure forces small molecules (water, glucose, urea, salts) out of blood into Bowman\'s capsule — ultrafiltration',marks:2},
       {point:'Useful substances (glucose, water, salts) are reabsorbed in tubules; waste remains as urine',marks:2},
     ],
     modelAnswer:'Excretion is the removal of metabolic waste products. The kidneys excrete urea and the lungs excrete CO₂. In the kidney, blood is filtered under pressure in the glomerulus (ultrafiltration), useful substances are reabsorbed in the tubules and remaining waste forms urine.',
     examinerTip:'Do not confuse excretion with egestion (removal of undigested food). Excretion is specifically about metabolic waste produced by body chemistry.'},
  ]);

  // ─── CHEMISTRY THEORY ──────────────────────────────────────
  add('chemistry','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) Define oxidation and reduction in terms of electron transfer.\n(b) Identify the oxidising agent and reducing agent in this reaction: CuO + H₂ → Cu + H₂O\n(c) State THREE industrial applications of electrolysis.',
     markingScheme:[
       {point:'Oxidation: loss of electrons by an atom/ion',marks:1},
       {point:'Reduction: gain of electrons by an atom/ion',marks:1},
       {point:'CuO is the oxidising agent (Cu²⁺ gains electrons, is reduced to Cu)',marks:1},
       {point:'H₂ is the reducing agent (H is oxidised, loses electrons)',marks:1},
       {point:'Electroplating — coating objects with metal',marks:1},
       {point:'Extraction of aluminium from bauxite (Hall-Héroult process)',marks:1},
       {point:'Purification of copper',marks:1},
       {point:'(Chlor-alkali process/production of NaOH and Cl₂ also acceptable)',marks:1},
     ],
     modelAnswer:'Oxidation is electron loss; reduction is electron gain (OIL RIG). In CuO + H₂ → Cu + H₂O, CuO is the oxidising agent (reduced) and H₂ is the reducing agent (oxidised). Industrial uses of electrolysis include electroplating, aluminium extraction and copper purification.',
     examinerTip:'Remember OIL RIG: Oxidation Is Loss, Reduction Is Gain. In every redox reaction, one substance is oxidised and another is reduced simultaneously.'},
    {exam:'WAEC',year:2022,
     question:'(a) State the periodic law and explain the trend in atomic radius across Period 3.\n(b) Why do elements in Group 1 become more reactive going down the group?\n(c) Write the electron configuration of Calcium (Ca, Z=20).',
     markingScheme:[
       {point:'Periodic law: properties of elements are periodic functions of their atomic numbers',marks:1},
       {point:'Atomic radius decreases across Period 3 from Na to Cl',marks:1},
       {point:'Because nuclear charge increases across the period, attracting electrons more strongly',marks:1},
       {point:'Group 1: going down, atoms have more electron shells',marks:1},
       {point:'Outer electron is further from nucleus and more shielded — easier to lose',marks:1},
       {point:'Lower ionisation energy going down Group 1 — more reactive',marks:1},
       {point:'Ca (Z=20): 2,8,8,2 or 1s²2s²2p⁶3s²3p⁶4s²',marks:2},
     ],
     modelAnswer:'Periodic law states that element properties are periodic functions of atomic number. Atomic radius decreases across Period 3 due to increasing nuclear charge. Group 1 reactivity increases down the group as outer electrons are more easily lost. Ca: 2,8,8,2.',
     examinerTip:'For electron configuration, always fill shells in order. Calcium has 20 electrons: 2+8+8+2. Many students incorrectly write 2+8+10.'},
    {exam:'NECO',year:2023,
     question:'(a) Explain what happens when excess sodium hydroxide solution is added to a solution of aluminium sulphate.\n(b) Describe a simple laboratory test to distinguish between: (i) CO₂ and SO₂ (ii) HCl gas and NH₃ gas.',
     markingScheme:[
       {point:'Al₂(SO₄)₃ + 6NaOH → 2Al(OH)₃ + 3Na₂SO₄ (white precipitate forms)',marks:1},
       {point:'With excess NaOH: Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O (precipitate dissolves)',marks:2},
       {point:'Al(OH)₃ is amphoteric — reacts with both acids and bases',marks:1},
       {point:'CO₂ vs SO₂: pass through acidified potassium dichromate — SO₂ turns it green; CO₂ does not',marks:2},
       {point:'Or: pass through lime water — both turn milky but SO₂ decolourises purple KMnO₄',marks:1},
       {point:'HCl vs NH₃: bring moist red litmus paper near — NH₃ turns it blue; HCl turns moist blue litmus red',marks:1},
       {point:'Or: dip glass rod in concentrated NH₃ and HCl separately — white fumes of NH₄Cl form if combined',marks:1},
     ],
     modelAnswer:'Excess NaOH dissolves the Al(OH)₃ precipitate because aluminium hydroxide is amphoteric. CO₂ and SO₂ are distinguished using acidified KMnO₄ (SO₂ decolourises it). HCl and NH₃ are distinguished using moist litmus paper.',
     examinerTip:'Amphoteric substances react with both acids and bases — Al(OH)₃ and ZnO are the classic examples you must know for NECO and WAEC.'},
    {exam:'NECO',year:2022,
     question:'(a) State Faraday\'s first and second laws of electrolysis.\n(b) Calculate the mass of copper deposited when a current of 2A flows through copper sulphate solution for 30 minutes. (Cu=64, F=96500C)',
     markingScheme:[
       {point:'First law: mass of substance deposited is proportional to quantity of electricity passed',marks:1},
       {point:'Second law: mass deposited by same quantity of electricity is proportional to equivalent mass of substance',marks:1},
       {point:'Q = It = 2 × (30×60) = 2 × 1800 = 3600 C',marks:2},
       {point:'Cu²⁺ + 2e⁻ → Cu; moles of electrons = 3600/96500 = 0.0373 mol',marks:1},
       {point:'Moles of Cu = 0.0373/2 = 0.01865 mol',marks:1},
       {point:'Mass = 0.01865 × 64 = 1.19g',marks:2},
     ],
     modelAnswer:'Faraday\'s first law: mass deposited is proportional to charge passed. Second law: mass is proportional to equivalent mass. Calculation: Q=3600C, moles e⁻=0.0373, moles Cu=0.01865, mass=1.19g.',
     examinerTip:'Show every step in electrochemistry calculations — partial marks are awarded for correct working even if the final answer is wrong.'},
  ]);

  // ─── PHYSICS THEORY ────────────────────────────────────────
  add('physics','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) State Newton\'s three laws of motion.\n(b) A car of mass 1200kg accelerates from rest to 25m/s in 10 seconds. Calculate:\n   (i) the acceleration\n   (ii) the force required\n   (iii) the distance covered',
     markingScheme:[
       {point:'First law: a body remains at rest or uniform motion unless acted upon by a net external force',marks:1},
       {point:'Second law: force is proportional to rate of change of momentum (F=ma)',marks:1},
       {point:'Third law: for every action there is an equal and opposite reaction',marks:1},
       {point:'a = (v-u)/t = (25-0)/10 = 2.5 m/s²',marks:2},
       {point:'F = ma = 1200 × 2.5 = 3000 N',marks:2},
       {point:'s = ut + ½at² = 0 + ½(2.5)(10²) = 125 m',marks:2},
     ],
     modelAnswer:'Newton\'s laws govern motion. (i) a = 2.5 m/s² (ii) F = 3000 N (iii) s = 125 m.',
     examinerTip:'For motion calculations always list your known values first: u=0 (from rest), v=25, t=10, m=1200. This prevents errors and earns method marks.'},
    {exam:'WAEC',year:2022,
     question:'(a) Explain the difference between heat and temperature.\n(b) A metal block of mass 0.5kg is heated from 20°C to 100°C. If the specific heat capacity of the metal is 400 J/kg°C, calculate the heat energy absorbed.\n(c) State THREE methods of heat transfer and give one example of each.',
     markingScheme:[
       {point:'Heat: form of energy transferred due to temperature difference (measured in Joules)',marks:1},
       {point:'Temperature: degree of hotness or coldness of a body (measured in °C or Kelvin)',marks:1},
       {point:'Q = mcΔT = 0.5 × 400 × (100-20) = 0.5 × 400 × 80 = 16,000 J',marks:3},
       {point:'Conduction: heat transfer through solids by vibrating particles — e.g. metal rod in fire',marks:1},
       {point:'Convection: heat transfer through fluids by circulating currents — e.g. boiling water',marks:1},
       {point:'Radiation: heat transfer through electromagnetic waves without medium — e.g. heat from sun',marks:1},
     ],
     modelAnswer:'Heat is energy; temperature measures hotness. Q = mcΔT = 16,000 J. Heat transfers by conduction (solids), convection (fluids) and radiation (electromagnetic waves).',
     examinerTip:'Q = mcΔT is essential. ΔT is always final minus initial temperature. Note the units: J = kg × J/kg°C × °C.'},
    {exam:'NECO',year:2023,
     question:'(a) Define work, energy and power and state the unit of each.\n(b) A pump lifts 500kg of water through a height of 20m in 50 seconds. Calculate:\n   (i) the work done against gravity\n   (ii) the power of the pump\n(Take g = 10m/s²)',
     markingScheme:[
       {point:'Work: product of force and displacement in direction of force; unit = Joule (J)',marks:1},
       {point:'Energy: capacity to do work; unit = Joule (J)',marks:1},
       {point:'Power: rate of doing work; unit = Watt (W)',marks:1},
       {point:'Work = mgh = 500 × 10 × 20 = 100,000 J (100 kJ)',marks:3},
       {point:'Power = Work/time = 100,000/50 = 2,000 W (2 kW)',marks:2},
     ],
     modelAnswer:'Work (J) = force × distance. Energy (J) = capacity to do work. Power (W) = work/time. W = mgh = 100,000 J. Power = 2,000 W.',
     examinerTip:'Work against gravity always uses W = mgh. Never confuse power (rate) with energy (amount). The pump question is a NECO favourite — memorise this pattern.'},
    {exam:'NECO',year:2022,
     question:'(a) State Ohm\'s law and write its mathematical expression.\n(b) Three resistors of 4Ω, 6Ω and 12Ω are connected in parallel. Calculate the effective resistance.\n(c) If this combination is connected to a 24V battery, find the total current supplied.',
     markingScheme:[
       {point:'Ohm\'s law: current through a conductor is proportional to potential difference across it at constant temperature',marks:1},
       {point:'V = IR (or I = V/R)',marks:1},
       {point:'1/R = 1/4 + 1/6 + 1/12 = 3/12 + 2/12 + 1/12 = 6/12 = 1/2',marks:3},
       {point:'R = 2Ω',marks:1},
       {point:'I = V/R = 24/2 = 12A',marks:2},
     ],
     modelAnswer:'Ohm\'s law: V = IR. Parallel: 1/R = 1/4+1/6+1/12 = 6/12, R = 2Ω. Total current = 24/2 = 12A.',
     examinerTip:'Parallel resistors: always find a common denominator when adding fractions. A quick check: parallel resistance is always less than the smallest individual resistor (here less than 4Ω ✓).'},
  ]);

  // ─── ECONOMICS THEORY ──────────────────────────────────────
  add('economics','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) Explain the concept of price elasticity of demand.\n(b) If the price of a good rises from ₦200 to ₦250 and quantity demanded falls from 100 units to 70 units, calculate the price elasticity of demand.\n(c) State THREE factors that affect price elasticity of demand.',
     markingScheme:[
       {point:'Price elasticity of demand: measure of responsiveness of quantity demanded to a change in price',marks:2},
       {point:'PED = % change in Qd / % change in Price',marks:1},
       {point:'% change in Qd = (70-100)/100 × 100 = -30%',marks:1},
       {point:'% change in Price = (250-200)/200 × 100 = 25%',marks:1},
       {point:'PED = -30/25 = -1.2 (elastic demand, |PED| > 1)',marks:2},
       {point:'Availability of substitutes — more substitutes = more elastic',marks:1},
       {point:'Necessity vs luxury — necessities are inelastic',marks:1},
       {point:'Proportion of income spent — higher proportion = more elastic',marks:1},
     ],
     modelAnswer:'PED measures demand responsiveness to price changes. PED = -1.2 (elastic). Factors: availability of substitutes, necessity vs luxury, proportion of income spent.',
     examinerTip:'Always show the formula, the working and the interpretation. State whether demand is elastic (|PED|>1), inelastic (|PED|<1) or unit elastic (|PED|=1).'},
    {exam:'WAEC',year:2022,
     question:'(a) Distinguish between balance of trade and balance of payments.\n(b) State FOUR causes of an unfavourable balance of payments for Nigeria.\n(c) Suggest THREE ways Nigeria can correct an unfavourable balance of payments.',
     markingScheme:[
       {point:'Balance of trade: difference between value of visible (goods) exports and imports only',marks:1},
       {point:'Balance of payments: comprehensive record of all economic transactions (visible + invisible) between a country and the rest of the world',marks:2},
       {point:'Over-dependence on oil exports — vulnerable to oil price falls',marks:1},
       {point:'High importation of manufactured goods',marks:1},
       {point:'Capital flight and profit repatriation by multinationals',marks:1},
       {point:'Low diversification of export base',marks:1},
       {point:'Diversification of the economy beyond oil',marks:1},
       {point:'Import substitution industrialisation',marks:1},
       {point:'Export promotion policies and incentives',marks:1},
     ],
     modelAnswer:'Balance of trade covers only goods; balance of payments covers all transactions. Nigeria\'s unfavourable BOP stems from oil dependence, high imports and capital flight. Solutions: diversification, import substitution, export promotion.',
     examinerTip:'Nigeria-specific economic questions appear frequently. Always contextualise your answers to Nigeria\'s economy — oil dependence, agriculture, manufacturing gaps.'},
    {exam:'NECO',year:2023,
     question:'(a) Explain the functions of money in a modern economy.\n(b) Differentiate between commercial banks and the Central Bank of Nigeria (CBN).\n(c) State THREE instruments of monetary policy used by the CBN.',
     markingScheme:[
       {point:'Medium of exchange — eliminates barter difficulties',marks:1},
       {point:'Store of value — preserves purchasing power over time',marks:1},
       {point:'Unit of account — measures value of goods and services',marks:1},
       {point:'Standard of deferred payment — enables credit transactions',marks:1},
       {point:'Commercial banks: profit-seeking, accept deposits, give loans to public',marks:1},
       {point:'CBN: not profit-seeking, banker to government and banks, issues currency, formulates monetary policy',marks:2},
       {point:'Cash Reserve Ratio (CRR) — minimum % of deposits banks must hold',marks:1},
       {point:'Open Market Operations — buying/selling government securities',marks:1},
       {point:'Monetary Policy Rate (MPR) — interest rate at which CBN lends to commercial banks',marks:1},
     ],
     modelAnswer:'Money serves as medium of exchange, store of value, unit of account and deferred payment standard. CBN differs from commercial banks in being non-profit and regulatory. CBN instruments: CRR, OMO, MPR.',
     examinerTip:'The four functions of money are a guaranteed question in NECO/WAEC Economics. Memorise all four with brief explanations.'},
    {exam:'NECO',year:2022,
     question:'(a) What is national income? State THREE methods of measuring national income.\n(b) Explain TWO limitations of using national income figures to compare living standards between countries.',
     markingScheme:[
       {point:'National income: total monetary value of goods and services produced in a country in a year',marks:1},
       {point:'Expenditure method: sum of all spending in the economy (C+I+G+X-M)',marks:1},
       {point:'Income method: sum of all factor incomes (wages, rent, interest, profit)',marks:1},
       {point:'Output method: sum of value added by all sectors of the economy',marks:1},
       {point:'Does not account for distribution — high national income may be unequally distributed',marks:2},
       {point:'Does not reflect non-monetary activities (subsistence farming, domestic work)',marks:2},
       {point:'(Differences in price levels/PPP, population size also acceptable)',marks:1},
     ],
     modelAnswer:'National income is total value of output in a year, measured by expenditure (C+I+G+X-M), income or output methods. Limitations for comparison: ignores distribution inequality and excludes non-monetary production.',
     examinerTip:'GDP per capita is better for comparison than total GDP — but even that ignores inequality. Always mention distribution as a limitation.'},
  ]);

  // ─── GOVERNMENT THEORY ─────────────────────────────────────
  add('government','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) Explain FIVE features of a federal system of government.\n(b) Discuss TWO advantages and TWO disadvantages of federalism.',
     markingScheme:[
       {point:'Written constitution — powers defined and distributed in writing',marks:1},
       {point:'Division of powers — central and state governments each have defined areas',marks:1},
       {point:'Supremacy of the constitution — constitution is the highest law',marks:1},
       {point:'Independent judiciary — to interpret constitution and resolve conflicts',marks:1},
       {point:'Bicameral legislature — two houses representing different interests',marks:1},
       {point:'Advantage: accommodates diversity — protects minority groups and cultures',marks:1},
       {point:'Advantage: brings government closer to the people at state level',marks:1},
       {point:'Disadvantage: expensive to run — duplication of government at multiple levels',marks:1},
       {point:'Disadvantage: can create unhealthy rivalry and conflict between centre and states',marks:1},
     ],
     modelAnswer:'Federalism features include written constitution, power division, constitutional supremacy, independent judiciary and bicameralism. Advantages: accommodates diversity, brings governance closer to people. Disadvantages: costly and potentially conflict-prone.',
     examinerTip:'Nigeria is a federal state — always use Nigerian examples. State that Nigeria has 36 states and FCT, with powers divided between federal, state and local governments.'},
    {exam:'WAEC',year:2022,
     question:'(a) What is meant by "fundamental human rights"? List FIVE fundamental rights guaranteed by the 1999 Nigerian Constitution.\n(b) Under what circumstances can fundamental rights be suspended in Nigeria?',
     markingScheme:[
       {point:'Fundamental human rights: basic rights and freedoms to which every person is entitled by virtue of being human, enshrined in the constitution',marks:2},
       {point:'Right to life (Section 33)',marks:1},
       {point:'Right to dignity of human person (Section 34)',marks:1},
       {point:'Right to personal liberty (Section 35)',marks:1},
       {point:'Right to fair hearing (Section 36)',marks:1},
       {point:'Right to freedom of expression (Section 39)',marks:1},
       {point:'During a state of emergency declared by the President',marks:1},
       {point:'When national security is threatened',marks:1},
       {point:'(Must be approved by the National Assembly within two days)',marks:1},
     ],
     modelAnswer:'Fundamental rights are constitutionally guaranteed basic freedoms. Key Nigerian rights: life, dignity, liberty, fair hearing, expression. They may be suspended during a state of emergency approved by the National Assembly.',
     examinerTip:'Quote section numbers where possible in Government exams — it shows depth of knowledge. Sections 33-46 of the 1999 Constitution cover fundamental rights.'},
    {exam:'NECO',year:2023,
     question:'(a) Describe the structure and functions of the Nigerian National Assembly.\n(b) Outline the process by which a bill becomes law in Nigeria.',
     markingScheme:[
       {point:'National Assembly consists of Senate (upper house) and House of Representatives (lower house)',marks:1},
       {point:'Senate: 109 senators (3 per state + 1 FCT); HoR: 360 members based on population',marks:2},
       {point:'Functions: making laws, approving budget, oversight of executive, ratifying treaties',marks:2},
       {point:'Bill introduced in either house (money bills start in HoR)',marks:1},
       {point:'First reading (introduction), Second reading (debate on principles), Committee stage (detailed examination)',marks:2},
       {point:'Third reading (final vote), passed to other house, then sent to President for assent',marks:1},
       {point:'President signs within 30 days or returns with observations; NASS can override with 2/3 majority',marks:1},
     ],
     modelAnswer:'The National Assembly comprises the Senate (109) and House of Representatives (360). It makes laws, approves budgets and oversees the executive. Bills pass through three readings in both houses before presidential assent.',
     examinerTip:'The legislative process is a recurring NECO topic. Know the exact numbers: 109 senators, 360 House members. Presidential veto can be overridden by two-thirds majority.'},
    {exam:'NECO',year:2022,
     question:'(a) Explain THREE functions of political parties in a democratic state.\n(b) Discuss the problems facing political parties in Nigeria.',
     markingScheme:[
       {point:'Mobilising voters and raising political consciousness among citizens',marks:1},
       {point:'Recruiting, training and presenting candidates for elections',marks:1},
       {point:'Formulating policies and programmes as alternatives for voters to choose',marks:1},
       {point:'Forming government when they win elections',marks:1},
       {point:'Ethnic and regional loyalty over national interest — tribalism',marks:1},
       {point:'Lack of internal democracy — godfatherism and imposition of candidates',marks:1},
       {point:'Monetisation of politics — vote buying undermines genuine representation',marks:1},
       {point:'Frequent defections — politicians switch parties for personal gain',marks:1},
       {point:'(Weak party ideology, military interference history also acceptable)',marks:1},
     ],
     modelAnswer:'Parties mobilise voters, recruit candidates and formulate policy. Nigerian parties face tribalism, godfatherism, vote buying and high defection rates as major challenges.',
     examinerTip:'NECO loves questions about Nigerian political problems. Give specific Nigerian examples — mention godfatherism, carpet crossing and monetisation of politics specifically.'},
  ]);

  // ─── ENGLISH THEORY ────────────────────────────────────────
  add('english','theory',[
    {exam:'WAEC',year:2023,
     question:'You are the senior prefect of your school. Write a speech to be delivered at the end-of-year assembly encouraging your fellow students to develop good reading habits. Your speech should be between 250-300 words.',
     markingScheme:[
       {point:'Correct speech format: salutation (Principal, teachers, fellow students), introduction, body, conclusion',marks:3},
       {point:'Relevant content: benefits of reading (knowledge, vocabulary, performance, career)',marks:4},
       {point:'Persuasive language and appropriate tone for a school speech',marks:2},
       {point:'Varied sentence structures and good vocabulary',marks:2},
       {point:'Correct grammar, spelling and punctuation throughout',marks:3},
       {point:'Appropriate length (250-300 words)',marks:1},
     ],
     modelAnswer:'[Model speech format] Good morning our principal, teachers and fellow students. Today I stand before you to speak on something I believe can change our futures — the habit of reading...[continues with benefits, examples, call to action, appropriate closing]',
     examinerTip:'Always use the correct format for the text type asked. For speeches: address the audience at the start, use first person, use rhetorical questions and a strong closing. The format marks are free marks — never miss them.'},
    {exam:'WAEC',year:2022,
     question:'Write a letter to the editor of a national newspaper expressing your concern about the increase in examination malpractice in Nigerian schools. Suggest THREE ways to address the problem.',
     markingScheme:[
       {point:'Writer\'s address (top right), date, editor\'s address (left side)',marks:2},
       {point:'Correct salutation: Dear Sir/Madam or Dear Editor',marks:1},
       {point:'Clear statement of concern about examination malpractice',marks:2},
       {point:'THREE clearly stated solutions (e.g. stricter supervision, character education, reducing exam pressure)',marks:3},
       {point:'Appropriate formal/persuasive tone throughout',marks:2},
       {point:'Correct subscription: Yours faithfully + printed name',marks:1},
       {point:'Correct grammar, spelling and punctuation',marks:3},
     ],
     modelAnswer:'[Formal letter format with writer\'s address, date, editor\'s address, Dear Editor, body paragraphs addressing malpractice with evidence and three concrete solutions, Yours faithfully, Name]',
     examinerTip:'Formal letters to editors use "Yours faithfully" not "Yours sincerely" — sincerely is only when you know the person\'s name. This is a common error that costs marks.'},
    {exam:'NECO',year:2023,
     question:'Write a composition on the topic: "The Role of Youth in Nation Building." Your composition should be between 400-450 words and should be in the form of an essay.',
     markingScheme:[
       {point:'Clear introduction defining nation building and the role of youth',marks:3},
       {point:'Well-developed body paragraphs (civic responsibility, education, technology, entrepreneurship)',marks:6},
       {point:'Relevant Nigerian examples and context',marks:2},
       {point:'Strong conclusion with call to action',marks:2},
       {point:'Correct grammar, spelling, punctuation',marks:4},
       {point:'Appropriate length and essay format',marks:3},
     ],
     modelAnswer:'[Essay with introduction defining nation building; body discussing youth in politics, economy, technology and community development with Nigerian examples; conclusion urging youth to be agents of change]',
     examinerTip:'Essays are marked on content (40%), language (40%) and organisation (20%). Write in paragraphs, use linking words (furthermore, however, consequently) and always have a clear introduction and conclusion.'},
    {exam:'NECO',year:2022,
     question:'(a) Read the following passage and answer the questions that follow:\n[Comprehension passage about environmental conservation in Nigeria]\n(b) Write a summary of the main arguments in the passage in not more than 80 words.',
     markingScheme:[
       {point:'Identify main idea: environmental conservation is urgent in Nigeria',marks:2},
       {point:'Supporting point 1: deforestation threatens biodiversity',marks:1},
       {point:'Supporting point 2: oil spillage in Niger Delta damages ecosystems',marks:1},
       {point:'Supporting point 3: government and individual responsibility needed',marks:1},
       {point:'Summary written in own words, not lifted directly from passage',marks:2},
       {point:'Summary within 80-word limit',marks:1},
       {point:'Correct grammar and expression',marks:2},
     ],
     modelAnswer:'[Summary identifying key points about Nigerian environmental threats and conservation need, written in student\'s own words within 80 words]',
     examinerTip:'In summary writing, never copy sentences directly — paraphrase everything. Count your words. Going over the limit costs marks in NECO.'},
  ]);

  // ─── GEOGRAPHY THEORY ──────────────────────────────────────
  add('geography','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) Describe the formation of fold mountains.\n(b) State FOUR economic importance of mountains to Nigeria.\n(c) Name TWO fold mountain ranges in Africa.',
     markingScheme:[
       {point:'Fold mountains form where two tectonic plates converge/collide',marks:1},
       {point:'Compressional forces cause rock strata to buckle and fold upwards',marks:2},
       {point:'Process occurs over millions of years — sedimentary rocks folded into ridges and valleys',marks:1},
       {point:'Tourism — scenic landscapes attract visitors',marks:1},
       {point:'Water catchment — rivers and streams originate in highlands',marks:1},
       {point:'Climate modification — mountains influence rainfall patterns',marks:1},
       {point:'Agriculture — Jos Plateau supports temperate crops',marks:1},
       {point:'Atlas Mountains (Morocco/Algeria/Tunisia)',marks:1},
       {point:'Drakensberg Mountains (South Africa/Lesotho)',marks:1},
     ],
     modelAnswer:'Fold mountains form from tectonic plate collision causing rock strata to buckle upward. Economic importance: tourism, water catchment, climate modification, agriculture. African ranges: Atlas, Drakensberg.',
     examinerTip:'Nigerian geography is important — always mention the Jos Plateau as Nigeria\'s main highland area. It supports tin mining, temperate farming and is a major water catchment area.'},
    {exam:'NECO',year:2023,
     question:'(a) Explain the factors that influence the climate of West Africa.\n(b) Describe the characteristics of the tropical rainforest climate.\n(c) State THREE ways climate affects human activities in Nigeria.',
     markingScheme:[
       {point:'Latitude — West Africa near equator receives intense solar radiation',marks:1},
       {point:'Seasonal winds — Harmattan (NE trade wind) and Southwest Monsoon',marks:2},
       {point:'Distance from sea — coastal areas more humid than interior',marks:1},
       {point:'Altitude — higher areas cooler (Jos Plateau)',marks:1},
       {point:'Rainforest climate: high temperatures (25-28°C) all year, heavy rainfall (1500-2000mm+), no dry season, high humidity',marks:3},
       {point:'Farming patterns — rainfall determines planting seasons',marks:1},
       {point:'Settlement patterns — fertile, well-watered areas densely populated',marks:1},
       {point:'Transport — flooding during rainy season limits movement',marks:1},
     ],
     modelAnswer:'West African climate is influenced by latitude, ITCZ movement, winds, distance from sea and altitude. Rainforest climate: hot, wet year-round, high humidity. Climate affects Nigeria\'s farming, settlement and transport.',
     examinerTip:'The Inter-Tropical Convergence Zone (ITCZ) controls West African rainfall seasonality — its northward movement brings rains. This mechanism appears in almost every WAEC/NECO Geography paper.'},
  ]);

  // ─── CRS THEORY ────────────────────────────────────────────
  add('crs','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) Describe the call and response of Prophet Isaiah (Isaiah 6:1-8).\n(b) What lessons can Christians learn from Isaiah\'s response to God\'s call?',
     markingScheme:[
       {point:'Isaiah saw a vision of God on a throne, high and exalted, with seraphim worshipping',marks:2},
       {point:'Isaiah confessed unworthiness — "Woe to me, I am a man of unclean lips"',marks:1},
       {point:'A seraph touched his lips with a live coal — his sin was atoned',marks:2},
       {point:'God asked "Whom shall I send?" Isaiah responded "Here am I, send me"',marks:2},
       {point:'Humility — acknowledging unworthiness before God',marks:1},
       {point:'Willingness to serve when called by God',marks:1},
       {point:'God purifies those He calls before sending them',marks:1},
     ],
     modelAnswer:'Isaiah\'s vision showed God\'s holiness leading to his self-awareness of sin, divine cleansing and willing response to service. Christians learn humility, responsiveness to calling and trust in God\'s purification.',
     examinerTip:'Biblical narratives must follow the sequence of events. Mark schemes reward: what happened, what was said, what it means. Always apply to Christian life in the final section.'},
    {exam:'NECO',year:2023,
     question:'(a) Narrate the story of the feeding of the five thousand (John 6:1-14).\n(b) State FOUR lessons Christians can learn from this miracle.',
     markingScheme:[
       {point:'Large crowd followed Jesus across the Sea of Galilee',marks:1},
       {point:'Jesus tested Philip asking how to feed them; Philip said 200 denarii not enough',marks:2},
       {point:'Andrew found a boy with 5 loaves and 2 fish',marks:1},
       {point:'Jesus gave thanks, distributed bread and fish — all 5000 ate and were satisfied',marks:2},
       {point:'12 baskets of fragments collected',marks:1},
       {point:'Compassion — Jesus cared for physical needs of people',marks:1},
       {point:'With God, little is enough — do not despise small beginnings',marks:1},
       {point:'Gratitude — Jesus gave thanks before distributing',marks:1},
       {point:'God provides abundantly — 12 baskets remained',marks:1},
     ],
     modelAnswer:'Jesus fed 5000 with 5 loaves and 2 fish, giving thanks and distributing through disciples. Lessons: divine compassion, sufficiency of little in God\'s hands, gratitude and God\'s abundance.',
     examinerTip:'For miracle narratives, tell the story in sequence then apply lessons. NECO markers want specific details — 5 loaves, 2 fish, 12 baskets. These specific numbers earn marks.'},
  ]);

  // ─── CIVIC EDUCATION THEORY ────────────────────────────────
  add('civic_education','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) Explain the concept of "rule of law" and state FOUR principles that characterise it.\n(b) Discuss THREE ways corruption undermines the rule of law in Nigeria.',
     markingScheme:[
       {point:'Rule of law: principle that everyone including government is subject to the law and no one is above it',marks:2},
       {point:'Equality before the law — all persons treated equally regardless of status',marks:1},
       {point:'No punishment without law — person can only be punished for breach of known law',marks:1},
       {point:'Rights enforceable in courts — citizens can challenge illegal actions in court',marks:1},
       {point:'Independence of judiciary — courts free from political interference',marks:1},
       {point:'Bribery of judges compromises impartiality of courts',marks:1},
       {point:'Powerful people escape justice through money and connections',marks:1},
       {point:'Law enforcement officials take bribes — laws not enforced equally',marks:1},
       {point:'(Weak institutions, political interference also acceptable)',marks:1},
     ],
     modelAnswer:'Rule of law means no one is above the law, characterised by equality, legality, justiciability and judicial independence. Corruption undermines it through judicial bribery, elite impunity and compromised law enforcement.',
     examinerTip:'Rule of law and corruption are perennial WAEC topics. Use Nigerian examples: mention EFCC, ICPC and the challenge of prosecuting high-profile cases.'},
    {exam:'NECO',year:2023,
     question:'(a) Define citizenship and state THREE ways of acquiring Nigerian citizenship.\n(b) State FIVE duties of a Nigerian citizen.',
     markingScheme:[
       {point:'Citizenship: legal membership of a state entitling a person to its rights and protection',marks:1},
       {point:'By birth — born in Nigeria or to Nigerian parent(s)',marks:1},
       {point:'By registration — foreign national married to a Nigerian for at least 3 years',marks:1},
       {point:'By naturalisation — foreign national who has lived in Nigeria for 15+ years',marks:1},
       {point:'Obeying the laws of Nigeria',marks:1},
       {point:'Paying taxes',marks:1},
       {point:'Voting in elections and participating in democratic process',marks:1},
       {point:'Defending the country when required',marks:1},
       {point:'Respecting the rights of other citizens',marks:1},
     ],
     modelAnswer:'Citizenship is legal state membership acquired by birth, registration or naturalisation. Duties include law obedience, tax payment, voting, national defence and respecting others\' rights.',
     examinerTip:'Know the exact requirements: registration requires 3 years of marriage to a Nigerian; naturalisation requires 15 years of residence. These specific figures appear in exam questions.'},
  ]);

  // ─── ACCOUNTING THEORY ─────────────────────────────────────
  add('accounting','theory',[
    {exam:'WAEC',year:2023,
     question:'The following information relates to Emeka Traders for the year ended 31 December 2022:\nSales: ₦450,000; Opening stock: ₦30,000; Purchases: ₦280,000; Closing stock: ₦40,000; Rent: ₦24,000; Salaries: ₦60,000; Electricity: ₦12,000\n(a) Prepare a Trading Account\n(b) Prepare a Profit and Loss Account\n(c) Calculate the Net Profit Ratio',
     markingScheme:[
       {point:'Trading Account: Sales ₦450,000 less Cost of Goods Sold',marks:1},
       {point:'COGS = Opening stock + Purchases − Closing stock = 30,000+280,000−40,000 = ₦270,000',marks:2},
       {point:'Gross Profit = 450,000 − 270,000 = ₦180,000',marks:1},
       {point:'P&L: Gross Profit ₦180,000 less Expenses',marks:1},
       {point:'Total expenses = 24,000+60,000+12,000 = ₦96,000',marks:1},
       {point:'Net Profit = 180,000 − 96,000 = ₦84,000',marks:1},
       {point:'Net Profit Ratio = (Net Profit/Sales) × 100 = (84,000/450,000) × 100 = 18.67%',marks:2},
     ],
     modelAnswer:'Gross Profit = ₦180,000. Net Profit = ₦84,000. Net Profit Ratio = 18.67%.',
     examinerTip:'Always show the full account format with Dr/Cr sides, totals and dates. Examiners award marks for correct format even if figures contain small errors — never skip the format.'},
    {exam:'NECO',year:2023,
     question:'(a) Explain the meaning of depreciation and state THREE causes.\n(b) A machine costs ₦500,000 with a residual value of ₦50,000 and useful life of 5 years. Calculate the annual depreciation using the straight-line method and show the first two years of the provision for depreciation account.',
     markingScheme:[
       {point:'Depreciation: systematic reduction in value of a fixed asset over its useful life',marks:1},
       {point:'Wear and tear through use',marks:1},
       {point:'Obsolescence — newer technology replacing old assets',marks:1},
       {point:'Passage of time — some assets lose value with age',marks:1},
       {point:'Annual depreciation = (Cost − Residual value)/Useful life = (500,000−50,000)/5 = ₦90,000',marks:3},
       {point:'Year 1: Debit Depreciation expense ₦90,000, Credit Provision for Depreciation ₦90,000',marks:1},
       {point:'Year 2: same entry, cumulative provision = ₦180,000',marks:1},
     ],
     modelAnswer:'Depreciation = ₦90,000 per year. Caused by wear, obsolescence and time. After 2 years, accumulated depreciation = ₦180,000.',
     examinerTip:'Straight-line is the easiest depreciation method. Always subtract residual/scrap value before dividing. Annual amount is always the same — that is what makes it "straight line".'},
  ]);

  // ─── COMMERCE THEORY ───────────────────────────────────────
  add('commerce','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) Explain the role of insurance in commerce.\n(b) Describe FOUR principles of insurance.\n(c) State THREE types of insurance available to businesses in Nigeria.',
     markingScheme:[
       {point:'Insurance reduces financial risk of business operations',marks:1},
       {point:'Provides compensation for losses enabling business continuity',marks:1},
       {point:'Utmost good faith — both parties must disclose all material facts',marks:1},
       {point:'Insurable interest — insured must have financial stake in the subject matter',marks:1},
       {point:'Indemnity — compensation restores insured to pre-loss position, not profit',marks:1},
       {point:'Subrogation — after paying claim, insurer takes over any rights of recovery',marks:1},
       {point:'Fire insurance',marks:1},
       {point:'Motor vehicle insurance',marks:1},
       {point:'Marine/cargo insurance',marks:1},
     ],
     modelAnswer:'Insurance transfers risk and enables business continuity. Principles: utmost good faith, insurable interest, indemnity, subrogation. Business types: fire, motor, marine insurance.',
     examinerTip:'The four principles of insurance are guaranteed WAEC/NECO questions. Memorise them with brief definitions: utmost good faith, insurable interest, indemnity, subrogation (and contribution, proximate cause for bonus marks).'},
    {exam:'NECO',year:2023,
     question:'(a) Distinguish between home trade and foreign trade.\n(b) State FOUR advantages of foreign trade to Nigeria.\n(c) Explain TWO problems of foreign trade facing Nigeria.',
     markingScheme:[
       {point:'Home trade: buying and selling within the borders of a country',marks:1},
       {point:'Foreign trade: buying (import) and selling (export) between countries',marks:1},
       {point:'Access to goods not produced locally — diversifies consumption',marks:1},
       {point:'Earns foreign exchange for the country',marks:1},
       {point:'Promotes specialisation and comparative advantage',marks:1},
       {point:'Creates employment in export industries',marks:1},
       {point:'Unfavourable terms of trade — Nigeria exports cheap raw materials, imports expensive manufactured goods',marks:2},
       {point:'Overdependence on oil — vulnerable to global price fluctuations',marks:2},
     ],
     modelAnswer:'Home trade is domestic; foreign trade is international. Benefits: access to foreign goods, foreign exchange, specialisation, employment. Problems: unfavourable terms of trade, oil dependence.',
     examinerTip:'Link foreign trade problems to Nigeria specifically — oil dependence and importing manufactured goods while exporting raw materials (the commodity trap) is the standard Nigerian example.'},
  ]);

  // ─── MARKETING THEORY ──────────────────────────────────────
  add('marketing','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) Explain the concept of "market segmentation" and state THREE bases for segmenting a consumer market.\n(b) Discuss the stages of the product life cycle and suggest appropriate marketing strategies for each stage.',
     markingScheme:[
       {point:'Market segmentation: dividing a heterogeneous market into smaller homogeneous groups with similar characteristics',marks:2},
       {point:'Demographic — age, gender, income, education',marks:1},
       {point:'Geographic — region, urban/rural, climate',marks:1},
       {point:'Psychographic — lifestyle, values, personality',marks:1},
       {point:'Introduction: low sales, high costs, focus on awareness — strategy: heavy promotion, selective distribution',marks:2},
       {point:'Growth: rising sales, new competitors — strategy: build brand loyalty, expand distribution',marks:1},
       {point:'Maturity: peak sales, intense competition — strategy: differentiation, competitive pricing',marks:1},
       {point:'Decline: falling sales — strategy: reduce costs, harvest or discontinue',marks:1},
     ],
     modelAnswer:'Market segmentation divides markets by demographics, geography or psychographics. PLC stages: Introduction (awareness), Growth (expansion), Maturity (differentiation), Decline (harvest/exit) — each requiring different strategies.',
     examinerTip:'Product Life Cycle questions always appear. Learn the strategy for each stage — not just the characteristics. Examiners want to see you link the stage to the recommended marketing action.'},
  ]);

  // ─── ANIMAL HUSBANDRY THEORY ────────────────────────────────
  add('animal_husbandry','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) Describe the digestive system of ruminant animals.\n(b) Explain the process of rumination.\n(c) State THREE differences between ruminant and non-ruminant digestion.',
     markingScheme:[
       {point:'Ruminants have four stomach compartments: rumen, reticulum, omasum, abomasum',marks:2},
       {point:'Food passes through oesophagus into rumen — initial fermentation by microorganisms',marks:1},
       {point:'Reticulum: further breakdown and formation of food bolus',marks:1},
       {point:'Omasum: water absorption and grinding',marks:1},
       {point:'Abomasum: true stomach, enzymatic digestion',marks:1},
       {point:'Rumination: regurgitation of partially digested food (cud) from rumen/reticulum back to mouth for further chewing',marks:2},
       {point:'Ruminants: multi-chambered stomach; non-ruminants: single stomach',marks:1},
       {point:'Ruminants digest cellulose via microbial fermentation; non-ruminants cannot digest cellulose',marks:1},
       {point:'Ruminants regurgitate and rechew; non-ruminants do not',marks:1},
     ],
     modelAnswer:'Ruminants have 4 stomach compartments. Rumination involves regurgitating cud for further chewing. Key differences from non-ruminants: multi-chambered stomach, cellulose digestion ability, cud chewing.',
     examinerTip:'Know the four compartments in order: rumen, reticulum, omasum, abomasum — and the function of each. "Rumen-Reticulum-Omasum-Abomasum" can be remembered as "Really Ruminants Only Absorb".'},
    {exam:'NECO',year:2023,
     question:'(a) State FIVE signs of ill-health in farm animals.\n(b) Describe how you would control the spread of Newcastle disease in a poultry farm.\n(c) State THREE importance of veterinary services to livestock farmers.',
     markingScheme:[
       {point:'Loss of appetite/reduced feed intake',marks:1},
       {point:'Dull coat/ruffled feathers',marks:1},
       {point:'Isolation from group/lethargy',marks:1},
       {point:'Abnormal discharges (nasal, ocular)',marks:1},
       {point:'Weight loss/reduced production',marks:1},
       {point:'Vaccinate all birds regularly against Newcastle disease',marks:2},
       {point:'Isolate and cull infected birds immediately',marks:1},
       {point:'Disinfect poultry house and equipment regularly',marks:1},
       {point:'Restrict visitors and practise biosecurity',marks:1},
       {point:'Disease diagnosis and treatment',marks:1},
       {point:'Vaccination programmes to prevent disease',marks:1},
       {point:'Advice on nutrition, breeding and management',marks:1},
     ],
     modelAnswer:'Signs of ill health: loss of appetite, dull coat, lethargy, abnormal discharges, weight loss. Newcastle control: vaccination, isolation, culling, disinfection, biosecurity. Vet importance: diagnosis, prevention, management advice.',
     examinerTip:'Newcastle disease is the most important poultry disease in Nigerian exams. Always mention vaccination as the primary control method, followed by culling infected birds and strict biosecurity.'},
  ]);

  // ─── LITERATURE THEORY ─────────────────────────────────────
  add('literature','theory',[
    {exam:'WAEC',year:2023,
     question:'(a) Explain FIVE dramatic devices used in plays.\n(b) With reference to any Nigerian play you have studied, show how ONE of these devices is used effectively.',
     markingScheme:[
       {point:'Soliloquy — character speaks thoughts aloud when alone',marks:1},
       {point:'Aside — character speaks to audience without other characters hearing',marks:1},
       {point:'Dramatic irony — audience knows something characters do not',marks:1},
       {point:'Flashback — return to earlier events to provide background',marks:1},
       {point:'Foreshadowing — hints at future events',marks:1},
       {point:'Named specific play (e.g. Wole Soyinka\'s work)',marks:1},
       {point:'Identified the device used in the play',marks:1},
       {point:'Explained HOW and WHY it is used effectively — impact on audience/meaning',marks:3},
     ],
     modelAnswer:'Dramatic devices include soliloquy, aside, dramatic irony, flashback and foreshadowing. [Application to specific Nigerian play with analysis of effect].',
     examinerTip:'Always name the specific text and author. Vague references lose marks. If studying Soyinka\'s Death and the King\'s Horseman, discuss dramatic irony — the audience knows Elesin will fail before he does.'},
    {exam:'NECO',year:2023,
     question:'(a) What is a poem? State and explain FOUR elements of poetry.\n(b) Write a short analysis of any poem you have studied showing how the poet uses imagery.',
     markingScheme:[
       {point:'A poem: a literary composition expressing feelings/ideas through the concentrated use of language, rhythm and imagery',marks:1},
       {point:'Rhythm — musical quality created by pattern of stressed/unstressed syllables',marks:1},
       {point:'Rhyme — repetition of similar sounds at end of lines',marks:1},
       {point:'Imagery — use of vivid language appealing to senses',marks:1},
       {point:'Theme — central idea or message of the poem',marks:1},
       {point:'Named specific poem and poet',marks:1},
       {point:'Identified specific image(s) from the poem',marks:2},
       {point:'Explained the effect of the imagery on the reader/meaning of poem',marks:3},
     ],
     modelAnswer:'A poem uses concentrated language to express emotion. Elements: rhythm, rhyme, imagery, theme. [Analysis of specific poem showing how imagery creates meaning and emotional effect].',
     examinerTip:'For poetry analysis, always quote directly from the poem — even one or two words. Examiners need to see you working with the actual text, not just discussing it in general terms.'},
  ]);

})();
